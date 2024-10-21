import React from 'react'
import Image1 from '../assets/images/sec-6-img.webp'

const Story = () => {
    return (
        <div className='font-poppins'>
            <div className='max-w-xxl mx-auto px-4 pt-16 pb-16'>
                <div className='flex flex-wrap flex-row -mx-3 '>
                    <div className='w-1/2 px-4'>
                        <div>
                            <h2 className='text-xxxxl font-semibold leading-xxl max-w-[275px]'>
                                Our Story Who we are
                            </h2>
                            <p className='text-lg font-medium leading-7 text-gray pt-6'>
                                Established in 1992, PT. Wahana Cipta operates as a General
                                Contracting company with a footprint that we have planted
                                throughout Indonesia. Initially, we focused on construction in
                                the field of residential housing development in Jakarta.
                                As the company grows, now we are present as a reliable...
                            </p>
                            <button className="mt-12 py-5 px-10 font-semibold text-base leading-6 text-white bg-blue shadow-[0px_10px_15px_0px] [#01739933]">
                                See More
                            </button>
                       </div>
                    </div>
                    <div className='w-1/2 px-4'>
                        <img src={Image1} alt="building-image" className="border-[15px] border-white shadow-[0px_10px_15px_0px] shadow-[#9797971F]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story