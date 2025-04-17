'use client';
import Image from 'next/image';
import React from 'react';
import search from '../../assets/search_img.svg';

const tags = [
  'Health Insurance',
  'Bike Insurance',
  'Travel Insurance',
  'Vehicle Insurance',
  'Car Insurance Blogs',
  'Zero Depreciation Car Insurance',
  'Car Insurance Calculator',
  'Comprehensive Car Insurance',
  'Roadside Assistance',
  'Engine Protect Car Insurance',
  'Third-Party Car Insurance',
  'Cashless Car Insurance',
  'Model based Car Insurance',
  'Car Insurance In Ahmedabad',
  'Car Insurance In Jaipur',
  'Car Insurance Coverage',
  'Second Hand Car Insurance',
  'Car Insurance In Nashik',
  'Consumable Car Insurance',
  'IDV In Car Insurance',
  'Car Insurance In Gurgaon',
  'No Claim Bonus In Car Insurance',
];

const Search = () => {
  return (
    <div className='bg-[#F8F6F6] h-auto xl:h-[422px] flex flex-col justify-center items-center '>
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 container" style={{marginTop: '2.5rem'}}>
      {/* Left Image */}
      <div className="mb-8 md:mb-0 md:w-[25%] flex justify-center">
        <Image src={search} alt="search illustration" width={250} height={250} style={{paddingTop : "1rem"}}/>
      </div>

      {/* Right Content */}
      <div className="md:w-[75%]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left" style={{paddingBlock: '1rem', paddingInline : "2rem"}}>
          Popular Searches
        </h2>

        <div className="flex flex-wrap gap-3" style={{marginInline: '2rem', marginBottom : "2rem"}}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-gray-700 px-4 py-2 rounded-full general-text hover:bg-orange-500  hover:text-white transition"
              style={{paddingBlock: '0.5rem', paddingInline: '1rem'}}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Search;
