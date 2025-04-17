import React from 'react';
import Call from "../../assets/Group.svg";
import Fill from '../../assets/Fill1.svg';
import Menu1 from '../menu/Menu1';
import Image from 'next/image';


const NavUpperLine = () => {
  return (
    <div className='bg-white'>
      <div className=' flex justify-between items-center h-12 w-full NavUpperLine text-sm font-light max-w-[1440px]' style={{marginInline:"auto"}}>
      <div className='flex NavUpperLine-right'>
        <Image src={Call} alt="call" style={{ marginLeft: '10px'}} width={20} height={20}/>
        <span style={{marginInline : "10px"}}> 1800 2666 </span>
        <span> | </span>
        <Image src={Fill} alt="call" style={{ marginLeft: '10px'}} />
        <span style={{marginInline : "10px"}}> Call Back </span>
        <span> | </span>
        <span style={{marginLeft : "10px"}}>🟢</span>
        <span style={{marginInline : "10px"}}> Live Chat </span>
      </div>


      <div className='flex gap-2 NavUpperLine-left' style={{marginInline: "20px"}}>
      <Menu1 option={"Renewals"}/>
      <Menu1 option={"Support"}/>
      <Menu1 option={"Info Centre"}/>
      <Menu1 option={"Investor Relations"}/>
      </div>
    </div>
    </div>
  );
};

export default NavUpperLine;
