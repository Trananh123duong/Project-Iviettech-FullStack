import { Outlet } from 'react-router-dom'
import Footer from '../../components/user/Footer'
import Header from '../../components/user/Header'
import Navbar from '../../components/user/Navbar'
import Sliderbar from '../../components/user/Sliderbar'

const UserLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sliderbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
