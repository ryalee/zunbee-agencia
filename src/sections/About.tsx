import Image from 'next/image'

function About() {
  return (
    <section className='flex flex-col px-2.5 md:flex-row items-center md:justify-evenly md:px-10'>
      <div className='flex flex-col'>
        <h1 className="section-title">Quem somos por trás da colmeia?</h1>
        <p className='font-medium text-[20pt] mt-75 px-2.5 md:mt-10 md:w-[80%]'>
          Somos a ponte entre sua ideia e o mercado. Na ZunBee, combinamos criatividade, estratégia e tecnologia para entregar softwares, sites e aplicativos que não só funcionam, mas transformam a forma como você gera valor. Uma equipe apaixonada por inovação e comprometida com a excelência, garantindo que cada projeto seja uma obra-prima de eficiência e impacto.
        </p>
      </div> 

      <Image 
        src="/about.webp"
        width={400}
        height={400}
        sizes="(max-width: 768px) 300px, 400px"
        className="absolute mt-15 self-center md:relative"
        loading="lazy"
      />
    </section>
  )
}

export default About;