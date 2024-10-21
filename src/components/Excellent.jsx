import React, { useState } from "react";
import Image1 from "../assets/images/industrial.webp";
import Image2 from "../assets/images/commercial.webp";
import Image3 from "../assets/images/resedential.webp";

const Excellent = () => {
    const CARDS = [
        {
            img: Image1,
            title: "Industrial",
            para: "Industrial development is our main line of business.We do Factory Construction, Warehouse and others",
        },
        {
            img: Image2,
            title: "Commercial",
            para: "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings",
        },
        {
            img: Image3,
            title: "Resedential",
            para: "Residential development is the beginning that has shaped us to this day.Our development includes Houses & Apartments",
        },
    ];
    return (
        <div className="bg-light-gray font-poppins">
            <div className="max-w-xxl mx-auto px-4 pt-20 max-sm:pt-10">
                <div className="flex items-center justify-between w-full max-lg:flex-col max-lg:text-center">
                    <h2 className="font-semibold text-xxxxl max-w-[304px] leading-xl max-sm:text-4xl">Our Excellent
                        Services</h2>
                    <p className="font-medium text-lg leading-7 max-w-xl text-gray max-lg:pt-4 max-sm:text-base max-lg:max-w-full">Check out our best service you can possibly orders in building
                        your company and don't forget to ask via our email or our
                        customer service if you are interested in using our services</p>
                </div>
                <div className="flex flex-wrap flex-row -mx-3 pt-20 max-lg:pt-12 max-sm:pt-8 max-sm:pb-10 pb-[71px] justify-center">
                    {CARDS.map((obj, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-6 pb-6">
                            <div className="">
                                <div>
                                    <img src={obj.img} alt={obj.title} className="border-[15px] border-white" />
                                </div>
                                <h3 className="font-semibold text-xxxl leading-10 py-9 max-sm:py-5 max-sm:text-2xl">
                                    {obj.title}
                                </h3>
                                <p className="text-lg leading-7 text-gray max-sm:text-base">{obj.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Excellent