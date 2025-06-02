import React, { useState } from 'react';
import styles from './MoodOrb.module.css';

const MoodOrb: React.FC = () => {
    const [color, setColor] = useState<string>('hsl(200, 100%, 50%)');
    const [size, setSize] = useState<number>(100);

    const handleMouseOver = () => {
        setColor(`hsl(${Math.random() * 360}, 100%, 50%)`);
        setSize(150);
    };

    const handleMouseOut = () => {
        setSize(100);
    };

    const handleTouchStart = () => {
        setColor(`hsl(${Math.random() * 360}, 100%, 50%)`);
        setSize(150);
    };

    const handleTouchEnd = () => {
        setSize(100);
    };

    return (
        <div
            className={styles.orb}
            style={{
                backgroundColor: color,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        />
    );
};

export default MoodOrb;