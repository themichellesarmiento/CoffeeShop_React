import styles from './cartItem.module.css';

const CartItem = ({ id, name, price, quantity, onAddToCart, milk, extras }) => {

  const handleIncreaseItem = () => {
    onAddToCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const handleDecreaseItem = () => {
    onAddToCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter(item => item.quantity > 0) //if quantity becomes 0, remove it
    );
  };
  return (
    <>
      <div>
        <p>
          {name} - {quantity} x {price} SEK
        </p>
        {milk && <p>{milk} Milk</p>}
        {extras &&
          <div>
            <p>Extras:</p>
            <ul>
              {extras.map(e => (
                <li key={e}><p>{e}</p></li>
              ))}
            </ul>
          </div>
        }
        <div className={styles.button_actions}>
          <button onClick={handleDecreaseItem}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseItem}>+</button>
        </div>
      </div>
    </>
  )
}

export default CartItem;