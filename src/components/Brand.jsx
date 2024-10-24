import React from "react";
import img1 from "../assets/images/adira.webp"
import img2  from "../assets/images/adhimix.webp"
import img3 from "../assets/images/holcim.webp"
import img4 from "../assets/images/mnc.webp"
import img5 from "../assets/images/telkomse.webp"
const Brand = () => {
    return (
        <section className="py-14 max-lg:py-12 max-md:py-10 max-sm:py-8">
            <div className="max-w-xxl px-4 mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-1/3 lg:w-1/5 px-3">
                        <div className="flex justify-center">
                            <img src={img1} alt="img1" className="max-w-[163px] w-full cursor-pointer" />
                            </div>
                    </div>
                    <div className="w-1/3 lg:w-1/5 px-3">
                        <div className="flex justify-center">
                            <img src={img2} alt="img2" className="max-w-[143px] w-full cursor-pointer" />
                            </div>
                    </div>
                    <div className="w-1/3 lg:w-1/5 px-3">
                        <div className="flex justify-center">
                            <img src={img3} alt="img3" className="max-w-[126px] w-full cursor-pointer" />
                            </div>
                    </div>
                    <div className="w-1/2 lg:w-1/5 px-3">
                        <div className="flex justify-center">
                            <img src={img4} alt="img4" className="max-w-[146px] w-full cursor-pointer" />
                            </div>
                    </div>
                    <div className="w-1/2 lg:w-1/5 px-3">
                        <div className="flex justify-center">
                            <img src={img5} alt="img5" className="max-w-[196px] w-full cursor-pointer" />
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;