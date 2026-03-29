import { useForm } from 'react-hook-form'

const ScheduleVisitModal = ({ isOpen, onClose, propertyTitle }) => {
  const { register, handleSubmit, reset } = useForm()

  if (!isOpen) return null

  const onSubmit = (data) => {
    console.log('Visit scheduled:', data)
    alert('Visit request submitted successfully!')
    reset()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">Schedule a Property Visit</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input 
              {...register('fullName', { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              {...register('email', { required: true })}
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input 
              {...register('phone', { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+257 XX XXX XXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred Visit Date</label>
            <input 
              {...register('visitDate', { required: true })}
              type="date"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message (Optional)</label>
            <textarea 
              {...register('message')}
              rows="3"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Any specific questions or requirements..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-dark text-white py-3 rounded-lg hover:bg-opacity-90 font-medium"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default ScheduleVisitModal
