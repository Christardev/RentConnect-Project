<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Property;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'property_id' => 'required|exists:properties,id',
            'full_name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string',
            'preferred_visit_date' => 'required|date|after:today',
            'message' => 'nullable|string',
        ]);

        $booking = Booking::create([
            ...$validated,
            'renter_id' => $request->user()->id,
        ]);

        return response()->json($booking, 201);
    }

    public function index(Request $request)
    {
        $bookings = $request->user()->bookings()->with('property')->get();

        return response()->json($bookings);
    }

    public function landlordBookings(Request $request)
    {
        $propertyIds = $request->user()->properties()->pluck('id');
        $bookings = Booking::whereIn('property_id', $propertyIds)
            ->with(['property', 'renter'])
            ->get();

        return response()->json($bookings);
    }

    public function updateStatus(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);
        $property = $booking->property;

        if ($property->landlord_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'status' => 'required|in:pending,confirmed,cancelled,completed',
        ]);

        $booking->update($validated);

        return response()->json($booking);
    }
}
