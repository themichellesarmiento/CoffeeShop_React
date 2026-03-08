import Banner from "../../UI/Banner";
import MonthlyChoice from "../../MenuComponents/MonthlyChoice";
import ColdDrinks from "../../MenuComponents/ColdDrinks";
import HotDrinks from "../../MenuComponents/HotDrinks";
import Breakfast from "../../MenuComponents/Breakfast";

const Menu = ({setCart}) => {
  return (
    <>
      <Banner heading='Menu' subHeading='We handle different products and allergens in our Coffee Shops that may come into contact with each other.' />
      <main>
        <MonthlyChoice setCart={setCart}/>
        <ColdDrinks setCart={setCart}/>
        <HotDrinks setCart={setCart}/>
        <Breakfast setCart={setCart}/>
      </main>
    </>
  )
}

export default Menu;