import { initializeApp } from "firebase/app"
import { getDownloadURL, getStorage, ref } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB7-LYl9KJeuAZ0AUreI7R_YDcMHyukTY",
  authDomain: "manto-bcf9c.firebaseapp.com",
  projectId: "manto-bcf9c",
  storageBucket: "manto-bcf9c.appspot.com",
  messagingSenderId: "905468661254",
  appId: "1:905468661254:web:ad440a24827240cb6a7d87",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app)

export const getImageFromFirebase = async (name) => {
  let tempRef = ref(storage, name)
  return await getDownloadURL(tempRef)
}

export const storageRef = ref(storage, "")

export default storage
