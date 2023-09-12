import CustomButton from "@components/CustomButton/CustomButton"
import CategoriesCarousel from "@components/CategoriesCarousel/CategoriesCarousel"
import HomeNavbar from "@components/HomeNavbar/HomeNavbar"
import BestsellerTabs from "@components/BestsellerTabs/BestsellerTabs"
import HomeCategoryCardsSection from "@sections/HomeCategoryCardsSection/HomeCategoryCardsSection"
import HighlightsSection from "@sections/HighlightsSection/HighlightsSection"
import OutfitsSection from "@sections/OutfitsSection/OutfitsSection"
import LocationSection from "@sections/LocationSection/LocationSection"
import FooterSection from "@sections/FooterSection/FooterSection"

import styles from "./Home.module.css"
import { East } from "@mui/icons-material"

const Home = () => {
  return (
    <div>
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

      <HomeCategoryCardsSection />

      <HighlightsSection />

      <div style={{ margin: "100px 0", background: "#ccc", height: 2 }} />
      <OutfitsSection />
      <div style={{ margin: "100px 0", background: "#ccc", height: 2 }} />

      <LocationSection />

      <FooterSection />
    </div>
  )
}

export default Home
