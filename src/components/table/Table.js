import React from 'react'

const Table = () => {
  return (
    <div className="w-full container flex justify-center px-4" style={{marginBlock : "1.5rem"}}>
      <div className="w-[87%]">
        <div className="flex justify-center items-center p-4">
          <div className="flex flex-col space-y-1 w-full">
            <div className="w-full rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px]" >
                  <thead >
                    <tr className="bg-[#DDDCCB] text-left">
                      <th className="px-4 py-4 font-semibold border-r border-white" style={{ paddingInline: "10px", paddingBlock: "20px" }}>
                        Product
                      </th>
                      <th className="px-4 py-4 font-semibold border-r border-white" style={{ paddingInline: "10px", paddingBlock: "20px" }}>
                        Product Code
                      </th>
                      <th className="px-4 py-4 font-semibold" style={{ paddingInline: "10px", paddingBlock: "20px" }}>
                        UIN Code
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-start text-gray-800">
                    <tr className="bg-white">
                      <td className="px-4 py-4 border-r border-white" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        Private car package policy
                      </td>
                      <td className="px-4 py-4" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        3001
                      </td>
                      <td className="px-4 py-4" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        IRDAN115RP0017
                      </td>
                    </tr>
                    <tr className="bg-[#F5F6F6]">
                      <td className="px-4 py-4 border-r border-white" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        Stand-alone own damage private car package policy
                      </td>
                      <td className="px-4 py-4" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        3001/O
                      </td>
                      <td className="px-4 py-4" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        IRDAN115RP0001
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 border-r border-white" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        Private car liability policy
                      </td>
                      <td className="px-4 py-4" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        3001/A
                      </td>
                      <td className="px-4 py-4" style={{ paddingInline: "10px", paddingBlock: "10px" }}>
                        IRDAN115RP0012
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
