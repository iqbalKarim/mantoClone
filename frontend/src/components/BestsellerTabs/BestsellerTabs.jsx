import CustomButton from "@components/CustomButton/CustomButton"

import styles from "./BestsellerTabs.module.css"
import { useRef, useState } from "react"
import Slider from "react-slick"
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator"
import { ChevronLeft, ChevronRight, ShoppingCartOutlined } from "@mui/icons-material"

const clothingBestsellers = [
  {
    image: "bs1.jpeg",
    title: "Khat-Name Odhni - Beige",
    price: 3750,
  },
  {
    image: "bs2.jpeg",
    title: "Husn Saree - Amber",
    price: 19800,
  },
  {
    image: "bs3.jpeg",
    title: "Qudrat shrug - red",
    price: 5950,
  },
  {
    image: "bs4.jpeg",
    title: "Chaman Shirt - Bottle Green",
    price: 5950,
  },
  {
    image: "bs5.jpeg",
    title: "Qald set - Olive Green",
    price: 7500,
  },
  {
    image: "bs6.jpeg",
    title: "Gul-e-jahaan Kyrta - brick red",
    price: 8100,
  },
  {
    image: "bs7.jpeg",
    title: "shades of sunset - noor long",
    price: 5950,
  },
  {
    image: "bs8.jpeg",
    title: "yaqeen kurta - rust",
    price: 4200,
  },
]
const accessoriesBestsellers = [
  {
    image: "bsAccessory1.jpeg",
    title: "Khat-nama odhni - beige",
    price: 3300,
  },
  {
    image: "bsAccessory2.jpeg",
    title: "black bol odhni",
    price: 3300,
  },
  {
    image: "bsAccessory3.jpeg",
    title: "talaash odhni - beige & red",
    price: 7500,
  },
  {
    image: "bsAccessory4.jpeg",
    title: "black sitaray odhni",
    price: 7500,
  },
  {
    image: "bsAccessory5.jpeg",
    title: "rangrez odhni",
    price: 7500,
  },
  {
    image: "bsAccessory6.jpeg",
    title: "maroon khat odhni",
    price: 7500,
  },
  {
    image: "bsAccessory7.jpeg",
    title: "kahaani odhni",
    price: 7500,
  },
  {
    image: "bsAccessory8.jpeg",
    title: "meraas odhni - black",
    price: 7500,
  },
]

const BestsellerTabs = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [activeBestSeller, setActiveBestSeller] = useState("Clothing")

  const clothingSliderRef = useRef(null)
  const accessoriesSliderRef = useRef(null)

  const settings = {
    speed: 500,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className={styles.tabs}>
        <p
          className={activeBestSeller === "Clothing" ? styles.activeBest : styles.inactiveBest}
          onClick={() => setActiveBestSeller("Clothing")}
        >
          Clothing
        </p>
        <p
          className={activeBestSeller === "Accessories" ? styles.activeBest : styles.inactiveBest}
          onClick={() => setActiveBestSeller("Accessories")}
        >
          Accessories
        </p>
      </div>
      <div className={styles.bestsellerTabContent}>
        <div className={activeBestSeller == "Clothing" ? styles.activeTab : styles.inactiveTab}>
          <LoadingIndicator loading={isLoading}>
            <div style={{ position: "absolute", top: "50%", left: 20 }}>
              <div onClick={() => clothingSliderRef.current.slickPrev()} className={styles.arrowBtns}>
                <ChevronLeft className={styles.arrowLeft} />
              </div>
            </div>

            <Slider slide='1' ref={clothingSliderRef} {...settings}>
              {clothingBestsellers.map((info, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.imageContainer}>
                    <img src={"./" + info.image} />
                    <div className={styles.quickBuy}>
                      <ShoppingCartOutlined />
                    </div>
                  </div>
                  <div className={styles.productTitle}>{info.title}</div>
                  <div className={styles.productPrice}>RS.{info.price.toLocaleString()}</div>
                </div>
              ))}
            </Slider>

            <div style={{ position: "absolute", top: "50%", right: 20 }}>
              <div onClick={() => clothingSliderRef.current.slickNext()} className={styles.arrowBtns}>
                <ChevronRight className={styles.arrowRight} />
              </div>
            </div>
          </LoadingIndicator>
        </div>
        <div className={activeBestSeller == "Accessories" ? styles.activeTab : styles.inactiveTab}>
          <LoadingIndicator loading={isLoading}>
            <div style={{ position: "absolute", top: "50%", left: 20 }}>
              <div onClick={() => accessoriesSliderRef.current.slickPrev()} className={styles.arrowBtns}>
                <ChevronLeft className={styles.arrowLeft} />
              </div>
            </div>

            <Slider slide='1' ref={accessoriesSliderRef} {...settings}>
              {accessoriesBestsellers.map((info, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.imageContainer}>
                    <img src={"./" + info.image} />
                  </div>
                  <div className={styles.productTitle}>{info.title}</div>
                  <div className={styles.productPrice}>RS.{info.price.toLocaleString()}</div>
                </div>
              ))}
            </Slider>

            <div style={{ position: "absolute", top: "50%", right: 20 }}>
              <div onClick={() => accessoriesSliderRef.current.slickNext()} className={styles.arrowBtns}>
                <ChevronRight className={styles.arrowRight} />
              </div>
            </div>
          </LoadingIndicator>
        </div>
      </div>
      <CustomButton variant='secondary'>View all products</CustomButton>
    </>
  )
}

export default BestsellerTabs
