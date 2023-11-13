import React from 'react'

const Contact = () => {
  return (
    <div className='md:flex justify-center'>
            <div className='bg-[#fcf9f9] mt-12 shadow-md p-5 rounded mb-6 sm:hidden md:block'>
        
            <h1 class="text-4xl font-bold">Have any Transaction<br/> Complaint? <br/>
            Talk to Us </h1>
            <p className='font-bold mt-4'>Our support are 24 hours responsive</p>
            <p className='font-italic mt-3'>Alternatively, send us a mail on<br/>
            <span className='font-bold'>raymondbank@bankonline.com</span></p>
        </div>
        <div className='ml-12 bg-[#fcf9f9] mt-12 shadow-md p-5 rounded mb-6 sm:justify-center'>
            <h1 className='font-bold'>Send a message</h1>
            <form>
                <div>
                    <label htmlFor="FullName">
                        <input type="text" name="FullName" id="" placeholder="Full Name" className='focus:outline-black-500 shadow-xxl border-2 rounded-lg pt-2 pr-12'/>
                    </label>
                </div>
                <div>
                    <label htmlFor="Email">
                        <input type="email" name="Email" id="" placeholder="Email" className='focus:outline-black-500 shadow-xxl border-2 rounded-lg mt-4 pt-2 pr-12'/>
                    </label>
                </div> 
                <div>
                    <label htmlFor="Subject">
                        <input type="text" name="Subject" placeholder='Subject' id="" className='focus:outline-black-500 shadow-xxl border-2 rounded-lg mt-3 pt-2 pr-12' />
                    </label>
                </div>
                <div>
                    <label htmlFor="TalkMore">
                        <input type="text-area" placeholder='Talk More' name="TalkMore" id="" className='focus:outline-black-500 shadow-xxl border-2 rounded-lg mt-3 pb-6 pr-12' />
                    </label>
                </div>
                <button className='bg-blue-500 text-white px-2 py-3 rounded-md mt-3 hover:bg-red-500'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact