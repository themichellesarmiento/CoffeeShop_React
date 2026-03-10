import { availableSizes } from "../../../data/coffeeOptions.js";
import OptionGroup from "../../UI/OptionGroup";
import RadioButtons from "../../UI/RadioButtons";

const SizeOptions = ({size, setSize}) => {
  
  return (
    <>
      <OptionGroup title='Size'>
        {availableSizes.map(s => (
          <RadioButtons key={s} value={s} state={size} updateState={setSize} />
        ))
        }
      </OptionGroup>
    </>
  )
}
export default SizeOptions;