import { useState, useEffect, useRef } from "react"
import CategoryCard from "@components/CategoryCard/CategoryCard"
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator"
import CustomButton from "@components/CustomButton/CustomButton"

import styles from "./HomeCategoryCardsSection.module.css"
import { useMediaQuery } from "@mui/material"
import Slider from "react-slick"
import { imageUrlConstructor } from "@helpers/imageUrlConstructor"

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

const HomeCategoryCardsSection = () => {
  const [isLoading, setIsLoading] = useState(false)
  const small = useMediaQuery("(max-width: 730px)")

  const sliderRef = useRef()

  useEffect(() => {
    const images = cardCategories.map((card) => card.image.slice(2))
    setIsLoading(true)
    imageUrlConstructor(images)
      .then((res) => res.map((img, index) => (cardCategories[index]["imageUrl"] = img)))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles["slick-dots"],
    appendDots: (dots) => {
      return (
        <div style={{ background: "", position: "absolute", bottom: 0, left: 0, width: "fit-content" }}>
          <ul>{dots}</ul>
        </div>
      )
    },
  }

  return (
    <>
      {!small && (
        <section className={styles.categoriesSection}>
          {cardCategories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </section>
      )}
      {small && (
        <section className={styles.smallCategoriesSection}>
          <LoadingIndicator isLoading={isLoading}>
            <div className={styles.sliderContainer}>
              <Slider ref={sliderRef} {...settings}>
                {cardCategories.map((cat, index) => (
                  <div key={index} className={styles.slide}>
                    <div
                      className={styles.content}
                      style={{ background: `no-repeat 0px center/100% url("${cat.imageUrl}")`, height: "100%" }}
                    >
                      <p className={styles.subtitle}>{cat.subtitle}</p>
                      <p className={styles.name}>{cat.name}</p>
                      <CustomButton>View Products</CustomButton>
                    </div>
                    <div className={styles.overlay} />
                  </div>
                ))}
              </Slider>
            </div>
          </LoadingIndicator>
        </section>
      )}
    </>
  )
}

export default HomeCategoryCardsSection
