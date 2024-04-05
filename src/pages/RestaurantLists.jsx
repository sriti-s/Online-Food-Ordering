import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer';
import RestaurantItems from '../components/RestaurantItems';

const RestaurantLists = () => {
  // let API = "https://jsonplaceholder.typicode.com/users";
  // console.log(API);

  // useEffect(() => {
  //   fetchApiData(API);
  
  // }, [third])
  

  return (
    <>
    
    <Navigation />
    <Header mainHeading={"Top Restaurants"} />
    {/* <div className="container">
      <h2>Restaurant Listing</h2>
    </div> */}
    <RestaurantItems />
    <Footer />
    </>
  )
}

export default RestaurantLists