import React, { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

export const Basket = (props) => { 
    const { cartItems, onAdd, onRemove } = props
    const [checkout, setCheckout] = useState(false)

    const check = () => { 
        setCheckout(!checkout)
    }

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0 )
    const shippingPrice = itemsPrice > 100 ? 0 : 50
    const totalPrice = itemsPrice + shippingPrice

    return(
        <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="w-full h-full px-6 text-[#535a5f] mb-16 sm:mb-24 lg:mb-36">
                <div className=" my-5 md:my-9 space-y-2">
                    <div className="flex space-x-2 items-center text-[#333] "><div><PiDotsThreeOutlineVerticalFill size={18}/></div><p className="text-sm font-semibold">PRODUCTS</p></div>
                    <h2 className="text-black text-xl sm:text-3xl">Cart</h2>
                </div>
                
                <div className="w-full md:w-[40%] mx-auto h-full bg-[#f7eee3]">
                    <div className="text-xl lg:text-2xl text-[black] p-4 border-b border-[#ddceb2]"><h3>Your Cart</h3></div>
                    { cartItems.length === 0 && <div className="text-base mt-6 text-center mb-6"><h4>Cart is empty</h4></div> }
                    {cartItems.map((item) => { 
                        return(
                            <div key={item.id}>   
                                <div className="mt-6 px-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3 w-fit">
                                            <div className="w-20 h-20 bg-[#fcf9f3]"><img src={item.img} alt="image" className=" w-full h-full object-contain" /></div>
                                            <div>
                                                <p className="font-semibold text-base text-[#333]">{item.title}</p>
                                                <p className="text-base">{item.qty} x $ {item.price}</p>
                                                <p className="mt-4 text-sm sm:text-base cursor-pointer hover:underline" onClick={() => onRemove(item)}>Remove</p>
                                            </div>                                            
                                        </div>
                                        <div className="text-base py-3 px-4 bg-[#fcf9f3] cursor-pointer" onClick={() => onAdd(item)}><GoPlus size={25}/></div>
                                    </div>
                                </div>                                     
                            </div>
                        )
                    })}
                    <div className="border-t p-4 border-[#ddceb2] mt-6">
                        {cartItems.length !== 0 && 
                            <div>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base">Items Prices</h4>
                                    <h4 className="text-sm sm:text-base font-semibold text-[#333]">$ {itemsPrice.toFixed(2)} USD</h4>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base">Shipping Price</h4>
                                    <h4 className="text-sm sm:text-base font-semibold text-[#333]">$ {shippingPrice.toFixed(2)} USD</h4>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base">Subtotal</h4>
                                    <h4 className="text-sm sm:text-base font-semibold text-[#333]">$ {totalPrice.toFixed(2)} USD</h4>
                                </div>                                    
                                <div className="text-center mt-3 border cursor-pointer py-2 border-black rounded-lg text-xs sm:text-sm text-[#333] w-full hover:bg-black hover:text-white" onClick={check}>
                                    <p>Continue to Checkout</p>
                                </div> 
                                {checkout && 
                                    <div className="text-center bg-[#fcf9f3] mt-3 py-4 rounded-lg text-sm" onClick={check}>
                                        <p>Checkout is disabled on this site.</p>
                                    </div>
                                }
                            </div>                                
                            
                        }
                    </div>
                </div>    

                <div className="w-full h-full mt-5 md:mt-9">
                    <h1 className="text-3xl lg:text-4xl text-[black]">Description</h1>
                    <p className="text-sm sm:text-base mt-4">We offer a diverse range of botanical wonders carefully curated to bring 
                    natural beauty and vitality into your living spaces. Each of our products is hand-selected for its 
                    unique aesthetic appeal, resilience, and ability to enhance your home or office environment. 
                    From striking foliage to delicate blooms, our collection encompasses a wide variety of greenery 
                    options to suit every taste and style. Whether you're looking to create a lush indoor jungle, add a 
                    touch of green to a sunny corner, our diverse range of botanical treasures awaits your exploration.</p>
                </div>

                <div className="my-5 md:my-9 w-full h-full">
                    <h1 className="text-3xl lg:text-4xl text-[black]">Information</h1>
                    <p className="text-sm sm:text-base mt-4">Explore our curated selection of botanical wonders, each carefully 
                    chosen to enhance your living space and bring the beauty of nature indoors. Our products are sourced 
                    from trusted growers and nurseries, ensuring the highest quality and healthiest specimens for our 
                    customers. From vibrant foliage to delicate blooms, each plant is accompanied by detailed care 
                    instructions to help you nurture and maintain its beauty.</p>
                </div>

                <div className="w-full h-full space-y-2">
                    <div className="flex items-center space-x-3">
                        <div className="text-black"><CiDeliveryTruck size={25}/></div>
                        <p className="text-sm sm:text-base">Free worldwide shipping on all orders over $100USD.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="text-black"><CiClock2 size={25} /></div>
                        <p className="text-sm sm:text-base">Delivers In: 3-7 Working Days Shipping & Return</p>
                    </div>
                </div>
            </div>                 
        </div>
    )
}