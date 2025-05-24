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
    <div className="mb-5 relative w-full">
      <div className="flex items-center justify-center ml-10">
        <div className="relative group mr-1">
          <div className="relative h-72 w-72 md:h-84 md:w-84 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg dark:shadow-primary/10">
            <Image 
              src={currentImage}
              alt="Profile" 
              fill 
              className="object-cover transition-opacity duration-300"
              priority
            />
          </div>
        </div>
        <button 
          onClick={toggleImage}
          className=" mt-52 bg-background/80 hover:bg-background p-2 rounded-full shadow-md transition-all duration-300 opacity-100 hover:scale-110 border-2 border-primary/20"
          aria-label="Cambiar foto de perfil"
          title="Cambiar foto de perfil"
        >
          <RefreshCw className="h-7 w-7 text-foreground" />
        </button>
      </div>
    </div>
  );
}
