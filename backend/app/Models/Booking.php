<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'property_id',
        'renter_id',
        'full_name',
        'email',
        'phone',
        'preferred_visit_date',
        'message',
        'status',
    ];

    protected $casts = [
        'preferred_visit_date' => 'date',
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function renter()
    {
        return $this->belongsTo(User::class, 'renter_id');
    }
}
