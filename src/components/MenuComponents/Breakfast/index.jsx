import { menu } from "../../../data/menu.js";
import Item from "../Item/index.jsx";
import Wrapper from "../../UI/Wrapper/index.jsx";

const Breakfast =({setCart})=>{
  const breakfastFood = menu.filter(m=>m.category==='Breakfast');
  
  return(
    <>
    <h2>{breakfastFood[0]?.category}</h2>
      <Wrapper>
      {
        breakfastFood.map(item => (
          <Item key={item.id} {...item} setCart={setCart}/>
        ))
      }
      </Wrapper>
    </>
  )

}
export default Breakfast;