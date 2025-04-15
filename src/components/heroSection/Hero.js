'use client'
import React from 'react'
import Image from 'next/image'
import imageGroup from '../../assets/imgGroup.svg'
import carimg from '../../assets/Car.svg'

const Hero = () => {


  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-10 bg-white mx-auto gap-6 container" style={{marginTop : "50px"}}>
      
      {/* Left Content */}
      <div className="w-full lg:w-1/3 flex flex-col gap-12 hero1">
        <div style={{marginLeft : "10px"}}>
          <h1 className="text-4xl font-extrabold text-gray-900">Car insurance</h1>
          <h2 className="text-xl font-semibold text-gray-900 mt-2">
            Prices starting at just ₹2,094/yr
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            This amount refers to the TP rates only
          </p>
        </div>

        {/* Features */}
        <div className='hero1-img'>
            <Image src={imageGroup} alt="img" style={{marginLeft : "10px"}} width={600} height={600} className='md:w-3xl' draggable={false} />
        </div>
      </div>

      {/* Middle Image */}
      <div className="w-full lg:w-1/2 flex justify-center my-8 lg:my-0">
        <Image src={carimg} alt="Car" width={400} height={500} draggable={false}/>
      </div>

      {/* Right Form */}
      <div className='w-full lg:w-1/3 bg-white border border-none hero3' style={{paddingInline:"10px"}}>
      <div className=" shadow-md rounded-md" style={{padding:"25px"}}>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Car registration no."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm h-[50px]"
            style={{paddingInline : "10px"}}
          />
          <input
            type="text"
            placeholder="Mobile no."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm h-[50px]"
            style={{paddingInline : "10px"}}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm h-[50px]"
            style={{paddingInline : "10px"}}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-all h-[50px]"
          >
            Get quote
          </button>
          <a href="#" className="text-xs text-orange-500 hover:underline">
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
