<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'property_id' => 'required|exists:properties,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        $review = Review::create([
            ...$validated,
            'renter_id' => $request->user()->id,
        ]);

        return response()->json($review, 201);
    }

    public function index($propertyId)
    {
        $reviews = Review::where('property_id', $propertyId)
            ->with('renter')
            ->latest()
            ->get();

        return response()->json($reviews);
    }
}
