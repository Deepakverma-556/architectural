import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/adira.webp"
import img2 from "../assets/images/adhimix.webp"
import img3 from "../assets/images/holcim.webp"
import img4 from "../assets/images/mnc.webp"
import img5 from "../assets/images/telkomse.webp"
const Brand = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="py-14 max-lg:py-12 max-md:py-10 max-sm:py-8 brand">
            <div className="max-w-xxl px-4 mx-auto">
                <Slider {...settings}>
                    <div>
                        <div className="flex justify-center">
                            <img src={img1} alt="img1" className="max-w-[163px] w-full cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src={img2} alt="img2" className="max-w-[143px] w-full cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src={img3} alt="img3" className="max-w-[126px] w-full cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src={img4} alt="img4" className="max-w-[146px] w-full cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src={img5} alt="img5" className="max-w-[196px] w-full cursor-pointer" />
                        </div>
                    </div>
                    
                </Slider>
            </div>

        </section>
    )
}
export default Brand;