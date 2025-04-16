"use client";
import React, { useState } from 'react';
import logo from "../../assets/Group53.svg";
import { ChevronRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Menu2 from '../menu/Menu2';
import Image from 'next/image';

const NavLowerLine = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-full linearGrad">
      {/* Main Nav Bar */}
      <div className="flex justify-between items-center h-15 px-4 lg:px-12 w-full max-w-[1440px]" style={{marginInline:"auto"}}>
        {/* Logo + Desktop Menu */}
        <div className="flex gap-4 lg:gap-12 items-center">
          <Image src={logo} alt="Logo" width={150} height={75} className="ml-2" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4">
            <Menu2 option="Car Insurance" />
            <Menu2 option="Two Wheeler Insurance" />
            <Menu2 option="Health Insurance" />
            <Menu2 option="Travel Insurance" />
            <Menu2 option="Other Insurance" />
            <Menu2 option="Claims" />
          </div>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:flex items-center" style={{marginRight : "20px"}}>
          <button className="text-white text-sm flex items-center gap-1 mr-4">
            Login
            <ChevronRightIcon className="size-5 text-white" />
          </button>
        </div>

        {/* Hamburger on small screens */}
        <div className="lg:hidden cursor-pointer" style={{paddingRight: "20px"}} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col bg-transparent text-white px-4 py-4 gap-4 lg:hidden w-full">
          <Menu2 option="Car Insurance" />
          <Menu2 option="Two Wheeler Insurance" />
          <Menu2 option="Health Insurance" />
          <Menu2 option="Travel Insurance" />
          <Menu2 option="Other Insurance" />
          <Menu2 option="Claims" />
          {/* Mobile Login Button */}
          <button className="white flex items-center justify-center gap-1 text-xs  hover:text-orange-600">
            Login
            <ChevronRightIcon className="size-5 text-white text-xs" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavLowerLine;
