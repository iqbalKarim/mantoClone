import CustomButton from "@components/CustomButton/CustomButton"

import styles from "./FooterSection.module.css"

const FooterSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <h5>About the shop</h5>
        <p>
          Manto is a Pakistani born fashion label appealing to those looking for a touch of the traditional, delivered on
          contemporary terms. Bold, eye-catching and with an unapologetically rebellious streak, our products are designed in
          Karachi and 100% made in Pakistan.
        </p>
        <p>Our Passion Is To Create Products That Are Trendy 'forever'</p>
      </div>
      <div>
        <h5>Support</h5>
        <ul>
          <li> FAQs</li>
          <li>Size Chart</li>
          <li>Our Story</li>
          <li>Gift Guide</li>
          <li>Careers</li>
          <li>Design Philosophy</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Search</li>
          <li>Returns & Exchange Policy</li>
          <li>Terms of Service & Security Policy</li>
          <li>Privacy Policy</li>
          <li>Refund policy</li>
        </ul>
      </div>
      <div>
        <h5>Become part of the manto family</h5>
        <p>
          Subscribe to receive early access to our exclusive new collections, be the first to know about any upcoming discounts
          and stay updated on our Manto stories featuring some of Pakistan's most inspirational personalities!
        </p>
        <input type='email' placeholder='Enter your email address' />
        <CustomButton style={{ marginTop: 10 }} variant='secondary'>
          Subscribe
        </CustomButton>
      </div>
    </div>
  )
}

export default FooterSection
