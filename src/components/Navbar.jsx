import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
  const [navopen, setnavopen] = useState(false)
  const toggle = () => {
    setnavopen(!navopen)
  }
  
  return (
    <div className='container relative mx-auto mt-5 justify-end border-b pb-2 '>
      <nav className='block lg:flex row  md:block'>
        <div className='mt-5 ml-1 space-x-40 flex'>
          <div>
          <img src={logo} alt="" className='w-40  sm:ml-20 sm:-mt-3 md:ml-1' />
          </div>
         
          <div className='relative -mt-3'>
            <AiOutlineMenu className='text-3xl cursor-pointer hover:text-slate-400 md:hidden lg:hidden absolute' />
            <AiOutlineClose className='hidden text-3xl cursor-pointer hover:text-slate-400 md:hidden lg:hidden ' />
          </div>

        </div>
        <nav className='hidden lg: text-4xl space-y-3 lg:relative lg:bg-none lg:flex lg:text-sm  mt-3  ml-12 space-x-8 '>
         <li></li> 
         <li><Link to='Home'>Home</Link></li>
          <li><Link to='Contact'>Contact</Link></li>
          <li><Link to='Dashboard'>Dashboard</Link></li>
         <li><Link to='Login'>Login</Link></li> 
          <a className=' hidden cursor-pointer md: bg-green-500  rounded-full baseline text-white pt-2  pb-2 pl-5 pr-5  ml-40  hover:bg-black md:block' >Request Invite</a>
        </nav>

      </nav>
      {/* <!--mOBILEMenu---> */}
      <nav className=' bg-white absolute p-[150px] lg: text-4xl space-y-3   mt-3  ml-12 space-x-8 md:hidden lg:hidden'>
         <li></li> 
         <li className='hover:bg-slate-200 rounded'><Link to='Home'>Home</Link></li>
          <li className='hover:bg-slate-200 rounded'><Link to='Contact'>Contact</Link></li>
          
         <li className='hover:bg-slate-200 rounded'><Link to='Login'>Login</Link></li> 
          <a className=' hidden cursor-pointer md: bg-green-500  rounded-full baseline text-white pt-2  pb-2 pl-5 pr-5  ml-40  hover:bg-black md:block' >Request Invite</a>
        </nav>
    </div>
  )
}

export default Navbar