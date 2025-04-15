'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
import star1 from '../../assets/star1.svg';
import star2 from '../../assets/star2.svg';
import quote from '../../assets/quote.svg';

const reviews = [
  {
    name: 'Kumar Ambuj',
    ratingImg: star1,
    description:
      'The interaction was good. The customer service associate gave me answers to all my queries...',
  },
  {
    name: 'Sanjay Achliya',
    ratingImg: star2,
    description:
      "Very good experience. The executive gave me all the information clearly and didnt mind repeating...",
  },
  {
    name: 'Priya Sharma',
    ratingImg: star1,
    description:
      'Quick and seamless experience. The team guided me perfectly...',
  },
  {
    name: 'Raj Verma',
    ratingImg: star2,
    description:
      'Very professional service. I am impressed by the way the process was handled end-to-end...',
  },
];

const Rating = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);

  useEffect(() => {
    const updateReviewsPerPage = () => {
      if (window.innerWidth < 768) {
        setReviewsPerPage(1);
      } else {
        setReviewsPerPage(2);
      }
    };

    updateReviewsPerPage();
    window.addEventListener('resize', updateReviewsPerPage);
    return () => window.removeEventListener('resize', updateReviewsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(reviews.length - reviewsPerPage, 0) : prev - reviewsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + reviewsPerPage >= reviews.length ? 0 : prev + reviewsPerPage
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div className="px-4 md:px-12 py-12 text-center included">
      <h2 className="text-3xl md:text-4xl font-semibold" style={{paddingBlock : "1rem"}}>Ratings and Reviews</h2>


      <div className="flex justify-center items-center" style={{ paddingBottom: '1rem' }}>
        <div className="flex items-center space-x-4 pr-6">
          <h4 className="text-2xl border-r-1 border-r-slate-400" style={{paddingRight: "0.5rem"}}>4.6 ⭐</h4>
          <div className="text-left" style={{ paddingLeft: '0.5rem' }}>
            <p className="text-sm text-black">
              Our customers have rated us<br />
              <span className='text-slate-400'>Based on 456 reviews</span>
            </p>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center gap-6 " style={{paddingInline: '1.5rem', paddingBottom: '1rem'}}>
     
        <button
          onClick={handlePrev}
          className="hidden md:block bg-white border text-slate-400 shadow hover:bg-orange-500 hover:text-white transition"
          style={{ padding: '15px', borderRadius: '50%' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div
          {...swipeHandlers}
          className="bg-white p-6 max-w-3xl w-full touch-pan-x transition-all duration-500 ease-in-out"
        >
          <div
            className={`grid gap-8 ${
              reviewsPerPage === 2 ? 'md:grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {reviews.slice(currentIndex, currentIndex + reviewsPerPage).map((review, idx) => (
              <div key={idx} className="text-left space-y-4">
                <div className="flex items-center justify-between space-x-4">
                  <p className="font-bold text-lg border-r border-0.5-slate-50" style={{paddingRight : "10px"}}>{review.name}</p>
                  <Image src={review.ratingImg} alt="stars" width={80} height={16} />
                  <Image src={quote} alt="quote" width={20} height={20} />
                </div>
                <p className="text-gray-700 text-sm">{review.description}</p>
              </div>
            ))}
          </div>
        </div>

  
        <button
          onClick={handleNext}
          className="hidden md:block bg-white border text-slate-400 shadow hover:bg-orange-500 hover:text-white transition"
          style={{ padding: '15px', borderRadius: '50%' }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="flex flex-col items-center pt-6">
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i * reviewsPerPage === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          className="mt-6 px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition"
          style={{ padding: '15px', marginTop: '1rem' }}
        >
          Read all reviews
        </button>
      </div>
    </div>
  );
};

export default Rating;
