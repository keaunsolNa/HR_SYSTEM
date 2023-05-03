import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slidingLogo1 from "../asserts/sliding1.jpg"
import slidingLogo2 from "../asserts/sliding2.jpg"
import slidingLogo3 from "../asserts/sliding3.jpg"

import ApprovalBoxManagement from "./approval/ApporvalBoxManagement"
import ApprovalDoucumentManagement from "./approval/ApprovalDoucumentManagement";

function Main() {


    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        width:10,
      };

    return (
        <>
            <div>
                <Slider {...settings}>
                    <img src={slidingLogo1} alt=""/>
                    <img src={slidingLogo2} alt=""/>
                    <img src={slidingLogo3} alt=""/>
                </Slider>
            </div>
            <div className="mainBox" style={{display: 'flex'}}>
                    <ApprovalBoxManagement/>
                    <ApprovalDoucumentManagement/>
            </div>
        </>
    );
}

export default Main;