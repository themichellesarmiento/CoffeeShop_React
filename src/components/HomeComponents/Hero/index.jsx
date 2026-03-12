import styles from './hero.module.css'
const Hero = () => {

  return (
    <>
      <div className={styles.hero_container}>
        <h1>Barista's Choice Hazelnut</h1>
        <p className={styles.hero__subtitle}>Our barista have bought together their favourite flavors in a trio, with smooth hazelnut at the centre.</p>
        <button>Read More</button>
      </div>
    </>
  )
}

export default Hero;