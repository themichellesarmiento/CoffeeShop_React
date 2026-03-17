import { getImageUrl } from '../../../utils/getImageUrl.js';
import styles from './section.module.css'

const SectionGroup = ({ imageSrc, altText, title, text, buttonText, order }) => {

  return (
    <section className={`${styles.section_container} ${order === 'opposite' ? styles.reverse : ''}`}>
      <div className={styles.left__content}>
        <img src={getImageUrl(imageSrc)} alt={altText} height='auto' width='100%'></img>
      </div>
      <div className={styles.right__content}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </section>
  )

}
export default SectionGroup;