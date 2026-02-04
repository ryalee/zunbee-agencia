export const runtime = "edge";
export const dynamic = "force-static";

import Image from "next/image";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Steps from "../sections/Steps";
import Feedbacks from "../sections/Feedbacks";
import FAQ from "../sections/FAQ";
import CallToAction from "../sections/CallToAction";
import SloganBottom from "../sections/SloganBottom";

export default function Home() {
  return (
    <>
      <header className="p-5 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image
            src='/logo.webp'
            alt="logo"
            width={70}
            height={55}
          />
          <p className='font-black text-[30pt]'>Zun<span className='text-main [text-shadow:2px_1px_0px_#4e4e4e]'>Bee</span></p>
        </div>
      </header>

      <main className="flex flex-col gap-37.5">
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Steps/>
        <Feedbacks/>
        <FAQ/>
        <CallToAction/>
        <SloganBottom/>
      </main>

      <footer className="flex flex-col items-center mx-auto shadow-[0px_0px_4px_#00000035] rounded-md mb-4 w-[90%] px-10 pt-5 mt-37.5">
        <div className="flex items-center">
          <Image
            src='/logo.webp'
            alt="logo"
            width={50}
            height={55}
          />

          <p className='font-black text-[20pt] '>Zun<span className='text-main [text-shadow:2px_1px_0px_#4e4e4e]'>Bee</span></p>
        </div>
          <p className='mt-2 py-5 self-center flex items-center'>&copy; {new Date().getFullYear()} ZunBee. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}