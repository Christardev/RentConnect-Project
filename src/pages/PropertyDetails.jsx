import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import ScheduleVisitModal from '../components/ScheduleVisitModal'
import { mockProperties } from '../data/mockProperties'
import 'leaflet/dist/leaflet.css'

const PropertyDetails = () => {
  const { id } = useParams()
  const property = mockProperties.find(p => p.id === parseInt(id))
  const [activeTab, setActiveTab] = useState('location')
  const [showModal, setShowModal] = useState(false)

  if (!property) {
    return <div className="text-center py-12">Property not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="text-primary hover:underline mb-4 inline-block">
          ← Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />

            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <p className="text-gray-600 flex items-center gap-1">
                    📍 {property.location}
                  </p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {property.status}
                </span>
              </div>

              <div className="flex items-center gap-6 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛏️</span>
                  <div>
                    <div className="font-semibold">{property.bedrooms} Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚿</span>
                  <div>
                    <div className="font-semibold">{property.bathrooms} Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📐</span>
                  <div>
                    <div className="font-semibold">{property.size}m²</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-500 text-xl">⭐ {property.rating}</span>
                <span className="text-gray-600">({property.reviews} reviews)</span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Parking', 'Garden', 'Security', 'Water Tank', 'Generator', 'WiFi'].map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded">
                      <span className="text-green-500">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setActiveTab('location')}
                    className={`px-4 py-2 rounded ${activeTab === 'location' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                  >
                    Location
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-4 py-2 rounded ${activeTab === 'reviews' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                  >
                    Reviews (2)
                  </button>
                </div>

                {activeTab === 'location' && (
                  <div className="h-64 rounded-lg overflow-hidden">
                    <MapContainer 
                      center={[property.lat, property.lng]} 
                      zoom={15} 
                      style={{ height: '100%', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[property.lat, property.lng]} />
                    </MapContainer>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">John Doe</span>
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      </div>
                      <p className="text-gray-700">Great property, very clean and well-maintained!</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Jane Smith</span>
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                      </div>
                      <p className="text-gray-700">Good location, friendly landlord.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-semibold ml-2">{property.type}</span>
                </div>
                <div>
                  <span className="text-gray-600">Available From:</span>
                  <span className="font-semibold ml-2">{property.availableFrom}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-4">
              <div className="text-3xl font-bold mb-6">{property.price} BIF/month</div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Landlord</h3>
                <p className="font-medium">{property.landlord.name}</p>
                <p className="text-gray-600 text-sm">📞 {property.landlord.phone}</p>
              </div>

              <button 
                onClick={() => setShowModal(true)}
                className="w-full bg-dark text-white py-3 rounded-lg hover:bg-opacity-90 mb-3 flex items-center justify-center gap-2"
              >
                📅 Schedule a Visit
              </button>

              <button className="w-full border-2 border-dark text-dark py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                📞 Call Landlord
              </button>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">Accepted Payment Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {property.paymentMethods.map((method, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1 rounded text-sm">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScheduleVisitModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        propertyTitle={property.title}
      />
    </div>
  )
}

export default PropertyDetails
