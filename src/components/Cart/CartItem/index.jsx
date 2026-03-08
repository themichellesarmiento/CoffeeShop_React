import styles from './cartItem.module.css';

const CartItem = ({ id, name, price, quantity, setCart }) => {

  const increaseItem = () => {
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseItem = () => {
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter(item => item.quantity > 0) //if quantity becomes 0, remove it
    );
  };
  return (
    <>
      <li>
        <p>
          {name} - {quantity} x {price} SEK
        </p>
        <div className={styles.button_actions}>
          <button onClick={decreaseItem}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseItem}>+</button>
        </div>
      </li>
    </>
  )
}

export default CartItem;