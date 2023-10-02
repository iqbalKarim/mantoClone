import CustomButton from "@components/CustomButton/CustomButton"
import styles from "./OutfitsSection.module.css"
import {
  ChevronLeft,
  ChevronRight,
  Lens,
  RadioButtonChecked,
  RadioButtonUnchecked,
  ShoppingCartOutlined,
} from "@mui/icons-material"
import { useRef, useState } from "react"
import Slider from "react-slick"

const outfits = [
  {
    name: "Outfit 1",
    image: "./outfit1.jpeg",
    parts: [
      {
        name: "Sage green - kalidaar",
        image: "./outfit1-1.jpeg",
        price: 8400,
      },
      {
        name: "Arzee Scare - Shades of Pink",
        image: "./outfit1-2.jpeg",
        price: 1950,
      },
    ],
  },
  {
    name: "Outfit 2",
    image: "./outfit2.jpeg",
    parts: [
      {
        name: "Burnt Orange Nora Set",
        image: "./outfit2-1.jpeg",
        price: 7500,
      },
      {
        name: "Gulistan Stripes Dupatta - Mustard",
        image: "./outfit2-2.jpeg",
        price: 2950,
      },
    ],
  },
  {
    name: "Outfit 2",
    image: "./outfit3.jpeg",
    parts: [
      {
        name: "Shades of Sunset - Noor long shrug",
        image: "./outfit3-1.jpeg",
        price: 7500,
      },
      {
        name: "Forest green inner set",
        image: "./outfit3-2.jpeg",
        price: 2700,
      },
    ],
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
      <div>
        <p className={styles.productName}>{name}</p>
        <p className={styles.productPrice}>RS{price.toLocaleString()}</p>
      </div>
    </div>
  )
}

const OutfitsSection = () => {
  const sliderRef = useRef()
  const settings = {
    speed: 500,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [activePart, setActivePart] = useState(0)
  return (
    <section className={styles.outfitSectionContainer}>
      <h5>Get ready with</h5>
      <h2>Manto</h2>
      <div style={{ position: "relative" }}>
        <div onClick={() => sliderRef.current.slickPrev()} className={styles.arrowBtn}>
          <ChevronLeft fontSize='large' className={styles.arrowLeft} />
        </div>
        <Slider ref={sliderRef} styles={{ height: "70vh" }} {...settings}>
          {outfits.map((outfit, index) => (
            <div key={index} className={styles.outfitsSlider}>
              <div className={styles.outfitSlide}>
                <div className={styles.heroImage}>
                  <img src={outfit.image} />
                </div>

                <div className={styles.content}>
                  <div className={styles.productCard}>
                    <Product {...outfit.parts[activePart]} />
                  </div>
                  <div className={styles.button}>
                    <CustomButton
                      onClick={() => console.log(outfit.parts[activePart])}
                      variant='secondary'
                      style={{ marginBottom: "10px" }}
                    >
                      View this product
                    </CustomButton>
                    {outfit.parts.map((p, index) => {
                      if (index == activePart) {
                        return <Lens key={index} fontSize='xsmall' style={{ color: "#999", margin: "0 5px" }} />
                      } else {
                        return (
                          <RadioButtonUnchecked
                            key={index}
                            onClick={() => setActivePart(index)}
                            fontSize='xsmall'
                            style={{ cursor: "pointer", color: "#999", margin: "0 5px" }}
                          />
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div onClick={() => sliderRef.current.slickNext()} className={styles.arrowBtn}>
          <ChevronRight fontSize='large' className={styles.arrowRight} />
        </div>
      </div>
    </section>
  )
}

export default OutfitsSection
