import React from "react";
import { Link } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { air_purifying, aquatic, categories, flowering, indoor, outdoor, tropical } from "../categories";

export const Categories = () => { 
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">Explore</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Categories</h2>
                </div>
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    { categories.map((data, index) => { 
                        return(
                            <Link to={ data.link } target="_top">
                                <div className="w-full h-80 md:h-[350px] hover:scale-90 transition-all cursor-pointer lg:h-[480px] p-7 md:p-8 lg:p-10 rounded-xl split-background" key={index}>
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
            </div>
        </div>
    )
}

export const Indoor_plants = () => { 
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Our Plants</h2>
                </div>
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    { indoor.map((data, index) => { 
                        return(
                            <Link>
                                <div className="w-full h-[300px] hover:scale-90 transition-all cursor-pointer lg:h-[400px] p-7 md:p-8 lg:p-10 rounded-xl bg-[#f7eee3]" key={index}>
                                    <div className="w-[75%] h-[240px] lg:w-[65%] lg:h-[350px] mx-auto items-center">
                                        <img src={ data.img } alt="image" className="h-full w-full object-contain" />
                                    </div>                                    
                                </div>
                                <div className="w-full h-fit text-center mt-4 sm:mt-8">
                                    <h3 className="text-lg md:text-xl">{ data.title }</h3>
                                    <p className="text-[#333] text-sm">{ data.price }</p>
                                </div>
                            </Link>                            
                        )
                    })}                 
                </div>
            </div>
        </div>
    )
}

export const Outdoor_plants = () => { 
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Our Plants</h2>
                </div>
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    { outdoor.map((data, index) => { 
                        return(
                            <Link>
                                <div className="w-full h-[300px] hover:scale-90 transition-all cursor-pointer lg:h-[400px] p-7 md:p-8 lg:p-10 rounded-xl bg-[#f7eee3]" key={index}>
                                    <div className="w-[75%] h-[240px] lg:w-[65%] lg:h-[350px] mx-auto items-center">
                                        <img src={ data.img } alt="image" className="h-full w-full object-contain" />
                                    </div>                                    
                                </div>
                                <div className="w-full h-fit text-center mt-4 sm:mt-8">
                                    <h3 className="text-lg md:text-xl">{ data.title }</h3>
                                    <p className="text-[#333] text-sm">{ data.price }</p>
                                </div>
                            </Link>                            
                        )
                    })}                 
                </div>
            </div>
        </div>
    )
}

export const Flowering_plants = () => { 
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Our Plants</h2>
                </div>
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    { flowering.map((data, index) => { 
                        return(
                            <Link>
                                <div className="w-full h-[300px] hover:scale-90 transition-all cursor-pointer lg:h-[400px] p-7 md:p-8 lg:p-10 rounded-xl bg-[#f7eee3]" key={index}>
                                    <div className="w-[75%] h-[240px] lg:w-[65%] lg:h-[350px] mx-auto items-center">
                                        <img src={ data.img } alt="image" className="h-full w-full object-contain" />
                                    </div>                                    
                                </div>
                                <div className="w-full h-fit text-center mt-4 sm:mt-8">
                                    <h3 className="text-lg md:text-xl">{ data.title }</h3>
                                    <p className="text-[#333] text-sm">{ data.price }</p>
                                </div>
                            </Link>                            
                        )
                    })}                 
                </div>
            </div>
        </div>
    )
}

export const Tropical_plants = () => { 
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Our Plants</h2>
                </div>
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    { tropical.map((data, index) => { 
                        return(
                            <Link>
                                <div className="w-full h-[300px] hover:scale-90 transition-all cursor-pointer lg:h-[400px] p-7 md:p-8 lg:p-10 rounded-xl bg-[#f7eee3]" key={index}>
                                    <div className="w-[75%] h-[240px] lg:w-[65%] lg:h-[350px] mx-auto items-center">
                                        <img src={ data.img } alt="image" className="h-full w-full object-contain" />
                                    </div>                                    
                                </div>
                                <div className="w-full h-fit text-center mt-4 sm:mt-8">
                                    <h3 className="text-lg md:text-xl">{ data.title }</h3>
                                    <p className="text-[#333] text-sm">{ data.price }</p>
                                </div>
                            </Link>                            
                        )
                    })}                 
                </div>
            </div>
        </div>
    )
}

export const Aquatic_plants = () => { 
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Our Plants</h2>
                </div>
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    { aquatic.map((data, index) => { 
                        return(
                            <Link>
                                <div className="w-full h-[300px] hover:scale-90 transition-all cursor-pointer lg:h-[400px] p-7 md:p-8 lg:p-10 rounded-xl bg-[#f7eee3]" key={index}>
                                    <div className="w-[75%] h-[240px] lg:w-[65%] lg:h-[350px] mx-auto items-center">
                                        <img src={ data.img } alt="image" className="h-full w-full object-contain" />
                                    </div>                                    
                                </div>
                                <div className="w-full h-fit text-center mt-4 sm:mt-8">
                                    <h3 className="text-lg md:text-xl">{ data.title }</h3>
                                    <p className="text-[#333] text-sm">{ data.price }</p>
                                </div>
                            </Link>                            
                        )
                    })}                 
                </div>
            </div>
        </div>
    )
}

export const Air_Purifying_plants  = () => { 
    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Our Plants</h2>
                </div>
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    { air_purifying.map((data, index) => { 
                        return(
                            <Link>
                                <div className="w-full h-[300px] hover:scale-90 transition-all cursor-pointer lg:h-[400px] p-7 md:p-8 lg:p-10 rounded-xl bg-[#f7eee3]" key={index}>
                                    <div className="w-[75%] h-[240px] lg:w-[65%] lg:h-[350px] mx-auto items-center">
                                        <img src={ data.img } alt="image" className="h-full w-full object-contain" />
                                    </div>                                    
                                </div>
                                <div className="w-full h-fit text-center mt-4 sm:mt-8">
                                    <h3 className="text-lg md:text-xl">{ data.title }</h3>
                                    <p className="text-[#333] text-sm">{ data.price }</p>
                                </div>
                            </Link>                            
                        )
                    })}                 
                </div>
            </div>
        </div>
    )
}