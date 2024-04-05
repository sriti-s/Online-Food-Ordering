import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    // cartItems.map((itemlist,index) => {
    //   console.log('sdsdsd'+itemlist);  
    // })

    
    return (
        <>
            <Navigation />
            <Header mainHeading={"Add TO Cart"} />
            <div className="container-fluid cart-box py-5">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card border">
                            <div className="card-body">
                            {/* {
                              cartItems.map((item, index) => {

                              })
                            } */}
                                <div className="d-flex align-items-start border-bottom pb-3">

                                    <div className=" align-self-center overflow-hidden">
                                        <div className="d-flex items-center">
                                            <img src="https://www.bootdey.com/image/380x380/008B8B/000000" alt="" className="avatar-lg rounded me-2" width="80" height="80" />
                                            <div className="items-details  ms-3">
                                                <h5 className="text-truncate fs-6">
                                                    <a href="#" className="text-dark text-decoration-none">Spicy Chicken Tikka</a>
                                                </h5>
                                                <p className="mb-0 mt-1">Color : <span className="fw-medium">Gray</span></p>
                                            </div>
                                            <div className="items-price ms-5">
                                                <p className="text-muted mb-2">Price</p>
                                                <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">₹500</del></span>₹450</h5>
                                            </div>
                                            <div className="items-quantity mx-5">
                                                <select className="form-select form-select-sm w-xl">
                                                    <option value="1">1</option>
                                                    <option value="2" selected="">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                </select>
                                            </div>
                                            <div className="items-total ms-5">
                                                <p class="text-muted mb-2">Total</p>
                                                <h5>₹720</h5>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <ul className="list-inline mb-0 font-size-16">
                                            <li className="list-inline-item">
                                                <a href="#" className="text-muted px-1">
                                                    <i className="mdi mdi-trash-can-outline"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="text-muted px-1">
                                                    <i className="mdi mdi-heart-outline"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-sm-6">
                                <Link to="/menu" className="btn btn-link text-muted">
                                    <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping </Link>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-end mt-2 mt-sm-0">
                                    <Link to="/payment" className="btn btn-success">
                                        <i className="mdi mdi-cart-outline me-1"></i> Checkout </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="mt-5 mt-lg-0">
                            <div className="card border shadow-none">
                                <div className="card-header bg-transparent border-bottom py-3 px-4">
                                    <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#MN0124</span></h5>
                                </div>
                                <div className="card-body p-4 pt-2">

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total :</td>
                                                    <td className="text-end">₹ 780</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount : </td>
                                                    <td className="text-end">- ₹ 78</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge :</td>
                                                    <td className="text-end">₹ 25</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax : </td>
                                                    <td className="text-end">₹ 18.20</td>
                                                </tr>
                                                <tr className="bg-light">
                                                    <th>Total :</th>
                                                    <td className="text-end">
                                                        <span className="fw-bold">
                                                            ₹ 745.2
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>

    )
}

export default Cart