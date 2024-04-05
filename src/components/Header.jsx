import React from 'react'
import '../App.css';
import background from "../assets/images/banner.jpg";



const Header = (props) => {
  return (
    <div className="masthead">
      <section className="bsb-hero-5 px-3 hero-banner" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
              <div className="row justify-content-md-center align-items-center">
                <div className="col-12 col-md-11 col-lg-9 col-xl-8 col-xxl-7">
                  <h1 className="display-1 hero-text text-white text-center fw-bold">{props.mainHeading}</h1>
                  <p className="lead text-white text-center mb-5 d-flex justify-content-sm-center">
                    <span className="col-12 col-sm-10 col-md-8 col-xxl-7">Discover the best food & drinks in Delhi NCR</span>
                    
                    
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
              <div className="col-12 col-md-11 col-lg-9 col-xl-8 col-xxl-7">
                        {/* SEARCH BAR  */}
                        <div className="searchInputWrapper">
                            <input className="searchInput" type="text" placeholder="Search for restaurant, cuisine or a dish" />
                            <i className="searchInputIcon fa fa-search" />
                          </div>
                    {/* SEARCH BAR  */}
                  </div>
              </div>
            </div>
          </section>
        </div>
  )
}

export default Header