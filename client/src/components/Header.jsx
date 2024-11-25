import { Link } from 'react-router-dom';
import {FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
export default function Header() {
    const { currentUser } = useSelector(state => state.user);
  return (
    <header className=" sticky top-0 z-10   backdrop-filter backdrop-blur-lg flex w-full  px-20 py-4  shadow-md items-center bg-opacity-10 justify-between bg-cover ">
     
      {/* Logo Section */}
      <div className="flex items-center gap-20">
        <Link to="/">
          <img
            src="https://mma.prnewswire.com/media/1654936/Phoenix_Logo.jpg?p=facebook"
            alt="Logo"
            style={{ height: "60px", width: "60px" }}
          />  
        </Link>
        <h1 className="text-6xl  sm:inline font-fgsemibold font-bold tracking-wide text-[#F16128] hover:text-black transition-colors duration-300">PHOENIX</h1>
      </div>
  
      {/* Navigation Section */}
      <nav className='
      '>
        <ul className="flex gap-3 px-10 justify-center items-center text-sm font-nmregular text-gray-700">
        <Link to="/">
            <li className="  hover:underline">HOME</li>
          </Link>
          
          <Link to="/contactus">
            <li className="">CONTACT US</li>
          </Link>
          <Link to="/resources">
            <li className=" ">WELFARE</li>
          </Link>
          <Link to="/careers">
            <li className=" ">CAREERS</li>
          </Link>
          <Link to="/ourservices">
            <li className="">OUR SERVICES</li>
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
      
    </header>
  )
}