import { postFetcher, getFetcher } from "./fetchHelpers"

export const registerAdmin = async (user) => {}

export const loginAdmin = async (body) => {
  return await postFetcher("admin/login", body)
}

export const checkerApi = async () => {
  return await getFetcher("checker")
}
