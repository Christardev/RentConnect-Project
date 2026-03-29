import api from './api'

export const bookingService = {
  async createBooking(data) {
    const response = await api.post('/bookings', data)
    return response.data
  },

  async getMyBookings() {
    const response = await api.get('/bookings')
    return response.data
  },

  async getLandlordBookings() {
    const response = await api.get('/landlord/bookings')
    return response.data
  },

  async updateBookingStatus(id, status) {
    const response = await api.put(`/bookings/${id}/status`, { status })
    return response.data
  }
}
