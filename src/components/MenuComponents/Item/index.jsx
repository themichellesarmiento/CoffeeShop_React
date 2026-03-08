import { getImageUrl } from '../../../utils/getImageUrl.js';
import styles from './item.module.css'

const Item = ({ id, image, name, description, price, setCart }) => {

  const addToCart = () => {
    setCart(prev => {
      const existingItem = prev.find(p => p.id === id);

      if (existingItem) {
        return prev.map(i => (
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        ));
      }
      return [...prev, { id, name, price, quantity: 1 }];
    });
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.card_container} style={{ backgroundImage: `url(${getImageUrl(image)})` }}>
        <div className={styles.overlay}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <p>{price} SEK</p>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  )
}
export default Item;