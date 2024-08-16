import axios, { AxiosRequestConfig } from 'axios'
import { ROOT_API_PATH } from './constants/routes'

const defaultAxiosConfig: AxiosRequestConfig = {
  baseURL: ROOT_API_PATH,
}

export const fetcher = {
  /* typescript-eslint-disable no-implicit-any */
  get: async <T, P>(pathname: string, params?: P) => {
    const axiosConfig = { ...defaultAxiosConfig, ...{ params }, ...defaultAxiosConfig }
    const { data } = await axios.get<T>(pathname, axiosConfig)
    return data
  },
}
