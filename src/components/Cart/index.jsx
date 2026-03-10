import { useState } from "react";
import CartItem from "./CartItem";
import styles from './cart.module.css'

const Cart = ({ cart, setCart }) => {

  //SET it to a random number once the component loads
  const [orderNumber, setOrderNumber] = useState(
    () => Math.floor(100 + Math.random() * 1000)
  );

  const totalPrice = cart.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  );

  return (

    <div className={styles.wrapper}>
      {cart.length > 0 ?
        <>
          <h2 className={styles.message}>Your order is currently being prepared. Please wait at the counter</h2>
          <h2>Your Cart</h2>
          <h4>Order number : {orderNumber}</h4>
          <div className={styles.contents}>
            {cart.map(item => (
              <CartItem key={item.id} {...item} setCart={setCart} />
            ))}
            <h3>Total: {totalPrice} SEK</h3>
          </div>
        </>
        :
        <>
          <h3>Your cart is currently empty</h3>
          <p>Feel free to look at our menu or make your own custom coffee!</p>
        </>
      }
    </div>

  )
}
export default Cart;