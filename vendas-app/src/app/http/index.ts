import Axios, { AxiosInstance } from 'axios'

export const httpClient: AxiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_VENDAS_API
})
