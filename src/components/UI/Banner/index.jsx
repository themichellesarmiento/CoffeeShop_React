import { getImageUrl } from '../../../utils/getImageUrl.js';
import styles from './banner.module.css'

const Banner = ({ heading, subHeading, image }) => {
  return (
    <div className={styles.banner_container} style={{ backgroundImage: `url(${getImageUrl(image)})` }}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {subHeading && <p className={styles.subHeading}>{subHeading}</p>}
    </div>
  )
}
export default Banner;