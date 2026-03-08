const OrderSummary = ({ drink, size, milk, extras }) => {

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
    </div>
  )

}
export default OrderSummary;