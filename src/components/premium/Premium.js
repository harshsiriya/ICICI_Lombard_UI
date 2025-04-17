'use client'
import React from 'react'

const Premium = () => {
  const tableData = [
    {
      range: 'Not exceeding 1000 cc',
      premium: '₹2,094',
    },
    {
      range: 'Exceeding 1000 cc but not exceeding 1500 cc',
      premium: '₹3,416',
    },
    {
      range: 'Exceeding 1500 cc',
      premium: '₹7,897',
    },
  ]

  const factors = [
    {
      title: 'IDV',
      description:
        'IDV is the maximum amount you can claim under your policy. The higher your cars market value, the higher your IDV and premium will be.',
    },
    {
      title: 'Make and model',
      description:
        'Higher-end models are insured at a higher price, simply because the cost of repairs/replacement for such vehicle is higher.',
    },
    {
      title: 'Year of manufacture',
      description:
        'Certain new cars may be costly to cover since their spare parts may not be available yet.',
    },
    {
      title: 'Location',
      description:
        'Since urban areas have denser traffic, theres a greater probability of accidental damages. Thus, your premium may vary depending on your location.',
    },
    {
      title: 'Claim history',
      description:
        'If you have made no car insurance claims in the past year, you stand to gain a No Claim Bonus on your premium.',
    },
    {
      title: 'Add-ons',
      description:
        'If you have made no car insurance claims in the past year, you stand to gain a No Claim Bonus on your premium.',
    },
  ]

  return (
    <div className="p-6 md:p-10 container w-[93%] h-auto xl:h-[790px] flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl md:text-4xl  text-center mb-8" style={{paddingBottom:"3rem"}}>
        How is car insurance premium calculated?
      </h2>

      <div className='flex gap-12 premium-flex'  style={{paddingBottom:"1.5rem"}}>
      <div className='flex-1'>
      <p className=" text-[#282828]  font-bold mb-4" style={{fontSize : "18px"}}>
        Your car insurance premium includes three major components:
      </p>

      <br/>

      <div className="space-y-6 mb-10">
        <div className="flex items-start gap-3">
          <div className="text-orange-600 font-bold text-3xl">1</div>
          <p className="text-[#282828]" style={{paddingBottom : "12px", fontSize: "16px"}}>
            <span className="font-medium  ">Third-party liability premium</span> this is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your cars cubic capacity.
          </p>
        </div>

        <br/>

        {/* Table */}
        <div className="overflow-x-auto" style={{paddingLeft : "25px", paddingBottom : "12px"}}>
  <table className="w-full mt-4 border border-gray-200 rounded-md overflow-hidden text-sm ">
    <thead className="bg-gray-100 text-left">
      <tr>
        <th
          className="text-[#282828] px-4 py-2 bg-[#E1E0D1] border-r border-white text-md "
          style={{ paddingInline: '10px',paddingBlock: '10px'  }}
        >
          Cubic capacity
        </th>
        <th
          className="text-[#282828] px-4 py-2 border-b border-gray-200 bg-[#E1E0D1] text-md "
          style={{ paddingInline: '10px', paddingBlock: '10px' }}
        >
          Premium with effect from <br className="hidden md:block" /> 1st June 2022 (₹)
        </th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((row, i) => (
        <tr key={i} className="border-b-2 border-gray-200 text-[#282828]" >
          <td style={{ paddingInline: '10px', paddingBlock: '10px' }}>
            {row.range}
          </td>
          <td style={{ paddingInline: '10px', paddingBlock: '10px' }}>
            {row.premium}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        <br/>

        <div className="flex items-start gap-3">
          <div className="text-orange-600 font-bold text-3xl">2</div>
          <p className="text-[#282828]"  style={{paddingBottom : "12px", fontSize: "16px"}}>
          <span className="font-medium">Third-party liability premium</span> this is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your cars cubic capacity.
          </p>
        </div>

        <br/>

        <div className="flex items-start gap-3">
          <div className="text-orange-600 font-bold text-3xl">3</div>
          <p className="text-[#282828] "  style={{paddingBottom : "12px", fontSize: "16px"}}>
          <span className="font-medium">Third-party liability premium</span> this is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your cars cubic capacity.
          </p>
        </div>
      </div>
      </div>

      <div className="flex flex-1 flex-col gap-1s">
        {factors.map((factor, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-gray-500 mt-1">→</div>
            <div>
              <h4 className="font-semibold text-gray-700">{factor.title}</h4>
              <p className="text-sm text-gray-700" style={{marginBottom: "0.5rem", paddingBottom :"12px", fontSize: "16px"}}>{factor.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Premium
