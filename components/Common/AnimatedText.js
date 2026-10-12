import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedText = ({
    as: Element = "h3",
    html = "",
    className = "",
}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        const prefersReducedMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (!element || !html || prefersReducedMotion) {
            return;
        }

        /*
         * Set HTML first so <b>, <strong>, <i>, etc.
         * are converted into real DOM elements.
         */
        element.innerHTML = html;

        /*
         * Get complete text for accessibility
         */
        const originalText =
            element.textContent || "";

        if (!originalText.trim()) {
            return;
        }

        element.setAttribute(
            "aria-label",
            originalText
        );

        const chars = [];

        /*
         * Recursively process text nodes
         */
        const processTextNode = (textNode) => {
            const text =
                textNode.textContent || "";

            if (!text) {
                return;
            }

            const fragment =
                document.createDocumentFragment();

            /*
             * Split text into words while preserving
             * whitespace.
             */
            const parts =
                text.split(/(\s+)/);

            parts.forEach((part) => {

                /*
                 * Preserve spaces
                 */
                if (/^\s+$/.test(part)) {
                    fragment.appendChild(
                        document.createTextNode(part)
                    );

                    return;
                }

                /*
                 * Word wrapper
                 */
                const wordWrapper =
                    document.createElement("div");

                wordWrapper.className =
                    "gsap-word";

                wordWrapper.setAttribute(
                    "aria-hidden",
                    "true"
                );

                wordWrapper.style.position =
                    "relative";

                wordWrapper.style.display =
                    "inline-block";

                /*
                 * Split word into characters
                 */
                Array.from(part).forEach(
                    (character) => {

                        const char =
                            document.createElement(
                                "span"
                            );

                        char.className =
                            "gsap-animated-text-char";

                        char.setAttribute(
                            "aria-hidden",
                            "true"
                        );

                        char.style.position =
                            "relative";

                        char.style.display =
                            "inline-block";

                        char.textContent =
                            character;

                        wordWrapper.appendChild(
                            char
                        );

                        chars.push(char);
                    }
                );

                fragment.appendChild(
                    wordWrapper
                );
            });

            textNode.parentNode.replaceChild(
                fragment,
                textNode
            );
        };

        /*
         * Find all text nodes
         *
         * IMPORTANT:
         * We don't process the generated spans again.
         */
        const walker =
            document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT
            );

        const textNodes = [];

        let node = walker.nextNode();

        while (node) {
            textNodes.push(node);
            node = walker.nextNode();
        }

        /*
         * Process original text nodes
         */
        textNodes.forEach((textNode) => {
            processTextNode(textNode);
        });

        if (!chars.length) {
            return;
        }

        /*
         * Initial GSAP state
         */
        gsap.set(chars, {
            opacity: 0,
            x: -50,
            y: 0,
            rotateX: 0,
            filter: "blur(5px)",
        });

        let timeline;
        let observer;

        /*
         * Animation
         */
        const animate = () => {
            timeline = gsap
                .timeline()
                .to(
                    chars,
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotateX: 0,
                        filter: "blur(0px)",
                        duration: 1,
                        stagger: 0.035,
                        ease: "power3.out",
                    },
                    0.15
                );
        };

        /*
         * Intersection Observer
         */
        if ("IntersectionObserver" in window) {
            observer =
                new IntersectionObserver(
                    (entries) => {

                        if (
                            entries.some(
                                (entry) =>
                                    entry.isIntersecting
                            )
                        ) {
                            observer.disconnect();

                            animate();
                        }
                    },
                    {
                        threshold: 0.15,
                    }
                );

            observer.observe(element);
        } else {
            animate();
        }

        /*
         * Cleanup
         */
        return () => {

            if (observer) {
                observer.disconnect();
            }

            if (timeline) {
                timeline.kill();
            }

            gsap.killTweensOf(chars);

            element.removeAttribute(
                "aria-label"
            );
        };
    }, [html]);

    return (
        <Element
            ref={elementRef}
            className={className}
        />
    );
};

export default AnimatedText;