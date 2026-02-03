"use client"

import { useState, useEffect } from "react";

export default function HeaderBanner() {
  const words = ['Inovar', 'Inspirar', 'Criar'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); //fade out ("some" a palavra)

      setTimeout(() => {
        setIndex((prev) => (prev+1) % words.length);
        setFade(true); //fade in (aparece a proxima palavra)
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex self-center md:mt-[-40px]">
      <span className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} text-[50pt] font-extrabold text-main [text-shadow:_3px_3px_0px_#4e4e4e]`}>
        {words[index]}
      </span>
    </div>
  )
}