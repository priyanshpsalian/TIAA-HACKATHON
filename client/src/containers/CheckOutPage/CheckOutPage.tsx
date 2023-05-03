import { Tab } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useState } from "react";
import visaPng from "images/vis.png";
import mastercardPng from "images/mastercard.svg";
import Input from "shared/Input/Input";
import Label from "components/Label/Label";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import StartRating from "components/StartRating/StartRating";
import NcModal from "shared/NcModal/NcModal";
import ModalSelectDate from "components/ModalSelectDate";
import moment from "moment";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import converSelectedDateToString from "utils/converSelectedDateToString";
import ModalSelectGuests from "components/ModalSelectGuests";
import { GuestsObject } from "components/HeroSearchForm2Mobile/GuestsInput";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Checkbox from "shared/Checkbox/Checkbox";
// import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import FormItem from "./FormItem";
import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import GoogleMapReact from "google-map-react";
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface CheckOutPageProps {
  className?: string;
}


const CheckOutPage: FC<CheckOutPageProps> = ({ className = "" }) => {


  const [formData, setFormData] = React.useState(
    {
        street: "",
        car_number: "",
        contact: "",
        city: "",
        postal_code:"",
        description: "",
        price: "",
        amenities: [],
        time: "",
        date:"",
        guests:"",
        pickup:"",
        drop:"",
    }
)

function handleChange(event: React.ChangeEvent<any>) {
  const {name, value, type, checked,files} = event.target
  setFormData(prevFormData => {
      return {
          ...prevFormData,
          [name]: type==="checkbox"?checked==true?[...formData.amenities,value]: formData.amenities.filter((item)=>item !==value)  :value
      }
  })
}


const handleSubmit = (e: React.ChangeEvent<any>) => {
  e.preventDefault();
  // axios.post('/api/form-submit-url', {formData,guests,rangeDates })
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
};






  return (
    <div className={`nc-CheckOutPage ${className}`} data-nc-id="CheckOutPage">
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">
         
          
          <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">Create Ride</h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>

          <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">

<div className="text-left flex-1 p-5 flex justify-between space-x-5 ">
<div className="flex flex-col">
<span className="text-sm text-neutral-400">Time</span>
                    
            <input type="time"
            className="mt-1.5 text-lg font-semibold"
                      placeholder=""
                      onChange={handleChange}
                      name="time"
                      value={formData.time} />
            </div>
            </div>

      <div className="text-left flex-1 p-5 flex justify-between space-x-5 ">
<div className="flex flex-col">
<span className="text-sm text-neutral-400">Date</span>
                    
            <input type="date"
            className="mt-1.5 text-lg font-semibold"
                      placeholder=""
                      onChange={handleChange}
                      name="date"
                      value={formData.date} />
            </div>
            </div>

            <div className="text-left flex-1 p-5 flex justify-between space-x-5 ">
<div className="flex flex-col">
<span className="text-sm text-neutral-400">Guests</span>
                    
            <input type="number"
              min="1" max="8"
            className="mt-1.5 text-lg font-semibold"
                      placeholder=""
                      onChange={handleChange}
                      name="guests"
                      value={formData.guests} />
            </div>
            </div>

          </div>
        </div>



        <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">

<div className="text-left flex-1 p-5 flex justify-between space-x-5 ">
<div className="flex flex-col">
<span className="text-sm text-neutral-400">Pick-up Location</span>
                    
            <input type="text"
            className="mt-1.5 text-lg font-semibold"
                      placeholder=""
                      onChange={handleChange}
                      name="pickup"
                      value={formData.pickup} />
            </div>
            </div>



            <div className="text-left flex-1 p-5 flex justify-between space-x-5 ">
<div className="flex flex-col">
<span className="text-sm text-neutral-400">Drop-down Location</span>
                    
            <input type="text"
              min="1" max="8"
            className="mt-1.5 text-lg font-semibold"
                      placeholder=""
                      onChange={handleChange}
                      name="drop"
                      value={formData.drop} />
            </div>
            </div>

          </div>
        

        

          <div className="space-y-8">
          
          {/* ITEM */}
          <FormItem label="Car number">
          <input type="text"
                      placeholder="MH : .. LD : ...."
                      onChange={handleChange}
                      name="car_number"
                      value={formData.car_number} />
          </FormItem>

          <FormItem label="Street (Personal Details)">
          <input type="text"
                      placeholder=".."
                      onChange={handleChange}
                      name="street"
                      value={formData.street} />
          </FormItem>



       


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            <FormItem label="City  (Personal Details)">
            <input type="text"
                      placeholder="Mumbai"
                      onChange={handleChange}
                      name="city"
                      value={formData.city} />
            </FormItem>

            <FormItem label="Postal code  (Personal Details)">
            <input type="text"
                      placeholder="401..."
                      onChange={handleChange}
                      name="postal_code"
                      value={formData.postal_code} />
            </FormItem>

            <FormItem label="Contact">
            
            <input type="tel"
                      placeholder=""
                      onChange={handleChange}
                      name="contact"
                      value={formData.contact} />
        
            </FormItem>
          
          </div>
          <div>
        
            <div className="mt-4">
              <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
                <div className="rounded-xl overflow-hidden">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={15}
                    defaultCenter={{
                      lat: 55.9607277,
                      lng: 36.2172614,
                    }}
                  >
                    <LocationMarker lat={55.9607277} lng={36.2172614} />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          {/* ITEM */}
          <div>
            <label className="text-lg font-semibold" htmlFor="">
              General amenities
            </label>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <label>
        <input type="checkbox" value="women" name="amenities" onChange={handleChange} />
        Women Only
      </label>
      <label>
        <input type="checkbox" value="no_smoking" name="amenities" onChange={handleChange} />
        No Smoking
      </label>
      <label>
        <input type="checkbox" value="option3" name="amenities" onChange={handleChange} />
        Option 3
      </label>
            </div>
          </div>
        </div>


   
        <div className="space-y-8">
          {/* ITEM */}
          <FormItem label="Description">
       
            <input type="text"
                      placeholder=""
                      onChange={handleChange}
                      name="description"
                      value={formData.description} />
          </FormItem>
          <FormItem label="Base price">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">Rs.</span>
              </div>
              
              <input className="!pl-8 !pr-10"
              type="number"
                      placeholder=""
                      onChange={handleChange}
                      name="price"
                      value={formData.price} />
           
            </div>
          </FormItem>
          <button style={{backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px', cursor: 'pointer'}} onClick={handleSubmit}>
      Submit
    </button>
          
        </div>

 
      </div>
    

          </div>
        {/* <div className="hidden lg:block flex-grow">{renderSidebar()}</div> */}
      </main>
    </div>
  );
};

export default CheckOutPage;
