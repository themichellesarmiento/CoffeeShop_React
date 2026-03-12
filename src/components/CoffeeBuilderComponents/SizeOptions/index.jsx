import { availableSizes } from "../../../data/coffeeOptions.js";
import OptionGroup from "../../UI/OptionGroup";
import RadioButtons from "../../UI/RadioButtons";

const SizeOptions = ({ size, addSize }) => {

  return (
    <>
      <OptionGroup title='Size'>
        {availableSizes.map(s => (
          <RadioButtons key={s} value={s} state={size} onUpdateState={addSize} />
        ))
        }
      </OptionGroup>
    </>
  )
}
export default SizeOptions;