import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <div>
      <form  onSubmit={handleSubmit} className="text-[4vw] mx-auto mt-10 justify-center  p-1 rounded-lg flex items-center gap-0.1">
        <input
          type="text"
              placeholder='Search...'
          className='bg-transparent focus:outline-none w-24 sm:w-64'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
            <FaSearch className='text-slate-600' />
          </button>
      </form>
    </div>
  )
}
