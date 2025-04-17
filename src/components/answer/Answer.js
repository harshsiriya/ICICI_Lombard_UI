'use client'
import React, { useState } from 'react'

const tabs = ['General', 'Cover', 'Premium', 'Claims', 'Policy']

const faqData = {
  General: [
    {
      question: 'Why do I need to insure my car?',
      answer:
        'In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you dont have to pay out of pocket for repairs or replacement if you have a valid insurance policy.',
    },
    {
      question: 'What are the benefits of buying car insurance online?',
      answer:
        'When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.',
    },
    {
      question: 'What are the various types of vehicles that I can insure online?',
      answer: 'You can insure a private car and two-wheeler online.',
    },
    {
      question: 'How quickly can I buy/renew car insurance online?',
      answer:
        'It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.',
    },
    {
      question: 'Are offline and online car insurance policies the same?',
      answer:
        'Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.',
    },
    {
      question: 'Where can I check my car insurance policy details?',
      answer:
        'You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:',
      list: [
        'Policy number',
        'Policy start and end date',
        'Policy type (Comprehensive/OD only/TP only)',
        'Engine & chassis number',
      ],
    },
    {
        question: 'What is an endorsement in car insurance?',
        answer:
          'An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.',
      },
      {
        question: 'Do I need a valid PUC to drive in India?',
        answer:
          'Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.',
      },
      {
        question: 'Do I need to have a valid insurance policy to get my new vehicle registered?',
        answer:
          'Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.',
      },
      
      
  ],
  Cover: [
    {
      question: 'Why do I need to insure my car?',
      answer:
        'In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you dont have to pay out of pocket for repairs or replacement if you have a valid insurance policy.',
    },
    {
      question: 'What are the benefits of buying car insurance online?',
      answer:
        'When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.',
    },
    {
      question: 'What are the various types of vehicles that I can insure online?',
      answer: 'You can insure a private car and two-wheeler online.',
    },
    {
      question: 'How quickly can I buy/renew car insurance online?',
      answer:
        'It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.',
    },
    {
      question: 'Are offline and online car insurance policies the same?',
      answer:
        'Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.',
    },
    {
      question: 'Where can I check my car insurance policy details?',
      answer:
        'You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:',
      list: [
        'Policy number',
        'Policy start and end date',
        'Policy type (Comprehensive/OD only/TP only)',
        'Engine & chassis number',
      ],
    },
    {
        question: 'What is an endorsement in car insurance?',
        answer:
          'An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.',
      },
      {
        question: 'Do I need a valid PUC to drive in India?',
        answer:
          'Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.',
      },
      {
        question: 'Do I need to have a valid insurance policy to get my new vehicle registered?',
        answer:
          'Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.',
      },
  ],
  Premium: [
    {
      question: 'Why do I need to insure my car?',
      answer:
        'In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you dont have to pay out of pocket for repairs or replacement if you have a valid insurance policy.',
    },
    {
      question: 'What are the benefits of buying car insurance online?',
      answer:
        'When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.',
    },
    {
      question: 'What are the various types of vehicles that I can insure online?',
      answer: 'You can insure a private car and two-wheeler online.',
    },
    {
      question: 'How quickly can I buy/renew car insurance online?',
      answer:
        'It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.',
    },
    {
      question: 'Are offline and online car insurance policies the same?',
      answer:
        'Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.',
    },
    {
      question: 'Where can I check my car insurance policy details?',
      answer:
        'You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:',
      list: [
        'Policy number',
        'Policy start and end date',
        'Policy type (Comprehensive/OD only/TP only)',
        'Engine & chassis number',
      ],
    },
    {
        question: 'What is an endorsement in car insurance?',
        answer:
          'An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.',
      },
      {
        question: 'Do I need a valid PUC to drive in India?',
        answer:
          'Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.',
      },
      {
        question: 'Do I need to have a valid insurance policy to get my new vehicle registered?',
        answer:
          'Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.',
      },
  ],
  Claims: [
    {
      question: 'Why do I need to insure my car?',
      answer:
        'In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you dont have to pay out of pocket for repairs or replacement if you have a valid insurance policy.',
    },
    {
      question: 'What are the benefits of buying car insurance online?',
      answer:
        'When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.',
    },
    {
      question: 'What are the various types of vehicles that I can insure online?',
      answer: 'You can insure a private car and two-wheeler online.',
    },
    {
      question: 'How quickly can I buy/renew car insurance online?',
      answer:
        'It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.',
    },
    {
      question: 'Are offline and online car insurance policies the same?',
      answer:
        'Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.',
    },
    {
      question: 'Where can I check my car insurance policy details?',
      answer:
        'You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:',
      list: [
        'Policy number',
        'Policy start and end date',
        'Policy type (Comprehensive/OD only/TP only)',
        'Engine & chassis number',
      ],
    },
    {
        question: 'What is an endorsement in car insurance?',
        answer:
          'An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.',
      },
      {
        question: 'Do I need a valid PUC to drive in India?',
        answer:
          'Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.',
      },
      {
        question: 'Do I need to have a valid insurance policy to get my new vehicle registered?',
        answer:
          'Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.',
      },
  ],
  Policy: [
    {
      question: 'Why do I need to insure my car?',
      answer:
        'In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you dont have to pay out of pocket for repairs or replacement if you have a valid insurance policy.',
    },
    {
      question: 'What are the benefits of buying car insurance online?',
      answer:
        'When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.',
    },
    {
      question: 'What are the various types of vehicles that I can insure online?',
      answer: 'You can insure a private car and two-wheeler online.',
    },
    {
      question: 'How quickly can I buy/renew car insurance online?',
      answer:
        'It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.',
    },
    {
      question: 'Are offline and online car insurance policies the same?',
      answer:
        'Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.',
    },
    {
      question: 'Where can I check my car insurance policy details?',
      answer:
        'You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:',
      list: [
        'Policy number',
        'Policy start and end date',
        'Policy type (Comprehensive/OD only/TP only)',
        'Engine & chassis number',
      ],
    },
    {
        question: 'What is an endorsement in car insurance?',
        answer:
          'An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.',
      },
      {
        question: 'Do I need a valid PUC to drive in India?',
        answer:
          'Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.',
      },
      {
        question: 'Do I need to have a valid insurance policy to get my new vehicle registered?',
        answer:
          'Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.',
      },
  ],
}

