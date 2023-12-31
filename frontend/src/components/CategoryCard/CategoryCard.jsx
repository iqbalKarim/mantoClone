import CustomButton from "@components/CustomButton/CustomButton"
import styles from "./CategoryCard.module.css"

const CategoryCard = ({ image, name, subtitle, imageUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.name}>{name}</p>
        <CustomButton>View Products</CustomButton>
      </div>
    </div>
  )
}

export default CategoryCard
