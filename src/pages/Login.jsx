import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [userType, setUserType] = useState('renter')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, userType })
    navigate(userType === 'landlord' ? '/dashboard' : '/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-3xl">🏢</span>
          </div>
          <h2 className="text-3xl font-bold">Welcome to RentConnect</h2>
          <p className="text-gray-600 mt-2">Sign in to access your account</p>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setUserType('renter')}
            className={`flex-1 py-2 rounded-lg ${
              userType === 'renter' ? 'bg-gray-200' : 'bg-gray-100'
            }`}
          >
            Renter
          </button>
          <button
            onClick={() => setUserType('landlord')}
            className={`flex-1 py-2 rounded-lg ${
              userType === 'landlord' ? 'bg-gray-200' : 'bg-gray-100'
            }`}
          >
            Landlord
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="renter@rentconnect.bi"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="bg-blue-50 p-3 rounded text-sm">
            <p className="font-semibold mb-1">Demo Credentials:</p>
            <p>Email: renter@rentconnect.bi</p>
            <p>Password: any</p>
          </div>

          <button
            type="submit"
            className="w-full bg-dark text-white py-3 rounded-lg hover:bg-opacity-90 font-medium"
          >
            Sign In as {userType === 'renter' ? 'Renter' : 'Landlord'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