const Answer = () => {
  const [activeTab, setActiveTab] = useState('General')

  return (
    <div className="p-6 md:p-10 w-full bg-[#F8F6F6] flex flex-col justify-center items-center h-auto xl:h-[1500px] answer-section" style={{paddingBottom : "1.5rem"}}>
      <div className='container w-full lg:w-[93%]'>
      <h2 className="text-xl md:text-3xl xl:text-4xl text-center mb-8" style={{paddingBottom:"3rem", paddingTop:"4rem"}}>
        Get answers to common questions about car insurance policy
      </h2>

      <div className='w-full flex flex-col items-center' >
         {/* Tabs */}
      <div className="flex justify-start border-b border-gray-300 mb-6 space-x-6 overflow-auto w-[85%] md:w-[60%]">
        {tabs.map((tab) => (
          <button 
            key={tab}
            style={{paddingInline:"20px"}}
            className={`text-sm md:text-base border-b-2 transition-colors duration-200 ${
              activeTab === tab
                ? 'text-orange-600 font-semibold border-orange-600'
                : 'text-gray-600 border-transparent hover:text-orange-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ Content */}
      <div className="space-y-8 text-justify w-full md:w-[60%]" style={{paddingInline: "25px", paddingBottom:"20px"}}>
        {faqData[activeTab].length === 0 ? (
          <p className="text-gray-600">Content coming soon...</p>
        ) : (
          faqData[activeTab].map((faq, index) => (
            <div key={index}>
              <h3 className="text-md md:text-lg font-bold text-[#282828] mb-1" style={{marginTop: "1.5rem"}}>
                {faq.question}
              </h3>
              <div ><p className="text-[#282828] general-text" style={{lineHeight : "28px"}}>{faq.answer}</p></div>
              {faq.list && (
                <ul className="mt-3 list-none space-y-1 pl-4">
                  {faq.list.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2 leading-7">
                      <span className="text-gray-500">→</span> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Answer
