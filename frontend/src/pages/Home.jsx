import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import CustomButton from "@components/CustomButton/CustomButton"
import CategoriesCarousel from "@components/CategoriesCarousel/CategoriesCarousel"
import HomeNavbar from "@components/HomeNavbar/HomeNavbar"

import styles from "./Home.module.css"

const Home = () => {
  return (
    <div style={{ paddingBottom: 50 }}>
      <div className={styles.topNews}>
        Missed out Odhnis? They're back! Browse now! <FontAwesomeIcon size='lg' icon={faArrowRightLong} />
      </div>

      <HomeNavbar />

      <div className={styles.slideshow}>
        <img src='./ss1.jpeg' width='100%' className={styles.slideshowImage} />
        <div className={styles.slideshowOverlay}>
          <p className={styles.slideDescription}>Minimal - breathable - comfortable</p>
          <p className={styles.slideTitle}>Manto Solids</p>
          <CustomButton>Shop now</CustomButton>
        </div>
      </div>

      <div className={styles.categoriesRow}>
        <div className={styles.categoriesRowHeading}>
          <p className={styles.essentials}>MANTO ESSENTIALS</p>
          <h1 className={styles.shopByCategory}>SHOP BY CATEGORY</h1>
        </div>
        <div className={styles.categoriesSlides}>
          <CategoriesCarousel />
        </div>
      </div>
    </div>
  )
}

export default Home
