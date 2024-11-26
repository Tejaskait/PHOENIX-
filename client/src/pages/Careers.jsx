import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Careers() {
  return (
    <div className='bg-center  
     bg-cover bg-[url("https://i.pinimg.com/originals/7c/fd/76/7cfd76db5ddac00b668813877346078a.gif")]'> 
     
      <div className='flex justify-center items-center'>
      <h1 className='py-20 text-white text-[6vw] font-nmregular'>
      Jobs for "YOU"
      </h1>
      </div>
      <div className='flex justify-center items-center text-[4vw]'>
      <input
          type="text"
              placeholder='Search...'
          className='bg-transparent  focus:outline-none w-24 sm:w-64'
         
        />
        <button>
            <FaSearch className='text-slate-600' />
          </button>
      </div>
      </div>
  )
}
