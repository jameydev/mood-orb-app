import MoodOrb from '@/components/MoodOrb';

export default function Home() {
  return (
    <>
      <h1 className='text-4xl text-center'>Mood Orb</h1>
      <main className='h-screen w-screen flex items-center justify-center bg-white text-gray-900'>
        <MoodOrb />
      </main>
    </>
  );
}
