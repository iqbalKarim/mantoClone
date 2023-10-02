import AdvancedLoading from "@components/AdvancedLoading/AdvancedLoading"
import CustomButton from "@components/CustomButton/CustomButton"
import { Card, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { checkerApi, loginAdmin } from "../helpers/backendHelpers"
import { imageUrlConstructor } from "../helpers/imageUrlConstructor"
import styles from "./AdminLogin.module.css"
import { toast } from "react-toastify"

const AdminLogin = () => {
  const [register, setRegister] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [image, setImage] = useState(null)
  useEffect(() => {
    if (!image) {
      setIsLoading(true)
      imageUrlConstructor("ss1.jpeg")
        .then((res) => setImage(res))
        .finally(() => setIsLoading(false))
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      username: "iqbal",
      newUsername: "",
      password: "Password",
      newPassword: "",
      confirmPass: "",
    },
    onSubmit: (values) => {
      if (register) {
        alert("register")
      } else {
        setSubmitting(true)
        loginAdmin({
          username: values.username,
          password: values.password,
        })
          .then((res) => {
            console.log("login", res)
            toast.success(res.message)
          })
          .catch((err) => {
            toast.error(err.message)
          })
          .finally(() => setSubmitting(false))
      }
    },
  })

  const checker = () => {
    checkerApi()
      .then((res) => {
        toast.success("Yay")
      })
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => setSubmitting(false))
  }

  return (
    <>
      {isLoading && <AdvancedLoading />}
      <div className={styles.container}>
        <Card className={styles.card} variant='elevation'>
          <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}></div>
          <div className={styles.form}>
            <img src='./Manto_Black.jpeg' />
            <h2>Manto Admin Panel</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.formsContainer}>
                <div className={`${!register ? styles.show : styles.hide} ${styles.loginForm}`}>
                  <TextField
                    required={!register}
                    className={styles.input}
                    size='small'
                    id='username'
                    label='Username'
                    type='text'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    margin='dense'
                    variant='standard'
                  />
                  <TextField
                    required={!register}
                    variant='standard'
                    size='small'
                    margin='dense'
                    className={styles.input}
                    id='password'
                    label='Password'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className={`${register ? styles.show : styles.hide} ${styles.registerForm}`}>
                  <TextField
                    required={register}
                    className={styles.input}
                    size='small'
                    id='newUsername'
                    label='Username'
                    type='text'
                    value={formik.values.newUsername}
                    onChange={formik.handleChange}
                    margin='dense'
                    variant='standard'
                  />
                  <TextField
                    required={register}
                    variant='standard'
                    size='small'
                    margin='dense'
                    className={styles.input}
                    id='newPassword'
                    label='Password'
                    type='password'
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                  />
                  <TextField
                    required={register}
                    variant='standard'
                    size='small'
                    margin='dense'
                    className={styles.input}
                    id='confirmPass'
                    label='Confirm Password'
                    type='password'
                    value={formik.values.confirmPass}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <CustomButton type='submit' variant='secondary' style={{ marginTop: 20, width: "100%" }}>
                {register ? "register" : "login"}
              </CustomButton>
              <div
                onClick={() => {
                  setRegister(!register)
                  formik.resetForm()
                }}
                className={styles.registerButton}
              >
                {!register ? "register" : "login"}
              </div>
            </form>
            {submitting && (
              <div className={styles.formLoader}>
                <AdvancedLoading />
              </div>
            )}
          </div>
        </Card>
        <CustomButton style={{ position: "absolute", top: "100px" }} onClick={checker}>
          Checker
        </CustomButton>
      </div>
    </>
  )
}

export default AdminLogin
