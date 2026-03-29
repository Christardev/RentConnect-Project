import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">RentConnect Burundi</h3>
            <p className="text-gray-400 text-sm">
              Connecting landlords and renters across Bujumbura, Burundi.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Renters</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/">Browse Properties</Link></li>
              <li><Link to="/map">Map View</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Landlords</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/dashboard">List Property</Link></li>
              <li><Link to="/signup">Create Account</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Payment Methods</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Lumicash / Econet Mobile Money</li>
              <li>Cash Payment</li>
              <li>Bank Transfer</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2026 RentConnect Burundi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
