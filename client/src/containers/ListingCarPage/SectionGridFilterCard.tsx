import React, { FC } from "react";
import { DEMO_CAR_LISTINGS } from "data/listings";
import { CarDataType } from "data/types";
import Pagination from "shared/Pagination/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "components/Heading/Heading2";
import CarCard from "components/CarCard/CarCard";
import { useState,useEffect } from "react";
import axios from 'axios';

const SectionGridFilterCard = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    getBlogs();
  },[])

  function getBlogs(){
    axios.get('http://localhost:5000/blog')
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }


  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((car) => (
              <CarCard  data={car} />
            ))}
          </div>
  );
}

export default SectionGridFilterCard;





// export interface SectionGridFilterCardProps {
//   className?: string;
//   data?: CarDataType[];
// }

// const DEMO_DATA: CarDataType[] = DEMO_CAR_LISTINGS.filter((_, i) => i < 12);

// const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
//   className = "",
//   data = DEMO_DATA,
// }) => {
//   return (
//     <div
//       className={`nc-SectionGridFilterCard ${className}`}
//       data-nc-id="SectionGridFilterCard"
//     >
//       {/* <Heading2
//         heading="Cars in Tokyo"
//         subHeading={
//           <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
//             233 cars
//             <span className="mx-2">·</span>
//             Aug 12 - 18
//           </span>
//         }
//       /> */}

//       {/* <div className="mb-8 lg:mb-11">
//         <TabFilters />
//       </div> */}
//       <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {data.map((car) => (
//           <CarCard key={car.id} data={car} />
//         ))}
//       </div>
//       <div className="flex mt-16 justify-center items-center">
//         <Pagination />
//       </div>
//     </div>
//   );
// };