import styles from './radiobuttons.module.css'
const RadioButtons = ({value, state , updateState}) => {
  return (
    <>
      <label className={`${styles.option_card} ${state === value ? `${styles.selected}` : ""}`}>
        <input
          type="radio"
          value={value}
          checked={state === value}
          onChange={(e) => updateState(e.target.value)}
        />
        <span>{value}</span>
      </label>
    </>
  )
}

export default RadioButtons;