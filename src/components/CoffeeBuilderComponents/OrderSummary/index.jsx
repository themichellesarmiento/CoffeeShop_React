const OrderSummary = ({ drink, size, milk, extras, setCart }) => {

  const addCustomCoffee = () => {
    const customCoffee = {
      id: Date.now(),
      name: `${size} ${drink}`,
      price: 300,
      quantity: 1,
      milk,
      extras
    }

    setCart(prev => [...prev, customCoffee])
  }

  return (
    <div>
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
      <button onClick={addCustomCoffee}>Add Custom Coffee</button>
    </div>
  )

}
export default OrderSummary;