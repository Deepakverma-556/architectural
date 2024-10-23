import React from 'react'
import Image1 from '../assets/images/sec-6-img.webp'

const Story = () => {
    return (
        <div className='font-poppins'>
            <div className='max-w-xxl mx-auto px-4 pt-16 pb-[60px] max-lg:pt-10 max-lg:pb-10'>
                <div className='flex flex-wrap flex-row -mx-3 justify-center'>
                    <div className='w-full lg:w-1/2 px-4 '>
                        <div className='max-lg:text-center'>
                            <h2 className='text-dark text-xxxxl font-semibold leading-xxl max-w-[275px] max-lg:mx-auto max-lg:max-w-none max-lg:text-4xl'>
                                Our Story Who we are
                            </h2>
                            <p className='text-lg font-medium leading-7 text-gray pt-6 max-sm:pt-4 max-lg:text-base'>
                                Established in 1992, PT. Wahana Cipta operates as a General
                                Contracting company with a footprint that we have planted
                                throughout Indonesia. Initially, we focused on construction in
                                the field of residential housing development in Jakarta.
                                As the company grows, now we are present as a reliable...
                            </p>
                            <button className="max-sm:py-3 max-sm:px-8 mt-12 py-5 px-10 max-lg:mt-5 font-semibold text-base leading-6 text-white bg-blue shadow-[0px_10px_15px_0px] shadow-[#01739933] transition-all duration-300 hover:shadow-[#23a3eb]">
                                See More
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-4 max-lg:pt-8'>
                        <div className='max-lg:flex max-lg:justify-center border-[15px] border-white shadow-[0px_10px_15px_0px] shadow-[#9797971F] overflow-hidden group max-lg:max-w-[500px] mx-auto'>
                            <img src={Image1} alt="building-image" className="  transition-transform duration-300 group-hover:scale-[1.03]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story