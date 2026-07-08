'use client'

import dynamic from "next/dynamic";
import Image from "next/image";

const HeaderBanner = dynamic(() => import('../components/HeaderBanner'), { ssr: false });
const BotaoContato = dynamic(() => import('../components/BotaoContato'), { ssr: false });

function Hero() {
  return (
    <section className="flex flex-col px-2.5">
      <HeaderBanner />

      <div className="flex flex-col gap-5 mt-12.5 md:items-center">
        <h1 className="font-semibold text-[30pt] text-center md:text-[45pt] leading-tight md:-mt-5">
          Ideias incríveis merecem espaço para brilhar!
        </h1>

        <div className="flex flex-col md:flex-row md:justify-evenly md:-mt-5 md:self-center md:px-5 md:items-center">
          <div>
            <span className="bg-white p-3 text-xs md:text-sm rounded-lg shadow-sm absolute mt-15">Avaliação 5.0 ⭐</span>

            <Image
              src="/hero.webp"
              alt="Hero"
              width={392}
              height={392}
              sizes="(max-width: 768px) 280px, 392px"
              quality={70}
              priority
              fetchPriority="high"
              className="mt-15 self-center"
            />

            <span className="bg-white p-3 text-xs md:text-sm rounded-lg shadow-sm absolute -mt-15 ml-50">🟢 +60 projetos entregues</span>
          </div>

          <div className="flex flex-col md:w-[60%]">
            <p className="font-medium text-[19pt] text-center md:text-[25pt] md:w-[80%] md:self-end">
              Criatividade + estratégia = resultado. Essa é a fórmula que uso para destacar sua marca.
            </p>

            <div className="flex flex-col gap-10 self-center mt-5 md:flex-row">
              <BotaoContato />
              
              <a 
                href="/blog"
                className="text-dark px-5 py-3 transition hover:scale-105 duration-300 cursor-pointer border-b-3 border-dark hover:text-main hover:border-main font-semibold text-center"
              >
                Artigos publicados
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
