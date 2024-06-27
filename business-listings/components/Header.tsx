import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 items-center shadow-sm'>
        <div className='flex gap-2 items-center'>
            <Image src='/logo.png' alt='logo' width={100} height={100}/>
            <h2 className='text-[25px] text-red-600 tracking-wider'>
                Find Business Listings
            </h2>
        </div>
        <ul className='flex gap-8 ml-4'>
            <li className='text-[18px] hover:text-red-700 cursor-pointer'>Home</li>
            <li className='text-[18px] hover:text-red-700 cursor-pointer'>About Us</li>
            <li className='text-[18px] hover:text-red-700 cursor-pointer'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header