import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  {/* all pages will render here */}
      </main>
      <Footer />
    </>
  )
}

export default Layout