import styles from './footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contents}>
        <div className={styles.footer__products}>
          <h4>Our Coffee</h4>
          <h4>Food and Beverages</h4>
          <h4>Coffee Your Way</h4>
          <h4>Catering</h4>
          <h4>Delivery</h4>
          <h4>Gift Cards</h4>
        </div>

        <div className={styles.footer__information}>
          <h4>About us </h4>
          <h4>Press</h4>
          <h4>Contact us</h4>
        </div>

        <div className={styles.footer__sign__up}>
          <h3>Sign up for our Freshly Brewed News</h3>
          <div className={styles.footer__newsletter}>
            <input type="email" placeholder="Enter your email" className={styles.footer__newsletter__input} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;