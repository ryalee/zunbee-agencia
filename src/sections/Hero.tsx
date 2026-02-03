import HeaderBanner from '../components/HeaderBanner';
import BotaoContato from '../components/BotaoContato';
import Image from 'next/image'

function Hero() {
  return (
    <section className='flex flex-col px-2.5'>
      <HeaderBanner/>

      <div className='flex flex-col gap-5 mt-12.5 md:items-center'>
        <h1 className='font-semibold text-[30pt] text-center md:text-[45pt] md:-mt-5'>Ideias incríveis merecem espaço para brilhar!</h1>

        <div className='flex flex-col md:flex-row md:justify-evenly md:-mt-5 md:self-center md:px-5 md:items-center'>
          <Image
            src="/hero.webp"
            alt="Hero"
            width={400}
            height={400}
            sizes="(max-width: 768px) 300px, 400px"
            className="absolute mt-15 self-center md:relative"
            fetchPriority="high"
          />

          <div className='flex flex-col md:w-[60%] '>
            <p className='font-medium text-[19pt] text-right md:text-[25pt] md:w-[80%] md:self-end'>Criatividade + estratégia = resultado. Essa é a fórmula que usamos para destacar sua marca.</p>

            <div className='flex flex-col gap-10 self-center mt-5 md:flex-row'>
              <BotaoContato/>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
