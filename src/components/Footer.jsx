import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#474747] to-[#222222] shadow-[0px_10px_15px_0px] shadow-[#9797971F]'>
            <div className='max-w-xxl mx-auto px-4'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-1/2 px-3'>
                        <div>
                            <p className='font-poppins text-white font-semibold text-base leading-6'>General Project</p>
                            <p className='font-dm-sans text-white font-normal text-base leading-7'>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>
                            <div>
                                <div className='w-[42px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-google" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 px-3'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer