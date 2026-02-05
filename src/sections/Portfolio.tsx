'use client'

import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import Image from 'next/image'

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  link?: string;
};

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className='px-2.5'>
      <div>
        <h1 className='section-title'>O que já criamos até aqui?</h1>
        <h2 className='section-subtitle'>Projetos que falam por nós</h2>
      </div>

      {/* Grid de projetos */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className='relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition'
            onClick={() => setSelectedProject(project)} // ✅ Só abre ao clicar no card
          >
            <Image
              src={project.image}
              alt={project.title}
              width={418}
              height={256}
              sizes="(max-width: 768px) 100vw, 418px"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay no hover */}
            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-light p-4'>
              <h3 className='text-xl font-bold text-center'>{project.title}</h3>
              <p className='text-sm mt-2 text-center'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className='fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50'
          onClick={() => setSelectedProject(null)} // ✅ Fecha ao clicar fora
        >
          <div
            className='bg-light rounded-2xl shadow-lg max-w-lg w-full px-4 py-10 relative'
            onClick={(e) => e.stopPropagation()} // ✅ Impede fechar ao clicar dentro
          >
            <button
              className='absolute top-3 right-4 text-2xl font-bold text-dark hover:text-gray-700'
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className='w-full h-64 object-cover rounded-lg'
            />

            <h2 className='text-2xl font-semibold mt-4'>{selectedProject.title}</h2>
            <p className='mt-2 text-gray-700'>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
