import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAstronaut } from 'react-icons/fa'
import { AiFillLock } from 'react-icons/ai'
import appleplay from '../images/appleplay.png'
import googleplay from '../images/googleplay.png'
import biometrics from '../images/biometrics.png'

const Login = () => {
    return (
        <div className='bg-[#fcf9f9] shadow-xl container relative  mt-12 justify-center flex sm:grid lg:flex md:flex lg:ml-11 sm:-ml-1 sm:mt-1'>
            <div className='bg-[#fcf9f9] shadow-md p-5 rounded mb-6'>
                <h1 className='text-#082f49 text-2xl font-bold'>Welcome to Online <br/>
                Banking </h1>
                <form action="" method="post">
                    <div className=''>
                        
                        <input type="text" placeholder='Username or Account ID' className='inline rounded-fill shadow-xl focus:outline-black-500 p-2 w-full pl-8 border-b-2' /> 
                   <FaUserAstronaut className='-mt-6 ml-2' /> 
                   </div>
                    <div className=' mt-6'>
                        <input type="password" placeholder='Password' className='rounded shadow-xl focus:outline-black-500 p-2 w-full pl-8 border-b-2-black' />
                        <AiFillLock className='-mt-6 ml-2'/>
                    </div>
                    <div className='flex justify-around mt-5'>
                        <Link to="" className='text-xs'>Forgot username</Link>
                        <Link to="" className='text-xs'>Forgot password</Link>
                    </div>
                    <div className='flex mt-4'>
                        <input type="checkbox" />
                        <p className='ml-2'>Remember Me</p>
                    </div>
                    <div className='grid mt-3'>
                        <button className='bg-[#082f49] text-white px-5 py-3 hover:bg-[#3a147b] hover:text-white' >Login</button>
                        <button className='bg-[#eff1f3] text-blue px-5 py-3 mt-2 shadow-xl hover:bg-black hover:text-white'>Register</button>
                    </div>



                </form>
            </div>
            <div className='bg-[#c4c2c8] shadow-xl pt-5 pl-10 pr-5 mb-6 rounded sm:hidden md:block'>
                <div>
                    <h2 className='font-bold text-center text-1xl'>On a mobile device?</h2>
                    <p className='mt-2'>Download the App for convinient and<br />
                        secure access to your accounts.
                    </p>
                </div>

                <div className='flex mt-2'>
                    <img src={biometrics} className='w-9 h-7 rounded' />
                    <div className='ml-2'>
                    <h5>Biometric Login</h5>
                    <p>Use your device hardware</p>
                    </div>
                </div>
                <div className='flex mt-2'>
                <img src={biometrics} className='w-9 h-7 rounded' />
                    <div className='ml-2'>
                    <h5>Nearly ATMs</h5>
                    <p>Enable Location Services</p>
                    </div>
                </div>
                <div className='flex mt-2'>
                <img src={biometrics} className='w-9 h-7 rounded' />
                    <div className='ml-2'>
                    <h5>Snapshot</h5>
                    <p>Preview Preview without logging in</p>
                    </div>
                </div>
                <div className='flex mt-3 ml-9'>
                    <img src={appleplay} className='w-24' alt="" />
                    <img src={googleplay} className="w-24" alt="" />
                </div>
                <h5 className='text-[#3a147b] ml-9 mt-3 font-bold '>Go to mobile Site</h5>
            </div>
        </div>
    )
}

export default Login