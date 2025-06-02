import React from 'react';
import MoodOrb from '../components/MoodOrb';

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <MoodOrb />
    </div>
  );
};

export default Home;
