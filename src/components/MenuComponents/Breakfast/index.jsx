import Item from "../Item/index.jsx";
import Wrapper from "../../UI/Wrapper/index.jsx";
import { filterMenu } from "../../../utils/filterByCategory.js";

const Breakfast = ({ onAddToCart }) => {
  const breakfastFood = filterMenu('Breakfast');

  return (
    <>
      <h2>{breakfastFood[0]?.category}</h2>
      <Wrapper>
        {
          breakfastFood.map(item => (
            <Item key={item.id} {...item} onAddToCart={onAddToCart} />
          ))
        }
      </Wrapper>
    </>
  )

}
export default Breakfast;