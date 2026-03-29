<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'property_id',
        'renter_id',
        'rating',
        'comment',
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
