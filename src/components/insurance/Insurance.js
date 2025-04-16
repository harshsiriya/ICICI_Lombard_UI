import Image from 'next/image'
import car from "../../assets/car_2.svg"
import React from 'react'

const Insurance = () => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row w-[93%] justify-center items-center text-center insurance container gap-12 ' style={{paddingTop : "10px"}}>
            <div className='flex-4 flex justify-center items-center'>
                <Image src={car} alt='Car' />
            </div>
            <div className='flex-6 text-start flex flex-col gap-4'>
                <h1 className='text-start text-4xl'>What is car insurance?</h1>
                <p className='leading-[27px] text-md md:text-sm font-light text-gray-700' style={{paddingRight : "42px"}}>A comprehensive car insurance policy, also known as motor package insurance, saves you money when your car is damaged in an accident or natural calamity. It also covers your vehicle against theft and burglary. At times, you may end up hurting others or damaging property in an accident. A car insurance policy covers such third-party liabilities as well. If you own a car in India, having third party car insurance is a must for you. Thats why its crucial to buy and renew your policy on time to stay on the right side of the law and be covered against car damages. At an affordable premium, our reliable car insurance policy protects you against all these risks so that you can drive worry-free. Apart from comprehensive car insurance, third-party only and own-damage only car insurance policies are also available. You can choose the policy type as per your needs.</p>
            </div>
        </div>
    </div>
  )
}

export default Insurance