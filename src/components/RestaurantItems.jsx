import React, { useState, useEffect } from 'react';
import res2 from '../assets/images/restroimg1.jpg';
import res3 from '../assets/images/restroimg2.jpg';
import res4 from '../assets/images/restroimg3.jpg';
import Loading from '../components/Loading';


const RestaurantItems = () => {

  let API = "http://localhost:9000/restaurant";
    
    const [restaurantList, setrestaurantList] = useState([]);
    const [loading, setLoading ] = useState(true);

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.length > 0) {
              setrestaurantList(data);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApiData(API);
    }, []);

    if(loading){
        return <Loading />
    }

  return (
    <div className="container">
            <div className="top-heading my-5">
                <h2 className="heading-box fw-bold fs-2 display-3">Top Trending Spots</h2>
            </div>
          <div className="row">

          {
            restaurantList.map((restaurant, index) => {
            const { name, address, tags, image } = restaurant;
            return (
              <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                <div className="__area">
                  <a href="#" className="__card">
                    <button className="__favorit">
                      <i className="la la-heart-o"></i>
                    </button>
                    <img src={getImage(image)} className="img-fluid __img" alt={name} />
                    <div className="__card_detail text-left">
                      <h4 className="restaurant-name">{name}</h4>
                      <p className="restro-address">
                        {address.place}, {address.city}, {address.state}, {address.country}
                      </p>
                      <div className="__type">
                        {tags.map((tag, index) => (
                          <span key={index} href={`#${tag}`}>{tag}</span>
                        ))}
                      </div>
                      <div className="__detail">
                        <i className="la la-star-o"></i> <span>5.0</span> <i className="la la-clock-o"></i> <span>30 m</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })
        }
          </div>
    </div>
  )
}

const getImage = (image) => {
  switch (image) {
    case 'restroimg1.jpg':
      return res2;
    case 'restroimg2.jpg':
      return res3;
    case 'restroimg3.jpg':
      return res4;
    default:
      return '';
  }
};

export default RestaurantItems