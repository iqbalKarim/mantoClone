import { getImageFromFirebase } from "../../firebaseConfig"

// Gets all URL's from firebase
export const imageUrlConstructor = async (fileNames) => {
  try {
    if (typeof fileNames == "object") {
      let data = await Promise.all(fileNames.map((name) => getImageFromFirebase(name)))
      return data
    } else {
      let data = await getImageFromFirebase(fileNames)
      return data
    }
  } catch (error) {
    console.log("error", error)
    return error
  }
}
