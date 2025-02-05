"use client";
import * as React from 'react';

const NewProducts = () => {
    const products = [
        { img: "/assest/img1.jpg", price: 100, saleprice: 80 },
        { img: "/assest/img2.jpg", price: 120, saleprice: 90 },
        { img: "/assest/img1.jpg", price: 110, saleprice: 85 },
        { img: "/assest/img2.jpg", price: 130, saleprice: 95 },
        { img: "/assest/img1.jpg", price: 140, saleprice: 100 },
        { img: "/assest/img2.jpg", price: 150, saleprice: 110 },
    ];
    return (
        <div className="my-8 px-4">
            {/* Title Section */}
            <div className="flex flex-col items-center text-center my-8">
                <h1 className="font-sans text-[28px] sm:text-[32px] md:text-[36px] font-bold">
                    Discover NEW Arrivals
                </h1>
                <span className="font-sans text-[#555555] text-sm sm:text-base md:text-lg">
                    Recently added shirts!
                </span>
            </div>
            {/* Product Grid */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                    {products.map((val, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[295px] min-h-[400px] flex flex-col overflow-hidden"
                        >
                            {/* Product Image */}
                            <div className="h-[342px] w-full">
                                <img
                                    src={val.img}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Product Title */}
                            <div className="px-3 pt-2 text-center">
                                <h3 className="text-lg font-semibold text-gray-800">Meet Parkhiya</h3>
                            </div>
                            {/* Product Price */}
                            <div className="px-3 py-2 text-center flex justify-center items-end gap-2">
                                <span className="text-xl font-bold text-blue-color">
                                    ${val.saleprice}
                                </span>
                                <span className="text-sm text-gray-500 line-through mb-0.5">
                                    ${val.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewProducts;