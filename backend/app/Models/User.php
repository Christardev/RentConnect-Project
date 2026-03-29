<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'user_type',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function properties()
    {
        return $this->hasMany(Property::class, 'landlord_id');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'renter_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'renter_id');
    }

    public function isLandlord()
    {
        return $this->user_type === 'landlord';
    }

    public function isRenter()
    {
        return $this->user_type === 'renter';
    }
}
