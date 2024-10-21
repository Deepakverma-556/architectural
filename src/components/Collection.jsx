import React from 'react'
import Image1 from '../assets/images/sec-8-1-img (1).webp';
import Image2 from '../assets/images/sec-8-2-img.webp'
import Image3 from '../assets/images/sec-8-3-img.webp';
import Image4 from '../assets/images/sec-8-4-img.webp'

const Collection = () => {
    return (
        <div className='font-poppins'>
            <div className='max-w-xxl mx-auto px-4 pt-[55px] max-sm:pt-10 pb-20'>
                <h2 className='text-dark text-xxxxl font-semibold leading-xxl max-w-[326px] max-lg:mx-auto max-lg:max-w-none max-lg:text-4xl max-lg:text-center'>
                    Our collection
                    best project
                </h2>
                <div className='flex flex-wrap flex-row -mx-3 pt-9 justify-center'>
                    <div className='w-1/4 px-3'>
                        <div>
                            <img src={Image1} alt="building-image" />
                            <div className='bg-white py-[22px] px-4 flex gap-7 items-center'>
                                <div >
                                    <p className='font-semibold text-base leading-6 text-dark'>Treasuru Tower</p>
                                    <p>Project Completed</p>
                                </div>
                                <div className='w-[57px] h-[57px] bg-dark-blue'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection