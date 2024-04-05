import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Checkout = () => {
  return (
    <>
    <Navigation />
    <Header mainHeading={"Checkout"} />
    <div className="container">
        <h2>Checkout</h2>
    </div>
    <Footer />
    </>
  )
}

export default Checkout