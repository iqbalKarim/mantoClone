import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import styles from "./CategoriesCarousel.module.css"
import Slider from "react-slick"

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
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slidesInfo.map((slideInfo, index) => (
          <div key={index} className={styles.slide}>
            <img src={slideInfo.image} width={"100%"} />
            <div className={styles.catName}>{slideInfo.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategoriesCarousel

//
