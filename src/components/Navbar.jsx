import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white text-xl">🏢</span>
            </div>
            <div>
              <div className="font-bold text-lg">RentConnect</div>
              <div className="text-xs text-gray-500">Burundi</div>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/map" className="text-gray-700 hover:text-primary">Map View</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary">Dashboard</Link>
                <button onClick={logout} className="text-gray-700 hover:text-primary">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
                <Link to="/signup" className="bg-dark text-white px-4 py-2 rounded hover:bg-opacity-90">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
