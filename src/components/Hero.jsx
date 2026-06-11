import React from 'react'
import HeroIMG1 from "../assets/11.png"
import HeroIMG2 from "../assets/22.png"
import HeroIMG3 from "../assets/33.png"  
import { Link } from "react-router-dom";


const Hero = () => {
  return (
   <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto text-center md:text-left px-6 py-10 md:py-24">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm md:text-base font-medium mb-6">
          Hixhame Profesionale në Prishtinë
        </span>

        <h1 className="text-6xl  font-bold leading-tight text-gradient">
          Shëndet dhe mirëqenie natyrale
        </h1>

        <p className="mt-6 text-base text-slate-600 leading-8">
          Terapi profesionale e hixhames në një ambient modern,
          të sigurt dhe relaksues.
        </p>

          <div className="flex justify-center md:justify-start mt-6">
            <Link
                to="/learn-more"
                className="primary-btn inline-flex items-center justify-center"
            >
                Mëso më shumë
            </Link>
          </div>
      </div>

        <div className="relative group">
            <div className="flex justify-center gap-5 transition-all duration-700 group-hover:gap-0">

                <img
                    className="hero-img transition-all duration-700"
                    src={HeroIMG1}
                    alt="Hero Image 1"
                />

                <img
                    className="
                        hero-img
                        mt-[3%]
                        group-hover:mt-0
                        z-10
                        transition-all
                        duration-700"
                    src={HeroIMG2}
                    alt="Hero Image 2"
                />

                <img
                    className="hero-img transition-all duration-700"
                    src={HeroIMG3}
                    alt="Hero Image 3"
                />

            </div>
        </div>

    </div>
  </div>
    </section> 
    )
}

export default Hero   