import React from 'react'

import GalleryImg1 from "../assets/gallery-img1.jpg"
import GalleryImg2 from "../assets/gallery-img2.jpg"
import GalleryImg3 from "../assets/gallery-img3.jpg"
import GalleryImg4 from "../assets/gallery-img4.jpg"
import GalleryImg5 from "../assets/gallery-img5.jpg"
import GalleryImg6 from "../assets/gallery-img6.jpg"

const OurWork = () => {
  return (
    <section className="max-w-[1200px] pt-8 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-darkBlue mb-5 text-center">
        Rreth Nesh
        </h2>

        <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
            <div className="md:col-span-2">
                <img src={GalleryImg1} alt="" className="gallery-img" />
            </div>
            <div>
                <img src={GalleryImg2} alt="" className="gallery-img" />
            </div>
            <div>
                <img src={GalleryImg3} alt="" className="gallery-img" />
            </div>
            <div>
                <img src={GalleryImg4} alt="" className="gallery-img" />
            </div>
            <div>
                <img src={GalleryImg5} alt="" className="gallery-img" />
            </div>
            <div className="md:col-span-2">
                <img src={GalleryImg6} alt="" className="gallery-img" />
            </div>
        </div>
    </section>
  )
}

export default OurWork
