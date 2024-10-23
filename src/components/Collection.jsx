import React from 'react'
import Image1 from '../assets/images/sec-8-1-img (1).webp';
import Image2 from '../assets/images/sec-8-2-img.webp'
import Image3 from '../assets/images/sec-8-3-img.webp';
import Image4 from '../assets/images/sec-8-4-img.webp'

const Collection = () => {
    const PROJECTS = [
        {
            image: Image1,
            title: 'Treasuru Tower',
            status: 'Project Completed',
        },
        {
            image: Image2,
            title: 'Treasuru Tower',
            status: 'Project Ongoing',
        },
        {
            image: Image3,
            title: 'Treasuru Tower',
            status: 'Project Completed',
        },
        {
            image: Image4,
            title: 'Treasuru Tower',
            status: 'Project Ongoing',
        },
    ];
    return (
        <div className='font-poppins'>
            <div className='max-w-xxl mx-auto px-4 pt-[55px] max-sm:pt-10 pb-20 max-sm:pb-10'>
                <h2 className='text-dark text-xxxxl font-semibold leading-xxl max-w-[326px] max-lg:mx-auto max-lg:max-w-none max-lg:text-4xl max-lg:text-center'>
                    Our collection
                    best project
                </h2>
                <div className='flex flex-wrap flex-row -mx-3 pt-9 justify-center'>
                    {PROJECTS.map((obj , i) => (
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 pt-6 max-sm:pt-5' key={i}>
                            <div className='relative group overflow-y-hidden'>
                                <img src={obj.image} alt="building-image" className='max-lg:h-[420px] max-sm:w-[250px] max-sm:h-[350px] mx-auto w-full object-cover' />
                                <div className='bg-white  py-4 px-4 flex gap-5 items-center justify-center absolute group-hover:bottom-2 left-1/2 -translate-x-1/2 transition-all duration-300 transform group-hover:translate-y-0 translate-y-[100%]'>
                                    <div>
                                        <p className='font-semibold text-base leading-6 text-dark max-lg:text-sm text-nowrap'>{obj.title}</p>
                                        <p className='font-medium text-xsm leading-4 text-gray text-nowrap'>{obj.status}</p>
                                    </div>
                                    <div className='w-[57px] h-[57px] bg-dark-blue flex items-center justify-center'>
                                        <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.8044 9.68124L15.5703 13.914L15.5703 13.914C15.3486 14.1357 15.224 14.4364 15.224 14.75C15.224 15.0635 15.3486 15.3642 15.5703 15.586C15.792 15.8077 16.0927 15.9322 16.4062 15.9322C16.7198 15.9322 17.0205 15.8077 17.2422 15.586L23.4919 9.33631C23.6019 9.22659 23.6891 9.09623 23.7487 8.95272C23.8082 8.80921 23.8389 8.65537 23.8389 8.49999C23.8389 8.34461 23.8082 8.19077 23.7487 8.04726C23.6891 7.90375 23.6019 7.77339 23.4919 7.66367L17.2422 1.41402C17.0205 1.19231 16.7198 1.06775 16.4062 1.06775C16.0927 1.06775 15.792 1.19231 15.5703 1.41402C15.3486 1.63574 15.224 1.93644 15.224 2.24999C15.224 2.56354 15.3486 2.86425 15.5703 3.08596L15.5703 3.086L19.8044 7.31874L2.34375 7.31874C2.03046 7.31874 1.73001 7.44319 1.50848 7.66472L1.79018 7.94642L1.50848 7.66472C1.28695 7.88625 1.1625 8.1867 1.1625 8.49999C1.1625 8.81328 1.28695 9.11373 1.50848 9.33526C1.73001 9.55679 2.03046 9.68124 2.34375 9.68124H19.8044Z" fill="white" stroke="white" strokeWidth="0.8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collection