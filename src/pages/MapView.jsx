import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { mockProperties } from '../data/mockProperties'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const MapView = () => {
  const center = [-3.3614, 29.3599] // Bujumbura coordinates

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Interactive Map View</h1>
              <p className="text-gray-600">Explore {mockProperties.length} properties across Bujumbura</p>
            </div>
            <Link 
              to="/"
              className="bg-dark text-white px-4 py-2 rounded hover:bg-opacity-90 flex items-center gap-2"
            >
              ← Back to List
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <MapContainer 
          center={center} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {mockProperties.map(property => (
            <Marker 
              key={property.id} 
              position={[property.lat, property.lng]}
            >
              <Popup>
                <div className="p-2">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <h3 className="font-bold mb-1">{property.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                  <p className="font-bold text-primary mb-2">{property.price} BIF/month</p>
                  <div className="flex gap-2 text-xs mb-2">
                    <span>🛏️ {property.bedrooms}</span>
                    <span>🚿 {property.bathrooms}</span>
                    <span>📐 {property.size}m²</span>
                  </div>
                  <Link 
                    to={`/property/${property.id}`}
                    className="block text-center bg-dark text-white px-3 py-1 rounded text-sm hover:bg-opacity-90"
                  >
                    View Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="bg-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold mb-2">How to use the map</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Click on any marker to see property details</li>
            <li>• Zoom in/out using the controls or mouse wheel</li>
            <li>• Drag to explore different areas of Bujumbura</li>
            <li>• Click "View Details" in the popup to see full property information</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MapView
