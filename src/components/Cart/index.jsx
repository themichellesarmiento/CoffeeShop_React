import CartItem from "./CartItem";
import styles from './cart.module.css'

const Cart = ({ cart, setCart }) => {

  const totalPrice = cart.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  );

  return (
    <div className={styles.wrapper}>
      <h2>Your Cart</h2>
      <div className={styles.contents}>
        {cart.map(item => (
          <CartItem key={item.id} {...item} setCart={setCart} />
        ))}
        <h3>Total: {totalPrice} SEK</h3>
      </div>
    </div>
  )
}
export default Cart;