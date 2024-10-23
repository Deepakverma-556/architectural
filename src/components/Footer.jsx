import React from "react";
import Slider from "react-slick";
import SlideImg from "../assets/images/slick-img.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
           

            <div className='bg-gradient-to-r from-[#474747] to-[#222222] shadow-[0px_10px_15px_0px] shadow-[#9797971F] relative'>
                <div className="absolute -top-1/3 left-1/2 -translate-x-1/2">
                    <div className="max-w-7xl mx-auto px-4 font-poppins">
                        <div className="max-w-[1064px] mx-auto bg-gradient-to-r from-[#474747] to-[#222222] p-16">
                            <Slider {...settings}>
                                <div>
                                    <div className="flex items-start gap-5">
                                        <div>
                                            <img src={SlideImg} alt="slideimg" className="max-w-[400px]" />
                                        </div>
                                        <div className="">
                                            <h2 className="font-semibold text-[32px] leading-xl text-white">
                                                What we have done & what our Customers say
                                            </h2>
                                            <p className="font-medium text-lg leading-7 text-gray mt-4">
                                                We are here to help you build an excellent build. With us, nothing is impossible. See what we have done and what our customers have to say about our performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-start gap-5">
                                        <div>
                                            <img src={SlideImg} alt="slideimg" className="max-w-[400px]" />
                                        </div>
                                        <div className="">
                                            <h2 className="font-semibold text-[32px] leading-xl text-white">
                                                What we have done & what our Customers say
                                            </h2>
                                            <p className="font-medium text-lg leading-7 text-gray mt-4">
                                                We are here to help you build an excellent build. With us, nothing is impossible. See what we have done and what our customers have to say about our performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='max-w-xxl mx-auto px-4 pb-20 pt-[420px] max-sm:pb-10'>
                    <div className='flex flex-wrap flex-row -mx-3 justify-between'>
                        <div className='w-full  md:w-6/12 px-4 max-sm:text-center'>
                            <div >
                                <p className='font-poppins text-white font-semibold text-base leading-6'>General Project</p>
                                <p className='font-dm-sans text-white font-normal text-base leading-7 py-8 max-sm:py-5'>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>
                                <div className='flex items-center gap-[6px] max-sm:justify-center'>
                                    <a href="https://www.google.com/" target='_blank'><div className='w-[42px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                        </svg>
                                    </div>
                                    </a>
                                    <a href="https://x.com/i/flow/login" target='_blank'><div className='w-[42px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                        </svg>
                                    </div>
                                    </a>
                                    <a href="https://www.instagram.com/accounts/login/" target='_blank'><div className='w-[42px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.33301 3.74023C5.33301 3.74023 3.73926 5.36523 3.73926 7.33398C3.73926 9.33398 5.33301 10.9277 7.33301 10.9277C9.30176 10.9277 10.9268 9.33398 10.9268 7.33398C10.9268 5.36523 9.30176 3.74023 7.33301 3.74023ZM7.33301 9.67773C6.05176 9.67773 4.98926 8.64648 4.98926 7.33398C4.98926 6.05273 6.02051 5.02148 7.33301 5.02148C8.61426 5.02148 9.64551 6.05273 9.64551 7.33398C9.64551 8.64648 8.61426 9.67773 7.33301 9.67773ZM11.8955 3.61523C11.8955 3.14648 11.5205 2.77148 11.0518 2.77148C10.583 2.77148 10.208 3.14648 10.208 3.61523C10.208 4.08398 10.583 4.45898 11.0518 4.45898C11.5205 4.45898 11.8955 4.08398 11.8955 3.61523ZM14.2705 4.45898C14.208 3.33398 13.958 2.33398 13.1455 1.52148C12.333 0.708984 11.333 0.458984 10.208 0.396484C9.05176 0.333984 5.58301 0.333984 4.42676 0.396484C3.30176 0.458984 2.33301 0.708984 1.48926 1.52148C0.676758 2.33398 0.426758 3.33398 0.364258 4.45898C0.301758 5.61523 0.301758 9.08398 0.364258 10.2402C0.426758 11.3652 0.676758 12.334 1.48926 13.1777C2.33301 13.9902 3.30176 14.2402 4.42676 14.3027C5.58301 14.3652 9.05176 14.3652 10.208 14.3027C11.333 14.2402 12.333 13.9902 13.1455 13.1777C13.958 12.334 14.208 11.3652 14.2705 10.2402C14.333 9.08398 14.333 5.61523 14.2705 4.45898ZM12.7705 11.459C12.5518 12.084 12.0518 12.5527 11.458 12.8027C10.5205 13.1777 8.33301 13.084 7.33301 13.084C6.30176 13.084 4.11426 13.1777 3.20801 12.8027C2.58301 12.5527 2.11426 12.084 1.86426 11.459C1.48926 10.5527 1.58301 8.36523 1.58301 7.33398C1.58301 6.33398 1.48926 4.14648 1.86426 3.20898C2.11426 2.61523 2.58301 2.14648 3.20801 1.89648C4.11426 1.52148 6.30176 1.61523 7.33301 1.61523C8.33301 1.61523 10.5205 1.52148 11.458 1.89648C12.0518 2.11523 12.5205 2.61523 12.7705 3.20898C13.1455 4.14648 13.0518 6.33398 13.0518 7.33398C13.0518 8.36523 13.1455 10.5527 12.7705 11.459Z" fill="white" />
                                        </svg>
                                    </div>
                                    </a>
                                    <a href="https://www.linkedin.com/feed/" target='_blank'><div className='w-[42px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.333 0.333984H1.30176C0.770508 0.333984 0.333008 0.802734 0.333008 1.36523V13.334C0.333008 13.8965 0.770508 14.334 1.30176 14.334H13.333C13.8643 14.334 14.333 13.8965 14.333 13.334V1.36523C14.333 0.802734 13.8643 0.333984 13.333 0.333984ZM4.55176 12.334H2.48926V5.67773H4.55176V12.334ZM3.52051 4.74023C2.83301 4.74023 2.30176 4.20898 2.30176 3.55273C2.30176 2.89648 2.83301 2.33398 3.52051 2.33398C4.17676 2.33398 4.70801 2.89648 4.70801 3.55273C4.70801 4.20898 4.17676 4.74023 3.52051 4.74023ZM12.333 12.334H10.2393V9.08398C10.2393 8.33398 10.2393 7.33398 9.17676 7.33398C8.08301 7.33398 7.92676 8.17773 7.92676 9.05273V12.334H5.86426V5.67773H7.83301V6.58398H7.86426C8.14551 6.05273 8.83301 5.49023 9.83301 5.49023C11.9268 5.49023 12.333 6.89648 12.333 8.67773V12.334Z" fill="white" />
                                        </svg>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full  md:w-5/12 px-3 max-md:pt-6'>
                            <div className='flex flex-wrap flex-row -mx-3'>
                                <div className='w-full sm:w-5/12 px-4 max-sm:text-center'>
                                    <ul className='font-dm-sans text-white'>
                                        <li className='font-bold text-lg pb-7 max-sm:pb-4'>Company</li>
                                        <li className='pb-6 max-sm:pb'><a href="#" className="font-normal text-base relative group">
                                            About
                                            <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li className='pb-6 max-sm:pb-4'><a href="#" className="font-normal text-base relative group">
                                            How it Works
                                            <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li className='pb-6 max-sm:pb-4'><a href="#" className="font-normal text-base relative group">
                                            Term
                                            <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li className=''><a href="#" className="font-normal text-base relative group">
                                            Privacy Policy
                                            <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-full sm:w-5/12 px-3 max-sm:text-center max-sm:pt-8'>
                                    <ul className='font-dm-sans text-white'>
                                        <li className='font-bold text-lg pb-7 max-sm:pb-4'>More</li>
                                        <li className='pb-6 max-sm:pb-4'><a href="#" className="font-normal text-base relative group">
                                            Documentation
                                            <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li><a href="#" className="font-normal text-base relative group">
                                            License
                                            <div className="bg-gray h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer