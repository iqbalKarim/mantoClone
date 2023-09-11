import CustomButton from "@components/CustomButton/CustomButton"
import styles from "./HighlightsSection.module.css"
import { ShoppingCartOutlined } from "@mui/icons-material"

const products = [
  {
    image: "./highlight1.jpeg",
    name: "Pehchaan Scarf",
    price: 2150,
  },
  {
    image: "./highlight2.jpeg",
    name: "Arz-e-watan scarf",
    price: 2150,
  },
  {
    image: "./highlight3.jpeg",
    name: "Azaadi stole",
    price: 2150,
  },
  {
    image: "./highlight4.jpeg",
    name: "Dastaan scarf",
    price: 2150,
  },
]

const Product = ({ image, name, price }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img src={image} />
        <div className={styles.cartContainer}>
          <ShoppingCartOutlined fontSize='small' className={styles.cart} />
        </div>
      </div>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>RS{price.toLocaleString()}</p>
    </div>
  )
}

const HighlightsSection = () => {
  return (
    <section className={styles.highlightSection}>
      <h5>back in stock</h5>
      <h2>Scarves, Stoles & odhnis</h2>
      <div className={styles.productsContainer}>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      <CustomButton type='secondary'>View all products</CustomButton>
    </section>
  )
}

export default HighlightsSection
