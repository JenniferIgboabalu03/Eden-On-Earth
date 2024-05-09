import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Product } from "./product";

export const Shop = (props) => { 
    const { products, onAdd } = props

    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#3c4043] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-11 md:my-16 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl">Our Plants</h2>
                </div>
                
                <div className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product) => { 
                        return(
                            <div key={product.id}>
                                <Product key={ product.id } product={ product } onAdd={ onAdd } />
                            </div>
                        )
                    })}                
                </div>                
            </div>
        </div>
    )
}