import Banner from "../../UI/Banner";
import MonthlyChoice from "../../Menu/MonthlyChoice";
import ColdDrinks from "../../Menu/ColdDrinks";
import HotDrinks from "../../Menu/HotDrinks";
import Breakfast from "../../Menu/Breakfast";

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