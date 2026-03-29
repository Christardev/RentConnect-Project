# RentConnect Burundi - Backend API

Laravel REST API with MySQL Master-Slave architecture for RentConnect Burundi.

## Features

- JWT Authentication with Laravel Sanctum
- MySQL Master-Slave replication (Read/Write splitting)
- RESTful API endpoints
- Image upload handling
- Geolocation support
- Payment method tracking

## Database Architecture

### Master-Slave Setup

- **Master Database**: Handles all write operations (INSERT, UPDATE, DELETE)
- **Slave Database(s)**: Handles all read operations (SELECT)
- **Sticky Sessions**: Ensures read-after-write consistency

## Installation

### Prerequisites

- PHP 8.1+
- Composer
- MySQL 8.0+
- Laravel 10.x

### Setup

1. Install dependencies:
```bash
composer install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Configure database in `.env`:
```env
# Master (Write)
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=rentconnect_burundi

# Slave (Read)
DB_READ_HOST=127.0.0.1
DB_READ_PORT=3307
```

4. Generate application key:
```bash
php artisan key:generate
```

5. Run migrations:
```bash
php artisan migrate
```

6. Create storage link:
```bash
php artisan storage:link
```

7. Start server:
```bash
php artisan serve
```

## API Endpoints

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user (protected)
- `GET /api/me` - Get current user (protected)

### Properties
- `GET /api/properties` - List all properties (with filters)
- `GET /api/properties/{id}` - Get property details
- `POST /api/properties` - Create property (landlord only)
- `PUT /api/properties/{id}` - Update property (landlord only)
- `DELETE /api/properties/{id}` - Delete property (landlord only)
- `GET /api/my-properties` - Get landlord's properties (protected)

### Bookings
- `POST /api/bookings` - Schedule property visit (protected)
- `GET /api/bookings` - Get renter's bookings (protected)
- `GET /api/landlord/bookings` - Get landlord's bookings (protected)
- `PUT /api/bookings/{id}/status` - Update booking status (landlord only)

### Reviews
- `POST /api/reviews` - Create review (protected)
- `GET /api/properties/{propertyId}/reviews` - Get property reviews

## Database Schema

### Users
- id, name, email, phone, user_type (renter/landlord), password

### Properties
- id, landlord_id, title, description, type, location, neighborhood
- latitude, longitude, bedrooms, bathrooms, size, price, currency
- status, available_from, amenities (JSON), payment_methods (JSON)

### Property Images
- id, property_id, image_path, is_primary, order

### Bookings
- id, property_id, renter_id, full_name, email, phone
- preferred_visit_date, message, status

### Reviews
- id, property_id, renter_id, rating, comment

## MySQL Master-Slave Configuration

The application automatically routes:
- **Write operations** → Master database
- **Read operations** → Slave database(s)

Configure in `config/database.php`:
```php
'mysql' => [
    'read' => ['host' => ['slave-host']],
    'write' => ['host' => ['master-host']],
    'sticky' => true,
]
```

## Testing

```bash
php artisan test
```

## License

© 2026 RentConnect Burundi
