import React from "react";

const Online = () => {
  return (
    <div>
      <div className="w-full  bg-[#00305B] h-auto lg:h-[920px] flex flex-col items-center justify-center text-[#FFFFFF]">
        <div>
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
            style={{ paddingBottom: "4rem", paddingTop : "3rem" }}
          >
            How to choose the right car insurance policy online?
          </h1>
        </div>

        <div className="w-[97%] flex justify-center" style={{paddingInline: "2rem"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1496px] w-full" >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="flex gap-3 items-start  justify-center border-2 h-auto md:h-[350px] border-[#065E9E] rounded-lg p-4 online-card"
                
              >
                <div className="text-6xl ml-1 text-orange-500" style={{paddingLeft : "1rem", paddingTop : "1rem"}}>{num}</div>
                <div className="text-start">
                  <h3 className="text-xl " style={{paddingTop : "1rem"}}>How you drive:</h3>
                  <p className="general-text  " style={{paddingInline: "0.3rem"}}>
                  Look for discounts you might be eligible for, such as discounts for having multiple policies, being a safe driver, or driving less.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-[80%] flex flex-col gap-4 mt-10"
          style={{ paddingBottom: "4rem", paddingTop : "2rem" }}
        >
          <p className="general-text container">
            Before buying car insurance online, read the policy details and fine
            print, and ask questions to clarify anything you need help
            understanding. Regularly reviewing your car insurance policy can
            help ensure that it continues to meet your needs and that you are not
            overpaying for coverage you dont need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Online;
