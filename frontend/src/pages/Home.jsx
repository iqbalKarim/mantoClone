import CustomButton from "@components/CustomButton/CustomButton"
import CategoriesCarousel from "@components/CategoriesCarousel/CategoriesCarousel"
import HomeNavbar from "@components/HomeNavbar/HomeNavbar"

import styles from "./Home.module.css"
import { useEffect, useState } from "react"
import storage, { getImageFromFirebase, storageRef } from "../../firebaseConfig"
import { getDownloadURL, listAll } from "firebase/storage"
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator"
import BestsellerTabs from "@components/BestsellerTabs/BestsellerTabs"
import { East } from "@mui/icons-material"
import CategoryCard from "@components/CategoryCard/CategoryCard"

const cardCategories = [
  {
    image: "./cardCategory1.jpeg",
    name: "Solids for Women",
    subtitle: "Basic not boring",
  },
  {
    image: "./cardCategory2.jpeg",
    name: "Scarves stoles and Odhnis",
    subtitle: "urdu calligraphy designs",
  },
  {
    image: "./cardCategory3.jpeg",
    name: "lawn collection",
    subtitle: "Comfort meets luxury",
  },
  {
    image: "./cardCategory4.jpeg",
    name: "Solids for Men",
    subtitle: "For every occasion",
  },
  {
    image: "./cardCategory5.jpeg",
    name: "printed co-ord sets",
    subtitle: "designs for summers",
  },
  {
    image: "./cardCategory6.jpeg",
    name: "beuty with her",
    subtitle: "husn saree",
  },
]

const Home = () => {
  return (
    <div style={{ paddingBottom: 50 }}>
      <div className={styles.topNews}>
        Missed out Odhnis? They're back! Browse now! <East style={{ fontSize: "19px", position: "absolute", top: "7px" }} />
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

      <section className={styles.bestSellersSection}>
        <h4>Best-sellers</h4>
        <BestsellerTabs />
      </section>

      <section className={styles.categoriesSection}>
        {cardCategories.map((cat) => (
          <CategoryCard {...cat} />
        ))}
      </section>
    </div>
  )
}

export default Home
