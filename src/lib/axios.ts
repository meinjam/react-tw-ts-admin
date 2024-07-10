import axios, { AxiosResponse, AxiosError } from 'axios';

// Define the shape of the configuration and response types if necessary
// interface CustomConfig extends AxiosRequestConfig { /* custom fields */ }
// interface CustomResponse extends AxiosResponse { /* custom fields */ }

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string, // Type assertion
});

const localAuth = localStorage.getItem('auth');

if (localAuth) {
  const auth = JSON.parse(localAuth);

  if (auth?.token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;
  }
}

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   function (config: AxiosRequestConfig): AxiosRequestConfig {
//     // Do something before request is sent
//     // console.log('i ran before request');
//     return config;
//   },
//   function (error: AxiosError): Promise<AxiosError> {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response && error.response.status === 401) {
      // Handle 401 error
      localStorage.removeItem('auth');
      window.location.href = '/login';
    }
    // console.log(error.response);
    return Promise.reject(error);
  }
);
