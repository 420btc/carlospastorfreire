'use client';

import { RefreshCw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProfileImage() {
  const [currentImage, setCurrentImage] = useState<'/yop2.jpeg' | '/yop.jpeg'>('/yop2.jpeg');

  const toggleImage = () => {
    setCurrentImage(prev => prev === '/yop2.jpeg' ? '/yop.jpeg' : '/yop2.jpeg');
  };

  return (
    <div className="mb-8 relative group">
      <div className="relative mx-auto h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg dark:shadow-primary/10">
        <Image 
          src={currentImage}
          alt="Profile" 
          fill 
          className="object-cover transition-opacity duration-300"
          priority
        />
      </div>
      <button 
        onClick={toggleImage}
        className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Cambiar foto de perfil"
        title="Cambiar foto de perfil"
      >
        <RefreshCw className="h-5 w-5 text-foreground" />
      </button>
    </div>
  );
}
