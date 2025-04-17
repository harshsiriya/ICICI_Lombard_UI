'use client';
import Image from 'next/image';
import React from 'react';

import creta from '../../assets/creta.svg';
import alto from '../../assets/alto.svg';
import eon from '../../assets/eon.svg';
import dzire from '../../assets/dzire.svg';
import ertiga from '../../assets/ertiga.svg';

const models = [
  { img: dzire, label: 'Maruti Baleno Car Insurance' },
  { img: ertiga, label: 'Maruti Ertiga Car Insurance' },
  { img: alto, label: 'Maruti Alto Car Insurance' },
  { img: creta, label: 'Hyundai Creta Car Insurance' },
  { img: alto, label: 'Maruti Alto Car Insurance' },
  { img: eon, label: 'Hyundai Eon Car Insurance' },
  { img: creta, label: 'Hyundai Creta Car Insurance' },
  { img: dzire, label: 'Maruti Dzire Car Insurance' },
];

const Models = () => {
  return (
    <div className="bg-[#00305B] w-full h-auto lg:h-[400px] flex flex-col justify-center items-center text-white py-12 px-6 md:px-12">
        <div  className='w-[93%] container flex flex-col gap-3 lg:gap-6'>
      <h2 className="text-2xl lg:text-4xl font-semibold text-center" style={{paddingTop:"1.5rem",  paddingBottom: '0.75rem', paddingInline : "2rem"}}>
        Car Insurance for Popular Models in India
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom : "2rem"}}>
        {models.map((model, index) => (
          <div
            key={index}
            className="bg-white text-black h-auto lg:h-[78px] rounded-xl px-4 py-5 flex items-center gap-4 shadow hover:scale-105 transition-transform duration-300"
            style={{padding : "0.5rem"}}
          >
            <div className="w-20 h-14 flex-shrink-0">
              <Image src={model.img} alt={model.label} width={90} height={90} style={{paddingTop: "0.3rem"}}/>
            </div>
            <p className="text-[#282828] font-medium" style={{fontSize : "16px"}}>{model.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Models;
