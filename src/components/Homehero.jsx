import React from 'react'
import backg from '../images/backgroundimage.svg'
import phone from '../images/image-mockups.png'


const Homehero = () => {
    return (
        <>
            <div className='container flex flex-wrap   md:flex-row'>
                <div className='container flex-col mb-32  md:w-1/2 ml-10 z-1'>
                    <h1 className='mt-4 -ml-3  md:ml-12 md:mt-10 text-5xl '>
                        Next Generation<br></br> Digital Banking
                    </h1>
                    <p className=' md: -ml-8 md:ml-12 mt-5'> Take your financial life online.
                     Your Easybank account<br></br>
                        will be a one stop-shop for sending,
                        saving, budgeting, <br></br>investins and more.</p>
                    <button className='ml-20 md:ml-10 bg-green-500 rounded-full baseline text-white pt-2  pb-2 pl-5 pr-5  mt-5 hover:bg-black'>Request Invite</button>
                </div>
                <div className='container relative flex-col mb-32 -mt-6  md:w-5/12 ml-10 '>
                    <div className='container absolute mb-40'>
                        <img src={phone} alt="" className='hidden md:block mt-11 md:mb-10 w-5/6 ' />
                    </div>
                    <img src={backg} alt="" className='hidden md:block md:mt-7 ml-30-ml-6 mt-10 top-0' />
                    {/* <img src={newphone} alt="" className='w-1/2 md:hidden mt-7 ml-30' /> */}
                    {/* <img src={backg} alt="" className='hidden md:mt-7 ml-30 absolute' /> */}
                </div>
            </div>

        </>
    )
}

export default Homehero   