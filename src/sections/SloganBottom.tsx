import Image from 'next/image'
import React from 'react'

function SloganBottom() {
  return (
    <section className='text-[20pt] text-main [text-shadow:2px_2px_0px_#4e4e4e] font-bold flex gap-2 items-center justify-center px-2.5 md:text-[50pt] md:w-[80%] md:justify-between md:self-center'>
      <h1 className=''>Inovar</h1>
      <Image src='/geometry.webp' alt='' width={50} height={50} className='w-12.5 md:w-17.5' loading="lazy"/>
      <h1>Inspirar</h1>
      <Image src='/geometry.webp' alt='' width={50} height={50} className='w-12.5 md:w-17.5' loading="lazy"/>
      <h1>Criar</h1>
    </section>
  )
}

export default SloganBottom
