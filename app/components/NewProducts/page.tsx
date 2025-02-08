"use client";
import * as React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

const NewProducts = () => {
    const products = [
        { id: 1, title: "Plain White Shirt", price: 29.0, image: "/assest/img1.jpg" },
        { id: 2, title: "Denim Jacket", price: 89.0, image: "/assest/img2.jpg" },
        { id: 3, title: "Black Polo Shirt", price: 49.0, image: "/assest/img1.jpg" },
        { id: 4, title: "Blue Sweatshirt", price: 79.0, image: "/assest/img2.jpg" },
        { id: 5, title: "Blue Plain Shirt", price: 49.0, image: "/assest/img1.jpg" },
        { id: 6, title: "Dark Blue Shirt", price: 69.0, image: "/assest/img2.jpg" },
        { id: 7, title: "Outcast T-Shirt", price: 19.0, image: "/assest/img1.jpg" },
        { id: 8, title: "Polo Plain Shirt", price: 29.0, image: "/assest/img2.jpg" },
    ];
    return (
    <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">Discover NEW Arrivals</h2>
        <p className="text-gray-500 text-center mb-8">Recently added items!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products?.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    </div>
    );
}

export default NewProducts;