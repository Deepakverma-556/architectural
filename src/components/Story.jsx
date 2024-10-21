import React from 'react'
import Image1 from '../assets/images/sec-6-img.webp'

const Story = () => {
    return (
        <div>
            <div className='max-w-xxl mx-auto px-4 pt-16 pb-16'>
                <div className='flex flex-wrap flex-row -mx-3 '>
                    <div className='w-1/2 px-3'>
                        <div>
                            <h2>
                                Our Story Who we are
                            </h2>
                            <p>
                                
                            </p>
                       </div>
                    </div>
                    <div className='w-1/2 px-3'>
                        <img src={Image1} alt="building-image" className="border-[15px] border-white shadow-[0px_10px_15px_0px] shadow-[#9797971F]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story