import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import f_img1 from "../assets/footer-img1.jpg"
import f_img2 from "../assets/footer-img2.jpg"
import f_img3 from "../assets/footer-img3.jpg"
import f_img4 from "../assets/footer-img4.jpg"
import f_img5 from "../assets/footer-img5.jpg"


export const Footer = () => {
  return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
      <div className='w-full h-full'>
        <p className='font-semibold text-center text-sm text-[#3c4043]'>SHOP ON INSTAGRAM</p>
        <div className='w-full h-full mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:h-64 md:h-52'>
          <div className='w-full h-40 sm:h-48 md:h-52 lg:h-64'>
            <img src={ f_img1 } alt="image" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-40 sm:h-48 md:h-52 lg:h-64'>
            <img src={ f_img2 } alt="image" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-40 sm:h-48 md:h-52 lg:h-64'>
            <img src={ f_img3 } alt="image" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-40 sm:h-48 md:h-52 lg:h-64'>
            <img src={ f_img4 } alt="image" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-40 sm:h-48 md:h-52 lg:h-64'>
            <img src={ f_img5 } alt="image" className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='w-full h-full px-6 bg-black text-[#80868b]'>
          <div className='w-full h-full lg:flex space-y-9 md:space-y-10 justify-between py-14 md:py-16'>
            <div className='w-full md:w-[57%] block lg:hidden h-full'>
              <h1 className='font-semibold text-white text-base mb-3'>Newsletter</h1>
              <div className='text-sm font-medium mb-5'>
                <p>Join our community of plant enthusiasts and elevate your greenery game today!</p>
              </div>
              <form action="">
                <div className='flex justify-between items-center text-white text-sm border-b border-[#80868b] pb-1'>
                  <label htmlFor="email"><AiOutlineMail size={20} className='text-[#80868b]' /></label>
                  <input type="text" placeholder='Enter your email here' name='email' id='email' className='w-full outline-none mx-2 border-0 bg-black py-1'/>
                  <div><FaArrowRight size={17} className='text-[#80868b] cursor-pointer'/></div>
                </div>
              </form>
              <div className='flex mt-9 space-x-2'>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaXTwitter size={15}/></div>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaFacebookF size={15}/></div>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaYoutube size={15}/></div>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaInstagram size={15}/></div>
              </div>
            </div>
            <div className='w-full lg:w-[53%] flex h-full justify-between'>
              <div className='w-fit h-full'>
                <h1 className='font-semibold text-white text-base mb-3'>Pages</h1>
                <ul className='text-sm font-semibold'>
                  <Link to="/about" target="_top"><li className='py-1'><p>About us</p></li></Link>
                  <Link to="/categories" target="_top"><li className='py-1'><p>Categories</p></li></Link>
                  <Link to="/shop" target="_top"><li className='py-1'><p>Shop</p></li></Link>
                  <Link to="/reviews" target="_top"><li className='py-1'><p>Reviews</p></li></Link>
                  <Link to="/faqs" target="_top"><li className='py-1'><p>FQA</p></li></Link>
                  <Link to="/contact" target="_top"><li><p>Contact us</p></li></Link>
                </ul>
              </div>

              <div className='w-fit h-full'>
                <h1 className='font-semibold text-white text-base mb-3'>Categories</h1>
                <ul className='text-sm font-semibold'>
                  <Link to="/purifying plants" target="_top"><li className='py-1'><p>Air Purifying Plants</p></li></Link>
                  <Link to="/flowering plants" target="_top"><li className='py-1'><p>Flowering Plants</p></li></Link>
                  <Link to="/tropical plants" target="_top"><li className='py-1'><p>Tropical Plants</p></li></Link>
                  <Link to="/outdoor plants" target="_top"><li className='py-1'><p>Outdoor Plants</p></li></Link>
                  <Link to="/indoor plants" target="_top"><li className='py-1'><p>Indoor Plants</p></li></Link>
                </ul>
              </div>

              <div className='hidden sm:block w-fit h-full'>
                <h1 className='font-semibold text-white text-base mb-3'>Resources</h1>
                <ul className='text-sm font-semibold'>
                  <Link><li className='py-1'><p>Privacy Policy</p></li></Link>
                  <Link><li className='py-1'><p>Return Policy</p></li></Link>
                  <Link><li className='py-1'><p>Terms & Conditions</p></li></Link>
                  <Link><li className='py-1'><p>License</p></li></Link>                  
                </ul>
              </div>
            </div>

            <div className='block sm:hidden w-fit h-full'>
              <h1 className='font-semibold text-white text-base mb-3'>Resources</h1>
              <ul className='text-sm font-semibold'>
                <Link><li className='py-1'><p>Privacy Policy</p></li></Link>
                <Link><li className='py-1'><p>Return Policy</p></li></Link>
                <Link><li className='py-1'><p>Terms & Conditions</p></li></Link>
                <Link><li className='py-1'><p>License</p></li></Link>                  
              </ul>
            </div>

            <div className='w-[32%] h-full hidden lg:block'>
              <h1 className='font-semibold text-white text-base mb-3'>Newsletter</h1>
              <div className='text-sm font-medium mb-5'>
                <p>Join our community of plant enthusiasts and elevate your greenery game today!</p>
              </div>
              <form action="">
                <div className='flex justify-between items-center text-white text-sm border-b border-[#80868b] pb-1'>
                  <label htmlFor="email"><AiOutlineMail size={20} className='text-[#80868b]' /></label>
                  <input type="text" placeholder='Enter your email here' name='email' id='email' className='w-full mx-2 outline-none border-0 bg-black py-1'/>
                  <div><FaArrowRight size={17} className='text-[#80868b] cursor-pointer'/></div>
                </div>
              </form>
              <div className='flex mt-9 space-x-2'>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaXTwitter size={15}/></div>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaFacebookF size={15}/></div>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaYoutube size={15}/></div>
                <div className='cursor-pointer w-fit p-2 hover:bg-[#e1e1e166] rounded-full border border-[#e1e1e166] text-white'><FaInstagram size={15}/></div>
              </div>
            </div>
          </div>

          <div className='w-full h-full border-t border-[#80868b] text-center sm:justify-between sm:items-center sm:flex py-4 sm:py-5'>
            <p className='text-sm'><sup>&copy;</sup> 2025 Eden on earth.</p>
            <p className='text-xs'>Built by Ogechukwu Jennifer Igboabalu.</p>
          </div>
        </div> 
      </div>
    </div>
  )
}
