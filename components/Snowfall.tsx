'use client';

import { useEffect, useState } from 'react';

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; duration: string; delay: string }>>([]);

  useEffect(() => {
    // Create snowflakes
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 10}s`,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute text-white opacity-80"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            fontSize: `${Math.random() * 0.5 + 0.5}em`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}

