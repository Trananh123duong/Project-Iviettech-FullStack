import { FaFire, FaHistory, FaHome, FaTags } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles['menu-top']}>
      <ul className={styles.menu}>
        <li>
          <Link className={styles['menu-action']}><FaHome /> HOME</Link>
        </li>
        <li>
          <Link className={styles['menu-action']}><FaFire /> HOT</Link>
        </li>
        <li>
          <Link className={styles['menu-action']}><FaTags /> THỂ LOẠI <FaCaretDown /></Link>
        </li>
        <li>
          <Link className={styles['menu-action']}>LỊCH SỬ <FaHistory /></Link>
        </li>
        <li>
          <Link className={styles['menu-action']}>THEO DÕI</Link>
        </li>
        <li>
          <Link className={styles['menu-action']}>XẾP HẠNG <FaCaretDown /></Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
