import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';

const ProductListCard1 = ({ productListProps, handleDeleteProduct, product }) => {
    const { productColor, previewMode } = productListProps;
    const { backgroundColor, textColor, priceColor, borderColor, buttonTextColor, buttonBgColor, buttonBgColorOnHover, heartColor, buttonBorderColor } = productColor

    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);

    if (!product) return null;

    const { id, image, name, variant } = product;

    const handleVariantSelect = (index) => {
        console.log("Selected Variant Index:", index);
        setSelectedVariantIndex(index);
    };

    const handleAddToCart = () => {
        // This function should handle adding the product to the cart
        // For demonstration purposes, it just sets the addedToCart state to true
        setAddedToCart(true);
    };


    const selectedVariant = variant[selectedVariantIndex];
    const price = selectedVariant.options[0]?.price || 0;
    const variantImage = selectedVariant.options[0]?.image?.imageUrl || '';

    return (
        // <h1>HEllo</h1>
        <motion.div
            className="font-roboto rounded-lg overflow-hidden transform transition duration-300 relative border-solid border-2 w-full xl:w-[270px] h-[372px] mx-auto"
            style={{ borderColor: productColor.borderColor }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="w-full">
                <div className="relative w-full">
                    {!previewMode && (
                        <button
                            className="absolute top-2 right-2 p-2 rounded-full bg-red-500 z-10 text-white flex items-center justify-center"
                            onClick={() => handleDeleteProduct(product.id)}
                        >
                            <FaTimes />
                        </button>
                    )}
                    <div className="card cursor-pointer flex flex-col gap-2 justify-center bg-white rounded-xl shadow-2xl w-full">
                        <div>
                            <img src={variantImage} alt={name} className="w-[252px] h-[196px] object-contain mx-auto" style={{ aspectRatio: '1/1' }} />
                        </div>
                        <div className="px-5 w-full">
                            <hr className="border-t-2" style={{ borderColor: borderColor }} />
                            <div className="prod-title mt-2 flex justify-between items-center">
                                <p className="text-2xl font-bold" style={{ color: textColor }}>{name}</p>
                                <p className="font-bold text-lg" style={{ color: priceColor }}>Rs {price}</p>
                            </div>
                            <div className="grid gap-2 relative w-full">
                                <div className="flex mt-5">
                                    {variant.map((v, index) => (
                                        < div
                                            key={index}
                                            className={`cursor-pointer text-sm sm:text-base ${selectedVariantIndex === index ? 'font-bold' : ''} rounded-md`}
                                            onClick={() => handleVariantSelect(index)}
                                        >
                                            <img src={v.options[0].image.imageUrl} alt={v.options[0].image.imageUrl} style={{ height: "48px", width: "48px" }} className='me-2' />
                                        </div >
                                    ))}
                                </div>
                                <div className='absolute right-1 top-1'>
                                    <FaHeart style={{ color: heartColor }} size={15} />
                                </div>
                                <div className="flex mb-5 text-xl font-bold md:flex-row justify-between items-center text-gray-900">
                                    <button className="py-2 transition ease-in duration-200 border-nore focus:outline-none">
                                        <div style={{ color: priceColor }} className="flex gap-1 text-xs items-center">
                                            Learn More <IoIosArrowForward />
                                        </div>
                                    </button>
                                    <button style={{ color: buttonTextColor, borderColor: buttonBorderColor, backgroundColor: buttonBgColor }} className={`px-3 py-1 text-xs transition ease-in duration-200 border-solid border rounded-sm focus:outline-none addToCartBtn`}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonBgColorOnHover}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonBgColor}
                                        onClick={handleAddToCart}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default ProductListCard1;