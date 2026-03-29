import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 footer-grid">
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">RentConnect Burundi</h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Connecting landlords and renters across Bujumbura, Burundi.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">For Renters</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Browse Properties</Link></li>
              <li><Link to="/map" className="hover:text-white transition">Map View</Link></li>
              <li><Link to="/signup" className="hover:text-white transition">Sign Up</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">For Landlords</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition">List Property</Link></li>
              <li><Link to="/signup" className="hover:text-white transition">Create Account</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Payment Methods</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li>Lumicash / Econet Mobile Money</li>
              <li>Cash Payment</li>
              <li>Bank Transfer</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center text-xs md:text-sm text-gray-400">
          © 2026 RentConnect Burundi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
