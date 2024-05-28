import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { data } from "../faqsdata";
import img1 from "../assets/faq-img1.jpg"
import { IoIosArrowForward } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

export const Faqs = () => { 

    const [accordion, setAccordion] = useState(0)

    const accordionToogle = (index) => {
        if(accordion === index) { 
            setAccordion(null) /* first it will be found null */
        }else{ 
            setAccordion(index) /* it will be found*/
        }
    }
   
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#535a5f]">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">FAQ'S</p></div>
                    <h2 className="text-black text-4xl sm:text-5xl md:text-6xl">Have Any Questions?</h2>
                </div>

                <div className="w-full h-full space-y-9 lg:space-y-0 lg:h-[660px] lg:flex gap-5">
                   <div className="w-full lg:w-[47%] rounded-xl lg:h-full h-[420px] sm:h-[700px] md:h-[900px]">
                        <img src={ img1 } alt="image" className="w-full h-full object-cover rounded-xl" />
                   </div>

                    <div className="lg:w-[53%] h-full lg:py-24 xl:pl-12">
                       <div className="w-full h-fit" >
                            {data.map((data,index) => {
                                return(
                                    <div className="pb-5 border-b border-[#ddceb2] mt-5" key={index}>
                                        <div className="flex justify-between text-[#2c2c2c] cursor-pointer space-x-5" onClick={()=> accordionToogle(index)}>
                                            <h3 className="text-base sm:text-lg">{data.id} <span className="ml-3">{data.question}</span></h3>
                                            { accordion === index ? <div><FaMinus size={18}/></div> : <div><GoPlus size={18}/></div>} 
                                        </div>
                                        {accordion === index && <p className="text-sm sm:text-base mt-4 mx-8 md:mx-10">{data.answer}</p>}
                                    </div>
                                )
                            })}
                                                        
                       </div>                                         
                    </div>
                </div>

                <div className='h-[280px] md:h-[384px] lg:h-[380px] p-4 sm:p-8 md:p-10 lg:p-12 w-full text-white rounded-xl my-16 home-img7 sm:my-24 lg:my-36'>
                    <div className='w-full h-full relative md:w-[70%] lg:w-[50%]'>
                        <div className='w-full'>
                        <h1 className='text-2xl md:text-3xl'>Explore our curated collection of exotic plants</h1>
                        <p className='text-base mt-3'>The allure of exotic plants with their vibrant colors & captivating foliage. From tropical wonders to rare specimens.</p>
                        </div>
                        <Link to="/contact" target="_top">
                            <div className='w-fit absolute bg-[#e1e1e166] bottom-0 cursor-pointer px-7 py-3 rounded-lg text-white text-xs flex space-x-1 items-center'>
                            <p>Contact us</p>
                            <div className='text-white w-fit rounded-full bg-[#e1e1e166]'><IoIosArrowForward size={14} /></div>
                            </div>
                        </Link>
                    </div>         
                </div>
            </div>
        </div>
    )
}