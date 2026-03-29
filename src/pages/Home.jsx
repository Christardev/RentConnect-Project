import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { mockProperties } from '../data/mockProperties'

const Home = () => {
  const [filters, setFilters] = useState({
    search: '',
    propertyType: '',
    neighborhood: '',
    bedrooms: '',
    currency: 'BIF',
    minPrice: '',
    maxPrice: ''
  })
  const [viewMode, setViewMode] = useState('grid')

  const filteredProperties = mockProperties.filter(property => {
    if (filters.search && !property.title.toLowerCase().includes(filters.search.toLowerCase())) return false
    if (filters.propertyType && property.type !== filters.propertyType) return false
    if (filters.neighborhood && property.neighborhood !== filters.neighborhood) return false
    if (filters.bedrooms && property.bedrooms !== parseInt(filters.bedrooms)) return false
    return true
  })

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Home in <br /> Bujumbura
          </h1>
          <p className="text-xl mb-8">
            RentConnect Burundi - Connecting landlords and renters across Burundi
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search properties..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />

            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.propertyType}
              onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
            >
              <option value="">Property Type - All types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Studio">Studio</option>
            </select>

            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.neighborhood}
              onChange={(e) => setFilters({...filters, neighborhood: e.target.value})}
            >
              <option value="">Neighbourhood - All neighborhoods</option>
              <option value="Rohero">Rohero</option>
              <option value="Kiriri">Kiriri</option>
              <option value="Ngagara">Ngagara</option>
              <option value="Bwiza">Bwiza</option>
              <option value="Kamenge">Kamenge</option>
              <option value="Nyakabiga">Nyakabiga</option>
            </select>

            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.bedrooms}
              onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
            >
              <option value="">Bedrooms - Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.currency}
              onChange={(e) => setFilters({...filters, currency: e.target.value})}
            >
              <option value="BIF">Currency - BIF (Burundian Franc)</option>
              <option value="USD">Currency - USD</option>
            </select>

            <input
              type="number"
              placeholder="Min Price (BIF)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
            />

            <input
              type="number"
              placeholder="Max Price (BIF)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <button 
              className="bg-dark text-white px-6 py-2 rounded-lg hover:bg-opacity-90 flex items-center gap-2"
              onClick={() => {/* Apply filters */}}
            >
              🔍 Apply Filters
            </button>
            <button 
              className="text-primary hover:underline"
              onClick={() => setFilters({
                search: '', propertyType: '', neighborhood: '', bedrooms: '', 
                currency: 'BIF', minPrice: '', maxPrice: ''
              })}
            >
              ✕ Clear
            </button>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{filteredProperties.length} Properties Available</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-200'}`}
            >
              ⊞ Grid
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded ${viewMode === 'map' ? 'bg-primary text-white' : 'bg-gray-200'}`}
            >
              🗺️ Map
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Switch to map view for interactive property locations</p>
            <Link to="/map" className="bg-primary text-white px-6 py-3 rounded-lg inline-block hover:bg-opacity-90">
              Go to Map View
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
