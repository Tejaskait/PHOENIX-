import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListingItem from '../components/ListingItem';

export default function Resources() {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    console.log(offerListings);
    useEffect(() => {
        const fetchOfferListings = async () => {
          try {
            const res = await fetch('/api/listing/get?offer=true&limit=4');
            const data = await res.json();
            setOfferListings(data);
            fetchRentListings();
          } catch (error) {
            console.log(error);
          }
        };
        const fetchRentListings = async () => {
          try {
            const res = await fetch('/api/listing/get?type=rent&limit=4');
            const data = await res.json();
            setRentListings(data);
            fetchSaleListings();
          } catch (error) {
            console.log(error);
          }
        };
        const fetchSaleListings = async () => {
          try {
            const res = await fetch('/api/listing/get?type=sale&limit=4');
            const data = await res.json();
            setSaleListings(data);
          } catch (error) {
            log(error);
          }
        };
        fetchOfferListings();
      }, []);
    
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
        <h1 className='text-center font-nmregular uppercase py-10 text-[3vw]'>
            meals:
        </h1>
      <form  onSubmit={handleSubmit} className="text-[4vw] mx-auto  justify-center  p-1 rounded-lg flex items-center gap-0.1">
        
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
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent meals for morning</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more meals for morning</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent meals for evening</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more meals for evening</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    
    
  )
}
