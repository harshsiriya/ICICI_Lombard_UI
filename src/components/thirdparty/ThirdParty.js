import React from "react";

const ThirdParty = () => {
  return (
    <div>
      <div className="flex flex-col text-center justify-center gap-4 h-auto lg:h-[880px] w-[80%] third-party">
        <h1 className="text-xl md:text-4xl sm:text-2xl font-medium third-paryty-text" style={{paddingTop:"2rem"}}>
          Comprehensive car insurance vs Third party car insurance
        </h1>

        <div className="w-[60%] text-justify-start" style={{ marginLeft: "20%" }}>
          <div className="flex justify-center items-center p-4">
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-1">
                <div className="w-full rounded-xl overflow-x-auto shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#E1E0D1] text-left">
                        <th className="px-4 py-4 text-gray-700 border-r text-lg border-white" style={{paddingInline:"10px", paddingBlock:"20px"}}>
                          Comprehensive Car Insurance
                        </th>
                        <th className="px-4 py-4 text-gray-700 text-lg" style={{paddingInline:"10px", paddingBlock:"20px"}}>
                          Third-Party Car Insurance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-start text-gray-900" >
                      <tr className="bg-[#F5F6F6]">
                        <td className="px-4 py-4 border-r border-white" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Covers damages to your own car and third-party
                          liabilities
                        </td>
                        <td className="px-4 py-4" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Covers third-party liabilities only
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-4 border-r border-white" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Provides complete protection for your car
                        </td>
                        <td className="px-4 py-4" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Only covers legal liabilities
                        </td>
                      </tr>
                      <tr className="bg-[#F5F6F6]">
                        <td className="px-4 py-4 border-r border-white" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          May include add-ons like zero depreciation, roadside
                          assistance, etc.
                        </td>
                        <td className="px-4 py-4" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Only includes mandatory third-party coverage as per
                          law
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-4 border-r border-white" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Higher premium as compared to third-party insurance
                        </td>
                        <td className="px-4 py-4" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Lower premium as compared to comprehensive insurance
                        </td>
                      </tr>
                      <tr className="bg-[#F5F6F6]">
                        <td className="px-4 py-4 border-r border-white" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Can be purchased online or offline
                        </td>
                        <td className="px-4 py-4" style={{paddingInline:"10px", paddingBlock:"10px"}}>
                          Mandatorily needs to be purchased before registering a
                          car
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center third-paryty-text container">
          <div className="w-8/10 md:w-6/10 text-justify text-gray-700">
            <p>
              Comprehensive car insurance is a more comprehensive policy that
              covers not only third-party liabilities but also damage to your
              own vehicle. On the other hand, third-party car insurance only
              covers legal liabilities in case of an accident. Comprehensive car
              insurance also offers add-ons like zero depreciation and roadside
              assistance, whereas third-party insurance only includes mandatory
              coverage as per law.
            </p>
            <br />
            <p>
              Comprehensive car insurance has a higher premium as compared to
              third-party insurance, but it provides complete protection for
              your car. The choice between the two depends on your budget and
              the level of coverage you desire. You can easily buy car insurance
              online or offline, but third-party insurance is mandatory and
              needs to be purchased before registering a car.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdParty;
