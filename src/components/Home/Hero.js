import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../../images/hero.png";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "Lessons and insights",
      highlight: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      button: "Register",
      image: {hero},
    },
    {
      title: "Build your skills",
      highlight: "with our courses",
      description: "Join us to learn the secrets of business success and creativity.",
      button: "Join Now",
      image: {hero},
    },
    {
      title: "Empower your business",
      highlight: "with new ideas",
      description: "Discover strategies and insights for growth in the digital world.",
      button: "Get Started",
      image: {hero},
    },
  ];

  return (
    <div className="bg-gray-100 ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="overflow-hidden">
          <div className="md:flex items-center justify-between p-10 md:space-y-0 space-y-6">
            {/* Text Section */}
            <div className="">
              <h1 className="text-4xl font-bold leading-tight text-gray-800">
                {slide.title}{" "}
                <span className="text-green-500">{slide.highlight}</span>
              </h1>
              <p className="text-gray-600 text-lg mt-4">{slide.description}</p>
              <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
                {slide.button}
              </button>
            </div>
            {/* Image Section */}
            <div className=" ">
              <img
                src={slide.image.hero}
                alt="Hero Slide"
                className="md:h-[500px] md:w-[500px]"
              />
            </div>
          </div>
          </div>
        ))}
      </Slider>
        {/* Custom CSS for Dots */}
        <style>
        {`
          .slick-dots {
            position: absolute;
            bottom: 15px;
            display: flex !important;
            justify-content: center;
            width: 100%;
          }

          .slick-dots li button:before {
            font-size: 12px;
            color: #4CAF50; /* Green color */
          }

          .slick-dots li.slick-active button:before {
            color: #388E3C; /* Darker green for active dot */
          }
        `}
      </style>
    </div>
  );
};

export default Hero;

