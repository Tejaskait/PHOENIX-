import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import OurServices from './pages/OurServices.jsx';
import Careers from './pages/Careers';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing.jsx';
import UpdateListing from './pages/UpdateListing.jsx';
import Listing from './pages/Listing.jsx';
import Search from './pages/Search.jsx';
import Meals from './pages/Meals.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import Dispthreenav from './pages/Dispthreenav.jsx';
import Tracking from './pages/Tracking.jsx';





export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return <BrowserRouter >
  
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />

        <Route  element={<PrivateRoute />} >
        <Route path='/profile' element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>

            <Route path="/threenav" element={<Dispthreenav />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      
    </BrowserRouter>;
}                 