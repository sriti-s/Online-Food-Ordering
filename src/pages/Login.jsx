import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      useEffect(()=>{
        sessionStorage.clear();
      },[]);

          
      const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            try {
              const response = axios.get(`http://localhost:9000/user/?email=${email}`)
              .then((result) => {
                result.data.map(user => {
                  if(user.email === email){
                    if(user.password === password){
                      toast.success('Login Successfully');
                      sessionStorage.setItem('username',user.firstName);
                      navigate('/');
                    } else {
                      toast.warning('Wrong password');
                    }
                  } else  {
                    toast.warning('Wrong Email');
                  }
                })
                
              }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });

            } catch (error) {
              console.error('Failed: ', error.message);
              toast.error('Failed: ' + error.message);
          }
        }
    }
      const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

  return (
    <>
    <Navigation />
      <div className="bg-light py-3">
        <div>
          <section className="py-md-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                  <div className="card border border-light-subtle rounded-3 shadow-sm mt-5">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <h2 className="fs-3 fw-bold text-center text-capitalize text-secondary mb-4">Sign in to your account</h2>
                      <form onSubmit={ProceedLogin}>
                        <div className="row gy-2 overflow-hidden">
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input type="email" value={email} onChange={e=>setEmail(e.target.value)}  className="form-control" name="email" id="email" placeholder="name@example.com"  />
                              <label htmlFor="email" className="form-label">Email</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" name="password" id="password" defaultValue placeholder="Password"  />
                              <label htmlFor="password" className="form-label">Password</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex gap-2 justify-content-between">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue name="rememberMe" id="rememberMe" />
                                <label className="form-check-label text-secondary" htmlFor="rememberMe">
                                  Keep me logged in
                                </label>
                              </div>
                              <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid my-3">
                              <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                            </div>
                          </div>
                          <div className="col-12">
                            <p className="m-0 text-secondary text-center">Don't have an account? <a href="/signup" className="link-primary text-decoration-none">Sign up</a></p>
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

export default Login