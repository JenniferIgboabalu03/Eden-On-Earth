import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


export const Navbar = (props) => {

  const  [menu,setMenu] = useState(false)
  const showMenu = () => { 
    setMenu(!menu)
  }

  const { countCartItems } = props

    return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto border-b border-[#ddceb2]'>
      <div className='w-full'>
        <div className='px-6 mt-5 mb-4 flex items-center justify-between w-full'>
          <Link to="/"><h1 className='cursor-pointer text-2xl sm:text-3xl 2xl:text-6xl text-black'>Eden On Earth</h1></Link>
          
          <div>
            <ul className='w-full text-sm text-[#333] font-semibold hidden lg:flex'>
              <Link to="/about"><li className='cursor-pointer px-4 mx-1'>About</li></Link>
              <Link to="/categories"><li className='cursor-pointer px-4 mx-1'>Categories</li></Link>
              <Link to="/shop"><li className='cursor-pointer px-4 mx-1'>Shop</li></Link>
              <Link to="/faqs"><li className='cursor-pointer px-4 mx-1'>FQA</li></Link>
              <Link to="/reviews"><li className='cursor-pointer px-4 mx-1'>Reviews</li></Link>
            </ul>
          </div>

          <div className='flex items-center w-max cursor-pointer'>
            <Link to="/contact"><div className='bg-[#f7eee3] py-2 px-5 text-xs rounded-full font-semibold hidden lg:block hover:bg-black hover:text-white '>Contact us</div></Link>
            <Link to="/basket" className='flex relative'><div className='bg-[#f7eee3] py-2 px-2 ml-2 rounded-full'><AiOutlineShoppingCart size={19}/></div><div className='p-1 w-fit h-fit absolute left-9 text-center mx-auto  rounded-full bg-black text-white text-xs'>{ countCartItems && <p>{countCartItems}</p>}</div></Link>
            <div className='py-2 px-2 ml-2 rounded-full block lg:hidden' onClick={showMenu}><IoIosMenu size={25}/></div>
          </div>
          
          { menu && 
            <div className='flex lg:hidden'>
              <div className='fixed top-0 inset-0 left-0 bg-[#fcf9f3] h-fit z-10 border-b border-[#ddceb2]'>
                <div className='flex items-center justify-between w-full px-6'>
                  <Link to="/"><h1 className='cursor-pointer text-2xl sm:text-3xl 2xl:text-6xl text-black mt-5 mb-4 '>Eden On Earth</h1></Link>
                  
                  <div className='flex items-center w-max cursor-pointer'>
                    <Link to="/basket"><div className='bg-[#f7eee3] py-2 px-2 ml-2 rounded-full'><AiOutlineShoppingCart size={19}/></div></Link>
                    <div className='py-2 px-2 ml-2 rounded-full block lg:hidden' onClick={showMenu}><IoMdClose size={25}/></div>
                  </div>
                </div>
                  
                <div className='p-5 mt-4 text-center'>
                  <ul className='w-full text-sm text-[#333] font-semibold block'>
                    <Link to="/about"><li className='cursor-pointer py-3'>About</li></Link>
                    <Link to="/categories"><li className='cursor-pointer py-3'>Categories</li></Link>
                    <Link to="/shop"><li className='cursor-pointer py-3'>Shop</li></Link>
                    <Link to="/faqs"><li className='cursor-pointer py-3'>FQA</li></Link>
                    <Link to="/reviews"><li className='cursor-pointer py-3'>Reviews</li></Link>
                  </ul>
                  <Link to="/contact"><div className='bg-[#f7eee3] w-full py-3 text-xs rounded-full mt-3'>Contact us</div></Link>
                </div>
              </div>          
            </div>
          }          
        </div>       
        
      </div>      
    </div>
  )
}

