import { menu } from "../../../data/menu.js";
import Item from "../Item";
import Wrapper from "../../UI/Wrapper/index.jsx";


const MonthlyChoice = ({ onAddToCart }) => {
  const monthlyChoice = menu.filter(m => m.tag === "Barista's Choice");

  return (
    <>
      <h2>{monthlyChoice[0]?.tag}</h2>
      <Wrapper>
        {
          monthlyChoice.map(item => (
            <Item key={item.id} {...item} onAddToCart={onAddToCart} />
          ))
        }
      </Wrapper>
    </>
  )

}
export default MonthlyChoice;