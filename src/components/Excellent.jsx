import React from "react";
import Image1 from "../assets/images/industrial.webp";
import Image2 from "../assets/images/commercial.webp";
import Image3 from "../assets/images/resedential.webp";

const Excellent = () => {
    const CARDS = [
        {
            img: Image1,
            title: "Industrial",
            para: "Industrial development is our main line of business. We do Factory Construction, Warehouse and others.",
        },
        {
            img: Image2,
            title: "Commercial",
            para: "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings.",
        },
        {
            img: Image3,
            title: "Residential",
            para: "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments.",
        },
    ];

    return (
        <div id="exellent" className="bg-light-gray font-poppins">
            <div className="max-w-xxl px-4 mx-auto pt-20 max-sm:pt-10 max-lg:pt-14 max-sm:pb-10 pb-[71px] max-lg:pb-14">
                <div className="flex items-center justify-between w-full max-lg:flex-col max-lg:text-center">
                    <h2 className="text-dark font-semibold text-xxxxl max-w-[304px] leading-xl max-lg:text-4xl max-sm:text-xxxl max-lg:mx-auto max-lg:max-w-none">
                        Our Excellent Services
                    </h2>
                    <p className="font-medium text-lg leading-7 max-w-xl text-gray max-lg:pt-4 max-lg:text-base max-lg:max-w-full">
                        Check out our best service you can possibly order in building your company and don't forget to ask via our email or our customer service if you are interested in using our services.
                    </p>
                </div>
                <div className="flex flex-wrap flex-row -mx-3 pt-20 max-lg:pt-0 max-sm:pt-0 justify-center ">
                    {CARDS.map((obj, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-6 pt-12 max-sm:pt-8 max-sm:text-center">
                            <div className="group">
                                <div className="overflow-hidden border-[15px] border-white w-full">
                                    <img
                                        src={obj.img}
                                        alt={obj.title}
                                        className=" transition-transform  duration-300 group-hover:scale-[1.04] object-cover h-[257px] w-full"
                                    />
                                </div>
                                <h3 className="font-semibold text-xxxl leading-10 pt-9 pb-9  max-lg:py-7 max-md:py-5 max-sm:py-5 max-lg:text-2xl text-dark">
                                    {obj.title}
                                </h3>
                                <p className="text-lg leading-7 text-gray max-lg:text-base font-medium">{obj.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Excellent;
