import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const httpClient: AxiosInstance = Axios.create({
    baseURL: 'http://localhost:8080'
})