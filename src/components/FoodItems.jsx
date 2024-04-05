import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cart'
import axios from 'axios';
import foodItem1 from '../assets/images/foodItem1.jpg';
import foodItem2 from '../assets/images/foodItem2.jpg';
import foodItem3 from '../assets/images/foodItem3.jpg';
import Loading from '../components/Loading';


const FoodItems = () => { 

  let API = "http://localhost:9000/foodmenu";
    
    const [foodmenu, setFoodmenu] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const { cartItems, addToCart } = useContext(CartContext)
  console.log(foodmenu);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };
    const fetchApiData = async (url) => {
      try {
          const response = await axios.get(url);
          const data = response.data;
          if (data.length > 0) {
              setFoodmenu(data);
          }
      } catch (error) {
          console.error(error);
      } finally {
          setLoading(false);
      }
  };

    useEffect(() => {
        fetchApiData(API);
    }, []);

    if(loading){
        return <Loading />
    }

  return (
    <div> 
        <div className="container">
            <div className="top-heading my-5">
                <h2 className="heading-box fw-bold fs-2 display-3">Most ordered  Items List</h2>
            </div>
          <div className="row my-5">

          {foodmenu.map((item, index) => {
            const { name, description, address, tags, image, price } = item;
            
            return (
              <div className="col-lg-3 col-md-3 col-sm-3" key={index}>
                <a className="fs-6 fw-semibold px-3 pt-3 text-decoration-none text-black" href="/menu-details">
                  <img src={getImage(image)} className="img-fluid mostlyordered" alt={item.name} />
                  <h4 className="fs-5 fw-semibold px-3 pt-3">{item.name}</h4>
                  <p className="fs-6 px-3">
                    {expanded ? item.description : `${item.description.slice(0, 100)}...`}
                    {!expanded && (
                        <button className="btn btn-link" onClick={toggleExpansion}>
                            Read more
                        </button>
                    )}
                    {expanded && (
                        <button className="btn btn-link" onClick={toggleExpansion}>
                            Show less
                        </button>
                    )}
                </p>
                  <div className="d-flex justify-content-around align-items-center">
                    <span className="">Rs. {item.price} </span>
                    <button onClick={() => addToCart(foodmenu)} className="btn btn-danger">Add To Cart</button>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
        </div>
      </div>
  )
}

const getImage = (image) => {
  switch (image) {
    case 'foodItem1.jpg':
      return foodItem1;
    case 'foodItem2.jpg':
      return foodItem2;
    case 'foodItem3.jpg':
      return foodItem3;
    default:
      return '';
  }
};


export default FoodItems