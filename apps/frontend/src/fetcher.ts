import axios, { AxiosRequestConfig } from 'axios'
import { ROOT_API_PATH } from './constants/routes'

const defaultAxiosConfig: AxiosRequestConfig = {
  baseURL: ROOT_API_PATH,
}

export const fetcher = {
  get: async <T>(pathname: string, params?: any) => {
    const axiosConfig = { ...defaultAxiosConfig, ...{ params }, ...defaultAxiosConfig }
    console.log(axiosConfig)
    const { data } = await axios.get<T>(pathname, axiosConfig)
    return data
  },
}
