import { useState } from "react";
import Banner from "../../UI/Banner";
import DrinkOptions from "../../CoffeeBuilderComponents/DrinkOptions";
import MilkOptions from "../../CoffeeBuilderComponents/MilkOptions";
import OrderSummary from "../../CoffeeBuilderComponents/OrderSummary";
import SizeOptions from "../../CoffeeBuilderComponents/SizeOptions";
import styles from './buildcoffee.module.css';
import ExtraOptions from "../../CoffeeBuilderComponents/ExtraOptions";

const BuildYourCoffee = ({ addToCart }) => {
  const [drink, setDrink] = useState("Latte");
  const [size, setSize] = useState("Medium");
  const [milk, setMilk] = useState("Whole");
  const [extras, setExtras] = useState([]);

  return (
    <>
      <Banner heading='Build Your Own Coffee' subHeading='Select your ingredients and build your ultimate brew. Your coffee, your configuration.' image='customcoffee_banner.jpg' />
      <div className={styles.wrapper}>
        <div className={styles.left_content}>
          <DrinkOptions drink={drink} addDrink={setDrink} />
          <MilkOptions milk={milk} addMilk={setMilk} />
          <SizeOptions size={size} addSize={setSize} />
          <ExtraOptions extras={extras} addExtras={setExtras} />
        </div>
        <div className={styles.right_content}>
          <OrderSummary drink={drink} size={size} milk={milk} extras={extras} onAddToCart={addToCart} />
        </div>
      </div>
    </>
  )
}

export default BuildYourCoffee;