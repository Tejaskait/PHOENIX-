import { Link } from 'react-router-dom';
import {FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
export default function Header() {
    const { currentUser } = useSelector(state => state.user);
  return (
    <header className="bg-transparent flex w-full px-8 py-4 bg-white shadow-md items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-1">
        <Link to="/">
          <img
            src="src/components/phoenix-logo.png"
            alt="Logo"
            style={{ height: "60px", width: "60px" }}
          /> 
        </Link>
        <h1 className="text-3xl sm:inline font-fgsemibold font-bold tracking-wide text-[#F16128] hover:text-black transition-colors duration-300">PHOENIX</h1>
      </div>
  
      {/* Navigation Section */}
      <nav className='
      '>
        <ul className="flex gap-3 px-10 justify-center items-center text-sm font-nmregular text-gray-700">
        
          
          <Link to="/contactus">
            <li className="hidden sm:inline hover:underline">CONTACT US</li>
          </Link>
          <Link to="/resources">
            <li className=" hidden sm:inline hover:underline">WELFARE</li>
          </Link>
          <Link to="/careers">
            <li className=" hidden sm:inline hover:underline">CAREERS</li>
          </Link>
          <Link to="/ourservices">
            <li className="hidden sm:inline hover:underline">OUR SERVICES</li>
          </Link>
          <Link to="/">
            <li className="  hover:underline">HOME</li>
          </Link>
          <Link to="/profile">
          {currentUser ? (
            <img className='rounded-full h-9 w-9 object-cover' src ={currentUser.avatar} alt=""/>
          ): <li className=" hover:underline ">SIGN IN</li>
          }
          </Link>

        </ul>
      </nav>

      {/* Search Section */}
      <form className=" bg-gray-100 p-1 rounded-lg flex items-center gap-0.1">
        <input
          type="text"
          placeholder="SEARCH"
          className="bg-transparent   "
        />
        <FaSearch className="text-gray-600" />
      </form>
    </header>
  )
}