import styles from "./CustomButton.module.css"

const CustomButton = ({ classname, type = "primary", children, ...rest }) => {
  return (
    <button className={`${styles.buttonBase} ${type == "primary" ? styles.primaryButton : styles.secondaryButton}`} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton
