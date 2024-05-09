import React, { useState } from 'react'
import { review_data } from '../review_data';
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 6
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = review_data.slice( firstIndex, lastIndex)
  const npage = Math.ceil(review_data.length / recordsPerPage)

  const prevPage = () => { 
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
}

const nextPage = () => { 
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
}
    
  return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <div className='w-full h-fit px-6 text-[#535a5f] mb-16 sm:mb-24 lg:mb-36'>
          <div className=" my-11 md:my-16 space-y-2">
            <div className="flex space-x-1 items-center text-[#333]"><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">TESTIMONIALS</p></div>
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl">Customers Review</h2>
          </div>
          
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full'>
            {records.map((data,index) => {
               return(
                <div className='w-full h-[380px] border bg-[#f7eee3] border-[#ddceb2] relative rounded-xl px-5 pt-7 sm:px-8 sm:pt-10' key={index}>
                  <p className='text-base'>{data.review}</p>
                  <div className='flex items-center space-x-3 w-fit absolute h-fit bottom-8 '>
                    <div className='w-14 h-14 rounded-full bg-[#e0cfae]'><img src={data.img} alt="image" className="h-full w-full object-contain rounded-full" /></div>
                    <div>
                      <p className='text-sm font-semibold'>{data.name}</p>
                      <p className='text-xs'>{data.location}</p>                    
                    </div>
                  </div>
                </div>
               ) 
            })}
          </div>

          <div className='mt-9 text-xs flex items-center space-x-2 w-full'>
            <div onClick={prevPage} className='text-xs flex items-center space-x-2 border w-fit border-black text-black px-5 sm:px-6 rounded-lg py-3 cursor-pointer'>
              <div className='text-white w-fit rounded-full bg-black'><IoIosArrowBack size={14} /></div>                
              <p>Previous</p>
            </div>

            <div onClick={nextPage} className='text-xs flex items-center space-x-2 border w-fit border-black text-black px-5 sm:px-6 rounded-lg py-3 cursor-pointer'>
              <p>Next</p> 
              <div className='text-white w-fit rounded-full bg-black'><IoIosArrowForward size={14} /></div>                
            </div>
          </div>          
        </div>
    </div>
  )
}
