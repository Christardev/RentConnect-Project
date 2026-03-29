<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('landlord_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->enum('type', ['House', 'Apartment', 'Villa', 'Studio']);
            $table->string('location');
            $table->string('neighborhood');
            $table->decimal('latitude', 10, 8);
            $table->decimal('longitude', 11, 8);
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->integer('size'); // in square meters
            $table->string('price'); // stored as string to handle BIF/USD
            $table->enum('currency', ['BIF', 'USD'])->default('BIF');
            $table->enum('status', ['Available', 'Rented', 'Unavailable'])->default('Available');
            $table->date('available_from')->nullable();
            $table->json('amenities')->nullable();
            $table->json('payment_methods')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('properties');
    }
};
