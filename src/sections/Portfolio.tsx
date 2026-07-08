'use client'

import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from "../types";
import Image from 'next/image'

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [renderAllProjects, setRenderAllProjects] = useState(false);
  const [animateExtrasIn, setAnimateExtrasIn] = useState(false);
  const collapseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleProjects = renderAllProjects ? projects : projects.slice(0, 4);

  const handleToggleProjects = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setAnimateExtrasIn(false);

      collapseTimeoutRef.current = setTimeout(() => {
        setRenderAllProjects(false);
      }, 280);
      return;
    }

    setRenderAllProjects(true);
    requestAnimationFrame(() => {
      setIsExpanded(true);
      setAnimateExtrasIn(true);
    });
  };

  useEffect(() => {
    return () => {
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className='px-2.5'>
      <div>
        <h1 className='section-title'>O que já criei até aqui?</h1>
        <h2 className='section-subtitle'>Projetos que falam por mim</h2>
      </div>

      {/* Grid de projetos */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
        {visibleProjects.map((project, index) => {
          const isExtraProject = index >= 4;

          return (
          <div
            key={project.id}
            className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
              isExtraProject
                ? animateExtrasIn
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2'
                : 'opacity-100 translate-y-0'
            }`}
            onClick={() => setSelectedProject(project)} 
          >
            <Image
              src={project.image}
              alt={project.title}
              width={418}
              height={256}
              sizes="(max-width: 768px) 100vw, 418px"
              unoptimized
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay no hover */}
            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-light p-4'>
              <h3 className='text-xl font-bold text-center'>{project.title}</h3>
              <p className='text-sm mt-2 text-center'>{project.description}</p>
            </div>
          </div>
          );
        })}
      </div>

      {projects.length > 4 && (
        <div className='cursor-pointer flex justify-center mt-4'>
          <button
            type='button'
            className='cursor-pointer bg-main text-light px-6 py-2 rounded-full font-semibold hover:opacity-90 transition'
            onClick={handleToggleProjects}
          >
            {isExpanded ? 'ver menos' : 'ver mais'}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div
          className='fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50'
          onClick={() => setSelectedProject(null)} // Fecha se clicar fora
        >
          <div
            className='bg-light rounded-2xl shadow-lg max-w-lg w-full px-4 py-10 relative'
            onClick={(e) => e.stopPropagation()} // não fecha se clicar dentro
          >
            <button
              className='absolute top-3 right-4 text-2xl font-bold text-dark hover:text-gray-700'
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

           <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            width={800}
            height={500}
            className="w-full h-64 object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 800px"
          />

            <h2 className='text-2xl font-semibold mt-4'>{selectedProject.title}</h2>
            <p className='mt-2 text-gray-700'>{selectedProject.details}</p>
            <a href={selectedProject.link} target='_blank' className='text-main font-bold'>Veja na prática</a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
