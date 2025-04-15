'use client';
import React, { useState, useEffect, useRef } from 'react';
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
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
    description2:
      'It covers damage caused by natural disasters, accidents, theft, fire, and more. It includes third-party liabilities and can offer benefits like roadside assistance, towing service, etc. Though more expensive, it provides extensive coverage.',
  },
  {
    title: 'Third-party car insurance policy',
    description1:
      'Third-party insurance is mandatory by law in India. It covers damages or injuries caused by your car to another person, their vehicle, or property.',
    description2:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
  },
  {
    title: 'Standalone own damage policy',
    description1:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
    description2:
      'This is useful if you already have third-party coverage and want extra protection for your own car. It’s flexible and can be customized with add-ons.',
  },
  {
    title: 'Third-party car insurance policy',
    description1:
      'Third-party insurance is mandatory by law in India. It covers damages or injuries caused by your car to another person, their vehicle, or property.',
    description2:
      'Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.',
  },
];

const Swapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [inView, setInView] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const observerRef = useRef(null);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? policies.length - 1 : prev - 1));
    setLastInteractionTime(Date.now());
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === policies.length - 1 ? 0 : prev + 1));
    setLastInteractionTime(Date.now());
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
  });


  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastInteraction = now - lastInteractionTime;

      if (inView && timeSinceLastInteraction >= 3000) {
        handleNext();
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [inView, lastInteractionTime]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div ref={observerRef} className='bg-[#FFF2EB] py-10 px-4'>
      <div className='swapper-content container'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-center' style={{paddingBottom: '20px'}}>
          What are the different types of car insurance policies?
        </h1>

        <div className='flex items-center justify-center gap-6'>
 
          <button onClick={handlePrev} className='hidden lg:block'>
            <Image src={arrow1} alt='left arrow' className='cursor-pointer' />
          </button>

    
          <div
            {...handlers}
            className='relative flex bg-white w-[93%] md:w-[93%] lg:w-[93%] justify-center items-center shadow-lg rounded-lg p-6 overflow-hidden'
          >
            <AnimatePresence mode='wait' initial={false}>
              <motion.div
                key={currentIndex}
                className='flex w-full flex-col md:flex-row items-center gap-6 lg:gap-10'
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className='w-1/4 flex justify-center'>
                  <Image
                    src={policy}
                    alt='insurance policy image'
                    height={200}
                    width={150}
                    className='swapper-img'
                    style={{
                      height: 'auto',
                      width: 'auto',
                      maxWidth: '100%',
                      paddingBlock: '1.5rem',
                    }}
                  />
                </div>
                <div className='w-3/4'>
                  <h2 className='text-xl font-semibold mb-2'>
                    {policies[currentIndex].title}
                  </h2>
                  <br />
                  <p className='text-justify w-full lg:w-[90%] text-sm'>
                    {policies[currentIndex].description1}
                  </p>
                  <p className='text-justify w-full lg:w-[90%] text-sm' style={{paddingBottom: "20px"}}>
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
