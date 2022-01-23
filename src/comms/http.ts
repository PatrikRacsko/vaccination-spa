import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'


export const HTTPClient: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'x-hasura-admin-secret': process.env.VUE_APP_API_SECRET || ""
  }
});

HTTPClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // TODO check local storage if user is logged in if yes add authorization header
        return config;
    }, (error => {
        console.error(error)
        return Promise.reject(error);
    })
)

HTTPClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    }, (error: AxiosError) => {
        // TODO Prometheus or other bug tracking tool or redirects
        return Promise.reject(error)
})