import React from 'react'
import imagemoney from '../images/image-currency.jpg'
import conferti from '../images/image-confetti.jpg'
import restaurant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
export const Latestart = () => {
  return (
    <>
    <div className='mt-7 '>
        <h2 className='text-center md:text-center text-3xl font-bold'>Latest Article</h2>
    </div>
    <div className='grid gap-4  md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 container mx-auto mt-3 pb-7 justify-center'>
        
        <div id='lestartimage'>
            <img src={imagemoney} className=' ml-3  rounded-md' alt="" id='lesimagestuborn'/>
            <h5 className='text-center font-bold md: ml-1'>Recieve Money in any<br></br>
            Currency with no fees</h5>
            <p className='text-center md:-ml-1'>The world is getting smaller and
            we are becoming more mobile. So
             Why should you be forced to only recieve money</p>
        </div>
        <div className='justify-center'>
            <img src={restaurant} className='rounded-md' alt="" />
            <h5 className='text-center font-bold md: ml-1'>Recieve Money in any<br></br>
            Currency with no fees</h5>
            <p className='text-center md:-ml-1'>The world is getting smaller and
            we are becoming more mobile. So
             Why should you be forced to only recieve money</p>
        </div>
        <div className='justify-center'>
            <img src={plane} className='rounded-md ml-3' alt="" />
            <h5 className='text-center font-bold md: ml-1'>Recieve Money in any<br></br>
            Currency with no fees</h5>
            <p className='text-center md:-ml-1'>The world is getting smaller and
            we are becoming more mobile. So
             Why should you be forced to only recieve money</p>
        </div>
        <div className='justify-center'>
            <img src={conferti} className='ml-3 rounded-md' alt="" />
            <h5 className='text-center font-bold md: ml-1'>Recieve Money in any<br></br>
            Currency with no fees</h5>
            <p className='text-center md:-ml-1'>The world is getting smaller and
            we are becoming more mobile. So
             Why should you be forced to only recieve money</p>
        </div>
    </div>
    
    
    </>
  )
}
