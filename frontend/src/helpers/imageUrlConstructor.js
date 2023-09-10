import { getImageFromFirebase } from "../../firebaseConfig"

// Gets all URL's from firebase
export const imageUrlConstructor = async (fileNames) => {
  let data = await Promise.all(fileNames.map((name) => getImageFromFirebase(name)))
  return data
}
