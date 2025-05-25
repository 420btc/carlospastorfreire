"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  src: string;
  title: string;
  label?: string;
}

export function AudioPlayer({ src, title, label = 'Audiobook' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration !== Infinity && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleLoadedMetadata = () => {
      updateDuration();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', () => setIsPlaying(false));

    // Forzar carga de metadatos
    audio.load();

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [src]); // Añadido src como dependencia para recargar cuando cambie

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (value: number[]) => {
    if (!audioRef.current) return;
    const newTime = value[0];
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="w-full">
      <audio ref={audioRef} src={src} preload="metadata" onLoadedMetadata={() => console.log('Metadata loaded')} />
      <div className="flex items-center gap-2 mb-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          className="h-8 w-8 rounded-full"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <div className="flex-1 flex items-center gap-2">
          {label && <span className="text-sm font-medium text-muted-foreground">{label}</span>}
          <span className="text-xs text-muted-foreground w-10">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            onValueChange={handleTimeChange}
            className="flex-1 [&_.slider-thumb]:h-2 [&_.slider-thumb]:w-2 [&_.slider-thumb]:-translate-y-1/2 [&_.slider-thumb]:border-2"
          />
          <span className="text-xs text-muted-foreground w-10 text-right">
            {formatTime(duration || 0)}
          </span>
        </div>
        
        <div className="flex items-center gap-1 w-16 sm:w-24">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="h-7 w-7 sm:h-8 sm:w-8"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-3 w-3 sm:h-4 sm:w-4" />
            ) : (
              <Volume2 className="h-3 w-3 sm:h-4 sm:w-4" />
            )}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume * 100]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="w-8 sm:w-16 [&_.slider-thumb]:h-2 [&_.slider-thumb]:w-2 sm:[&_.slider-thumb]:h-3 sm:[&_.slider-thumb]:w-3"
          />
        </div>
      </div>
    </div>
  );
}
