'use client'
import React from 'react'
import { FileText, Headphones, CircleDollarSign } from 'lucide-react'
import things_right from "../../assets/things_right.svg";
import things_policy from '../../assets/things_policy.svg';
import things_add_ons from '../../assets/things_add_ons.svg';
import things_service from '../../assets/things_service.svg';
import Image from 'next/image'

const Things = () => {
  const tips = [
    {
      title: 'Policy coverage',
      description:
        "Check the policy inclusions and exclusions thoroughly to know whats covered and whats not. Choose the right type of policy & coverage to ensure that you are well protected at the time of claim.",
      icon: things_policy,
    },
    {
      title: 'Add-ons',
      description:
        "Add-ons come with great benefits at a nominal extra charge and each one of them serves a specific purpose. Evaluate them closely and pick the ones you need to cover your car against accidental damages reasonably.",
      icon: things_add_ons,
    },
    {
      title: 'Service benefits',
      description:
        "While you can save on premium by choosing a lower IDV, it will serve you good at the time of claim if you get an IDV close to your cars market value while buying the policy.",
      icon: things_service,
    },
    {
      title: 'Right Insured Declared Value (IDV)',
      description:
        "While you can save on premium by choosing a lower IDV, it will serve you good at the time of claim if you get an IDV close to your cars market value while buying the policy.",
      icon: things_right,
    },
  ]

  return (
    <div className="p-6 md:p-10  bg-[#F8F6F6] w-full h-auto lg:h-[700px] flex flex-col items-center justify-center">
      <div className='container w-[93%]'>
      <h2 className="text-2xl md:text-4xl  text-center " style={{paddingTop : "3rem", paddingBottom : "3.5rem"}}>
        Things to keep in mind while buying a car insurance policy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center w-full" style={{paddingBottom : "1.5rem"}}>
        {tips.map((tip, index) => (
          <div key={index} className="bg-white shadow-sm rounded-lg p-5 flex gap-6 items-center h-[187px]">
            <Image src={tip.icon} alt="icon" width={0} height={0} style={{paddingLeft: "25px", height : "90px", width : "90px", paddingTop : "3rem", }} className='self-start' />
            <div style={{paddingRight : "25px"}}>
              <h4 className="font-semibold mb-1 text-gray-900" style={{paddingBlock : "0.5rem"}}>{tip.title}</h4>
              <p className=" text-gray-600" style={{paddingBottom : "1rem", fontSize : "16px"}}>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Things
