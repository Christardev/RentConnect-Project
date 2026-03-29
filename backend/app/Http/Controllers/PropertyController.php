<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $query = Property::with(['landlord', 'images', 'reviews'])
            ->where('status', 'Available');

        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        if ($request->has('neighborhood')) {
            $query->where('neighborhood', $request->neighborhood);
        }

        if ($request->has('bedrooms')) {
            $query->where('bedrooms', $request->bedrooms);
        }

        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        $properties = $query->get()->map(function ($property) {
            return [
                'id' => $property->id,
                'title' => $property->title,
                'description' => $property->description,
                'type' => $property->type,
                'location' => $property->location,
                'neighborhood' => $property->neighborhood,
                'lat' => $property->latitude,
                'lng' => $property->longitude,
                'bedrooms' => $property->bedrooms,
                'bathrooms' => $property->bathrooms,
                'size' => $property->size,
                'price' => $property->price,
                'currency' => $property->currency,
                'status' => $property->status,
                'available_from' => $property->available_from,
                'amenities' => $property->amenities,
                'payment_methods' => $property->payment_methods,
                'image' => $property->images->first()?->image_path,
                'images' => $property->images->pluck('image_path'),
                'rating' => round($property->averageRating(), 1),
                'reviews' => $property->reviewCount(),
                'landlord' => [
                    'name' => $property->landlord->name,
                    'phone' => $property->landlord->phone,
                ],
            ];
        });

        return response()->json($properties);
    }

    public function show($id)
    {
        $property = Property::with(['landlord', 'images', 'reviews.renter'])->findOrFail($id);

        return response()->json([
            'id' => $property->id,
            'title' => $property->title,
            'description' => $property->description,
            'type' => $property->type,
            'location' => $property->location,
            'neighborhood' => $property->neighborhood,
            'lat' => $property->latitude,
            'lng' => $property->longitude,
            'bedrooms' => $property->bedrooms,
            'bathrooms' => $property->bathrooms,
            'size' => $property->size,
            'price' => $property->price,
            'currency' => $property->currency,
            'status' => $property->status,
            'available_from' => $property->available_from,
            'amenities' => $property->amenities,
            'payment_methods' => $property->payment_methods,
            'images' => $property->images->pluck('image_path'),
            'rating' => round($property->averageRating(), 1),
            'reviews' => $property->reviews->map(fn($review) => [
                'id' => $review->id,
                'rating' => $review->rating,
                'comment' => $review->comment,
                'renter_name' => $review->renter->name,
                'created_at' => $review->created_at,
            ]),
            'landlord' => [
                'name' => $property->landlord->name,
                'phone' => $property->landlord->phone,
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|in:House,Apartment,Villa,Studio',
            'location' => 'required|string',
            'neighborhood' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'bedrooms' => 'required|integer|min:1',
            'bathrooms' => 'required|integer|min:1',
            'size' => 'required|integer|min:1',
            'price' => 'required|string',
            'currency' => 'required|in:BIF,USD',
            'available_from' => 'nullable|date',
            'amenities' => 'nullable|array',
            'payment_methods' => 'nullable|array',
            'images.*' => 'nullable|image|max:5120',
        ]);

        $property = $request->user()->properties()->create($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $image) {
                $path = $image->store('properties', 'public');
                $property->images()->create([
                    'image_path' => Storage::url($path),
                    'is_primary' => $index === 0,
                    'order' => $index,
                ]);
            }
        }

        return response()->json($property->load('images'), 201);
    }

    public function update(Request $request, $id)
    {
        $property = Property::findOrFail($id);

        if ($property->landlord_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'type' => 'sometimes|in:House,Apartment,Villa,Studio',
            'location' => 'sometimes|string',
            'neighborhood' => 'sometimes|string',
            'latitude' => 'sometimes|numeric',
            'longitude' => 'sometimes|numeric',
            'bedrooms' => 'sometimes|integer|min:1',
            'bathrooms' => 'sometimes|integer|min:1',
            'size' => 'sometimes|integer|min:1',
            'price' => 'sometimes|string',
            'currency' => 'sometimes|in:BIF,USD',
            'status' => 'sometimes|in:Available,Rented,Unavailable',
            'available_from' => 'nullable|date',
            'amenities' => 'nullable|array',
            'payment_methods' => 'nullable|array',
        ]);

        $property->update($validated);

        return response()->json($property);
    }

    public function destroy(Request $request, $id)
    {
        $property = Property::findOrFail($id);

        if ($property->landlord_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $property->delete();

        return response()->json(['message' => 'Property deleted successfully']);
    }

    public function myProperties(Request $request)
    {
        $properties = $request->user()->properties()->with(['images', 'bookings'])->get();

        return response()->json($properties);
    }
}
