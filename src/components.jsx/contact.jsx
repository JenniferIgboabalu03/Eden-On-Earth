import React from 'react'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import c_img1 from "../assets/contact-img1.jpg"
import c_img2 from "../assets/contact-img2.jpg"

export const Contact = () => {
  return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
      <div className='w-full h-full px-6 text-[#535a5f]'>
        <div className=" my-11 md:my-16 space-y-2">
          <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">Get In Touch</p></div>
          <h2 className="text-black text-4xl sm:text-5xl md:text-6xl">Contact Us</h2>
        </div>

        <div className="w-full h-full space-y-9 lg:space-y-0 lg:h-[660px] lg:flex">
          <div className="w-full lg:w-[47%] h-[400px] sm:h-[700px] md:h-[900px] lg:h-full">
            <img src={ c_img1 }alt="image" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="w-full lg:w-[53%]">
            <div className="lg:my-24 lg:ml-14">
              <div className='w-full h-full pb-5 md:pb-7 border-b border-[#ddceb2]'>
                <h3 className='font-semibold text-base text-[#333] mb-3'>Give us a call or email</h3>
                <p className='text-sm hover:underline hover:cursor-pointer mb-1'>support@example.com</p>
                <p className='text-base hover:underline hover:cursor-pointer'>(316) 786-9085</p>
              </div>

              <div className='w-full h-full pb-5 md:pb-7 pt-5 md:pt-7 border-b border-[#ddceb2]'>
                <h3 className='font-semibold text-base text-[#333] mb-3'>Address</h3>
                <p className='text-sm hover:underline cursor-pointer mb-1'>2118 abc street, Grorgia,</p>
                <p className='text-sm hover:underline cursor-pointer'>USA.</p>
              </div>

              <div className='w-full h-full pt-5 md:pt-7 space-y-3 '>
                <div className='w-full h-full flex items-center space-x-3'>
                  <div className='w-fit p-2 rounded-full border border-[#ddceb2] text-black'><FaXTwitter size={15}/></div>  
                  <p className='text-base hover:underline cursor-pointer'>Twitter</p>                
                </div>

                <div className='w-full h-full flex items-center space-x-3'>
                  <div className='w-fit p-2 rounded-full border border-[#ddceb2] text-black'><FaFacebookF size={15}/></div>  
                  <p className='text-base hover:underline cursor-pointer'>Facebook</p>                
                </div>

                <div className='w-full h-full flex items-center space-x-3'>
                  <div className='w-fit p-2 rounded-full border border-[#ddceb2] text-black'><FaYoutube size={15}/></div>  
                  <p className='text-base hover:underline cursor-pointer'>Youtube</p>                
                </div>

                <div className='w-full h-full flex items-center space-x-3'>
                  <div className='w-fit p-2 rounded-full border border-[#ddceb2] text-black'><FaInstagram size={15}/></div>  
                  <p className='text-base hover:underline cursor-pointer'>Instagram</p>                
                </div>
              </div>
            </div>                                         
          </div>          
        </div>

        <div className="w-full h-full space-y-9 lg:space-y-0 lg:h-[660px] lg:flex lg:px-0 my-16 sm:my-24 lg:my-36">

          <div className="lg:hidden w-full h-[400px] sm:h-[700px] md:h-[900px]">
            <img src={ c_img2 } alt="image" className="w-full h-full object-cover rounded-xl" />
          </div>
            
          <div className="lg:w-[53%]">
            <div className="lg:my-20 lg:mr-12">
              <p className='text-base text-[#333] mb-8'>Whether you have inquiries about our products, need help with an order, or simply want to chat about all things plants.</p>
              <form action="">
                <div className='w-full h-full grid sm:grid-cols-2 gap-9 sm:gap-10'>
                  <div className='w-full border-b border-[#ddceb2] pb-1 space-y-1'>
                    <label htmlFor="firstname" className='text-sm text-[#333] font-semibold'>First Name</label>
                    <div>
                      <input type="text" placeholder='Enter your first name' name='firstname' id='firstname' className='text-xs outline-none bg-[#fcf9f3] text-[#333] w-full' />
                    </div>
                  </div>

                  <div className='w-full border-b border-[#ddceb2] pb-1 space-y-1'>
                    <label htmlFor="lastname" className='text-sm text-[#333] font-semibold'>Last Name</label>
                    <div>
                      <input type="text" placeholder='Enter your last name' name='lastname' id='lastname' className='text-xs outline-none bg-[#fcf9f3] text-[#333] w-full' />
                    </div>
                  </div>

                  <div className='w-full border-b border-[#ddceb2] pb-1 space-y-1'>
                    <label htmlFor="email" className='text-sm text-[#333] font-semibold'>Email Address</label>
                    <div>
                      <input type="email" placeholder='Enter your email address' name='email' id='email' className='text-xs outline-none bg-[#fcf9f3] text-[#333] w-full' />
                    </div>
                  </div>

                  <div className='w-full border-b border-[#ddceb2] pb-1 space-y-1'>
                    <label htmlFor="phonenumber" className='text-sm text-[#333] font-semibold'>Phone Number</label>
                    <div>
                      <input type="number" placeholder='Enter your phone number' name='phonenumber' id='phonenumber' className='text-xs outline-none bg-[#fcf9f3] text-[#333] w-full' />
                    </div>
                  </div>

                  <div className='col-span-2 w-full border-b border-[#ddceb2] pb-1 space-y-1'>
                    <label htmlFor="message" className='text-sm text-[#333] font-semibold'>Message</label>
                    <div>
                      <input type="text" placeholder='Type Message...' name='message' id='message' className='text-xs bg-[#fcf9f3] outline-none text-[#333] w-full pb-16' />
                    </div>
                  </div>
                </div>
                
                <div className='flex items-center justify-between w-full mt-7'>
                  <div>
                    <input type="checkbox" id='agreement' name='agreement' className='border outline-none border-[#ddceb2]' />
                    <label htmlFor="agreement" className='text-xs ml-2'>I agree to Terms & Return Policy.</label>
                  </div>

                  <div type="submit" className='text-xs border border-[#333] text-[#333] px-5 sm:px-6 rounded-xl py-3 cursor-pointer hover:bg-black hover:border-0 hover:text-white'>Submit</div>
                </div>
              </form>
            </div>                                         
          </div>

          <div className="hidden lg:block lg:w-[47%] h-full">
            <img src={ c_img2 } alt="image" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
