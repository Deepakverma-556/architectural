import React, { useState } from "react";
import Image1 from "../assets/images/sec-7-1-img (1).webp";
import Image2 from "../assets/images/sec-7-2-img.webp";
import Image3 from "../assets/images/sec-7-3-img.webp";

const News = () => {
    const NEWS = [
        {
            img: Image1,
            date: "12",
            title: "Jan",
            title2: "Elements of Content in Epoxy Paint",
            para: "Epoxy paint and epoxy floor contractor.Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin...",
            span: "Read more",
        },
        {
            img: Image2,
            date: "12",
            title: "Jan",
            title2: "5 Right Steps in Warehouse Planning and Construction",
            para: "Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully.When the planning is done properly, the construction is...",
            span: "Read more",
        },
        {
            img: Image3,
            date: "12",
            title: "Jan",
            title2: "The Right Solution to Build a Sturdy Type 45 House",
            para: "Having a solid home is certainly everyone's dream. How not, the house is a place where the residents can rest and take shelter from the bad weather...",
            span: "Read more",
        },
    ];
    return (
        <div id="term" className='font-poppins'>
            <div className='max-w-xxl mx-auto px-4 pt-[60px] max-sm:pt-10 pb-10 '>
                <div className=" max-lg:text-center">
                    <h2 className='text-dark text-xxxxl font-semibold leading-xxl max-lg:text-4xl max-sm:text-xxxl'>
                        News & Update
                    </h2>
                </div>
                <div className="flex flex-wrap flex-row -mx-3 pt-9 max-sm:pt-1 justify-center">
                    {NEWS.map((obj, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 pt-6 animate__animated animate__backInUp animate__delay-2s">
                            <div className="">
                                <div className="overflow-hidden border-[15px] border-white shadow-[0px_10px_15px_0px] shadow-[#97979714] w-full object-cover">
                                    <img src={obj.img} alt={obj.title} className="object-cover h-[257px] max-lg:h-[300px] max-md:h-[257px] w-full" />
                                </div>
                                <div className="flex gap-4 items-center pr-10 py-4 max-sm:py-2 max-sm:text-center max-sm:pl-5 max-sm:gap-1">
                                    <p className="flex flex-col items-center text-xxxl text-dark font-semibold max-sm:text-lg">
                                        {obj.date} <span className="text-sm font-semibold">{obj.title}</span>
                                    </p>
                                    <p className="font-semibold text-base leading-6 text-dark">{obj.title2}</p>
                                </div>
                                <p className="text-lg leading-7 text-gray max-lg:text-base pr-5 max-sm:pr-0 max-sm:text-center">{obj.para} <span className="text-blue cursor-pointer">{obj.span}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News