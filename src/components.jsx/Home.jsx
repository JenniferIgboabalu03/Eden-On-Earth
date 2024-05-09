import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import h_img1 from "../assets/home-img1.png"
import h_img2 from "../assets/home-img2.jpg"
import h_img0 from "../assets/home-img0.png"
import good from "../assets/good.png"
import truck from "../assets/truck.png"
import seed from "../assets/seed.png"
import { categorie } from '../categories';

export const Home = () => {  
  return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
      <div className='border-b w-full block lg:flex h-full px-6 lg:px-0 border-[#ddceb2]'>
        <div className='w-full lg:w-[60%] lg:mt-32 ml-6 pr-12 hidden lg:block h-fit'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl text-black'>Bringing the beauty of nature to your doorstep</h1>

          <div className='flex w-full h-80 my-14 space-x-8'>
            <div className='w-[40%] bg-[#f7eee3] rounded-xl'>
              <img src={ h_img1 } alt="image" className='w-full h-full object-contain'/>
            </div>
            <div className='h-full w-[60%] flex flex-col justify-center'>
              <p className='text-base text-[#535a5f]'>What started as a small seed of an idea has blossomed into a thriving online oasis where plant enthusiasts & nature lovers alike can find inspiration, guidance.</p>
              <Link to="/shop">
                <div className='mt-11 w-fit bg-black px-7 py-3 rounded-lg cursor-pointer flex space-x-1 items-center'> 
                  <p className='text-white text-sm'>Shop Now</p>
                  <div className='text-black w-fit rounded-full bg-white'><IoIosArrowForward size={14} /></div>         
                </div>
              </Link>
            </div>
          </div>

          <div className='w-full flex gap-8 mb-5'>
            <div className='space-y-1 text-sm'>
              <p className='text-[#80868b]'>940+</p>
              <p className='font-semibold text-[#535a5f]'>Happy Customers</p>
            </div>

            <div className='space-y-1 text-sm'>
              <p className='text-[#80868b]'>700+</p>
              <p className='font-semibold text-[#535a5f]'>Type of Plants </p>
            </div>

            <div className='space-y-1 text-sm'>
              <p className='text-[#80868b]'>230+</p>
              <p className='font-semibold text-[#535a5f]'>Unique Style</p>
            </div>
          </div>
        </div>

        <div className='w-full h-full mt-11 sm:mt-16 block lg:hidden'>
         <h1 className='text-3xl sm:text-5xl md:text-6xl text-black'>Bringing the beauty of nature to your doorstep</h1>

          <div className='h-fit w-full mb-10 sm:mb-0'>
            <p className='text-base text-[#535a5f] my-7'>What started as a small seed of an idea has blossomed into a thriving online oasis where plant enthusiasts & nature lovers alike can find inspiration, guidance.</p>
            <Link to="/shop">
              <div className='w-fit bg-black px-7 py-3 rounded-lg flex items-center space-x-1'> 
                <p className='text-white text-sm'>Shop Now</p> 
                <div className='text-black w-fit rounded-full bg-white'><IoIosArrowForward size={14} /></div>                
              </div>
            </Link>
          </div>

          <div className='w-full h-fit hidden sm:flex gap-8 my-10 md:my-14'>
            <div className='space-y-1 text-sm'>
              <p className='text-[#80868b]'>940+</p>
              <p className='font-semibold text-[#535a5f]'>Happy Customers</p>
            </div>

            <div className='space-y-1 text-sm'>
              <p className='text-[#80868b]'>700+</p>
              <p className='font-semibold text-[#535a5f]'>Type of Plants </p>
            </div>

            <div className='space-y-1 text-sm'>
              <p className='text-[#80868b]'>230+</p>
              <p className='font-semibold text-[#535a5f]'>Unique Style</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] h-full lg:h-[744px]">
          <img src={h_img2} alt="image" className='h-full w-full object-cover rounded-xl lg:rounded-none' />
        </div>
      </div>

      {/* Categories section */}
      <div className='h-fit mt-16 sm:mt-24 lg:mt-36'>
        <div className='text-[#333] text-center w-full space-y-2 lg:space-y-3 px-6'>
          <p className='font-semibold text-sm text-[#3c4043]'>EXPLORE BY CATEGORIES</p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl'>Our Categories</h1>
        </div>

        <div className="w-full mt-9 h-full px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          { categorie.map((data, index) => { 
              return(
                  <Link to={ data.link }>
                      <div className="w-full h-80 hover:scale-90 transition-all md:h-[350px] cursor-pointer lg:h-[480px] p-7 md:p-8 lg:p-10 rounded-xl split-background" key={index}>
                          <div className="w-[75%] h-48 md:h-52 lg:w-[65%] lg:h-80 mx-auto">
                              <img src={ data.img } alt="image" className="h-full w-full object-contain" />
                          </div>
                          <div className="w-full h-fit text-center mt-6 sm:mt-8">
                              <h3 className="text-lg md:text-xl">{ data.title }</h3>
                              <p className="text-[#333] text-sm">{ data.view }</p>
                          </div>
                      </div>
                  </Link>                            
              )
          })}                 
        </div>

        <div className='h-fit sm:h-72 md:h-80 lg:h-[500px] px-6 w-full grid sm:grid-cols-3 gap-5 my-16 sm:my-24 lg:my-36'>
          <div className='sm:col-span-2 p-6 md:p-8 lg:p-11 h-72 sm:h-full rounded-xl home-img3'>
            <div className='w-full h-full relative text-white'>
              <div>
                <p className='text-xs md:text-sm mb-3'>New Arrivals</p>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Fiddle leaf fig plant</h1>
                <div className='py-3 px-4 md:py-3 md:px-5 w-fit rounded-full my-7 lg:my-9 text-sm sm:text-base bg-[#e1e1e166]'><p>Starting From<span className='font-semibold ml-1'>$28.40</span></p></div>
              </div>
              <Link to="/shop"><div className='w-fit h-fit bottom-0 absolute flex space-x-2 border-b border-b-white'><p className='text-xs'>Shop Now</p> <div><MdOutlineArrowOutward size={17} /></div> </div></Link>
            </div>
          </div>

          <div className='space-y-4 text-[#333] h-full'>
            <div className='w-full h-52 sm:h-[136px] md:h-[152px] lg:h-[242px] p-5 lg:p-6 rounded-xl home-img4 text-white'>
              <div>
                <p className='text-xs md:text-sm mb-3'>Get 45% Off</p>
                <h1 className='font-medium text-xl md:text-2xl lg:text-3xl'>Gerbera Daisies</h1>
              </div>
            </div>
            
            <div className='w-full h-52 sm:h-[136px] md:h-[152px] lg:h-[242px] p-5 lg:p-6 rounded-xl home-img5 text-white'>
              <div>
                <p className='text-xs md:text-sm mb-3'>Get 45% Off</p>
                <h1 className='font-medium text-xl md:text-2xl lg:text-3xl'>Gerbera Daisies</h1>
              </div>
            </div>
          </div>          
        </div>
        
        <div className='py-10 md:py-14 px-6 bg-[#f7eee3] my-16 sm:my-24 lg:my-36'>
          <div className='grid lg:grid-cols-2 text-[#333] h-fit lg:h-[480px] justify-between'>
            <div className='lg:mt-7'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Personalized guidance for your greenery needs</h1>
              <p className='text-sm sm:text-base mt-7 mb-10'>Whether you're embarking on your first foray into indoor gardening or you're a seasoned plant parent looking to expand your collection, we're committed to helping you achieve your greenery goals.</p>
              <div className='w-full space-y-6'>
                <div className='flex w-full space-x-6 sm:space-x-4 items-center'>
                  <div className='w-[10%]'>
                    <div className='w-9 h-9'>
                      <img src={ good } alt="image" className='w-full h-full object-contain' />
                    </div> 
                  </div>                  
                  <div className='w-[90%]'>
                    <h3 className='text-lg'>Quality products</h3>
                    <p className='text-sm sm:text-base text-[#535a5f]'>It is a long established fact that a reader.</p>
                  </div>
                </div> 

                <div className='flex w-full space-x-6 sm:space-x-4 items-center'>
                  <div className='w-[10%]'>
                    <div className='w-9 h-9'>
                      <img src={ truck } alt="image" className='w-full h-full  object-contain' />
                    </div> 
                  </div>  
                  <div className='w-[90%]'>
                    <h3 className='text-lg'>Quality products</h3>
                    <p className='text-sm sm:text-base text-[#535a5f]'>It is a long established fact that a reader.</p>
                  </div>
                </div>

                <div className='flex w-full space-x-6 sm:space-x-4 items-center'>
                <div className='w-[10%]'>
                    <div className='w-9 h-9'>
                      <img src={ seed } alt="image" className='w-full h-full  object-contain' />
                    </div>  
                  </div>  
                  <div className='w-[90%]'>
                    <h3 className='text-lg'>Quality products</h3>
                    <p className='text-sm sm:text-base text-[#535a5f]'>It is a long established fact that a reader.</p>
                  </div>
                </div>               
              </div>
            </div>

            <div className=' hidden lg:block  pl-20'>
              <img src={ h_img0 } alt="image" className='h-full w-full object-cover' />            
          </div>
          </div> 
        </div>  
      </div>
      <div className='px-6 h-full w-full mb-16 sm:mb-24 lg:mb-36'>
        <div className='h-[280px] md:h-[384px] lg:h-[380px] p-4 sm:p-8 md:p-10 lg:p-12 w-full rounded-xl home-img7 text-white'>
          <div className='w-full h-full relative md:w-[70%] lg:w-[50%]'>
            <div className='w-full'>
              <h1 className='text-2xl md:text-3xl'>Explore our curated collection of exotic plants</h1>
              <p className='text-base mt-3'>The allure of exotic plants with their vibrant colors & captivating foliage. From tropical wonders to rare specimens.</p>
            </div>
            <Link to="/contact">
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

 