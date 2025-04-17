import React from 'react'
import location from '../../assets/location.svg'
import motor from '../../assets/instant_motor_icn.svg'
import customer from '../../assets/customer_support.svg'
import Image from 'next/image'

const Details = () => {
  return (
    <div className='text-center details bg-[#F8F6F6] py-10 lg:h-[300px] md:h-[400px] h-[550px] answer-section'>
      <h1 className='text-3xl lg:text-4xl heading-details mb-2' style={{paddingTop : "4rem"}}>Why our customers love us?</h1>
      <p className='text-sm mb-6 text-gray-700'>And, we think you will too.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[93%] md:w-[93%] mx-auto grid-details container'>
        {/* Box 1 */}
        <div className='bg-white rounded-lg h-[100px]  flex items-center gap-4 px-4'>
          <Image src={location} alt='Location Icon' width={40} height={40} className='img-details ' />
          <div className='text-start flex-4'>
          <h1 className=' text-lg font-large text-orange-500'>6100+ garages</h1>
          <p className=' text-sm font-medium'>24/7 customer support</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className='bg-white rounded-lg h-[100px] flex items-center gap-4 px-4'>
          <Image src={motor} alt='Instant Motor Icon' width={40} height={40} className='img-details' />
          <div className='text-start flex-4'>
          <h1 className=' text-lg font-large text-orange-500'>Instant motor claims</h1>
          <p className=' text-sm font-medium'>24/7 customer support</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className='bg-white rounded-lg h-[100px] flex items-center gap-4 px-4'>
          <Image src={customer} alt='Customer Support Icon' width={40} height={40} className='img-details' />
          <div className='text-start flex-4'>
          <h1 className=' text-lg font-large text-orange-500'>Reliable customer support</h1>
          <p className=' text-sm font-medium'>24/7 customer support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
