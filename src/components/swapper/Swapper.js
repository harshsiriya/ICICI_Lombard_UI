'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { AnimatePresence, motion } from 'framer-motion';
import policy from '../../assets/insurance_policy.svg';
import arrow1 from '../../assets/arrow_11.svg';
import arrow2 from '../../assets/arrow_21.svg';

const policies = [
  {
    title: 'Comprehensive car insurance policy',
    description1:
      'Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.',
    description2:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
  },
  {
    title: 'Third-party car insurance policy',
    description1:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
    description2:
      'It covers damage caused by natural disasters, accidents, theft, fire, and more. It includes third-party liabilities and can offer benefits like roadside assistance, towing service, etc. Though more expensive, it provides extensive coverage.',
  },
  {
    title: 'Standalone own damage policy',
    description1:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
    description2:
      'It covers damage caused by natural disasters, accidents, theft, fire, and more. It includes third-party liabilities and can offer benefits like roadside assistance, towing service, etc. Though more expensive, it provides extensive coverage.',
  },
  {
    title: 'Pay-as-you-drive policy',
    description1:
    'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
  description2:
    'It covers damage caused by natural disasters, accidents, theft, fire, and more. It includes third-party liabilities and can offer benefits like roadside assistance, towing service, etc. Though more expensive, it provides extensive coverage.',
  },
];

const Swapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const observerRef = useRef(null);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? policies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === policies.length - 1 ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div
      ref={observerRef}
      className='bg-[#FFF2EB] h-auto lg:h-[585px] w-full py-10 lg:py-0'
     
    >
      <div className='container mx-auto flex flex-col items-center justify-center px-4'>
        <h1 className='text-xl sm:text-2xl lg:text-4xl font-medium text-center mb-6'  style={{paddingBlock:"50px"}}>
          What are the different types of car insurance policies?
        </h1>

        <div className='flex items-center justify-center gap-4 w-full'>
          <button onClick={handlePrev} className='hidden lg:block'>
            <Image src={arrow1} alt='left arrow' className='cursor-pointer' />
          </button>

          <div
            {...handlers}
            className='relative flex bg-white w-full md:w-[90%] lg:w-[85%] justify-center items-center shadow-lg rounded-lg p-4 md:p-6 overflow-hidden swapper-mq1'
          >
            <AnimatePresence mode='wait' initial={false}>
              <motion.div
                key={currentIndex}
                className='flex w-full flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 h-auto lg:h-[365px]'
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className='w-full md:w-[25%] flex justify-center items-start'>
                  <Image
                    src={policy}
                    alt='insurance policy'
                    height={200}
                    width={150}
                    className='object-contain swapper-mq2'
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <div className='w-full md:w-[75%] swapper-mq'> 
                  <h2 className=' font-medium ' style={{paddingBottom:"10px", fontSize : "20px"}}>
                    {policies[currentIndex].title}
                  </h2>
                  <p className=' text-[#282828]' style={{paddingRight : "50px", paddingBottom:"15px", fontSize : "16px", lineHeight : "24px"}}>
                    {policies[currentIndex].description1}
                  </p>
                  <p className='text-[#282828]' style={{paddingRight : "50px" , fontSize : "16px", lineHeight : "24px"}}>
                    {policies[currentIndex].description2}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={handleNext} className='hidden lg:block'>
            <Image src={arrow2} alt='right arrow' className='cursor-pointer' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swapper;
