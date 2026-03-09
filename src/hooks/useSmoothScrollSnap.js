import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to manage full-screen scroll snapping on scroll down,
 * while allowing normal native scrolling on scroll up.
 *
 * @param {Array<React.RefObject>} sectionRefs - Array of refs for each snap section
 * @param {number} scrollDuration - Duration of the scroll down animation in ms
 */
export const useSmoothScrollSnap = (sectionRefs, scrollDuration = 1000) => {
    const [currentSection, setCurrentSection] = useState(0);
    const isScrolling = useRef(false);
    const isCoolingDown = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            // Only apply custom tracking/snapping when scrolling DOWN (deltaY > 0)
            if (e.deltaY <= 0) {
                // Determine current section roughly based on scroll position so 
                // scrolling down later resumes from the right place
                const scrollY = window.scrollY;
                let activeIndex = 0;
                for (let i = 0; i < sectionRefs.length; i++) {
                    if (sectionRefs[i].current && scrollY >= sectionRefs[i].current.offsetTop - window.innerHeight / 2) {
                        activeIndex = i;
                    }
                }
                setCurrentSection(activeIndex);
                return; // Let native scrolling handle the scroll UP
            }

            // --- Scroll DOWN logic ---
            e.preventDefault();

            if (isScrolling.current || isCoolingDown.current) return;

            // Ensure we only trigger on a meaningful, intentional physical scroll
            if (Math.abs(e.deltaY) < 10) return;

            let nextSection = currentSection + 1;

            // Ensure we stay within bounds
            if (nextSection < sectionRefs.length) {
                scrollToSection(nextSection);
            }
        };

        const scrollToSection = (index) => {
            isScrolling.current = true;
            setCurrentSection(index);

            const targetRef = sectionRefs[index];
            if (targetRef && targetRef.current) {
                const targetPosition = targetRef.current.offsetTop;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                let startTime = null;

                // Custom easeInOutCubic function for buttery smooth deceleration
                const easeInOutCubic = (t) => {
                    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };

                const animation = (currentTime) => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / scrollDuration, 1);

                    const easeProgress = easeInOutCubic(progress);

                    window.scrollTo(0, startPosition + distance * easeProgress);

                    if (timeElapsed < scrollDuration) {
                        requestAnimationFrame(animation);
                    } else {
                        isScrolling.current = false;
                        // Cooldown to prevent accidental double-skipping
                        isCoolingDown.current = true;
                        setTimeout(() => {
                            isCoolingDown.current = false;
                        }, 500); // slightly reduced cooldown for better responsiveness
                    }
                };

                requestAnimationFrame(animation);
            }
        };

        // Attach wheel event listener with passive: false to allow preventDefault for down-scrolls
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentSection, sectionRefs, scrollDuration]);

    return { currentSection };
};
