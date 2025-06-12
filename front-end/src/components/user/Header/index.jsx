import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import { FaBook, FaSearch, FaUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import styles from './styles.module.css';

const Header = () => {
  const [isAuthen, setIsAuthen] = useState(true);

  const renderUserAction = () => {
    if (isAuthen) {
      return (
        <Link className={styles['button-login']}>
          <MdLogin className={styles['login-icon']}/>
          <i> Đăng nhập </i>
        </Link>
      )
    }
    return (
      <div className={styles.user}>
        <div className={styles['user-info']}>
          <CiUser className={styles['icon-user']}/>
          <div className={styles.username}>
            <p>Tran Anh Duong</p>
          </div>
          <IoIosArrowDropdown className={styles['arrow-action-user']}/>
        </div>
        <ul className={styles['detail-user']}>
          <li>
            <Link className={styles['user-action']}>
              <FaUser /> Thông tin tài khoản
            </Link>
          </li>
          <li>
            <Link className={styles['user-action']}>
              <FaBook /> Truyện theo dõi
            </Link>
          </li>
          <li>
            <Link className={styles['user-action']}>
              <IoLogOut /> Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className={styles.header}>
      <div className={styles['header-container']}>
        <img src={logo} alt="Logo Top Truyện" height={'60px'} width={'80px'} />
        <Form>
          <Form.Check
            type="switch"
            id="theme-switch"
          />
        </Form>
        <div className={styles['search-container']}>
          <input type="text" className={styles['search-input']} placeholder='Nhập tên truyện, tác giả cần tìm...'/>
          <button type='submit' className={styles['icon-search']}><FaSearch /></button>
        </div>
        <FiMessageCircle className={styles['icon-message']}/>
        {renderUserAction()}
      </div>
    </div>
  )
}

export default Header
