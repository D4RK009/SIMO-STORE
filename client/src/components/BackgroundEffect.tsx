import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
}

export default function BackgroundEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create initial particles
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 2 + 1,
          drift: (Math.random() - 0.5) * 0.5
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Animation loop
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newY = particle.y + particle.speed;
          let newX = particle.x + particle.drift;

          // Reset particle to top when it reaches bottom
          if (newY > window.innerHeight + 10) {
            newY = -10;
            newX = Math.random() * window.innerWidth;
          }

          // Keep particles within horizontal bounds
          if (newX < -10) newX = window.innerWidth + 10;
          if (newX > window.innerWidth + 10) newX = -10;

          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-primary/10 select-none transform -rotate-12 tracking-wider">
          SIMO
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-primary/10 select-none transform rotate-12 tracking-wider mt-32">
          STORE
        </div>
      </div>

      {/* Falling Particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: '0 0 6px currentColor',
            }}
          />
        ))}
      </div>

      {/* Additional sparkle effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}