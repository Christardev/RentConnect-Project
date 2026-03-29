import api from './api'

export const reviewService = {
  async createReview(data) {
    const response = await api.post('/reviews', data)
    return response.data
  },

  async getPropertyReviews(propertyId) {
    const response = await api.get(`/properties/${propertyId}/reviews`)
    return response.data
  }
}
