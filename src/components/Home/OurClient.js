import React from 'react'
import logo1 from '../../images/Logo (1).png'
import logo2 from '../../images/Logo1.png'
import logo3 from '../../images/Logo (3).png'
import logo4 from '../../images/Logo (7).png'
import logo5 from '../../images/Logo (5).png'
import logo6 from '../../images/Logo (6).png'
function OurClient() {
  return (
    <>
    <div className='text-center p-10 space-y-8  '>
    <div>
        <h1 className='font-semibold text-2xl mb-4'>Our Client</h1>
        <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
    </div>
        <div className='flex items-center justify-between'>
            <img src={logo1} alt='Client 1' className='W-24 h-24' />
            <img src={logo2} alt='Client 2' className='W-24 h-24' />
            <img src={logo3} alt='Client 3' className='W-24 h-24' />
            <img src={logo4} alt='Client 4' className='W-24 h-24' />
            <img src={logo5} alt='Client 5' className='W-24 h-24' />
            <img src={logo6} alt='Client 6' className='W-24 h-24' />
            <img src={logo6} alt='Client 6' className='W-24 h-24' />
        </div>
        </div>
    </>
  )
}

export default OurClient