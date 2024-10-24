import React from "react";
import dianne from "../assets/images/dianne-russell.webp"

const Meet = () => {
    return (
        <section className="py-16 max-md:py-12 max-sm:py-10">
            <div className="max-w-xxl mx-auto px-4 w-full">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full lg:w-1/2 px-3">
                        <div>
                            <img src={dianne} alt="dianne" className="max-lg:max-w-[500px] max-lg:max-h-[500px] w-full h-full mx-auto" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3 max-lg:pt-6 max-lg:text-center">
                        <div>
                            <h2 className="font-poppins text-dark font-semibold text-xxxxl leading-xl max-lg:leading-tight max-lg:text-4xl max-sm:text-xxxl max-sm:leading-8">Meet and talk with our best architecture</h2>
                            <p className="font-poppins font-medium text-lg max-md:text-base leading-7 text-gray pt-9 max-lg:pt-4 pb-16 max-lg:pb-12 max-md:pb-9">All our teams are professional and competent in
                                their fields and will help you realize your dream
                                building with the excellent result.</p>
                            <div className="flex items-center gap-7 max-lg:justify-center">

                                <button className="relative py-5 px-10 overflow-hidden font-semibold text-base leading-6 text-white bg-blue shadow-[0px_10px_15px_0px] shadow-[#01739933] transition-all duration-300 max-sm:py-4 max-sm:px-6 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:duration-300 before:ease-out hover:before:h-full hover:before:w-full hover:before:bg-black hover:shadow-none hover:before:opacity-80">
                                    <span className="relative z-10 text-nowrap">See all team</span></button>
                                <a href="#" className="flex items-center max-w-max gap-4 font-poppins font-semibold text-base leading-7 text-dark transition-all duration-300 group hover:text-blue ">How it works <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="transition-all duration-300 group-hover:fill-blue group-hover:stroke-blue" d="M9.93387 2.56648L9.9339 2.56651L12.5686 5.20035L1.5 5.20035C1.28783 5.20035 1.08434 5.28463 0.934315 5.43466C0.784285 5.58469 0.7 5.78817 0.7 6.00035C0.7 6.21252 0.784286 6.416 0.934315 6.56603C1.08434 6.71606 1.28783 6.80035 1.5 6.80035L12.5686 6.80035L9.9339 9.43418L9.93387 9.43421C9.78372 9.58436 9.69937 9.788 9.69937 10.0003C9.69937 10.2127 9.78372 10.4163 9.93387 10.5665C10.084 10.7166 10.2877 10.801 10.5 10.801C10.7123 10.801 10.916 10.7166 11.0661 10.5665L15.0659 6.56674C15.0659 6.56667 15.066 6.56659 15.0661 6.56652C15.0661 6.56651 15.0661 6.56649 15.0661 6.56648C15.1405 6.49222 15.1995 6.40403 15.2398 6.30696C15.2801 6.20977 15.3009 6.10557 15.3009 6.00035C15.3009 5.89512 15.2801 5.79092 15.2398 5.69373C15.1995 5.59666 15.1405 5.50847 15.0661 5.43421C15.0661 5.4342 15.0661 5.43419 15.0661 5.43417C15.066 5.4341 15.0659 5.43402 15.0659 5.43395L11.0661 1.43421C10.916 1.28407 10.7123 1.19971 10.5 1.19971C10.2877 1.19971 10.084 1.28407 9.93387 1.43421C9.78372 1.58436 9.69937 1.78801 9.69937 2.00035C9.69937 2.21268 9.78372 2.41633 9.93387 2.56648Z" fill="black" stroke="black" strokeWidth="0.6" />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Meet;