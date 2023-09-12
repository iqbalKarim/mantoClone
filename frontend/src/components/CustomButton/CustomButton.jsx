import styles from "./CustomButton.module.css"

const CustomButton = ({ classname, type = "primary", children, ...rest }) => {
  return (
    <div style={{ zIndex: 5, position: "relative" }}>
      <button className={`${styles.buttonBase} ${type == "primary" ? styles.primaryButton : styles.secondaryButton}`} {...rest}>
        {children}
      </button>
    </div>
  )
}

export default CustomButton
