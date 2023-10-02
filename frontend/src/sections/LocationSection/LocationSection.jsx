import CustomButton from "@components/CustomButton/CustomButton"
import styles from "./LocationSection.module.css"

const LocationSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.locationImage}></div>
      <div className={styles.locationInfo}>
        <h2>MANTO STUDIO</h2>
        <p>3rd Floor, Emerald Tower, Block 5 Clifton, Karachi, Karachi City, Sindh 75600</p>

        <p>Monday - Saturday , 12 pm - 8 pm</p>

        <p>Book An Appointment With Us To Learn More About Our Products & Let Us Help You Pick A Style At The Studio!</p>

        <p>Contact Us On +923481262686</p>
        <CustomButton variant='secondary'>Get Directions</CustomButton>
      </div>
    </div>
  )
}

export default LocationSection
