import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const BackBotton = ({ destination ='/'}) => {
  return (
    <div>
        <Link to={destination} className ='bg-blue-800 text-white px-4 py-1 rounded-lg w-fit'> 
            <BsArrowLeft className='text-2xl'/>
        </Link>
    </div>
  )
}

export default BackBotton;