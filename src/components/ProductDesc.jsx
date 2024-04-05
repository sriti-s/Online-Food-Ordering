import React from 'react'
import descImg from '../assets/images/description1.jpg'

const ProductDesc = () => {
  return (
    <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5">
              <div className="main-img">
                <img className="img-fluid rounded" src={descImg} alt="ProductS" />
                
              </div>
            </div>
            <div className="col-md-7">
              <div className="main-description px-2">
                <div className="category text-bold fs-6">
                  Category: fast Foods
                </div>
                <div className="product-title text-bold fs-3">
                Pepperoni and Olive Pizza
                </div>
                <div className="price-area my-2">
                  <p className="new-price text-bold mb-1 fs-5">Rs 80</p>
                </div>
                <div className="buttons d-flex my-3">
                  <div className="block">
                    <button className="shadow btn custom-btn">Add to cart</button>
                  </div>
                  <div className="block quantity">
                    <input type="number" className="form-control" id="cart_quantity" defaultValue={1} min={0} max={5} placeholder="Enter email" name="cart_quantity" />
                  </div>
                </div>
              </div>
              <div className="product-details my-4">
                <p className="details-title text-color mb-1">Product Details</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam? </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductDesc