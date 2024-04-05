import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navigation from '../components/Navigation'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[password, setPassword] = useState('');
  const[confPassword, setConfPassword] = useState('');
  
  useEffect(()=>{
    sessionStorage.clear();
  },[]);

  const sritiSubmit = async (e) => {
      e.preventDefault();
      const registrationData = {firstName, lastName, email, phone, password, confPassword }

      if (!firstName || !lastName || !email || !phone || !password || !confPassword) {
        toast.error('Please fill in all required fields.');
        return;
      }

      

      

        try {
          const response = await axios.post("http://localhost:9000/user", registrationData);
          console.log(response.data);
          toast.success('Registered Successfully');
          navigate('/login');
      } catch (error) {
          console.error('Failed: ', error.message);
          toast.error('Failed: ' + error.message);
      }
        

  }


  return (
    <>
    <Navigation />
      {/* <Header headName={"Login Here"} /> */}
      <div className="bg-light py-3">
        {/* LOGIN FORM STARTS */}
        <div>
          <section className="py-md-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-6">
                  <div className="card border border-light-subtle rounded-3 shadow-sm mt-5">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <h2 className="fs-3 fw-bold text-center text-capitalize text-secondary mb-4">Sign up to create account</h2>
                      <form onSubmit={sritiSubmit}>
                        <div className="row gy-2 overflow-hidden">
                          <div className="col-6">
                            <div className="form-floating mb-3">
                              <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} className="form-control" name="fname" id="fname" placeholder="name@example.com"  />
                              <label htmlFor="fname" className="form-label">First Name</label>
                            </div>
                          </div>
                          <div className="col-6">
                          <div className="form-floating mb-3">
                              <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} className="form-control" name="lname" id="lname" placeholder="name@example.com"  />
                              <label htmlFor="lname" className="form-label">Last Name</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-floating mb-3">
                              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" name="email" id="email" placeholder="name@example.com"  />
                              <label htmlFor="email" className="form-label">Email</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-floating mb-3">
                              <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" name="phone" id="phone" placeholder="name@example.com"  />
                              <label htmlFor="phone" className="form-label">Phone</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-floating mb-3">
                              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" name="password" id="password" defaultValue placeholder="Password"  />
                              <label htmlFor="password" className="form-label">Password</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-floating mb-3">
                              <input type="password" value={confPassword} onChange={e=>setConfPassword(e.target.value)} className="form-control" name="ConfirmPassword" id="ConfirmPassword" defaultValue placeholder="ConfirmPassword"  />
                              <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid my-3">
                              <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                            </div>
                          </div>
                          <div className="col-12">
                            <p className="m-0 text-secondary text-center">Already have an account? <a href="/login" className="link-primary text-decoration-none">Login</a></p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* LOGIN FORM ENDS */}
      </div>
      <Footer />
      
    </>
  )
}

export default Registration