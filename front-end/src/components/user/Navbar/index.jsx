import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles['menu-top']}>
      <ul className={styles.menu}>
        <li>
          <Link><FaHome /></Link>
        </li>
        <li>
          <Link>HOT</Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
