import React, { FC } from "react";
import StartRating from "components/StartRating/StartRating";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import featuredImage from "images/cars/2.png";
import ListingCarDetailPage from "containers/ListingDetailPage/ListingCarDetailPage";

export interface CarCardProps {
  data:{
  _id: string;
  street: string;
  car_number: string;
  contact: string;
  city: string;
  postal_code: string;
  description: string;
  price: string;
  amenities: [];
  time: string;
  date: string;
  guests: string;
  pickup: string;
  drop: string;
  user: string;
  __v: number;
  close: "open" | "closed"; // assuming close can only be either "open" or "closed"
  guest_list: string[];
  }
}

const CarCard: React.FC<CarCardProps> =(props)=>{
    const {
    _id,
    street,
    car_number,
    contact,
    city,
    postal_code,
    description,
    price,
    amenities,
    time,
    date,
    guests,
    pickup,
    drop,
    user,
    __v,
    close,
    guest_list
  } = props.data;

  function handleClick(e: React.ChangeEvent<any>) {
    localStorage.setItem('car_id',_id);
  }

    const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 ">
          <NcImage
            containerClassName="flex items-center justify-center"
            className="w-full"
            src={featuredImage}
          />
        </div>
        {/* <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" /> */}
        {<SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="p-5  space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
           
            <h2
              className="capitalize
                  text-xl font-semibold">
              <span className="line-clamp-1">{description}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
            <span className="">{guests} seats</span>
            <span>{pickup}</span>
            <span className=""> </span>
          </div>
        </div>
        <div className="w-14  border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">
            {price}
            {` `}
    
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /guest
              </span>

          </span>
          {/* <StartRating reviewCount={reviewCount} point={reviewStart} /> */}
        </div>
      </div>
    );
  };

  return (
    <div
      className="nc-CarCard group relative border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow bg-white dark:bg-neutral-900 will-change-transform"
    
    >
      {/* <Link to={href} className="flex flex-col">
        {renderSliderGallery()}
        {renderContent()}
      </Link> */}
   <Link to='/listing-car-detail' onClick={handleClick}>
     {renderSliderGallery()}
        {renderContent()}
        </Link>
        
    </div>
  );

}

export default CarCard;


// export interface CarCardProps {
//   className?: string;
//   data?: CarDataType;
//   size?: "default" | "small";
// }

// const DEMO_DATA: CarDataType = DEMO_CAR_LISTINGS[0];

// const CarCard: FC<CarCardProps> = (props) => {
//   const {
//     _id,
//     street,
//     car_number,
//     contact,
//     city,
//     postal_code,
//     description,
//     price,
//     amenities,
//     time,
//     date,
//     guests
//     pickup,
//     drop,
//     user,
//     __v,
//     close,
//     guest_list
//   } = props.data;

//   const renderSliderGallery = () => {
//     return (
//       <div className="relative w-full rounded-2xl overflow-hidden">
//         <div className="aspect-w-16 aspect-h-9 ">
//           <NcImage
//             containerClassName="flex items-center justify-center"
//             className="w-full"
//             src={featuredImage}
//           />
//         </div>
//         <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" />
//         {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
//       </div>
//     );
//   };

//   const renderContent = () => {
//     return (
//       <div className={size === "default" ? "p-5  space-y-4" : "p-3  space-y-2"}>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             {isAds && <Badge name="ADS" color="green" />}
//             <h2
//               className={`  capitalize ${
//                 size === "default"
//                   ? "text-xl font-semibold"
//                   : "text-base font-medium"
//               }`}
//             >
//               <span className="line-clamp-1">{title}</span>
//             </h2>
//           </div>
//           <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
//             <span className="">{seats} seats</span>
//             <span>-</span>
//             <span className="">{gearshift} </span>
//           </div>
//         </div>
//         <div className="w-14  border-b border-neutral-100 dark:border-neutral-800"></div>
//         <div className="flex justify-between items-center">
//           <span className="text-base font-semibold">
//             {price}
//             {` `}
//             {size === "default" && (
//               <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
//                 /day
//               </span>
//             )}
//           </span>
//           <StartRating reviewCount={reviewCount} point={reviewStart} />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div
//       className={`nc-CarCard group relative border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow bg-white dark:bg-neutral-900 will-change-transform ${className}`}
//       data-nc-id="CarCard"
//     >
//       <Link to={href} className="flex flex-col">
//         {renderSliderGallery()}
//         {renderContent()}
//       </Link>
//     </div>
//   );
// };