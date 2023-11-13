import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import mumpics from '../images/mum.jpg'
import { AiOutlineNotification } from 'react-icons/ai'
import { LuLayoutDashboard } from 'react-icons/lu'
import { DiGoogleAnalytics } from 'react-icons/di'
import { MdPayment } from 'react-icons/md'
import { RiLuggageDepositLine } from 'react-icons/ri'
import { FcMoneyTransfer } from 'react-icons/fc'
import { SiShutterstock } from 'react-icons/si'
import { BiHelpCircle } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'
// import {FaUserSecret} from 'react-icons/fa'
import rayugly from '../images/rayugly.jpg'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { DashboardOverview } from './Dashboardfams'
import { Analytics } from './Analytics'

export const SideMenu = () => {
    return (
        <React.Fragment>
          
            <div className='bg-[#000] pt-8  pb-8 -pr-5 rounded-r-2xl pl-5  -mt-12 col-span-2'>
                <div className='' id='sidemenuicon'>
                    <img src={logo} alt="" className='' />
                </div>
                <div className='mt-11 flex  hover:bg-white pt-2 pl-1 rounded-lg text-green-500' id='sidemenuicon'>
                    <LuLayoutDashboard className='mt-1' />
                    <Link to="Dashboardoverview" className='text-white ml-3' >
                        Dashboard
                    </Link>

                </div>
                <div id='sidemenuicon' className='mt-4 flex  hover:bg-white pt-2 pl-1 rounded-lg text-green-500'>
                    <DiGoogleAnalytics />
                    <Link to="Analytics" className='text-white ml-3' >
                        Analytics</Link>
                </div>
                <div id='sidemenuicon' className='mt-4 flex hover:bg-white pt-2 pl-1 rounded-lg text-green-500'>
                    <MdPayment />
                    <Link className='text-white ml-3' Link to="Payments">
                        Payments</Link>

                </div>

                <div id='sidemenuicon' className='mt-4 flex hover:bg-white pt-2 pl-1 text-green-500 rounded-lg'>
                    <RiLuggageDepositLine className='hover:text-green-500' />
                    <Link to="Deposits" className='text-white ml-3' >
                        Deposits</Link>

                </div>

                <div id='sidemenuicon' className='mt-4 flex  hover:bg-white pt-2 pl-1 rounded-xl text-green-900'>
                    <FcMoneyTransfer />
                    <Link to="MoneyBox" className='text-white ml-3'>
                        Money Box</Link>

                </div>
                <div id='sidemenuicon' className='mt-4 flex hover:bg-white p-2 text-green-900 rounded-xl'>
                    <SiShutterstock className='hover: text-green-800' />
                    <Link to="Securities" className='text-white ml-3'>Securities
                    </Link>
                </div>

                <div>
                    <hr />
                </div>
                <div id='sidemenuicon' className='mt-4 flex  hover:bg-white pt-2 pl-1 rounded-lg text-green-500' >
                    <BiHelpCircle />
                    <Link to="Help" className='text-white ml-3' >
                        Help</Link>

                </div>
                <div id='sidemenuicon' className='mt-4 flex  hover:bg-white pt-2 pl-1 rounded-lg text-green-500'>
                    <AiOutlineSetting />
                    <Link to="Settings" className='text-white ml-3' >
                        Settings</Link>

                </div>
                <hr />
                <div className='mt-40'>

                    <div className=''>
                        <img src={mumpics} className='w-7 h-8 mt-8 rounded-full' id='profileimg' />
                    </div>
                    <div className='ml-10 -mt-9 text-white text-xs'>
                        <h6>Raymond Ferdinard</h6>
                        <h6>ferrychris95@gmail.com</h6>
                    </div>
                    <div>
                        <RiArrowDropDownLine className='text-white text-2xl ml-44 -mt-9' />
                    </div>
                </div>
                
            </div>
       </React.Fragment>
    )
}


export const OverviewPlayfield = () => {
    return (

        <div className='flex  bg-[#fff]  justify-between  mt-3 border-b-5 border-indigo-600 ml-60' id='dashboardtop'>
            <div className=''>
                <form action="">
                    <div className=''>
                        <input type="text" className='focus:outline-3 border-2 rounded-lg' />
                    </div>
                </form>
            </div>
            <div className='flex -ml-10'>
                <AiOutlineNotification className='mr-6 mt-2' />
                <img src={mumpics} className='w-7 h-8 rounded-full mr-7' alt="" />
            </div>
        </div>

    )
}

export const Dashboardcomponents = () => {
    return (
        <div>
            <div>
                <h1>Hello, <span id='AcctOwnername'>Raymond</span></h1>
                <p>Send and recieve funds with pleasure</p>
            </div>
            <div>
                <button className='bg-black text-white'>Add Payment +</button>
            </div>



        </div>
    )
}

