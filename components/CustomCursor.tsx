import React, { useState, useEffect } from 'react';

export const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            if (target.closest('.interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }

            if (window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' || target.closest('button, a')) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    const cursorSize = isHovering ? 40 : 12;

    return (
        <div
            className={`hidden md:block fixed pointer-events-none z-50 rounded-full transition-all duration-300 ease-out`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${cursorSize}px`,
                height: `${cursorSize}px`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: isHovering ? 'rgba(217, 95, 67, 0.2)' : 'rgba(217, 95, 67, 0.7)',
                border: isHovering ? '2px solid rgba(217, 95, 67, 0.0)' : '2px solid rgba(217, 95, 67, 0.0)',
            }}
        />
    );
};
