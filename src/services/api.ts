const API_BASE_URL = 'http://localhost:8000/api';

// Token management
export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');
export const setTokens = (access: string, refresh: string) => {
  localStorage.setItem('access_token', access);
  localStorage.setItem('refresh_token', refresh);
};
export const clearTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

// Refresh access token
const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const response = await fetch(`${API_BASE_URL}/users/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access);
      return data.access;
    }
    return null;
  } catch {
    return null;
  }
};

// API request wrapper with auto token refresh
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const accessToken = getAccessToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  let response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // If unauthorized, try to refresh token
  if (response.status === 401 && accessToken) {
    const newAccessToken = await refreshAccessToken();
    if (newAccessToken) {
      headers['Authorization'] = `Bearer ${newAccessToken}`;
      response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });
    } else {
      clearTokens();
      throw new Error('Session expired. Please login again.');
    }
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
    throw new Error(error.detail || error.message || 'Request failed');
  }

  return response.json();
}

// Authentication API
export const authAPI = {
  register: async (data: {
    email: string;
    full_name: string;
    phone_number: string;
    password: string;
  }) => {
    return apiRequest('/users/register/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  login: async (email: string, password: string) => {
    const response = await apiRequest<{ access: string; refresh: string }>(
      '/users/login/',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }
    );
    setTokens(response.access, response.refresh);
    return response;
  },

  logout: async () => {
    try {
      await apiRequest('/users/logout/', { method: 'POST' });
    } finally {
      clearTokens();
    }
  },

  getProfile: async () => {
    return apiRequest<{
      id: number;
      email: string;
      full_name: string;
      phone_number: string;
      role: string;
      is_active: boolean;
      date_joined: string;
    }>('/users/profile/');
  },

  updateProfile: async (data: Partial<{
    full_name: string;
    phone_number: string;
  }>) => {
    return apiRequest('/users/profile/', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },
};

// Cars API
export const carsAPI = {
  listCars: async () => {
    return apiRequest<any[]>('/cars/cars/');
  },

  getCarDetail: async (id: number) => {
    return apiRequest<any>(`/cars/cars/${id}/`);
  },

  createOrder: async (carId: number) => {
    return apiRequest('/cars/orders/', {
      method: 'POST',
      body: JSON.stringify({ car: carId }),
    });
  },
};

// Payments API
export const paymentsAPI = {
  createPayment: async (data: {
    amount: string;
    reference: string;
    description: string;
  }) => {
    return apiRequest('/payments/payments/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
