import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from '../../components/Link/Link.component';
import clsx from 'clsx';
import Hamburger from '../../components/Hamburger/Hamburger.component';
import MobileMenu from '../../components/MobileMenu/MobileMenu.component';

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    const bodyEl = document.querySelector('body');

    if (bodyEl) {
      if (hamburgerOpen) {
        bodyEl.style.overflow = 'hidden';
      } else {
        bodyEl.style.overflow = 'auto';
      }
    }
  }, [hamburgerOpen]);

  return (
    <nav className={clsx(styles.navBar)}>
      <div className={styles.navbarContent}>
        <div className={styles.logoContainer}>
          <Link linkTo="/">
            <h1>Ramon</h1>
          </Link>
        </div>

        <div className={styles.hamburger} onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>

        <ul className={clsx(styles.navLinks)}>
          <li>
            <Link linkTo="/" type="nav">
              Home
            </Link>
          </li>
          <li>
            <Link linkTo="/about" type="nav">
              About
            </Link>
          </li>
          <li>
            <Link linkTo="/work" type="nav">
              Work
            </Link>
          </li>
          <li>
            <Link linkTo="/contact" type="nav">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <MobileMenu shown={hamburgerOpen} toggleShown={toggleHamburger} />
    </nav>
  );
}
