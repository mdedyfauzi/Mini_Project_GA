import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function DefaultLayout(props) {
  return (
    <div>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default DefaultLayout
