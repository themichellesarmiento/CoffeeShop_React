import { menu } from "../../../data/data.js";
import Item from "../Item";
import Wrapper from "../../UI/Wrapper/index.jsx";
const ColdDrinks =({setCart})=>{
  const coldDrinks = menu.filter(m=>m.category==='Cold Drinks');
  return(
    <>
    <h2>{coldDrinks[0]?.category}</h2>
      <Wrapper>
      {
        coldDrinks.map(item => (
          <Item key={item.id} {...item} setCart={setCart}/>
        ))
      }
      </Wrapper>
    </>
  )

}
export default ColdDrinks;