import React, { useRef } from "react";
import Slider from "react-slick";
import SlideImg from "../assets/images/footer-hero-img.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <>


            <div className='bg-gradient-to-r from-[#474747] to-[#222222] shadow-[0px_10px_15px_0px] shadow-[#9797971F] relative'>
                <div className="absolute -top-1/3 left-1/2 -translate-x-1/2">
                    
                    <div className="max-w-[1064px] max-[1100px]:max-w-4xl max-[920px]:max-w-3xl max-md:max-w-2xl max-[710px]:max-w-xl max-sm:max-w-[500px] max-[500px]:max-w-[400px] max-[400px]:max-w-[340px] w-full mx-auto bg-gradient-to-r from-[#474747] to-[#222222] pt-16 px-16 pb-14 max-sm:px-4 max-sm:pt-8 max-sm:pb-10 max-lg:pt-8 max-lg:px-10 relative shadow-[0px_10px_15px_0px] shadow-[#00000014]">
                            <Slider ref={sliderRef} {...settings}>
                                <div>
                                    <div className="flex items-start max-lg:flex-col max-lg:justify-center max-lg:items-center">
                                        <div className="relative h-[420px] max-lg:h-[300px] max-md:h-[250px]">
                                            <img src={SlideImg} alt="slideimg" className="max-w-[269px] max-md:h-full max-lg:mx-auto max-md:w-60 object-cover" />
                                            <div className="absolute  -right-1/2 bottom-0 max-lg:-bottom-24 max-md:-bottom-14 max-md:hidden">
                                                <div className="font-poppins pt-10 max-md:pt-4 px-5 pb-4 bg-white relative max-md:px-2 max-md:pb-2">
                                                    <h2 className="font-semibold text-xxl max-md:text-xl leading-8 text-dark pb-2 max-md:pb-1 text-center">Jacob Molen</h2>
                                                    <p className="text-xsm leading-5 max-md:leading-2 text-dark-gray max-w-[222px]">We like the final result this project,
                                                        in extraordinary and also provides
                                                        the best service to the client </p>
                                                    <div className="h-16 w-16 max-md:w-10 max-md:h-10 rounded-full flex items-center justify-center bg-white shadow-[0px_10px_15px_0px] shadow-[#2387C026] absolute -top-8 left-1/2 -translate-x-1/2 max-md:-top-6">
                                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.61435 2.45748C2.60815 1.38011 4.11194 0.833984 6.08323 0.833984H6.79156V2.83078L6.22206 2.94482C5.25165 3.1389 4.57661 3.52069 4.21536 4.08098C4.02686 4.38283 3.91996 4.72843 3.90511 5.08398H6.08323C6.27109 5.08398 6.45126 5.15861 6.5841 5.29145C6.71694 5.42429 6.79156 5.60446 6.79156 5.79232V10.7507C6.79156 11.5319 6.15619 12.1673 5.3749 12.1673H1.1249C0.937035 12.1673 0.756868 12.0927 0.624029 11.9599C0.491191 11.827 0.416563 11.6468 0.416563 11.459V7.91732L0.418688 5.84969C0.412313 5.77107 0.27773 3.90815 1.61435 2.45748ZM13.1666 12.1673H8.91656C8.7287 12.1673 8.54853 12.0927 8.4157 11.9599C8.28286 11.827 8.20823 11.6468 8.20823 11.459V7.91732L8.21036 5.84969C8.20398 5.77107 8.0694 3.90815 9.40602 2.45748C10.3998 1.38011 11.9036 0.833984 13.8749 0.833984H14.5832V2.83078L14.0137 2.94482C13.0433 3.1389 12.3683 3.52069 12.007 4.08098C11.8185 4.38283 11.7116 4.72843 11.6968 5.08398H13.8749C14.0628 5.08398 14.2429 5.15861 14.3758 5.29145C14.5086 5.42429 14.5832 5.60446 14.5832 5.79232V10.7507C14.5832 11.5319 13.9479 12.1673 13.1666 12.1673Z" fill="#0A72AD" />
                                                        </svg>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-40 max-lg:pt-24 max-md:pt-6 max-lg:ps-0 max-lg:text-center">
                                            <h2 className="font-semibold text-[32px] leading-xl max-md:leading-10 text-white max-md:text-xxxl max-sm:text-2xl">
                                                What we have done & what our Customers say
                                            </h2>
                                            <p className="font-medium text-lg leading-7 text-gray mt-4 max-md:mt-2">
                                                We are here to help you build an excellent build. With us, nothing is impossible. See what we have done and what our customers have to say about our performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-start max-lg:flex-col max-lg:justify-center max-lg:items-center">
                                        <div className="relative h-[420px] max-lg:h-[300px] max-md:h-[250px]">
                                            <img src={SlideImg} alt="slideimg" className="max-w-[269px] max-md:h-full max-lg:mx-auto max-md:w-60 object-cover" />
                                            <div className="absolute  -right-1/2 bottom-0 max-lg:-bottom-24 max-md:-bottom-14 max-md:hidden">
                                                <div className="font-poppins pt-10 max-md:pt-4 px-5 pb-4 bg-white relative max-md:px-2 max-md:pb-2">
                                                    <h2 className="font-semibold text-xxl max-md:text-xl leading-8 text-dark pb-2 max-md:pb-1 text-center">Jacob Molen</h2>
                                                    <p className="text-xsm leading-5 max-md:leading-2 text-dark-gray max-w-[222px]">We like the final result this project,
                                                        in extraordinary and also provides
                                                        the best service to the client </p>
                                                    <div className="h-16 w-16 max-md:w-10 max-md:h-10 rounded-full flex items-center justify-center bg-white shadow-[0px_10px_15px_0px] shadow-[#2387C026] absolute -top-8 left-1/2 -translate-x-1/2 max-md:-top-6">
                                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.61435 2.45748C2.60815 1.38011 4.11194 0.833984 6.08323 0.833984H6.79156V2.83078L6.22206 2.94482C5.25165 3.1389 4.57661 3.52069 4.21536 4.08098C4.02686 4.38283 3.91996 4.72843 3.90511 5.08398H6.08323C6.27109 5.08398 6.45126 5.15861 6.5841 5.29145C6.71694 5.42429 6.79156 5.60446 6.79156 5.79232V10.7507C6.79156 11.5319 6.15619 12.1673 5.3749 12.1673H1.1249C0.937035 12.1673 0.756868 12.0927 0.624029 11.9599C0.491191 11.827 0.416563 11.6468 0.416563 11.459V7.91732L0.418688 5.84969C0.412313 5.77107 0.27773 3.90815 1.61435 2.45748ZM13.1666 12.1673H8.91656C8.7287 12.1673 8.54853 12.0927 8.4157 11.9599C8.28286 11.827 8.20823 11.6468 8.20823 11.459V7.91732L8.21036 5.84969C8.20398 5.77107 8.0694 3.90815 9.40602 2.45748C10.3998 1.38011 11.9036 0.833984 13.8749 0.833984H14.5832V2.83078L14.0137 2.94482C13.0433 3.1389 12.3683 3.52069 12.007 4.08098C11.8185 4.38283 11.7116 4.72843 11.6968 5.08398H13.8749C14.0628 5.08398 14.2429 5.15861 14.3758 5.29145C14.5086 5.42429 14.5832 5.60446 14.5832 5.79232V10.7507C14.5832 11.5319 13.9479 12.1673 13.1666 12.1673Z" fill="#0A72AD" />
                                                        </svg>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-40 max-lg:pt-24 max-md:pt-6 max-lg:ps-0 max-lg:text-center">
                                            <h2 className="font-semibold text-[32px] leading-xl max-md:leading-10 text-white max-md:text-xxxl max-sm:text-2xl">
                                                What we have done & what our Customers say
                                            </h2>
                                            <p className="font-medium text-lg leading-7 text-gray mt-4 max-md:mt-2">
                                                We are here to help you build an excellent build. With us, nothing is impossible. See what we have done and what our customers have to say about our performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                               
                                
                                
                            </Slider>
                            <div className="flex absolute w-full bottom-[60px] right-0 px-16 justify-end gap-4 max-lg:bottom-0 max-lg:justify-center">
                                <button
                                    onClick={handlePrev}
                                    className="prev w-10 h-10 flex items-center justify-center group/btn transition-all duration-300 hover:bg-blue"
                                >
                                    <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.19559 9.68124L9.42967 13.914L9.42972 13.914C9.65143 14.1357 9.77599 14.4364 9.77599 14.75C9.77599 15.0635 9.65143 15.3642 9.42972 15.586C9.208 15.8077 8.9073 15.9322 8.59375 15.9322C8.2802 15.9322 7.9795 15.8077 7.75778 15.586L1.50814 9.33631C1.39813 9.22659 1.31086 9.09623 1.25131 8.95272C1.19176 8.80921 1.1611 8.65537 1.1611 8.49999C1.1611 8.34461 1.19176 8.19077 1.25131 8.04726C1.31086 7.90375 1.39813 7.77339 1.50814 7.66367L7.75778 1.41402C7.9795 1.19231 8.2802 1.06775 8.59375 1.06775C8.9073 1.06775 9.208 1.19231 9.42972 1.41402C9.65143 1.63574 9.77599 1.93644 9.77599 2.24999C9.77599 2.56354 9.65143 2.86425 9.42972 3.08596L9.42967 3.086L5.19559 7.31874L22.6562 7.31874C22.9695 7.31874 23.27 7.44319 23.4915 7.66472L23.2098 7.94642L23.4915 7.66472C23.713 7.88625 23.8375 8.1867 23.8375 8.49999C23.8375 8.81328 23.713 9.11373 23.4915 9.33526C23.27 9.55679 22.9695 9.68124 22.6562 9.68124H5.19559Z" fill="white" stroke="white" strokeWidth="0.8" />
                                    </svg>

                                </button>
                                <button
                                    onClick={handleNext}
                                    className="next w-10 h-10 flex items-center justify-center group/btn transition-all duration-300 hover:bg-blue"
                                >
                                    <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.8044 9.68124L15.5703 13.914L15.5703 13.914C15.3486 14.1357 15.224 14.4364 15.224 14.75C15.224 15.0635 15.3486 15.3642 15.5703 15.586C15.792 15.8077 16.0927 15.9322 16.4062 15.9322C16.7198 15.9322 17.0205 15.8077 17.2422 15.586L23.4919 9.33631C23.6019 9.22659 23.6891 9.09623 23.7487 8.95272C23.8082 8.80921 23.8389 8.65537 23.8389 8.49999C23.8389 8.34461 23.8082 8.19077 23.7487 8.04726C23.6891 7.90375 23.6019 7.77339 23.4919 7.66367L17.2422 1.41402C17.0205 1.19231 16.7198 1.06775 16.4062 1.06775C16.0927 1.06775 15.792 1.19231 15.5703 1.41402C15.3486 1.63574 15.224 1.93644 15.224 2.24999C15.224 2.56354 15.3486 2.86425 15.5703 3.08596L15.5703 3.086L19.8044 7.31874L2.34375 7.31874C2.03046 7.31874 1.73001 7.44319 1.50848 7.66472L1.79018 7.94642L1.50848 7.66472C1.28695 7.88625 1.1625 8.1867 1.1625 8.49999C1.1625 8.81328 1.28695 9.11373 1.50848 9.33526C1.73001 9.55679 2.03046 9.68124 2.34375 9.68124H19.8044Z" fill="white" stroke="white" strokeWidth="0.8" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                </div>
                <div className='max-w-xxl mx-auto px-4 pb-20 pt-[420px] max-sm:pb-10 max-md:pt-80 max-sm:pt-72'>
                    <div className='flex flex-wrap flex-row -mx-3 justify-between'>
                        <div className='w-full md:w-6/12 px-4 max-sm:text-center'>
                            <div>
                                <p className='font-poppins text-white font-semibold text-base leading-6'>General Project</p>
                                <p className='font-dm-sans text-white font-normal text-base leading-7 py-8 max-sm:py-5'>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>
                                <div className='flex items-center gap-[6px] max-sm:justify-center'>
                                    <a href="https://www.google.com/" target='_blank'>
                                        <div className='w-[40px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center group/icon hover:bg-white transition-all duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-google group-hover:fill-blue-400" viewBox="0 0 16 16">
                                                <path className="group-hover/icon:fill-very-dark-blue transition-all duration-300" d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://x.com/i/flow/login" target='_blank'>
                                        <div className='w-[40px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center group/icon hover:bg-white transition-all duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter group-hover:fill-blue-400" viewBox="0 0 16 16">
                                                <path className="group-hover/icon:fill-very-dark-blue transition-all duration-300" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/accounts/login/" target='_blank'>
                                        <div className='w-[40px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center group/icon hover:bg-white transition-all duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                                <path className="group-hover/icon:fill-very-dark-blue transition-all duration-300" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/feed/" target='_blank'>
                                        <div className='w-[40px] h-[40px] bg-very-dark-blue rounded-full flex items-center justify-center group/icon hover:bg-white transition-all duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                <path className="group-hover/icon:fill-very-dark-blue transition-all duration-300" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-5/12 px-3 max-md:pt-6'>
                            <div className='flex flex-wrap flex-row -mx-3'>
                                <div className='w-full sm:w-5/12 px-4 max-sm:text-center'>
                                    <ul className='font-dm-sans text-white'>
                                        <li className='font-bold text-lg pb-7 max-sm:pb-4'>Company</li>
                                        <li className='pb-6 max-sm:pb'><a href="#header" className="font-normal text-base relative group">
                                            About
                                            <div className="bg-white h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li className='pb-6 max-sm:pb-4'><a href="#make" className="font-normal text-base relative group">
                                            How it Works
                                            <div className="bg-white h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li className='pb-6 max-sm:pb-4'><a href="#story" className="font-normal text-base relative group">
                                            Term
                                            <div className="bg-white h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li className=''><a href="#news" className="font-normal text-base relative group">
                                            Privacy Policy
                                            <div className="bg-white h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-full sm:w-5/12 px-3 max-sm:text-center max-sm:pt-8'>
                                    <ul className='font-dm-sans text-white'>
                                        <li className='font-bold text-lg pb-7 max-sm:pb-4'>More</li>
                                        <li className='pb-6 max-sm:pb-4'><a href="#collection" className="font-normal text-base relative group">
                                            Documentation
                                            <div className="bg-white h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
                                        </a>
                                        </li>
                                        <li><a href="#excellent" className="font-normal text-base relative group">
                                            License
                                            <div className="bg-white h-[1px] absolute bottom-0 left-1/2 right-1/2 group-hover:left-0 group-hover:right-0 origin-center transition-all duration-300"></div>
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