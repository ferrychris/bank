import React from 'react'
import logo from '../images/logo.svg'
import twitter from '../images/icon-twitter.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import '../App.css'

const Footer = () => {
  return (
    <div className='pt-5 pb-6 md:flex justify-around sm:grid sm:text-center' id='footer'>
        <div className='sm:justify-around'>
            <img src={logo} alt="" className='' />
            <div className='flex mt-3.5 ml-10 md:mt-6 sm:ml-12  md:ml-5 '>
                <img src={twitter} className='ml-3' alt="" />
                <img src={facebook} className='ml-3' alt="" />
                <img src={instagram} className='ml-3' alt="" />
                <img src={pinterest} className='ml-3' alt="" />
            </div>
        </div>
        <nav className='grid'>
            <a href="#" className='text-white'>About</a>
            <a href="#" className='text-white'>Contact</a>
            <a href="#" className='text-white'>Sign Up</a>

        </nav>

        <nav className='grid'>
            <a href="#" className='text-white'>Career</a>
            <a href="#" className='text-white'>Support</a>
            <a href="#" className='text-white'>Privacy</a>

        </nav>

        <div className='justify-end'>
        <button className='bg-green-500 px- md:bg-green-500  rounded-full-baseline text-white pt-2  pb-2 pl-5 pr-5  mt-2 hover:bg-black1 py-4 rounded-md hover:bg-black'>Request Invite</button>
        <p className=''>@EasyBank. All Rights Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer