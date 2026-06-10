import React from "react";
import { Navbar } from "../components/Navbar";
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

      <section className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* Hero */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium">
              Hixhame Center Prishtinë
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mt-4 mb-6">
              Mëso më shumë rreth Hixhames
            </h1>

            <p className="max-w-3xl mx-auto text-slate-600 leading-8">
              Hixhama është një metodë tradicionale terapeutike e përdorur prej
              shekujsh për të ndihmuar në mirëqenien fizike dhe relaksimin e
              trupit.
            </p>
          </div>

          {/* Çfarë është */}
          <div className="bg-white rounded-3xl p-10 shadow-sm mb-10">
            <div className="flex items-center gap-3 mb-5">
              <RiMedicineBottleLine className="text-primary text-3xl" />
              <h2 className="text-2xl font-bold text-darkBlue">
                Çfarë është Hixhama?
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
              Hixhama është një terapi tradicionale që përdor kupa speciale për
              të krijuar vakum në zona të caktuara të trupit. Kjo metodë
              përdoret për të ndihmuar relaksimin dhe mirëqenien e përgjithshme.
            </p>

      <br/>
             <div className="flex items-center gap-3 mb-5">
              <RiMedicineBottleLine className="text-primary text-3xl" />
              <h2 className="text-2xl font-bold text-darkBlue">
                Pse duhet ta bëni hixhamën?
              </h2>
            </div>

            <p className="text-slate-600 leading-8">
            Hixhamja, fillimisht duhet te behet pjesë e jetës suaj ngase eshtë trajtim natyral, pa dhimbje dhe me dobi të shumta per shëndetin tuaj.
                <br/>
            HIXHAM-JA duhet te bëhet, ngase me aplikimin e këtij tretmani mjeksorë largojmë (thithim) lëngjet me plote perzierje te dëmshme dhe energji negative si:
                <br/>
             - Heqja e qelizave te kuqe dhe të bardha të gjakut që janë të demtuara, te vdekura dhe té plakura; si dhe heqja e gjakut të mpiksur në vena dhe kapilarë.
             Pra, pas largimit te qelizave që nuk e kryejnë funksionin e tyre në mënyrën e duhur, si dhe furnizimi i trupit me lënde ushqyese të mjaftueshme dhe mbrojtja e tij nga sëmundjet
                <br/>
             - Mënjanohen toksinat që grumbullohen në organizem si pasojë e perdorimit të shpeshtë te barnave mjekësore, ushqimit jo të shëndetshëm të ngarkuar me pesticide (kequshqyerje), si dhe ekspozimit të dëmshëm ndaj faktorëve të jashtëm.
                <br/>
             - Permirësohet dukshëm gjendja e rënduar emocionale (psikologjike), e cila manifestohet me stres, pagjumësi, depresion, lodhje, etj.
             <br/>
              - Eliminohet gjithashtu acidi urik, një produkt mbetje që krijohet nga tretja e ushqimeve të caktuara. Grumbullimi i acidit urik mund të çojë ne rritje te nivelit te aciditetit ne gjak dhe ne urine.
            </p>
          </div>

          {/* Përfitimet */}
          <div className="bg-white rounded-3xl p-10 shadow-sm mb-10">
            <div className="flex items-center gap-3 mb-8">
              <RiHeartPulseLine className="text-primary text-3xl" />
              <h2 className="text-2xl font-bold text-darkBlue">
                Përfitimet e Hixhames
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
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
                  className="flex items-center gap-3 border border-slate-100 rounded-2xl p-5"
                >
                  <RiCheckboxCircleLine className="text-primary text-xl" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedura */}
          <div className="bg-white rounded-3xl p-10 shadow-sm mb-10">
            <div className="flex items-center gap-3 mb-8">
              <RiShieldCheckLine className="text-primary text-3xl" />
              <h2 className="text-2xl font-bold text-darkBlue">
                Si zhvillohet trajtimi?
              </h2>
            </div>

            <div className="space-y-6">
              {[
                "Konsultimi me klientin",
                "Përgatitja dhe dezinfektimi",
                "Aplikimi i kupave",
                "Këshilla pas trajtimit",
              ].map((step, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="text-slate-600 flex items-center">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-3xl p-10 shadow-sm mb-10">
            <div className="flex items-center gap-3 mb-8">
              <RiQuestionAnswerLine className="text-primary text-3xl" />
              <h2 className="text-2xl font-bold text-darkBlue">
                Pyetje të Shpeshta
              </h2>
            </div>

            <div className="space-y-8">
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
                <p className="text-slate-600">
                    1. Të bëni dush
                    <br />
                    2. Të mos konsumoni ushqime të rënda (mish, yndyra) 3-4 orë para hixhamës
                    <br />
                    3. Të mos jeni në ditë të para të ciklit menstrual
                    <br />
                    4. Të mos jeni shtatzënë (ose lehonë)
                    <br />
                    5. Të mos jeni në gjëndje të rëndë gripoze
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-darkBlue mb-2">
                  Si duhet të veproj pas hixhames?
                </h3>
                <p className="text-slate-600">
                    1. Të mos bëni dush
                    <br />
                    2. Të mos konsumoni ushqime të rënda (mish, yndyra) 
                    <br />
                    3. Të konsumoni lëngje mjaftuëshme
                    <br />
                    4. Të pushoni
                    <br />
                    5. Të mirëmbani lëkurën për ca ditë (në vendet e aplikimit.)
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Rezervo Terminën Tënde
            </h2>

            <p className="text-white/90 mb-6">
              Na kontaktoni për konsultë dhe rezervim.
            </p>

            <a
              href="/#contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Kontakto Tani
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default LearnMore;