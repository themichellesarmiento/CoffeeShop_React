import OptionGroup from "../../UI/OptionGroup";
import styles from './extras.module.css'

const availableExtrasOptions = ["Vanilla", "Caramel","Hazelnut" ,"Whipped Cream","Cinnamon","Chocolate Drizzle","Extra Espresso Shot","Cold Foam"];

const ExtraOptions = ({ extras, setExtras }) => {

   /*GUIDE: https://coreui.io/answers/how-to-handle-checkbox-inputs-in-react/*/
  const handleExtras = (extras) => {
    setExtras(prev => prev.includes(extras) ? prev.filter(e => e !== extras) : [...prev, extras]
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