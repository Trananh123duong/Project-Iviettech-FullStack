import { Outlet } from 'react-router-dom'
import Footer from '../../components/user/Footer'
import Header from '../../components/user/Header'
import Navbar from '../../components/user/Navbar'

const UserLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
