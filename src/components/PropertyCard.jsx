import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-semibold">
          {property.status}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
          📍 {property.location}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>🛏️ {property.bedrooms}</span>
          <span>🚿 {property.bathrooms}</span>
          <span>📐 {property.size}m²</span>
        </div>

        <div className="flex items-center gap-2 mb-3 text-xs">
          <span className="text-yellow-500">⭐ {property.rating}</span>
          <span className="text-gray-500">({property.reviews} reviews)</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {property.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-3 border-t">
          <div className="font-bold text-lg">{property.price} BIF/month</div>
          <Link 
            to={`/property/${property.id}`}
            className="bg-dark text-white px-4 py-2 rounded text-sm hover:bg-opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
