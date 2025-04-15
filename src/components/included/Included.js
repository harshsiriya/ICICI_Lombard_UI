'use client'
import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import correct from '../../assets/correct.svg';
import Image from 'next/image';

const Included = () => {
  const [activeTab, setActiveTab] = useState('inclusions');

  const inclusions = [
    'Coverage for natural disasters like earthquakes, floods, fires and storms',
    'Cashless repairs in 5100+ network garages',
    'Coverage for theft, accidents and terrorist activities',
    'No claim bonus up to 50%',
    '₹15 lakh Personal Accident Cover',
    '9 add ons to choose from',
    'Third-party legal liabilities cover',
    'Instant claim settlement via InstaSpect',
  ];

  const exclusions = [
    'Damage caused while driving without a valid license',
    'Normal wear and tear of the vehicle',
    'Driving under the influence of alcohol or drugs',
    'Mechanical or electrical breakdowns',
    'Using the car for illegal purposes',
    'Damage outside the geographical area',
    'Consequential losses',
    'Damage due to war or nuclear risks',
  ];

  const policyLinks = [
    {
      name: 'Private car package policy wordings',
      url: '#',
    },
    {
      name: 'Stand-alone own damage private',
      url: '#',
    },
    {
      name: 'Private car liability policy wording',
      url: '#',
    },
  ];

  return (
    <div className="p-6 md:p-10 w-[93%] container">
      <h2 className="text-2xl md:text-3xl  text-center mb-6" style={{ paddingTop : "2.5rem", paddingBottom : "1.5rem" }}>
        Whats included and whats not?
      </h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6 gap-10">
        <button
          onClick={() => setActiveTab('inclusions')}
          className={`px-4 py-2 font-medium cursor-pointer ${
            activeTab === 'inclusions'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500'
          }`}
        >
          Inclusions
        </button>
        <button
          onClick={() => setActiveTab('exclusions')}
          className={`px-4 py-2 font-medium cursor-pointer ${
            activeTab === 'exclusions'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500'
          }`}
        >
          Exclusions
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'inclusions' && (
        <>
          <h3 className="text-lg font-semibold mb-4" style={{ paddingBlock: '1rem'}}>
            Whats included:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-8">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                {/* <CheckCircle className="text-green-500 mt-1" size={17} /> */}
                <Image src={correct} alt='' style={{paddingTop:"4px"}}/>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <br/>
        </>
      )}

      {activeTab === 'exclusions' && (
        <>
          <h3 className="text-lg font-semibold mb-4" style={{ paddingBlock: '1rem'}}>
            Whats not included:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-8">
            {exclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <XCircle className="text-red-500 mt-1" size={20} style={{paddingTop:"4px"}}/>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <br/>
        </>
      )}

      {/* Policy Links */}
      <div className="flex flex-col lg:flex-row border-t pt-4 gap-3 text-center lg:text-start" style={{ paddingBlock: '20px' }}>
        <p className="text-sm text-gray-600 mb-2 font-medium">Policy documents:</p>
        <div className="flex flex-wrap gap-6 text-sm">
          {policyLinks.map((link, i) => (
            <p key={i} className="w-full sm:w-auto">
              <a  href={link.url} className="text-orange-600 underline hover:text-orange-700 text-center">
              {link.name}
            </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Included;
