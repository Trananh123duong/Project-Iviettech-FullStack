import { Outlet } from 'react-router-dom'
import Footer from '../../components/user/Footer'
import Header from '../../components/user/Header'

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
