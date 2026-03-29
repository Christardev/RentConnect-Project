<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Property;
use App\Models\PropertyImage;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create landlords
        $landlord1 = User::create([
            'name' => 'Jean-Pierre Nkurunziza',
            'email' => 'landlord@rentconnect.bi',
            'phone' => '+257 79 123 456',
            'user_type' => 'landlord',
            'password' => Hash::make('password'),
        ]);

        $landlord2 = User::create([
            'name' => 'Marie Ndayisenga',
            'email' => 'marie@rentconnect.bi',
            'phone' => '+257 79 234 567',
            'user_type' => 'landlord',
            'password' => Hash::make('password'),
        ]);

        // Create renter
        User::create([
            'name' => 'Test Renter',
            'email' => 'renter@rentconnect.bi',
            'phone' => '+257 79 999 999',
            'user_type' => 'renter',
            'password' => Hash::make('password'),
        ]);

        // Create properties
        $property1 = Property::create([
            'landlord_id' => $landlord1->id,
            'title' => 'Modern 3-Bedroom House in Rohero',
            'description' => 'Beautiful modern house with garden, parking, and security. Located in a quiet neighborhood with easy access to downtown Bujumbura. Perfect for families.',
            'type' => 'House',
            'location' => 'Avenue de la Révolution, Rohero',
            'neighborhood' => 'Rohero',
            'latitude' => -3.3614,
            'longitude' => 29.3599,
            'bedrooms' => 3,
            'bathrooms' => 2,
            'size' => 150,
            'price' => '800,000',
            'currency' => 'BIF',
            'status' => 'Available',
            'available_from' => '2026-03-07',
            'amenities' => ['Parking', 'Garden', 'Security', 'Water Tank'],
            'payment_methods' => ['Lumicash', 'Econet', 'Cash', 'Bank Transfer'],
        ]);

        PropertyImage::create([
            'property_id' => $property1->id,
            'image_path' => 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
            'is_primary' => true,
            'order' => 0,
        ]);

        $property2 = Property::create([
            'landlord_id' => $landlord2->id,
            'title' => 'Luxury Villa in Kiriri',
            'description' => 'Stunning luxury villa with swimming pool and modern amenities.',
            'type' => 'Villa',
            'location' => 'Kiriri',
            'neighborhood' => 'Kiriri',
            'latitude' => -3.3500,
            'longitude' => 29.3700,
            'bedrooms' => 4,
            'bathrooms' => 3,
            'size' => 280,
            'price' => '1500',
            'currency' => 'USD',
            'status' => 'Available',
            'available_from' => '2026-04-01',
            'amenities' => ['Pool', 'Garden', 'Parking', 'Security', 'Generator'],
            'payment_methods' => ['Bank Transfer', 'Cash'],
        ]);

        PropertyImage::create([
            'property_id' => $property2->id,
            'image_path' => 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
            'is_primary' => true,
            'order' => 0,
        ]);
    }
}
