import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import Avatar from 'shared/Avatar/Avatar';

const AuctionCard = () => {
    function submitBid (event : React.ChangeEvent<any>){
    

    }

  return (
    <div className='container border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden  rounded flex flex-col py-3'>
        <div className='text-4xl items-center mx-auto '>Auction </div>
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <div><span>Your Car</span>
                
                
                </div> 
                <div>Car no</div>
                <div>Start - end location</div>
                </div>
            <div className='hover:shadow-xl transition-shadow bg-white dark:bg-neutral-900 will-change-transform rounded'>
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            {/* <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span> */}
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                {/* <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div> */}
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            {/* <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span> */}
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                {/* <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div> */}
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            {/* <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span> */}
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                {/* <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div> */}
            </li>
            </ul>
            </div>
            {/* <div>Name2</div>
            <div>Name3</div> */}
        </div>
        <div className='text-2xl items-center mx-auto py-5 '>Your Bid </div>
        <div className='flex flex-row justify-between hover:shadow-xl transition-shadow bg-white dark:bg-neutral-900 will-change-transform rounded'>
            
            <div className=' container justify-between flex flex-row'>
                <div><span>Name</span></div>      
                <div><span>
                    <input type='number' placeholder='Your bid price'></input>
                    </span></div>          
                </div>
            <div className=''></div>
        </div>
        <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto max-w-xs">Submit</button>
    </div>
  )
}

export default AuctionCard