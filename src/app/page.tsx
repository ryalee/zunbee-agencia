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
          <p className='font-bold text-[30pt] [text-shadow:1px_1px_1px_#4e4e4e]'>Zun<span className='text-main'>Bee</span></p>
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

      <footer className="flex flex-col shadow-[0px_2px_4px_#00000025] w-full p-2.5 mt-37.5">
        <section>
          <div>
            <Image
              src='/logo.webp'
              alt="logo"
              width={55}
              height={55}
            />
          </div>
        </section>
      </footer>
    </>
  );
}