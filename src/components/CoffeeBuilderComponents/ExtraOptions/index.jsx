import { availableExtrasOptions } from "../../../data/coffeeOptions.js";
import OptionGroup from "../../UI/OptionGroup";
import styles from './extras.module.css'

const ExtraOptions = ({ extras, addExtras }) => {

  /*GUIDE: https://coreui.io/answers/how-to-handle-checkbox-inputs-in-react/*/
  const handleExtras = (extras) => {
    addExtras(prev => prev.includes(extras) ? prev.filter(e => e !== extras) : [...prev, extras]
    )
  }

  return (
    <>
      <OptionGroup title='Extras'>
        {availableExtrasOptions.map(e => (
          <label key={e} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={extras.includes(e)}
              onChange={() => handleExtras(e)}
            />
            {e}
          </label>
        )
        )}
      </OptionGroup>
    </>
  )
}

export default ExtraOptions;