import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
        <p className="text-center text-gray-600 mb-6">Sign up page coming soon...</p>
        <Link to="/login" className="block text-center text-primary">Back to Login</Link>
      </div>
    </div>
  )
}

export default SignUp
