// lib/useParallax.ts
import {useMotionValue, useSpring, useTransform} from "framer-motion";
import {useEffect} from "react";

export function useParallax(ref: React.RefObject<HTMLElement>) {
    const scrollYProgress = useMotionValue(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const updateScrollProgress = () => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const progress = Math.max(
                0,
                Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
            );
            scrollYProgress.set(progress);
        };

        window.addEventListener("scroll", updateScrollProgress);
        updateScrollProgress(); // Initial call

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, [ref, scrollYProgress]);

    // Smooth the scroll progress with a spring
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 90,
    });

    // Transform progress to Y translation (adjust values as needed)
    const y = useTransform(smoothProgress, [0, 1], ["20%", "-20%"]);

    return {y, scrollYProgress};
}