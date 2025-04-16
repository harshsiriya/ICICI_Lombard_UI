import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Menu2 = ({ option }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-2 text-sm  text-white border-none ring-inset">
          {option}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-4 text-white "
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-[50%] z-10 mt-2 w-56 origin-top-left rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in overflow-hidden"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              style={{ padding: "10px" }}
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              style={{ padding: "10px" }}
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              style={{ padding: "10px" }}
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                style={{ padding: "10px" }}
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Menu2;
