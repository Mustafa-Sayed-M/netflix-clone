import React from 'react';

function Rating({ rate }) {
  return (
    <div className='rating text flex items-center gap-1'>
      <span className='text-gray-300'>{rate.toFixed(1)}</span>
      <i className="fa-solid fa-star text-yellow-500"></i>
    </div>
  )
}

export default Rating;