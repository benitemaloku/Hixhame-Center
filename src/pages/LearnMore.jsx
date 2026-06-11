import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RiHeartPulseLine,
  RiMedicineBottleLine,
  RiQuestionAnswerLine,
  RiShieldCheckLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const LearnMore = () => {
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          {/* Hero */}
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary font-medium text-sm md:text-base">
              Hixhame Center Prishtinë
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkBlue mt-4 mb-6 leading-tight">
              Mëso më shumë rreth Hixhames
            </h1>

            <p className="max-w-3xl mx-auto text-slate-600 leading-7 md:leading-8 text-sm md:text-base">
              Hixhama është një metodë tradicionale terapeutike e përdorur prej
              shekujsh për të ndihmuar në mirëqenien fizike dhe relaksimin e
              trupit.
            </p>
          </div>

          {/* Çfarë është Hixhama */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm mb-6 md:mb-10">
            <div className="flex items-center gap-3 mb-5">
              <RiMedicineBottleLine className="text-primary text-3xl" />
              <h2 className="text-xl md:text-2xl font-bold text-darkBlue">
                Çfarë është Hixhama?
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              Hixhama është një terapi tradicionale që përdor kupa speciale për
              të krijuar vakum në zona të caktuara të trupit. Kjo metodë
              përdoret për të ndihmuar relaksimin dhe mirëqenien e përgjithshme.
            </p>
          </div>

          {/* Pse duhet ta bëni */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm mb-6 md:mb-10">
            <div className="flex items-center gap-3 mb-5">
              <RiMedicineBottleLine className="text-primary text-3xl" />
              <h2 className="text-xl md:text-2xl font-bold text-darkBlue">
                Pse duhet ta bëni Hixhamën?
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-8">
              <p>
                Hixhamja është një trajtim natyral, pa dhimbje dhe me dobi të
                shumta për shëndetin dhe mirëqenien tuaj.
              </p>

              <p>
                Me aplikimin e këtij tretmani largohen lëngjet me përzierje të
                dëmshme dhe energjitë negative nga organizmi.
              </p>

              <p>
                • Ndihmon në largimin e qelizave të dëmtuara dhe të vjetruara
                të gjakut.
              </p>

              <p>
                • Ndihmon në eliminimin e toksinave të grumbulluara nga
                ushqimi jo i shëndetshëm dhe përdorimi i shpeshtë i barnave.
              </p>

              <p>
                • Përmirëson gjendjen emocionale duke reduktuar stresin,
                lodhjen dhe pagjumësinë.
              </p>

              <p>
                • Ndihmon në largimin e acidit urik dhe përmirësimin e
                ekuilibrit të organizmit.
              </p>
            </div>
          </div>

          {/* Përfitimet */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm mb-6 md:mb-10">
            <div className="flex items-center gap-3 mb-8">
              <RiHeartPulseLine className="text-primary text-3xl" />
              <h2 className="text-xl md:text-2xl font-bold text-darkBlue">
                Përfitimet e Hixhames
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                "Përmirësimi i qarkullimit të gjakut",
                "Relaksimi i muskujve",
                "Reduktimi i lodhjes",
                "Lehtësimi i tensionit",
                "Ndihmon në relaksim",
                "Mirëqenie më e mirë fizike",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border border-slate-100 rounded-2xl p-4 md:p-5"
                >
                  <RiCheckboxCircleLine className="text-primary text-xl" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedura */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm mb-6 md:mb-10">
            <div className="flex items-center gap-3 mb-8">
              <RiShieldCheckLine className="text-primary text-3xl" />
              <h2 className="text-xl md:text-2xl font-bold text-darkBlue">
                Si zhvillohet trajtimi?
              </h2>
            </div>

            <div className="space-y-5 md:space-y-6">
              {[
                "Konsultimi me klientin",
                "Përgatitja dhe dezinfektimi",
                "Aplikimi i kupave",
                "Këshilla pas trajtimit",
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="text-slate-600 flex items-center text-sm md:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm mb-6 md:mb-10">
            <div className="flex items-center gap-3 mb-8">
              <RiQuestionAnswerLine className="text-primary text-3xl" />
              <h2 className="text-xl md:text-2xl font-bold text-darkBlue">
                Pyetje të Shpeshta
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">

              <div>
                <h3 className="font-semibold text-darkBlue mb-2">
                  A dhemb Hixhama?
                </h3>
                <p className="text-slate-600">
                  Shumica e klientëve përjetojnë vetëm parehati të lehtë dhe të
                  përkohshme.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-darkBlue mb-2">
                  Sa zgjat një seancë?
                </h3>
                <p className="text-slate-600">
                  Zakonisht nga 30 deri në 60 minuta.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-darkBlue mb-2">
                  Si duhet të veproj para hixhames?
                </h3>

                <ul className="text-slate-600 space-y-2">
                  <li>• Të bëni dush</li>
                  <li>• Të mos konsumoni ushqime të rënda 3-4 orë para</li>
                  <li>• Të mos jeni në ditët e para të ciklit menstrual</li>
                  <li>• Të mos jeni shtatzënë ose lehonë</li>
                  <li>• Të mos jeni me gjendje të rëndë gripale</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-darkBlue mb-2">
                  Si duhet të veproj pas hixhames?
                </h3>

                <ul className="text-slate-600 space-y-2">
                  <li>• Të mos bëni dush menjëherë</li>
                  <li>• Të shmangni ushqimet e rënda</li>
                  <li>• Të konsumoni më shumë ujë</li>
                  <li>• Të pushoni</li>
                  <li>• Të kujdeseni për lëkurën në zonën e trajtimit</li>
                </ul>
              </div>

            </div>
          </div>

         

        </div>
      </section>
      <Footer />
    </>
  );
};

export default LearnMore;