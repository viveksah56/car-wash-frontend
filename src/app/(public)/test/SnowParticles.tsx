import React, { forwardRef, useEffect, useState } from "react";

interface Particle {
    id: number;
    left: string;
    size: string;
    duration: string;
    delay: string;
    opacity: number;
}

type SnowParticlesProps = React.HTMLAttributes<HTMLDivElement>;

const PARTICLE_COUNT = 30;

const createParticles = (): Particle[] =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 2}px`,
        duration: `${6 + Math.random() * 8}s`,
        delay: `${Math.random() * 8}s`,
        opacity: 0.3 + Math.random() * 0.5,
    }));

const SnowParticles = forwardRef<HTMLDivElement, SnowParticlesProps>(
    ({ className, ...props }, ref) => {
        const [particles] = useState<Particle[]>(createParticles());

        return (
            <div
                ref={ref}
                className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${
                    className ?? ""
                }`}
                {...props}
            >
                {particles.map((particle) => (
                    <span
                        key={particle.id}
                        className="snow-particle"
                        style={{
                            left: particle.left,
                            width: particle.size,
                            height: particle.size,
                            opacity: particle.opacity,
                            animationDuration: particle.duration,
                            animationDelay: particle.delay,
                        }}
                    />
                ))}
            </div>
        );
    }
);

SnowParticles.displayName = "SnowParticles";

export default SnowParticles;