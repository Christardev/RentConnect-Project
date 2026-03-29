import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

const Navbar = () => {
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b navbar">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 navbar-links">
            <Link to="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link to="/map" className="text-gray-700 hover:text-primary transition">Map View</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary transition">Dashboard</Link>
                <button onClick={logout} className="text-gray-700 hover:text-primary transition">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary transition">Login</Link>
                <Link to="/signup" className="bg-dark text-white px-4 py-2 rounded hover:bg-opacity-90 transition">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/map" className="text-gray-700 hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Map View</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                  <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="text-gray-700 hover:text-primary py-2 text-left">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="bg-dark text-white px-4 py-2 rounded hover:bg-opacity-90 text-center" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
