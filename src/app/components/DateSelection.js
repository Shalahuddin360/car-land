"use client"
// headless 
import { Menu } from '@headlessui/react';
// icons
import { FaMapMarkerAlt } from "react-icons/fa";

export default function DateSelection() {
  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
     <div className='relative flex-1'>
      {/* btn  */}
      <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
        
            <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'><FaMapMarkerAlt className='text-accent'/> 
              <div className='text-[15px] uppercase font-bold'>
              Select Date
              </div>
            </div>

      </Menu.Button>
      {/* item  */}
      <Menu.Items className='dropdown-menu shadow-lg absolute    -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
         menu items
        </Menu.Items>
     </div>
    </Menu>
  )
}
