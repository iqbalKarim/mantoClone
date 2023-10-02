import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator"
import { imageUrlConstructor } from "@helpers/imageUrlConstructor"
import { useEffect, useState } from "react"
import Slider from "react-slick"
import styles from "./CategoriesCarousel.module.css"

const slidesInfo = [
  { image: "./cat8.jpeg", name: "Scarves, Stoles & Odhnis" },
  { image: "./cat9.jpeg", name: "Co-ord sets" },
  { image: "./cat10.jpeg", name: "Tops" },
  { image: "./cat1.jpeg", name: "Lawn collection" },
  { image: "./cat2.jpeg", name: "Saree" },
  { image: "./cat3.jpeg", name: "Anarkali" },
  { image: "./cat4.jpeg", name: "Outerwear" },
  { image: "./cat5.jpeg", name: "Bottoms" },
  { image: "./cat6.jpeg", name: "Accessories" },
  { image: "./cat7.jpeg", name: "Winter Wear" },
]

const CategoriesCarousel = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const images = slidesInfo.map((s) => s.image.slice(2))
    setIsLoading(true)
    imageUrlConstructor(images)
      .then((res) => res.map((img, index) => (slidesInfo[index]["imageUrl"] = img)))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  }

  return (
    <div className={styles.sliderContainer}>
      <LoadingIndicator loading={isLoading}>
        <Slider {...settings}>
          {slidesInfo.map((slideInfo, index) => (
            <div key={index} className={styles.slide}>
              <img src={slideInfo.imageUrl} width={"100%"} />
              <div className={styles.catName}>{slideInfo.name}</div>
            </div>
          ))}
        </Slider>
      </LoadingIndicator>
    </div>
  )
}

export default CategoriesCarousel

//
