import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import AvatarImg from "../assets/girl.png"; // Adjust as per your project

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  centerMode: true,
  centerPadding: "13%",
  pauseOnHover: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "0%",
      },
    },
  ],
};

const mobileSliderSettings = {
  ...sliderSettings,
  arrows: false,
  swipe: false,
  draggable: false,
  infinite: false,
};

const slides = [
  {
    id: 1,
    title: (
      <>
        Your AI Prompt <br className="responsive-br" />
        Prompts templates
      </>
    ),
    description: "Use pre-made templates to boost creativity",
    background: "bg-gradient-to-r from-[#4B0082] to-[#9370DB]",
  },
  {
    id: 2,
    title: (
      <>
        Take Your <br className="responsive-br" /> Gaming Business
      </>
    ),
    description:
      "Level up your gaming business with our expert tools and support.",
    background:
      "bg-[#FB6F4D] lg:bg-gradient-to-r lg:from-[#FF7B54] lg:to-[#FFB347]",
  },
  {
    id: 3,
    title: (
      <>
        Build Your <br className="responsive-br" /> Gaming Empire
      </>
    ),
    description:
      "Create and manage your own gaming platform with our tools and support.",
    background: "bg-gradient-to-r from-[#6a0a91] to-[#a411c4]",
  },
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slidesToShow = isMobile ? slides.filter((s) => s.id === 1) : slides;

  return (
    <div className="relative overflow-x-hidden px-10">
      <Slider
        {...(isMobile ? mobileSliderSettings : sliderSettings)}
        className="hero-slider relative overflow-visible mt-8"
      >
        {slidesToShow.map((slide) => (
          <div
            key={slide.id}
            className="px-2 lg:px-0 transition-all duration-300"
          >
            <div
              className={`overflow-hidden rounded-[16px] lg:rounded-[32px] shadow-xl relative ${slide.background}`}
            >
              <div className="relative z-10 max-w-7xl mx-auto lg:px-8 py-10 flex flex-col items-center text-white text-center">
                <img
                  src={AvatarImg}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold"
                  style={{ fontFamily: "Baloo, sans-serif" }}
                >
                  {slide.title}
                </h1>
                <p className="mt-2 text-sm md:text-base">{slide.description}</p>
              </div>
              <div className="absolute top-[-50px] left-0 right-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent pointer-events-none z-20 lg:hidden" />
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom styles for slider behavior */}
      <style>{`
        .hero-slider {
          left: 200px;
        }
        .hero-slider .slick-slide {
          transition: all 0.3s ease;
          transform: scale(1);
          opacity: 0.7;
          filter: blur(4px);
          z-index: 0;
        }
        .hero-slider .slick-center {
          transform: scale(1.1);
          opacity: 1;
          filter: blur(0);
          z-index: 10;
        }
        .hero-slider .slick-list {
          overflow: visible;
          padding: 20px 0 !important;
        }
        .hero-slider .slick-track {
          display: flex;
          align-items: center;
        }
        @media (max-width: 1400px) {
          .hero-slider { left: 180px; }
        }
        @media (max-width: 1100px) {
          .hero-slider { left: 150px; }
        }
        @media (max-width: 1023px) {
          .hero-slider {
            left: unset;
          }
          .hero-slider .slick-slide {
            transform: scale(1);
            opacity: 1;
            filter: none;
          }
        }
        @media (max-width: 1280px) {
          .responsive-br { display: none; }
        }
          
.hero-slider .slick-dots {
  left: -150px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 40px;
  margin: 0;
  list-style: none;
  position: relative;
}

.hero-slider .slick-dots li {
  margin: 0;
  transition: all 0.3s ease;
}

.hero-slider .slick-dots li button {
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  position: relative;
}

.hero-slider .slick-dots li button:before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  background: #4A90E2; /* Blue color */
  border-radius: 50% 40% 60% 50%; /* Organic shape */
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 6px rgba(74, 144, 226, 0.3);
  transform: rotate(0deg);
}

.hero-slider .slick-dots li.slick-active button:before {
  background: #4A90E2; /* Blue color */
  border-radius: 45% 55% 40% 60%; /* Different organic shape */
  transform: rotate(45deg) scale(1.4);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.5);
  width: 16px;
  height: 16px;
}

/* Hover effect for non-active dots */
.hero-slider .slick-dots li:not(.slick-active):hover button:before {
  background: #6BB3F9; /* Lighter blue on hover */
  border-radius: 55% 45% 50% 50%;
  transform: rotate(15deg) scale(1.2);
}

/* Mobile responsive */
@media (max-width: 640px) {
  .hero-slider .slick-dots {
    bottom: -40px;
    gap: 10px;
  }
  
  .hero-slider .slick-dots li button:before {
    width: 12px;
    height: 12px;
  }
  
  .hero-slider .slick-dots li.slick-active button:before {
    transform: rotate(45deg) scale(1.6);
    width: 14px;
    height: 14px;
  }
}
      `}</style>
    </div>
  );
};

export default HeroSection;
