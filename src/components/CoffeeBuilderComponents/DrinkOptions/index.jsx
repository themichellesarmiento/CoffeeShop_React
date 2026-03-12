import { availableDrinks } from "../../../data/coffeeOptions.js";
import OptionGroup from "../../UI/OptionGroup";
import RadioButtons from "../../UI/RadioButtons";

const DrinkOptions = ({ drink, addDrink }) => {

  return (
    <>
      <OptionGroup title='Drink'>
        {availableDrinks.map(d => (
          <RadioButtons key={d} value={d} state={drink} onUpdateState={addDrink} />
        ))
        }
      </OptionGroup>
    </>
  )
}
export default DrinkOptions;