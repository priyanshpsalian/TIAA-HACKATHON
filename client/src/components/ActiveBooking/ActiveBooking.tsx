import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import Avatar from 'shared/Avatar/Avatar';


// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       setData_car(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });

const ActiveBooking = () => {
  return (
    <div 
    className=" container mx-auto flex flex-col bg-slate-400 text-slate-50 rounded "
     >
        
        
        <div className='text-3xl text-base font-semibold text-gray-900 dark:text-white mx-auto'> Active Bookings</div>
        <div className='flex flex-col items-center'>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span>
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span>
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span>
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span>
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 flex-row justify-between">
                    <div className="flex-shrink-0 flex-col flex justify-between	">
                    <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Kevin Francis
            <br></br>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              
              Mira Road - Santacruz
              </span>
          </span>
                    </div>
                    <div className="inline-flex items-end text-base font-semibold text-gray-900 dark:text-white mx-auto">
                        Rs 350
                    </div>
                </div>
                
                <div className="flex items-center space-x-4 flex-row justify-between">
                <div className="flex-shrink-0 flex-col flex justify-between	"> 
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white">Days Left -</span>
                </div>
                <span className="ml-2.5 text-base font-semibold text-gray-900 dark:text-white"> 13</span>
                </div>
            </li>
            
        </ul>
   </div>
   </div>

        </div>
        
        {/* <div className='container mx-auto flex flex-col bg-slate-400 text-slate-50 rounded items-center py-10'>
            Auction
        </div> */}
        
        </div>


  )
}

export default ActiveBooking