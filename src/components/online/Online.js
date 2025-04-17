import React from "react";

const Online = () => {
  return (
    <div>
      <div className="w-full  bg-[#00305B] h-auto lg:h-[920px] flex flex-col items-center justify-center text-[#FFFFFF]">
        <div>
          <h1
            className="text-4xl font-bold text-center"
            style={{ paddingBottom: "4rem", paddingTop : "3rem" }}
          >
            How to choose the right car insurance policy online?
          </h1>
        </div>

        <div className="w-[97%] flex justify-center" style={{paddingInline: "2rem"}}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1496px] w-full" >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="flex flex-col lg:flex-row gap-3 items-center lg:items-start  justify-center border-2 h-[350px] border-[#065E9E] rounded-lg p-4 online-card"
                
              >
                <div className="text-6xl ml-1 text-orange-500" style={{paddingLeft : "1rem", paddingTop : "1rem"}}>{num}</div>
                <div className="text-center lg:text-start">
                  <h3 className="text-xl font-semibold" style={{paddingTop : "1rem"}}>How you drive:</h3>
                  <p className="text-sm" style={{paddingInline: "0.3rem"}}>
                  Car insurance online costs can differ based on traffic and crime in your area.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-[80%] flex flex-col gap-4 mt-10"
          style={{ paddingBlock: "4rem" }}
        >
          <p className="text-sm container">
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
