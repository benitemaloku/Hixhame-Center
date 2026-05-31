import React from 'react'
import HeroIMG1 from "../assets/11.png"
import HeroIMG2 from "../assets/22.png"
import HeroIMG3 from "../assets/33.png"  


const Hero = () => {
  return (
   <section className='max-w-screen-xl mx-auto px-6 py-20
            flex flex-col-reverse items-center gap-10
            md:flex-row md:justify-between'>
            
        <div className='flex-1 text-center md:text-left'>
            <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]'>
            Qetësi, Shëndet dhe Kujdes Natyral
            </h2>

            <p className='text-sm leading-6 text-darkBlue mb-6 md:w-4/5'>
              Terapi natyrale dhe profesionale që ndihmon në relaksimin e trupit dhe mendjes, 
              përmirësimin e qarkullimit të gjakut, largimin e toksinave dhe rritjen e mirëqenies 
              së përgjithshme përmes metodave tradicionale të hixhames në një ambient modern dhe të sigurt.

            </p>
            <button className='primary-btn'>Shiko Shërbimet</button>
        </div>
        <div className='flex gap-5 justify-center md:gap-3 lg:gap-5'>
            <img className="hero-img" src={HeroIMG1} alt="Hero Image 1" />
            <img className="mt-[3%] hero-img" src={HeroIMG2} alt="Hero Image 2" />
            <img className="hero-img"src={HeroIMG3} alt="Hero Image 3"  />
        </div>

    </section> 
    )
}

export default Hero   