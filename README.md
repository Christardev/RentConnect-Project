# RentConnect Burundi 🏠

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Laravel](https://img.shields.io/badge/Laravel-10.x-red)](https://laravel.com/)

A web-based real estate rental platform connecting landlords and renters in Bujumbura, Burundi.

![RentConnect Burundi](https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop)

## 🌟 Live Demo

[View Live Demo](https://your-username.github.io/rentconnect-burundi) (Coming Soon)

## Features

- 🏠 Property listings with photos, pricing (BIF/USD), and detailed information
- 🗺️ Interactive map view using Leaflet/OpenStreetMap
- 🔍 Advanced search and filtering (price, neighborhood, bedrooms, type)
- 👤 Separate interfaces for renters and landlords
- 📅 Property visit scheduling system
- ⭐ Rating and review system
- 💰 Local payment methods (Lumicash, Econet, Cash, Bank Transfer)
- 📱 Mobile-responsive design

## Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- React Leaflet for interactive maps
- Tailwind CSS for styling
- React Hook Form for forms
- Axios for API calls

### Backend (Planned)
- PHP Laravel REST API
- JWT authentication
- MySQL Master-Slave architecture
- Image upload handling
- Geolocation support

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000

### Build

```bash
npm run build
```

## Demo Credentials

- Email: renter@rentconnect.bi
- Password: any

## Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Page components
├── context/         # React context (Auth)
├── data/            # Mock data
└── App.jsx          # Main app component
```

## Future Enhancements

- Backend API integration
- Real payment gateway integration
- SMS notifications
- Advanced analytics for landlords
- Multi-language support (French, Kirundi)
- Mobile app (React Native)

## License

© 2026 RentConnect Burundi. All rights reserved.


## 📸 Screenshots

### Home Page
Browse available properties with advanced filtering options.

### Interactive Map
Visualize all listings on an interactive map of Bujumbura.

### Property Details
View detailed information, schedule visits, and contact landlords.

### Landlord Dashboard
Manage your properties, bookings, and tenant communications.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- PHP 8.1+
- MySQL 8.0+
- Composer

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/your-username/rentconnect-burundi.git
cd rentconnect-burundi

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000

### Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
composer install

# Setup environment
cp .env.example .env
php artisan key:generate

# Configure database in .env
# DB_HOST=127.0.0.1
# DB_DATABASE=rentconnect_burundi

# Run migrations
php artisan migrate

# Seed database with sample data
php artisan db:seed

# Start server
php artisan serve
```

API runs on http://localhost:8000

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Leaflet** - Interactive maps
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

### Backend
- **Laravel 10** - PHP framework
- **MySQL** - Database with Master-Slave replication
- **Laravel Sanctum** - API authentication
- **RESTful API** - Backend architecture

## 📁 Project Structure

```
rentconnect-burundi/
├── src/                    # Frontend source
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   └── context/           # React context
├── backend/               # Laravel backend
│   ├── app/              # Application code
│   ├── database/         # Migrations & seeders
│   ├── routes/           # API routes
│   └── config/           # Configuration
├── public/               # Static assets
└── index.html           # Entry point
```

## 🌍 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions including:
- MySQL Master-Slave replication setup
- Production server configuration
- SSL certificate installation
- Performance optimization

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 API Documentation

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user

### Properties
- `GET /api/properties` - List properties (with filters)
- `GET /api/properties/{id}` - Get property details
- `POST /api/properties` - Create property (auth required)
- `PUT /api/properties/{id}` - Update property (auth required)
- `DELETE /api/properties/{id}` - Delete property (auth required)

### Bookings
- `POST /api/bookings` - Schedule visit (auth required)
- `GET /api/bookings` - Get user bookings (auth required)

See full API documentation in [backend/README.md](backend/README.md)

## 🔒 Security

- JWT authentication with Laravel Sanctum
- CORS protection
- SQL injection prevention
- XSS protection
- CSRF protection

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - Initial work

## 🙏 Acknowledgments

- OpenStreetMap for map data
- Unsplash for placeholder images
- Laravel community
- React community

## 📧 Contact

For questions or support, please open an issue or contact:
- Email: contact@rentconnect.bi
- Website: https://rentconnect.bi

---

Made with ❤️ for Burundi
