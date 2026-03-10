import { availableMilkOptions } from "../../../data/coffeeOptions.js";
import OptionGroup from "../../UI/OptionGroup";
import RadioButtons from "../../UI/RadioButtons";

const MilkOptions =({milk, setMilk})=>{
  
  return(
    <>
      <OptionGroup title='Milk'>
        {availableMilkOptions.map(m => (
          <RadioButtons key={m} value={m} state={milk} updateState={setMilk} />
        ))
        }
      </OptionGroup>
    </>
  )
}

export default MilkOptions;