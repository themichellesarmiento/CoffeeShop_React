import Banner from "../../UI/Banner";
import MonthlyChoice from "../../MenuComponents/MonthlyChoice";
import ColdDrinks from "../../MenuComponents/ColdDrinks";
import HotDrinks from "../../MenuComponents/HotDrinks";
import Breakfast from "../../MenuComponents/Breakfast";

const Menu = ({ addToCart }) => {
  return (
    <>
      <Banner heading='Menu' subHeading='We handle different products and allergens in our Coffee Shops.' image='menu_banner.jpg' />
      <main>
        <MonthlyChoice onAddToCart={addToCart} />
        <ColdDrinks onAddToCart={addToCart} />
        <HotDrinks onAddToCart={addToCart} />
        <Breakfast onAddToCart={addToCart} />
      </main>
    </>
  )
}

export default Menu;