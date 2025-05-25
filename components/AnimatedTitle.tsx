'use client';

import { useEffect, useState } from 'react';

const titles = [
  { first: 'Desarrollador', second: 'Full Stack' },
  { first: 'Fotógrafo', second: 'Astronómico' },
  { first: 'Piloto', second: 'Drones FPV' }
];

export function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Esperamos a que termine la animación de salida antes de cambiar el texto
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500); // La mitad del tiempo de la animación
      
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const currentTitle = titles[currentIndex];
  const nextTitle = titles[(currentIndex + 1) % titles.length];

  return (
    <div className="relative h-20 md:h-36 mb-8 overflow-hidden">
      <div 
        className={`transition-transform duration-500 transform-gpu ${isAnimating ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <TitlePair 
          first={currentTitle.first} 
          second={currentTitle.second} 
          isCurrent={!isAnimating}
        />
      </div>
      <div 
        className={`absolute top-0 left-0 w-full transition-transform duration-500 transform-gpu ${isAnimating ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <TitlePair 
          first={nextTitle.first} 
          second={nextTitle.second} 
          isCurrent={isAnimating}
        />
      </div>
    </div>
  );
}

function TitlePair({ first, second, isCurrent }: { first: string; second: string; isCurrent: boolean }) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
      {first}
      <span className="block text-primary">{second}</span>
    </h1>
  );
}
