import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to manage full-screen scroll snapping with configurable easing and duration.
 * Provides a much smoother and controllable experience than native CSS scroll-snap.
 *
 * @param {Array<React.RefObject>} sectionRefs - Array of refs for each snap section
 * @param {number} scrollDuration - Duration of the scroll animation in ms
 */
export const useSmoothScrollSnap = (sectionRefs, scrollDuration = 800) => {
    const [currentSection, setCurrentSection] = useState(0);
    const isScrolling = useRef(false);
    const isCoolingDown = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();

            if (isScrolling.current || isCoolingDown.current) return;

            // Ensure we only trigger on a meaningful, intentional physical scroll.
            // Small deltas under 5 might just be a trackpad twitch.
            if (Math.abs(e.deltaY) < 10) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            let nextSection = currentSection + direction;

            // Ensure we stay within bounds
            if (nextSection >= 0 && nextSection < sectionRefs.length) {
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
                        // Add a meaningful cooldown (600ms) after the animation finishes
                        // before allowing the next scroll to prevent accidental double-skipping.
                        isCoolingDown.current = true;
                        setTimeout(() => {
                            isCoolingDown.current = false;
                        }, 600);
                    }
                };

                requestAnimationFrame(animation);
            }
        };

        // Attach wheel event listener with passive: false to allow preventDefault
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentSection, sectionRefs, scrollDuration]);

    return { currentSection };
};
