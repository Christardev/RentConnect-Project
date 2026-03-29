import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { mockProperties } from '../data/mockProperties'

const Home = () => {
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    neighborhood: '',
    bedrooms: ''
  })

  const filteredProperties = mockProperties.filter(property => {
    if (filters.search && !property.title.toLowerCase().includes(filters.search.toLowerCase())) return false
    if (filters.type && property.type !== filters.type) return false
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
            Find Your Perfect Home in Bujumbura
          </h1>
          <p className="text-xl mb-8">
            RentConnect Burundi - Connecting landlords and renters across Burundi
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search properties..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
            </select>
            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.neighborhood}
              onChange={(e) => setFilters({...filters, neighborhood: e.target.value})}
            >
              <option value="">All Neighborhoods</option>
              <option value="Rohero">Rohero</option>
              <option value="Kiriri">Kiriri</option>
              <option value="Ngagara">Ngagara</option>
            </select>
            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.bedrooms}
              onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
            >
              <option value="">Any Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{filteredProperties.length} Properties Available</h2>
          <Link to="/map" className="text-primary hover:underline flex items-center gap-2">
            🗺️ View on Map
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            <button 
              onClick={() => setFilters({ search: '', type: '', neighborhood: '', bedrooms: '' })}
              className="mt-4 text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
