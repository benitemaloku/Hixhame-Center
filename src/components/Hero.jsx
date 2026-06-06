import React from 'react'
import HeroIMG1 from "../assets/11.png"
import HeroIMG2 from "../assets/22.png"
import HeroIMG3 from "../assets/33.png"  


const Hero = () => {
  return (
   <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-6 py-24">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Hixhame Profesionale në Prishtinë
        </span>

        <h1 className="text-5xl lg:text-6xl font-bold text-darkBlue leading-tight text-gradient">
          Shëndet dhe mirëqenie natyrale
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-8">
          Terapi profesionale e hixhames në një ambient modern,
          të sigurt dhe relaksues.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-8 py-4 bg-primary text-white rounded-xl shadow-lg">
            Rezervo Termin
          </button>

          <button className="px-8 py-4 border border-slate-300 rounded-xl">
            Mëso më shumë
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Gallery Images */}
        <div className='flex gap-5 justify-center md:gap-3 lg:gap-5'>
            <img className="hero-img" src={HeroIMG1} alt="Hero Image 1" />
            <img className="mt-[3%] hero-img" src={HeroIMG2} alt="Hero Image 2" />
            <img className="hero-img"src={HeroIMG3} alt="Hero Image 3"  />
        </div>
      </div>

    </div>
  </div>
    </section> 
    )
}

export default Hero   