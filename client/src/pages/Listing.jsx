import { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';
import {
    FaBath,
    FaBed,
    FaChair,
    FaMapMarkedAlt,
    FaMapMarkerAlt,
    FaParking,
    FaShare,
  } from 'react-icons/fa';
  import { IoFastFood } from "react-icons/io5";
  import { PiBowlFoodFill } from "react-icons/pi";
  import { MdOutlineProductionQuantityLimits } from "react-icons/md";
  import { FaPeopleGroup } from "react-icons/fa6";
  import { GiKnifeFork } from "react-icons/gi";





  
export default function Listing() {
    const params = useParams();
    const [copied, setCopied] = useState(false);
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchListing = async () => {
          try {
            setLoading(true);
            const res = await fetch(`/api/listing/get/${params.listingId}`);
            const data = await res.json();
            if (data.success === false) {
              setError(true);
              setLoading(false);
              return;
            }
            setListing(data);
            setLoading(false);
            setError(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchListing();
      }, [params.listingId]);
      console.log(loading);
      return <main className='main'>{loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
       {listing && !loading && !error && (
        <div>
           <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
            <FaShare
              className='text-slate-500'
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
              Link copied!
            </p>
          )}
          <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
            <p className='text-2xl font-semibold'>
              {listing.name} - ₹{' '}
              {listing.offer
                ? listing.discountPrice.toLocaleString('en-US')
                : listing.regularPrice.toLocaleString('en-US')}
              {listing.type === 'rent' && ' '}
            </p>
            <p className='flex items-center mt-6 gap-2 text-slate-600  text-sm'>
              <GiKnifeFork className='text-green-700 size-20' />
              {listing.address}
            </p>
            <div className='flex gap-4'>
              <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                {listing.type === 'rent' ? 'Takeaway' : 'Takeaway'}
              </p>
              {listing.offer && (
                <p className='bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                  ₹{+listing.regularPrice - +listing.discountPrice} off
                </p>
              )}
            </div>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Description - </span>
              {listing.description}
            </p>
            <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <MdOutlineProductionQuantityLimits className='text-lg' />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} quantities `
                  : `${listing.bedrooms} quantity `}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaPeopleGroup className='text-lg' />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} persons `
                  : `${listing.bathrooms} person `}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <IoFastFood className='text-lg' />
                {listing.parking ? 'snack' : 'Not snack'}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <PiBowlFoodFill className='text-lg' />
                {listing.furnished ? 'lunch' : 'not lunch'}
              </li>
            </ul>
          </div>
        </div>
      )}</main>
}
