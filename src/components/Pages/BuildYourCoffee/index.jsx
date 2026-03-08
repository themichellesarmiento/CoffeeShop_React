import { useState } from "react";
import Banner from "../../UI/Banner";
import DrinkOptions from "../../CoffeeBuilder/DrinkOptions";
import MilkOptions from "../../CoffeeBuilder/MilkOptions";
import OrderSummary from "../../CoffeeBuilder/OrderSummary";
import SizeOptions from "../../CoffeeBuilder/SizeOptions";
import styles from './buildcoffee.module.css';
import ExtraOptions from "../../CoffeeBuilder/ExtraOptions";

const BuildYourCoffee = () => {
  const [drink, setDrink] = useState("Latte");
  const [size, setSize] = useState("Medium");
  const [milk, setMilk] = useState("Whole");
  const [extras, setExtras] = useState([]);

  return (
    <>
      <Banner heading='Build Your Own Coffee' subHeading='Select your ingredients and build your ultimate brew. Your coffee, your configuration.' />
      <div className={styles.wrapper}>
        <div className={styles.left_content}>
          <DrinkOptions drink={drink} setDrink={setDrink} />
          <MilkOptions milk={milk} setMilk={setMilk} />
          <SizeOptions size={size} setSize={setSize} />
          <ExtraOptions extras={extras} setExtras={setExtras} />
        </div>
        <div className={styles.right_content}>
          <OrderSummary drink={drink} size={size} milk={milk} extras={extras} />
        </div>
      </div>
    </>
  )
}

export default BuildYourCoffee;