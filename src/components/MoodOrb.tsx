import React, { useState } from 'react';

export default function MoodOrb() {
  const [active, setActive] = useState(false);

  return (
    <button
      type='button'
      aria-label='Mood Orb'
      tabIndex={0}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      onBlur={() => setActive(false)}
      className={`
        transition-all duration-300 ease-in-out
        rounded-full
        w-[150px] h-[150px]
        bg-gradient-radial from-blue-200 via-indigo-400 to-indigo-700
        shadow-[0_0_40px_20px_rgba(127,127,255,0.5),0_0_80px_40px_rgba(127,127,255,0.33)]
        hover:scale-110
        focus:outline-none
        ${
          active
            ? `
          w-[200px] h-[200px]
          bg-gradient-radial from-pink-200 via-pink-400 to-pink-600
          shadow-[0_0_120px_60px_rgba(255,127,127,0.7),0_0_200px_100px_rgba(255,191,207,0.5)]
        `
            : ''
        }
        animate-pulse
      `}
    />
  );
}
