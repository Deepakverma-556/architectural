import React, { useState } from "react";
import Image1 from "../assets/images/sec-7-1-img.webp";
import Image2 from "../assets/images/sec-7-2-img.webp";
import Image3 from "../assets/images/sec-7-3-img.webp";

const News = () => {
    const NEWS = [
        {
            img: Image1,
            Date: "12",
            title: "Jan",
            title2:"Elements of Content in Epoxy Paint",
            para: "Epoxy paint and epoxy floor contractor.Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin...",
            span: "Read more",
        },
        {
            img: Image2,
            Date: "12",
            title: "Jan",
            title2: "5 Right Steps in Warehouse Planning and Construction",
            para: "Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully.When the planning is done properly, the construction is...",
            span: "Read more",
        },
        {
            img: Image3,
            Date: "12",
            title: "Jan",
            title2: "The Right Solution to Build a Sturdy Type 45 House",
            para: "Having a solid home is certainly everyone's dream. How not, the house is a place where the residents can rest and take shelter from the bad weather...",
            span: "Read more",
        },
    ];
    return (
        <div className='font-poppins'>
            <div className='max-w-xxl mx-auto px-4 pt-[60px] '>
                <div>
                    <h2 className='text-dark text-xxxxl leading-xxl font-semibold '>
                        News & Update
                    </h2>
                </div>
                <div className="flex flex-wrap flex-row -mx-3 pt-20 max-lg:pt-12 max-sm:pt-8 max-sm:pb-10 pb-[71px] justify-center">
                    {NEWS.map((obj, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-6 pb-6">
                            <div className="">
                                <div>
                                    <img src={obj.img} alt={obj.title} className="border-[15px] border-white" />
                                </div>
                                <h3 className="font-semibold text-xxxl leading-10 py-9 max-sm:py-5 max-lg:text-2xl">
                                    {obj.title}
                                </h3>
                                <p className="text-lg leading-7 text-gray max-lg:text-base">{obj.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News