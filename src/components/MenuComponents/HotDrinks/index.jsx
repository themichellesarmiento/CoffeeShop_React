import { menu } from "../../../data/menu.js";
import Item from "../Item";
import Wrapper from "../../UI/Wrapper/index.jsx";

const HotDrinks =({setCart})=>{
  const hotDrinks = menu.filter(m=>m.category==='Hot Drinks');
  return(
    <>
    <h2>{hotDrinks[0]?.category}</h2>
      <Wrapper>
      {
        hotDrinks.map(item => (
          <Item key={item.id} {...item} setCart={setCart}/>
        ))
      }
      </Wrapper>
    </>
  )

}
export default HotDrinks;