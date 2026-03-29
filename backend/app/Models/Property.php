<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'landlord_id',
        'title',
        'description',
        'type',
        'location',
        'neighborhood',
        'latitude',
        'longitude',
        'bedrooms',
        'bathrooms',
        'size',
        'price',
        'currency',
        'status',
        'available_from',
        'amenities',
        'payment_methods',
    ];

    protected $casts = [
        'amenities' => 'array',
        'payment_methods' => 'array',
        'available_from' => 'date',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
    ];

    public function landlord()
    {
        return $this->belongsTo(User::class, 'landlord_id');
    }

    public function images()
    {
        return $this->hasMany(PropertyImage::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function averageRating()
    {
        return $this->reviews()->avg('rating');
    }

    public function reviewCount()
    {
        return $this->reviews()->count();
    }
}
