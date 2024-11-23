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
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing.jsx';
import UpdateListing from './pages/UpdateListing.jsx';
import Listing from './pages/Listing.jsx';


export default function App() {
  return <BrowserRouter >
  
  <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />

        <Route  element={<PrivateRoute />} >
        <Route path='/profile' element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>

        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/aboutus" element={<AboutUs/>} />
       
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>;
}