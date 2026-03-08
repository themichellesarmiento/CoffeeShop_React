import OptionGroup from "../../UI/OptionGroup";
import RadioButtons from "../../UI/RadioButtons";

const availableSizes = ['Small', 'Medium', 'Large']

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