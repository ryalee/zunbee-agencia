import React from "react";
import BotaoContato from "../components/BotaoContato";

function CallToAction() {
  return (
    <section className="p-0 w-full h-75 bg-secondary md:h-130 md:flex md:items-center">
      <div className="p-2.5 flex flex-col gap-3 my-5 md:px-12.5 md:flex md:items-center md:justify-center">
        <div>
          <h1 className="text-[20pt] font-semibold text-left md:text-[50pt] md:w-[70%]">
            Pronto para transformar suas ideias em realidade e seus problemas em
            inovação?
          </h1>

          <p className="text-[15pt] md:text-[20pt]">
            Fale com a gente hoje e receba uma proposta personalizada em até 24
            horas.
          </p>
        </div>

        <BotaoContato label="Ir para o próximo nível ↗" className="w-70 py-4 text-xs md:w-75 md:py-5 md:absolute md:ml-[60%]" />
      </div>
    </section>
  );
}

export default CallToAction;
