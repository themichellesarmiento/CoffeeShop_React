import styles from './summary.module.css'
const OrderSummary = ({ drink, size, milk, extras, onAddToCart }) => {

  const handleCustomCoffee = () => {
    const customCoffee = {
      id: Date.now(),
      name: `${size} ${drink}`,
      price: 300,
      quantity: 1,
      milk,
      extras
    }

    onAddToCart(prev => [...prev, customCoffee])
  }

  return (
    <>
      <h3>Your Coffee</h3>
      <p>{drink}</p>
      <p>{milk} milk</p>
      <p>{size} size</p>
      {extras.length > 0 && (
        <div>
          <p>Extras:</p>
          <ul>
            {extras.map(e => (
              <li key={e}><p>{e}</p></li>
            ))}
          </ul>
        </div>
      )}
      <h4>Price: 300 SEK</h4>
      <div className={styles.button_wrapper}>
        <button className={styles.button} onClick={handleCustomCoffee}>Add Custom Coffee</button>
      </div>
    </>
  )

}
export default OrderSummary;