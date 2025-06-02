'use client';

import { useState } from 'react';
import clsx from 'clsx';

const moods = {
  calm: 'bg-blue-400 shadow-blue-400',
  happy: 'bg-yellow-400 shadow-yellow-400',
  sad: 'bg-indigo-500 shadow-indigo-500',
  angry: 'bg-red-500 shadow-red-500',
  relaxed: 'bg-green-400 shadow-green-400',
  curious: 'bg-purple-400 shadow-purple-400',
};

export default function MoodOrb() {
  const [mood, setMood] = useState<keyof typeof moods>('calm');

  return (
    <div className='flex flex-col items-center justify-center h-full w-full p-6'>
      {/* Orb */}
      <div
        className={clsx(
          'w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full shadow-2xl animate-pulse transition-all duration-500',
          moods[mood],
        )}
      />

      {/* Mood Buttons */}
      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md'>
        {Object.keys(moods).map((m) => (
          <button
            key={m}
            onClick={() => setMood(m as keyof typeof moods)}
            className={clsx(
              'w-full py-2 px-4 rounded-lg text-center text-base font-medium transition-all duration-200',
              m === mood
                ? 'bg-gray-900 text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
            )}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
