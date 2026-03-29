import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  const [properties, setProperties] = useState([])

  if (!user) {
    navigate('/login')
    return null
  }

  const onSubmit = (data) => {
    const newProperty = {
      id: Date.now(),
      ...data,
      status: 'Available',
      landlord: user.name || user.email
    }
    setProperties([...properties, newProperty])
    alert('Property listed successfully!')
    reset()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Landlord Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-primary">{properties.length}</div>
              <div className="text-gray-600">Total Properties</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-600">{properties.filter(p => p.status === 'Available').length}</div>
              <div className="text-gray-600">Available</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-orange-600">0</div>
              <div className="text-gray-600">Pending Visits</div>
            </div>
          </div>

          {/* Add Property Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-6">List New Property</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Property Title</label>
                  <input 
                    {...register('title', { required: true })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Modern 3-Bedroom House in Rohero"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Property Type</label>
                    <select 
                      {...register('type', { required: true })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select type</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Studio">Studio</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Neighborhood</label>
                    <select 
                      {...register('neighborhood', { required: true })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select neighborhood</option>
                      <option value="Rohero">Rohero</option>
                      <option value="Kiriri">Kiriri</option>
                      <option value="Ngagara">Ngagara</option>
                      <option value="Bwiza">Bwiza</option>
                      <option value="Kamenge">Kamenge</option>
                      <option value="Nyakabiga">Nyakabiga</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Full Address</label>
                  <input 
                    {...register('location', { required: true })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Bedrooms</label>
                    <input 
                      {...register('bedrooms', { required: true })}
                      type="number"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bathrooms</label>
                    <input 
                      {...register('bathrooms', { required: true })}
                      type="number"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Size (m²)</label>
                    <input 
                      {...register('size', { required: true })}
                      type="number"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Monthly Rent (BIF)</label>
                  <input 
                    {...register('price', { required: true })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 800,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea 
                    {...register('description', { required: true })}
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Describe your property..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Property Photos</label>
                  <input 
                    type="file"
                    multiple
                    accept="image/*"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload up to 10 photos</p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 font-medium"
                >
                  List Property
                </button>
              </form>
            </div>
          </div>

          {/* My Properties */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">My Properties</h2>
              
              {properties.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No properties listed yet</p>
              ) : (
                <div className="space-y-4">
                  {properties.map(property => (
                    <div key={property.id} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-1">{property.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary">{property.price} BIF</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {property.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
