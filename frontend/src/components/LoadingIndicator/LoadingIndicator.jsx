import styles from "./LoadingIndicator.module.css"

const LoadingIndicator = ({ loading, extStyle, children }) => {
  return (
    <>
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingDot} />
          <div className={styles.loadingDot} />
          <div className={styles.loadingDot} />
          <div className={styles.loadingDot} />
          <div className={styles.loadingDot} />
        </div>
      )}
      {!loading && (
        <div style={extStyle} className={styles.childrenContainer}>
          {children}
        </div>
      )}
    </>
  )
}

export default LoadingIndicator
