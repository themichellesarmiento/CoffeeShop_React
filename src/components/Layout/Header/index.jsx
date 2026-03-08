import { getImageUrl } from '../../../utils/getImageUrl';
import styles from './header.module.css'
const Header = ({ updatePage, cart }) => {

  const totalAddedItems = cart.reduce((totalNumberOfItems, item) =>
    totalNumberOfItems + item.quantity, 0)

  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <img src={getImageUrl('logo.png')} height='auto' width='100%' />
      </div>
      <nav className={styles.navbar_container}>
        <ul className={styles.navbar__items}>
          <li>
            <a onClick={() => updatePage('Home')}>Home</a>
          </li>
          <li>
            <a onClick={() => updatePage('Menu')}>Menu</a>
          </li>
          <li>
            <a onClick={() => updatePage('Build Your Coffee')}>Build Your Coffee</a>
          </li>
          <li>
            <a onClick={() => updatePage('Cart')}>Cart ({totalAddedItems})</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;