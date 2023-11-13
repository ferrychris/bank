import React from 'react'
import onlinebank from '../images/icon-online.svg'
import simplebudget from '../images/icon-budgeting.svg'
import onboarding from '../images/icon-onboarding.svg'
import openapi from '../images/icon-api.svg'

const Section2 = () => {
  return (
    <div className='bg-green-100  -mt-32 p-5' id='section2div'>
      <div className='ml-15 mt-20 container mx-auto' >
        <h1 className='mb-50 ml-2 text-3xl'>Why Choose Easybank?</h1>
        <p className='ml-3 font-serif mt-3'>We Leverage Open Banking to turn your bank account into your financia hub<br></br>
        Control your Finances like never before
        </p>
        </div>
        <div className='grid ml-23 md:flex mt-12 ' id='section2div'>
          <div className='md: ml-0' >
            <img src={onlinebank} className='ml-16 mb-3 md:ml-20' alt="" />
            <h3 className='text-center mt-2 text-1xl'>Online Banking</h3>
            <p className='text-center'>One Modern Web and Reliable<br>
            </br> application allows you to keep
            <br></br> track of all  your<br></br>
            treasures</p>
          </div>
          <div className='md: ml-2.5' id='section2div'>
            <img src={simplebudget} alt="" className='ml-16 md:ml-20' />
            <h3 className='text-center mt-2 text-1xl'>Simple Budgeting</h3>
            <p className='text-center'>See Exactly where your money<br>
            </br> goes each month. Recieve 
            <br></br> notifications of all <br></br>
            transactions</p>
          </div>
          <div className='md: ml-2.5' id='section2div'>
            <img src={onboarding} alt="" className='ml-16 items-center md:ml-20'/>
            <h3 className='text-center mt-2 text-1xl'>Fast Onboarding</h3>
            <p className='text-center'>We dont do branches<br>
            </br> Open your account online 
            <br></br> and start taking control of your<br></br>
            Finances</p>
          </div>
          <div className='md: ml-2.5' id='section2div'>
            <img src={openapi} alt="" className='ml-16 justify-center md:ml-20'/>
            <h3 className='mt-2 text-1xl bold'>Open API</h3>
            <p className=''>Manage Savings in Person<br>
            </br> Deploy your fintech App using our
            <br></br>Open API<br></br>
            </p>
          </div>

        </div>
    </div>
  )
}

export default Section2