import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer';
import FoodItems from '../components/FoodItems';

const OurMenu = () => {
  return (
    <>
    <Navigation />
    <Header mainHeading={"Our Menu"} />
    <FoodItems/>
    <Footer />
    </>
  )
}

export default OurMenu