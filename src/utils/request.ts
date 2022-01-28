import axios, { AxiosRequestConfig } from "axios"

const http = axios.create({
  baseURL: ""
})

export interface ResponseProps<T> {
  code: number
  msg?: string
  success?: boolean
  data: T
}

const request = <T>(options: AxiosRequestConfig) => {

  return http.request<ResponseProps<T>>(options).then<ResponseProps<T>>((response) => {
    const res = response.data
    return res
  })
}

export { request }
