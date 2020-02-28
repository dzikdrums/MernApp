export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://mernappdzik.herokuapp.com/api'
    : 'http://localhost:8000/api';
