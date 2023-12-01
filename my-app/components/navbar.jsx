// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/navbar.module.css'; // Assume you have CSS modules set up

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
        <div className="flex justify-center">
            <div className="mb-2 h-0.5 w-[100%] bg-bar-gray"></div>
        </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/lists" passHref legacyBehavior>
            <a className={styles.navLink}>
              {/* Use SVG or an icon library like FontAwesome for the icons */}
              <img src="/lists_icon.png" alt="Lists" className={`${styles.customImgSize}`} />
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/" passHref>
            <a className={styles.navLink}>
              <img src="/planner_icon.png" alt="Planner" className={styles.customImgSize}/>
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/settings" passHref>
            <a className={styles.navLink}>
              <img src="/user_icon.png" alt="Settings" className={styles.customImgSize}/>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
