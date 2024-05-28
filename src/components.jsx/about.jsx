import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import img1 from "../assets/about-img1.jpg"
import img2 from "../assets/about-img2.jpg"
import img3 from "../assets/about-img3.jpg"
import img4 from "../assets/about-img4.jpg"
import img5 from "../assets/about-img5.jpg"
import leaf from "../assets/leaf.png"
import container from "../assets/container - Copy.png"
import box from "../assets/box.png"
import water_can from "../assets/water-can.png"
import img_r1 from "../assets/img-1r.png"
import img_r2 from "../assets/img-2r.png"
import img_r3 from "../assets/img-3r.png"
import img_r4 from "../assets/img-4r.png"

export const About =() => {
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full mt-11 md:mt-16 text-[#535a5f]">
                <div className="w-full h-full space-y-9 lg:space-y-0 lg:h-[660px] lg:flex px-6 lg:px-0">
                   <div className="hidden lg:block lg:w-[47%] h-full">
                        <img src={ img1 } alt="image" className="w-full h-full object-cover rounded-br-xl rounded-tr-xl" />
                   </div>

                    <div className="lg:w-[53%]">
                       <div className="xl:my-14 lg:ml-9 lg:mr-6">
                            <p className="text-base">Established 2009</p>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black mt-2 mb-4">Eden on earth’s Journey</h1>
                            <p className="text-base">What started as a humble passion project has blossomed into a thriving community dedicated to celebrating the beauty & benefits of nature. Along the way, we've encountered challenges, learned invaluable lessons, and cultivated deep-rooted connections with fellow plant enthusiasts around the world.</p>  
                        
                            <div className="w-full h-full my-10 sm:my-12 grid sm:grid-cols-2 gap-6">
                                <div className="w-full h-[242px] md:h-[250px]">
                                    <img src={ img2 } alt="image" className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <div className="w-full h-[242px] md:h-[250px]">
                                    <img src={ img3 } alt="image" className="w-full h-full object-cover rounded-xl" />
                                </div>
                            </div>

                            <div className="w-full sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-16 lg:space-x-14">
                                <div className="flex items-center space-x-2">
                                    <div><CiLocationOn size={18}/></div>
                                    <p className="text-sm text-[#333] font-semibold">Grorgia, USA</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div><AiOutlineMail size={18}/></div>
                                    <p className="text-sm text-[#333] font-semibold">Eoe@gmail.com</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div><IoCallOutline size={18}/></div>
                                    <p className="text-sm text-[#333] font-semibold">+(123) 456 789</p>
                                </div>
                            </div>   
                       </div>                                         
                    </div>

                    <div className="lg:hidden w-full h-[400px] sm:h-[700px] md:h-[900px]">
                        <img src={ img1 } alt="image" className="w-full h-full object-cover rounded-xl" />
                   </div>
                </div>

                <div className="w-full h-full px-6">
                    <div className="w-full h-full hidden gap-10 sm:grid sm:grid-cols-2 md:grid-cols-4 mt-16 md:mt-20">
                        <div className="text-center">
                            <h1 className="text-5xl">2009</h1>
                            <p className="text-[#333] text-sm font-semibold">Founded Eoe in 2009.</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl">26+</h1>
                            <p className="text-[#333] text-sm font-semibold">Our Worldwide Stores</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl">940+</h1>
                            <p className="text-[#333] text-sm font-semibold">Our Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl">17+</h1>
                            <p className="text-[#333] text-sm font-semibold">Winning Global Awards</p>
                        </div>
                    </div>

                    <div className="w-full h-full space-y-9 block sm:hidden mt-11">
                        <div className="w-full h-full flex space-x-8 justify-between">
                            <div className="text-center">
                                <h1 className="text-3xl">2009</h1>
                                <p className="text-[#333] text-sm font-semibold">Founded Eoe in 2009.</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-3xl">26+</h1>
                                <p className="text-[#333] text-sm font-semibold">Our Worldwide Stores</p>
                            </div>
                        </div>
                        <div className="w-full h-full flex space-x-8 justify-between">
                            <div className="text-center">
                                <h1 className="text-3xl">940+</h1>
                                <p className="text-[#333] text-sm font-semibold">Our Happy Customers</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-3xl">17+</h1>
                                <p className="text-[#333] text-sm font-semibold">Winning Global Awards</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-16 sm:my-24 lg:my-36 space-y-9 lg:space-y-0 lg:h-[440px] xl:h-[530px] lg:flex">
                        <div className="lg:w-[47%] w-full rounded-xl h-[380px] sm:h-[600px] md:h-[820px] lg:h-full">
                            <img src={ img4 } alt="image" className="w-full h-full rounded-xl object-cover" />
                        </div>

                        <div className="lg:w-[53%] lg:py-10 xl:py-24 lg:pl-10 xl:pl-14">
                            <div>
                                <h1 className="text-3xl lg:text-4xl text-[#333]">Our Mission & Vision</h1>
                                <p className="text-base my-3">We are committed to providing our customers with exceptional products, resources, and experiences that foster a love for plants, promote sustainability, and enhance well-being. Through our dedication to quality, innovation, and community.</p>
                                <p className="text-base">Our vision at Eden on earth is to be the leading destination for plant enthusiasts, innovators, and changemakers seeking to transform the way we interact with nature & each other.</p>  
                                
                                <div className="w-full my-7 lg:my-9 space-y-2 sm:space-y-0 sm:flex items-center sm:space-x-2">
                                    <div className="flex space-x-1 py-1 px-5 items-center w-fit rounded-full bg-[#eeebe6] ">
                                        <div><GoPlus size={18}/></div>
                                        <p className="text-xs">Greener World</p>
                                    </div>
                                    <div className="flex space-x-1 py-1 px-5 items-center w-fit rounded-full bg-[#eeebe6]">
                                        <div><GoPlus size={18}/></div>
                                        <p className="text-xs">Vibrant Communities</p>
                                    </div>
                                </div>

                                <Link to="/contact" target="_top" className="cursor-pointer">
                                    <div className="flex items-center space-x-2 text-[#333]">
                                        <p className="text-xs">Contact us</p>
                                        <div><MdOutlineArrowOutward size={17} /></div>
                                    </div>   
                                </Link>
                            </div>                                               
                        </div>
                    </div>

                    <div className="my-16 sm:my-24 lg:my-36 space-y-9 lg:space-y-0 lg:h-[440px] xl:h-[530px] lg:flex">
                        <div className="w-full block lg:hidden h-[380px] sm:h-[600px] md:h-[820px]">
                            <img src={ img5 } alt="image" className="w-full h-full object-cover rounded-xl" />
                        </div>

                        <div className="lg:w-[53%] lg:py-10 xl:py-24 lg:pr-10 xl:pr-14">
                            <div>
                                <h1 className="text-3xl lg:text-4xl text-[#333]">Innovation & Empowerment</h1>
                                <p className="text-base mt-3">We believe in the power of innovation to drive positive change and empower individuals to realize their full potential. Innovation is at the heart of everything we do, from creating cutting-edge products to developing innovative solutions.</p>
                                
                                <div className="w-full lg:mt-7 my-7 lg:mb-9 gap-y-3 grid sm:grid-cols-3">
                                    <div className="flex items-center space-x-2">
                                        <div><IoIosCheckmarkCircleOutline size={25} /></div>
                                        <p className="text-base">Inclusive Growth</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div><IoIosCheckmarkCircleOutline size={25} /></div>
                                        <p className="text-base">Forward Thinking</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div><IoIosCheckmarkCircleOutline size={25} /></div>
                                        <p className="text-base">Pruning Techniques</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div><IoIosCheckmarkCircleOutline size={25} /></div>    
                                        <p className="text-base">Empowered Teams</p>
                                    </div>
                                    <div className="flex items-center space-x-2 sm:col-span-2">
                                        <div><IoIosCheckmarkCircleOutline size={25} /></div>
                                        <p className="text-base">Continuous Improvement </p>
                                    </div>
                                </div>

                                <Link to="/categories" target="_top">
                                    <div className='w-fit cursor-pointer border border-black px-6 sm:px-7 py-3 rounded-lg text-xs text-[#333] flex items-center space-x-2'>
                                        <p>Explore Plants</p>
                                        <div className='text-white w-fit rounded-full bg-black'><IoIosArrowForward size={14} /></div>
                                    </div>
                                </Link>
                            </div>                                               
                        </div>

                        <div className="w-[47%] h-full hidden lg:block">
                            <img src={ img5 } alt="image" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </div>               

                <div className="w-full h-full px-6">
                    <div className="text-[#333] bg-[#f7eee3] border border-[#ddceb2] my-16 sm:my-24 py-16 px-9 space-y-20 sm:space-y-24 sm:px-11 md:hidden justify-between">
                        <div className="flex space-x-6 sm:space-x-9 justify-between">
                            <div className="h-28 w-full text-center space-y-3">
                                <img src={ leaf } alt="image" className="h-full w-full object-contain" />
                                <p className="text-base">Pick your plant</p>
                            </div>
                            
                            <div className="h-28 w-full text-center space-y-3">
                                <img src={ container } alt="image" className="h-full w-full object-contain" />
                                <p className="text-base">Choose a pot color</p>
                            </div>
                        </div>                        
                        
                        <div className="flex space-x-6 sm:space-x-9 justify-between">
                            <div className="h-28 w-full text-center space-y-3">
                                <img src={ box } alt="image" className="h-full w-full object-contain" />
                                <p className="text-base">Have it shipped</p>
                            </div>
                            
                            <div className="h-28 w-full text-center space-y-3">
                                <img src={ water_can } alt="image" className="h-full w-full object-contain" />
                                <p className="text-base">Watch it grow</p>
                            </div>
                        </div>                        
                    </div>

                    <div className="text-[#333] bg-[#f7eee3] border border-[#ddceb2] rounded-xl w-full h-fit hidden sm:my-24 py-16 lg:my-36 lg:py-20 items-center px-9 sm:px-11 lg:px-14 md:flex justify-between">
                        <div className="h-28 w-32 text-center space-y-3">
                            <img src={ leaf } alt="image" className="h-full w-full object-contain" />
                            <p className="text-base lg:text-lg">Pick your plant</p>
                        </div>
                        <div className="w-fit h-fit hidden lg:block">
                            <HiArrowLongRight  size={28}/>                         
                        </div>
                        <div className="h-28 w-32 text-center space-y-3">
                            <img src={ container } alt="image" className="h-full w-full object-contain" />
                            <p className="text-base lg:text-lg">Choose a pot</p>
                        </div>
                        <div className="w-fit h-fit hidden lg:block">
                        <HiArrowLongRight size={28}/>                                
                        </div>
                        <div className="h-28 w-32 text-center space-y-3">
                            <img src={ box } alt="image" className="h-full w-full object-contain" />
                            <p className="text-base lg:text-lg">Have it shipped</p>
                        </div>
                        <div className="w-fit h-fit hidden lg:block">
                            <HiArrowLongRight size={28}/>                          
                        </div>
                        <div className="h-28 w-32 text-center space-y-3">
                            <img src={ water_can } alt="image" className="h-full w-full object-contain" />
                            <p className="text-base lg:text-lg">Watch it grow</p>
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <div className="text-center w-full mb-7 md:mb-9 space-y-2 lg:space-y-3 text-[#333]">
                            <p className="font-semibold text-sm">MEMBERS</p>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl">Meet Our Team</h1>
                        </div>

                        <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-7">
                            <div className="w-full h-full md:col-span-3">
                                <div className="grid md:grid-cols-3 md:gap-x-4 w-full gap-y-4 md:gap-y-0 h-fit pb-6 justify-between items-center border-b border-[#ddceb2]">
                                    <div className="flex items-center space-x-6 w-full md:w-fit">
                                        <div className="w-20 h-20 rounded-full bg-[#f7eee3]"><img src={ img_r2 } alt="image" className="h-full w-full object-contain rounded-full" /></div>
                                        <div className="h-fit text-base font-semibold"><p>Darrell Steward</p></div>
                                    </div>
                                    <div className="md:col-span-2 col md:flex h-fit w-full md:space-x-5 justify-between items-center" >
                                        <p className="text-sm font-semibold">Founder & CEO of Eden on earth</p>
                                        <div className="lg:flex lg:items-center">
                                            <p className="text-sm">hello@darrell-steaward.com</p>
                                            <div className="px-2 hidden lg:block"><GoDotFill size={15}/></div>
                                            <p className="md:text-right text-base">(123) 555-0108</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-full md:col-span-3">
                                <div className="grid md:grid-cols-3 md:gap-x-4 w-full gap-y-4 md:gap-y-0 h-fit pb-6 justify-between items-center border-b border-[#ddceb2]">
                                    <div className="flex items-center space-x-6 w-full md:w-fit">
                                        <div className="w-20 h-20 rounded-full bg-[#f7eee3]"><img src={ img_r3 } alt="image" className="h-full w-full object-contain rounded-full" /></div>
                                        <div className="h-fit text-base font-semibold"><p>Kristin Watson</p></div>
                                    </div>
                                    <div className="md:col-span-2 col md:flex h-fit w-full md:space-x-5 justify-between items-center" >
                                        <p className="text-sm font-semibold">Greenhouse Technician</p>
                                        <div className="lg:flex lg:items-center">
                                            <p className="text-sm">hello@Kristin-Watson.com</p>
                                            <div className="px-2 hidden lg:block"><GoDotFill size={15}/></div>
                                            <p className="md:text-right text-base">(123) 557-0908</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-full md:col-span-3">
                                <div className="grid md:grid-cols-3 md:gap-x-4 w-full gap-y-4 md:gap-y-0 h-fit pb-6 justify-between items-center border-b border-[#ddceb2]">
                                    <div className="flex items-center space-x-6 w-full md:w-fit">
                                        <div className="w-20 h-20 rounded-full bg-[#f7eee3]"><img src={ img_r4 } alt="image" className="h-full w-full object-contain rounded-full" /></div>
                                        <div className="h-fit text-base font-semibold"><p>Esther Howards</p></div>
                                    </div>
                                    <div className="md:col-span-2 col md:flex h-fit w-full md:space-x-5 justify-between items-center" >
                                        <p className="text-sm font-semibold">Plant Propagator</p>
                                        <div className="lg:flex lg:items-center">
                                            <p className="text-sm">hello@Esthe- Howards.com</p>
                                            <div className="px-2 hidden lg:block"><GoDotFill size={15}/></div>
                                            <p className="md:text-right text-base">(123) 097-0568</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-full md:col-span-3 mb-16 sm:mb-24 lg:mb-36">
                                <div className="grid md:grid-cols-3 md:gap-x-4 w-full gap-y-4 md:gap-y-0 h-fit pb-6 justify-between items-center border-b border-[#ddceb2]">
                                    <div className="flex items-center space-x-6 w-full md:w-fit">
                                        <div className="w-20 h-20 rounded-full bg-[#f7eee3]"><img src={ img_r1 } alt="image" className="h-full w-full object-contain rounded-full" /></div>
                                        <div className="h-fit text-base font-semibold"><p>Jerome Bell</p></div>
                                    </div>
                                    <div className="md:col-span-2 col md:flex h-fit w-full md:space-x-5 justify-between items-center" >
                                        <p className="text-sm font-semibold">Plant Health Inspector</p>
                                        <div className="lg:flex lg:items-center">
                                            <p className="text-sm">hello@Jerome-Bell.com</p>
                                            <div className="px-2 hidden lg:block"><GoDotFill size={15}/></div>
                                            <p className="md:text-right text-base">(183) 595-0568</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

