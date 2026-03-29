import api from './api'

export const propertyService = {
  async getProperties(filters = {}) {
    const response = await api.get('/properties', { params: filters })
    return response.data
  },

  async getProperty(id) {
    const response = await api.get(`/properties/${id}`)
    return response.data
  },

  async createProperty(data) {
    const formData = new FormData()
    
    Object.keys(data).forEach(key => {
      if (key === 'images' && data[key]) {
        Array.from(data[key]).forEach(file => {
          formData.append('images[]', file)
        })
      } else if (Array.isArray(data[key])) {
        formData.append(key, JSON.stringify(data[key]))
      } else {
        formData.append(key, data[key])
      }
    })

    const response = await api.post('/properties', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data
  },

  async updateProperty(id, data) {
    const response = await api.put(`/properties/${id}`, data)
    return response.data
  },

  async deleteProperty(id) {
    const response = await api.delete(`/properties/${id}`)
    return response.data
  },

  async getMyProperties() {
    const response = await api.get('/my-properties')
    return response.data
  }
}
