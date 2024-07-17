
import React from 'react';

import Logo from './logoo.png'


export default function Navbar() {
  return (
    <>
      <div
        variant="gradient"
        color="blue-gray"
        className="mx-auto max-w-screen-xll from-blue-gray-900 to-blue-gray-800 px-4 py-3 bg-teal-400"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <div
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            <img src={Logo} alt='logo' className='h-12 w-13'>
            </img>
        
          </div>
          <div className="ml-auto flex gap-1 md:mr-4">
            <div variant="text" color="white">
              <div className="h-4 w-4" />
            </div>
            <div variant="text" color="white">
              <div className="h-4 w-4" />
            </div>
          </div>
          <div className="relative flex w-full gap-2 md:w-max">
            <input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20 pl-4 py-2 bg-slate-600"
            />
            <button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded text-black bg-white pr-13 pl-2 py-1"
            >
              Search
            </button>
          </div>
          <div className="ml-auto flex gap-1 md:mr-4 px-5 py-2">
            <button variant="text" color="white" className='bg-slate-600 px-3 py-1' >
              login
            </button>
            <button variant="text" color="white" className="bg-rose-600 px-3 py-1">sign outt
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
}