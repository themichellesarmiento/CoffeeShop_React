import Item from "../Item";
import Wrapper from "../../UI/Wrapper/index.jsx";
import { filterMenu } from "../../../utils/filterByCategory.js";

const ColdDrinks = ({ onAddToCart }) => {
  const coldDrinks = filterMenu('Cold Drinks');

  return (
    <>
      <h2>{coldDrinks[0]?.category}</h2>
      <Wrapper>
        {
          coldDrinks.map(item => (
            <Item key={item.id} {...item} onAddToCart={onAddToCart} />
          ))
        }
      </Wrapper>
    </>
  )

}
export default ColdDrinks;