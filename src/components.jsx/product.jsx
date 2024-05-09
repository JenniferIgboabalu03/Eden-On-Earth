import React from "react";

export const Product = (props) => { 

    const { product, onAdd } = props
    
    return(        
        <div>            
            <div className="w-full h-[300px] cursor-pointer lg:h-[400px] p-7 md:p-8 lg:p-10 rounded-xl bg-[#f7eee3]">
                <div className="w-[75%] h-[240px] lg:w-[65%] lg:h-[350px] mx-auto items-center">
                    <img src={ product.img } alt="image" className="h-full w-full object-contain" />
                </div>                                    
            </div>
            <div className="w-full h-fit text-center mt-4 sm:mt-8">
                <h3 className="text-lg md:text-xl">{ product.title }</h3>
                <p className="text-[#333] text-sm">$ { product.price} USD</p>
            </div>   
            <div className="py-2 border border-black w-full mt-3 cursor-pointer text-center rounded-lg hover:bg-black hover:text-white" onClick={() => onAdd(product)}><p>Add to cart</p></div>                                   
        </div>
         
    )
}