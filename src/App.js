import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import OurMenu from './pages/OurMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RestaurantLists from './pages/RestaurantLists';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import FoodMenuDetails from './pages/FoodMenuDetail';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

function App() {
  return (
  
  <>
  <Router>
      <div>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/restaurant-list" element={<RestaurantLists />} />
          <Route path="/menu" element={<OurMenu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<OurMenu />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu-details" element={<FoodMenuDetails />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
   </Router>
    <ToastContainer />
    
   </>
  );
}

export default App;
