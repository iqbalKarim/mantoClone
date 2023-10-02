import { redirect } from "react-router-dom"

export const backendUrl = import.meta.env.VITE_BACKEND_URL

export const postFetcher = async (api, body) => {
  let res = await fetch(`${backendUrl}${api}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  let data = await res.json()
  if (res.status == 401) {
    redirect("/admin")
    return Promise.reject(new Error(`Inavlid User. Redirecting to Login.`))
  } else if (res.status > 299) {
    return Promise.reject(new Error(`${data.error}`))
  } else {
    return data
  }
}
export const getFetcher = async (api) => {
  let res = await fetch(`${backendUrl}${api}`, {
    method: "GET",
    credentials: "include",
  })
  let data = await res.json()
  if (res.status == 401) {
    redirect("/admin")
    return Promise.reject(new Error(`Inavlid User. Redirecting to Login.`))
  } else if (res.status > 299) {
    return Promise.reject(new Error(`${data.error}`))
  } else {
    return data
  }
}
