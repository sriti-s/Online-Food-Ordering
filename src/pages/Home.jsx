import React from 'react'
import Navigation from '../components/Navigation';
import Header from '../components/Header'
import Footer from '../components/Footer';
import FoodItems from '../components/FoodItems';
import CustomerRatings from '../components/CustomerRatings';
import RestaurantItems from '../components/RestaurantItems';
import myLogo from '../assets/images/logo.png';
console.log(myLogo);



const Home = () => {
  return (
    <>
    <Navigation />

    <Header mainHeading={"Welcome"} />

    <FoodItems />
    <CustomerRatings/>
    <RestaurantItems />
    <Footer />
    </>
  )
}

export default Home