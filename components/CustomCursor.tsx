import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animateCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;

            if (cursor) {
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            }
            requestAnimationFrame(animateCursor);
        };

        const handleMouseEnter = () => document.body.classList.add('hovering');
        const handleMouseLeave = () => document.body.classList.remove('hovering');

        window.addEventListener('mousemove', handleMouseMove);
        
        // Add listeners to clickable elements
        const clickables = document.querySelectorAll('a, button, .cursor-pointer');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Use MutationObserver to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                   const newClickables = document.querySelectorAll('a, button, .cursor-pointer');
                   newClickables.forEach(el => {
                        el.removeEventListener('mouseenter', handleMouseEnter); // avoid duplicates
                        el.removeEventListener('mouseleave', handleMouseLeave);
                        el.addEventListener('mouseenter', handleMouseEnter);
                        el.addEventListener('mouseleave', handleMouseLeave);
                   });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        const animId = requestAnimationFrame(animateCursor);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animId);
            observer.disconnect();
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div id="cursor-follower" ref={cursorRef} />;
};

export default CustomCursor;