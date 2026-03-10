import { availableDrinks } from "../../../data/coffeeOptions.js";
import OptionGroup from "../../UI/OptionGroup";
import RadioButtons from "../../UI/RadioButtons";

const DrinkOptions = ({ drink, setDrink }) => {

  return (
    <>
      <OptionGroup title='Drink'>
        {availableDrinks.map(d => (
          <RadioButtons key={d} value={d} state={drink} updateState={setDrink} />
        ))
        }
      </OptionGroup>
    </>
  )
}
export default DrinkOptions;