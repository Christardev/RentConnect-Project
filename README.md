# RentConnect Burundi

A web-based real estate rental platform connecting landlords and renters in Bujumbura, Burundi.

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
