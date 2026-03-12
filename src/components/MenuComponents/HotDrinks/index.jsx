import Item from "../Item";
import Wrapper from "../../UI/Wrapper/index.jsx";
import { filterMenu } from "../../../utils/filterByCategory.js";

const HotDrinks = ({ onAddToCart }) => {

  const hotDrinks = filterMenu('Hot Drinks')

  return (
    <>
      <h2>{hotDrinks[0]?.category}</h2>
      <Wrapper>
        {
          hotDrinks.map(item => (
            <Item key={item.id} {...item} onAddToCart={onAddToCart} />
          ))
        }
      </Wrapper>
    </>
  )

}
export default HotDrinks;