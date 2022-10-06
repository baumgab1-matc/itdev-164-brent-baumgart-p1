import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import "normalize.css"

import "../data/css/styles.css"


const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <br/>
    </>
  )
}

export default Layout