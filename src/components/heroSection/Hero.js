'use client'
import React from 'react'
import Image from 'next/image'
import imageGroup from '../../assets/imgGroup.svg'
import carimg from '../../assets/Car.svg'

const Hero = () => {


  return (
    <section className="flex flex-col lg:flex-row items-center h-auto lg:h-[95%]  justify-between px-6 py-10 bg-white mx-auto hero gap-6 container" style={{marginTop : "25px"}}>
      
      {/* Left Content */}
      <div className="w-full lg:w-[35%] flex flex-col gap-18 hero1">
        <div style={{marginLeft : "10px", paddingBottom : "15px"}}>
          <h1 className="text-6xl font-bold text-gray-900" style={{paddingBottom : "10px"}}>Car insurance</h1>
          <h2 className="text-2xl font-base text-gray-900 mt-2" style={{paddingBottom : "10px"}}>
            Prices starting at just ₹2,094/yr
          </h2>
          <h5 className="text-sm text-gray-500 mt-1">
            This amount refers to the TP rates only
          </h5>
        </div>

        {/* Features */}
        <div className='hero1-img'>
            <Image src={imageGroup} alt="img" style={{marginLeft : "10px", marginRight : "-120px"}} width={800} height={800} className='md:w-3xl' draggable={false} />
        </div>
      </div>

      {/* Middle Image */}
      <div className="w-full lg:w-[30%] flex justify-center my-8 lg:my-0">
        <Image src={carimg} alt="Car" width={400} height={500} draggable={false} className='w-[80%] lg:w-full'/>
      </div>

      {/* Right Form */}
      <div className='w-full lg:w-[35%] bg-white border border-none hero3' style={{paddingInline:"10px"}}>
      <div className=" rounded-md border border-gray-300" style={{padding:"25px"}}>
        <form className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Car registration no."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm h-[53px]"
            style={{paddingInline : "10px"}}
          />
          <input
            type="text"
            placeholder="Mobile no."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm h-[53px]"
            style={{paddingInline : "10px"}}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm h-[53px]"
            style={{paddingInline : "10px"}}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-all h-[50px]"
          >
            Get quote
          </button>
          <a href="#" className="text-sm text-orange-500 hover:underline" >
            Retrieve quote
          </a>

          <label className="flex items-center text-xs text-gray-600">
            <input type="checkbox" className="mr-2 accent-orange-500" />
            &nbsp;I agree to the&nbsp;
            <a href="#" className=" underline">
              terms and conditions
            </a>
          </label>
        </form> 
      </div>
      
      <div className="text-center mt-4 bg-orange-100 h-[35px]"  style={{marginRight:"50px", marginLeft: "50px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>
          <a href="#" className="text-xs text-orange-500 hover:underline">
            Renew your Lombard policy
          </a>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
