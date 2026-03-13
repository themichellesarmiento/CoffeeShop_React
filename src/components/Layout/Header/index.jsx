import { useState } from 'react';
import { getImageUrl } from '../../../utils/getImageUrl';
import styles from './header.module.css'

const navigationLinks = ['Home', 'Menu', 'Build Your Coffee', 'Cart'];

const Header = ({ updatePage, cart, page }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const totalAddedItems = cart.reduce((totalNumberOfItems, item) =>
    totalNumberOfItems + item.quantity, 0)

  const handleNavigation = (page) => {
    updatePage(page);
    setOpenMenu(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <img src={getImageUrl('logo.png')} height='auto' width='100%' />
      </div>
      <button className={styles.menu_mobile} onClick={() => setOpenMenu(!openMenu)}>{openMenu ? '✕' : '☰'}</button>
      <nav className={`${styles.navbar_container} ${openMenu ? styles.open : ''}`}>
        <ul className={styles.navbar__items}>

          {navigationLinks.map(link => (
            <li key={link}>
              <a className={page === link ? styles.active : ''} onClick={() => handleNavigation(link)}>{link === 'Cart' ? `Cart (${totalAddedItems})` : link}</a>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  )
}

export default Header;