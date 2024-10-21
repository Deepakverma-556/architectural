import React from 'react'

const Make = () => {
    return (
        <div className='font-poppins'>
            <div className='max-w-xxl mx-auto px-4 pt-[74px] max-sm:pt-10'>
                <div className='max-lg:flex max-lg:justify-center'>
                    <svg width="90" height="9" viewBox="0 0 90 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="90" height="9" fill="url(#paint0_linear_14_163)" />
                        <defs>
                            <linearGradient id="paint0_linear_14_163" x1="-2" y1="4.00001" x2="60.5" y2="4.00001" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#60BBEE" />
                                <stop offset="1" stop-color="#2387C0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex items-center justify-between w-full max-lg:flex-col max-lg:text-center pt-10 max-sm:pt-5">
                    <h2 className="font-semibold text-xxxxl max-w-[304px] leading-xl max-sm:text-4xl">What Make Us
                        Different?</h2>
                    <p className="font-medium text-lg leading-7 max-w-xl text-gray max-lg:pt-4 max-sm:text-base max-lg:max-w-full">Check out our best service you can possibly orders in building
                        your company and don't forget to ask via our email or our
                        customer service if you are interested in using our services</p>
                </div>
                <div className='flex flex-wrap flex-row -mx-3 pt-16'>
                    <div className='w-1/4 px-3'>
                        <div className='w-[94px] h-[94px] bg-bluee rounded-full flex items-center justify-center'>
                            <div className='w-[74px] h-[74px] bg-dark-blue rounded-full '>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Make