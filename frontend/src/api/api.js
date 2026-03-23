import client from './client';

export const authApi = {
  register: (payload) => client.post('/auth/register', payload),
  login: (payload) => client.post('/auth/login', payload),
  logout: () => client.post('/auth/logout'),
  me: () => client.get('/auth/me')
};

export const dashboardApi = {
  admin: () => client.get('/dashboard/admin'),
  user: () => client.get('/dashboard/user')
};

export const productApi = {
  list: (params) => client.get('/products', { params }),
  create: (payload) => client.post('/products', payload),
  update: (id, payload) => client.put(`/products/${id}`, payload),
  remove: (id) => client.delete(`/products/${id}`)
};

export const userApi = {
  list: () => client.get('/users'),
  create: (payload) => client.post('/users', payload),
  update: (id, payload) => client.put(`/users/${id}`, payload),
  remove: (id) => client.delete(`/users/${id}`),
  updateProfile: (payload) => client.put('/users/profile/me', payload),
  changePassword: (payload) => client.put('/users/profile/password', payload)
};

export const saleApi = {
  list: () => client.get('/sales'),
  create: (payload) => client.post('/sales', payload)
};

export const reportApi = {
  list: () => client.get('/reports'),
  exportCsv: () => client.get('/reports/export', { responseType: 'blob' })
};

export const chatbotApi = {
  ask: (payload) => client.post('/chatbot/ask', payload),
  logs: () => client.get('/chatbot/logs')
};

export const settingsApi = {
  get: () => client.get('/settings'),
  update: (payload) => client.put('/settings', payload)
};

export const notificationApi = {
  list: () => client.get('/notifications'),
  create: (payload) => client.post('/notifications', payload),
  read: (id) => client.put(`/notifications/${id}/read`)
};
