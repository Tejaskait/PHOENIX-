import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ListingItem from '../components/ListingItem';
export default function Resources() {
  return (
    <div>
      <Link to="/meals">
          <button type='submit'>Meals</button>
      </Link>
    </div>
  )
}
