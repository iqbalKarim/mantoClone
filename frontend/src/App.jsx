import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Flip, ToastContainer } from "react-toastify"
import "./App.css"

import AdminLogin from "@pages/AdminLogin"
import Home from "@pages/Home"

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/admin",
    // element: <Navigate to='login' />,
    children: [
      {
        path: "",
        element: <AdminLogin />,
      },
      {
        path: "home",
        element: <div>Admin Home</div>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to='/home' />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position='top-center'
        transition={Flip}
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
