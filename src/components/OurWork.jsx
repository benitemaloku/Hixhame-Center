import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import GalleryImg1 from "../assets/gallery-img1.jpg";
import GalleryImg2 from "../assets/gallery-img2.jpg";
import GalleryImg3 from "../assets/gallery-img3.jpg";
import GalleryImg4 from "../assets/gallery-img4.jpg";
import GalleryImg5 from "../assets/gallery-img5.jpg";
import GalleryImg6 from "../assets/gallery-img6.jpg";

const images = [
  {
    image: GalleryImg1,
    title: "Hyrja Kryesore",
  },
  {
    image: GalleryImg2,
    title: "Recepsioni",
  },
  {
    image: GalleryImg3,
    title: "Ordinanca",
  },
  {
    image: GalleryImg4,
    title: "Pajisjet Profesionale",
  },
  {
    image: GalleryImg5,
    title: "Salla e Pritjes",
  },
  {
    image: GalleryImg6,
    title: "Trajtimi i Hixhames",
  },
];

const OurWork = () => {
  return (
    <section
      id="ourwork"
      className="bg-slate-100 py-24 scroll-mt-8"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">
            Rreth Nesh
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 leading-8 text-base">
            Ambient modern, pajisje profesionale dhe kujdes maksimal për
            mirëqenien tuaj. Njihuni me hapësirat tona dhe standardet e
            larta të shërbimit që ofrojmë çdo ditë.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                />

                {/* Text */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                  "
                >
                  <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default OurWork;
