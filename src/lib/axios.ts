/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const Axios = () => {
  const instance = axios.create({
    baseURL: `/api`,
    timeout: 3 * 60 * 1000,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  return instance
}

export class ApiInstance {
  static async get<T>(url: string, params?: any, signal?: AbortSignal) {
    const { data }: any = await Axios().get<any, T>(url, {
      params: {
        ...params,
        signal
      }
    })
    return data
  }
}


export const fetcher = async (url, params?: Record<string, any>, signal?: AbortSignal) => {
  return ApiInstance.get<{ data: any }>(url, params, signal);
};

