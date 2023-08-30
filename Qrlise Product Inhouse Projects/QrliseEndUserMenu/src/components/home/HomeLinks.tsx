import React from 'react'
import QrliseLogo from '../../assets/QrliseLogo.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/Facebook.png'
import Swiggy from '../../assets/Swiggy.png'
import Zomato from '../../assets/Zomato.svg'

const HomeLinks = () => {
  return (
    <div className='mt-5'>
        <h1 className='text-xs text-center my-2 text-gray-600'>Follow Us On Social Media</h1>
        <div className='flex items-center gap-x-5 justify-center'>
            <img src={Instagram} alt="Instagram" className='w-10' />
            <img src={Facebook} alt="Facebook" className='w-9' />
            <img src={Swiggy} alt="Swiggy" className='w-6' />
            <img src={Zomato} alt="Zomato" className='w-9' />
        </div>

        <div className='mt-10 w-[120px] mx-auto'>
            <p className='text-gray-600 text-xs'>Powered By</p>
            <img src={QrliseLogo} alt="logo" className='inline-block w-full'/>
        </div>
    </div>
  )
}

export default HomeLinks