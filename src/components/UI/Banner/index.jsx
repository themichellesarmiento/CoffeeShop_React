import styles from './banner.module.css'

const Banner =({heading,subHeading})=>{
  return(
    <div className={styles.banner_container}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  )
}
export default Banner;