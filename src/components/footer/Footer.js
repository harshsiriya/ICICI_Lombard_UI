import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import logo_dark from "../../assets/logo_dark.svg";


const Footer = () => {
  return (
    <div>
      <div className=" bg-white border-t-1 border-slate-300 w-full">
      <div className="flex gap-3 justify-between items-center container w-[93%]" style={{padding: "20px"}}>
        <h3 className="text-sm"><a className="cursor-pointer" href="#">Home</a> <FontAwesomeIcon icon={faAngleRight} /> <a className="cursor-pointer" href="#">Motor Insurance</a> <FontAwesomeIcon icon={faAngleRight} /> <a className="cursor-pointer" href="#"><span className="text-slate-400">Car Insurance</span></a></h3>
        <p className="text-sm">
            <a className="text-orange-600 underline hover:text-orange-700">Disclaimers</a>
        </p>
      </div>
      </div>

      <div className="bg-[#ECE9E9] w-full" style={{paddingBlock: "2rem"}}>
      <div className=" flex flex-col md:flex-row justify-start container w-[93%] gap-6">
        <div className="flex-2 flex flex-col gap-2">
          <Image src={logo_dark} alt="logo" height={80} width={150} />
          <h3 className="text-md font-semibold">
            ICICI Lombard General Insurance Company Limited,{" "}
          </h3>
          <p className="text-sm">
            ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak
            Temple, Prabhadevi, Mumbai - 400025.
          </p>
          <p>Email: customersupport@icicilombard.com Fax no - 022 61961323</p>
        </div>
        <div className="flex-3 flex flex-col gap-2 items-start justify-start">
          <p className="text-sm">
            ICICI Lombard General Insurance Ltd. is one of the largest private
            sector general insurance company in India offering insurance
            coverage for motor, health, travel, home, student travel and more.
            Policies can be purchased and renewed online as well. Immediate
            issuance of policy copy online.
          </p>

          <p className="text-sm">
            ICICI trade logo displayed above belongs to ICICI Bank and is used
            by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to
            ICICI Lombard GIC Ltd assigned by Northbridge Financial Corporation
            solely for the territory of India. Insurance is the subject matter
            of the solicitation. The advertisement contains only an indication
            of cover offered. For more details on risk factors, terms,
            conditions and exclusions, please read the sales brochure carefully
            before concluding a sale. CIN: L67200MH2000PLC129408
          </p>

          <select className="border-1 border-x-transparent border-t-transparent border-b-slate-500" style={{padding: "10px"}}>
            <option value="" className="text-sm bg-transparent">Group companies</option>
            <option className="text-sm bg-transparent">Internal</option>
            <option className="text-sm bg-transparent">External</option>
          </select>


        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
