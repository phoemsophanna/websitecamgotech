/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import Link from "next/link";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";
import LazyImage from "../Common/LazyImage";
import { gsap } from "gsap";
import useToggleTheme from "@/utils/useToggleTheme";

const HeroSlider = ({ sliders = [] }) => {
    const swiperRef = useRef(null);
    const animationRef = useRef(null);
    const { isThemeDark } = useToggleTheme();

    /*
    |--------------------------------------------------------------------------
    | Reset slide
    |--------------------------------------------------------------------------
    */
    const resetSlide = (slide) => {
        if (!slide) return;

        const subtitle = slide.querySelector(".slide-subtitle");
        const title = slide.querySelector(".slide-title");
        const description = slide.querySelector(".slide-description");
        const button = slide.querySelector(".slide-button");
        const image = slide.querySelector(".main-slides-image");

        if (subtitle) {
            gsap.killTweensOf(subtitle);

            gsap.set(subtitle, {
                opacity: 0,
                x: -50,
            });
        }

        if (title) {
            gsap.killTweensOf(title);

            /*
             * Remove old character spans
             */
            const originalText =
                title.dataset.originalText || title.textContent || "";

            title.dataset.originalText = originalText;

            title.innerHTML = originalText;
        }

        if (description) {
            gsap.killTweensOf(description);

            gsap.set(description, {
                opacity: 0,
                y: 30,
            });
        }

        if (button) {
            gsap.killTweensOf(button);

            gsap.set(button, {
                opacity: 0,
                y: 30,
            });
        }

        if (image) {
            gsap.killTweensOf(image);

            gsap.set(image, {
                opacity: 0,
                scale: 0.9,
                y: 30,
            });
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Animate slide
    |--------------------------------------------------------------------------
    */
    const animateSlide = (swiper) => {
        if (!swiper) return;

        const slide = swiper.slides?.[swiper.activeIndex];

        if (!slide) {
            console.log("❌ Active slide not found");
            return;
        }

        console.log(
            "🎬 Animating slide:",
            swiper.activeIndex
        );

        /*
         * Stop previous timeline
         */
        if (animationRef.current) {
            animationRef.current.kill();
            animationRef.current = null;
        }

        /*
         * Reset all non-active slides
         */
        swiper.slides.forEach((item, index) => {
            if (index !== swiper.activeIndex) {
                resetSlide(item);
            }
        });

        /*
         * Elements
         */
        const subtitle = slide.querySelector(
            ".slide-subtitle"
        );

        const title = slide.querySelector(
            ".slide-title"
        );

        const description = slide.querySelector(
            ".slide-description"
        );

        const button = slide.querySelector(
            ".slide-button"
        );

        const image = slide.querySelector(
            ".main-slides-image"
        );

        if (!title) {
            console.log(
                "❌ .slide-title was not found"
            );
            return;
        }

        /*
         * ------------------------------------------------------
         * SPLIT TITLE INTO CHARACTERS
         * ------------------------------------------------------
         */

        const originalText =
			title.dataset.originalText ||
			title.textContent ||
			"";

		title.dataset.originalText = originalText;

		/*
		* Clear title
		*/
		title.innerHTML = "";

		/*
		* Character array
		*/
		const chars = [];

		/*
		* Split text by words
		*/
		const words = originalText.trim().split(/\s+/);

		words.forEach((word, wordIndex) => {

			/*
			* Word wrapper
			*/
			const wordWrapper =
				document.createElement("div");

			wordWrapper.setAttribute(
				"aria-hidden",
				"true"
			);

			wordWrapper.style.position = "relative";
			wordWrapper.style.display = "inline-block";

			/*
			* Split word into characters
			*/
			Array.from(word).forEach((character) => {

				const char =
					document.createElement("div");

				char.className = "gsap-char";

				char.setAttribute(
					"aria-hidden",
					"true"
				);

				char.style.position = "relative";
				char.style.display = "inline-block";

				char.textContent = character;

				wordWrapper.appendChild(char);

				chars.push(char);
			});

			/*
			* Add word to title
			*/
			title.appendChild(wordWrapper);

			/*
			* Space between words
			*/
			if (wordIndex < words.length - 1) {
				title.appendChild(
					document.createTextNode(" ")
				);
			}
		});

        /*
         * ------------------------------------------------------
         * INITIAL STATES
         * ------------------------------------------------------
         */

        /*
         * Subtitle
         */
        if (subtitle) {
            gsap.set(subtitle, {
                opacity: 0,
                x: -50,
            });
        }

        /*
         * Title characters
         */
        gsap.set(chars, {
			opacity: 0,
			x: -50,
			y: 0,
			rotateX: 0,
			filter: "blur(5px)",
		});

        /*
         * Description
         */
        if (description) {
            gsap.set(description, {
                opacity: 0,
                y: 30,
            });
        }

        /*
         * Button
         */
        if (button) {
            gsap.set(button, {
                opacity: 0,
                y: 30,
            });
        }

        /*
         * Image
         */
        if (image) {
            gsap.set(image, {
                opacity: 0,
                scale: 0.9,
                y: 30,
            });
        }

        /*
         * ------------------------------------------------------
         * GSAP TIMELINE
         * ------------------------------------------------------
         */

        const timeline = gsap.timeline();

        animationRef.current = timeline;

        /*
         * Subtitle
         */
        if (subtitle) {
            timeline.to(
                subtitle,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                0
            );
        }

        /*
         * Title characters
         */
        timeline.to(
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

        /*
         * Description
         */
        if (description) {
            timeline.to(
                description,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                0.55
            );
        }

        /*
         * Button
         */
        if (button) {
            timeline.to(
                button,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                0.7
            );
        }

        /*
         * Image
         */
        if (image) {
            timeline.to(
                image,
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                0.15
            );
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Initial animation
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        if (!sliders || sliders.length === 0) {
            return;
        }

        /*
         * Wait until Swiper DOM is rendered
         */
        const timer = setTimeout(() => {
            const swiperElement =
                document.querySelector(
                    ".home-slides"
                );

            if (!swiperElement) {
                console.log(
                    "❌ Home swiper not found"
                );
                return;
            }

            /*
             * Find active slide
             */
            const activeSlide =
                swiperElement.querySelector(
                    ".swiper-slide-active"
                );

            if (!activeSlide) {
                console.log(
                    "❌ Active slide not found"
                );
                return;
            }

            /*
             * Find swiper instance
             */
            if (swiperRef.current) {
                animateSlide(swiperRef.current);
            }
        }, 300);

        return () => {
            clearTimeout(timer);

            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [sliders]);

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <>
            <div className="main-slides-area" style={{backgroundImage: `url(${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                {sliders.length <= 0 ? (

                    /*
                    |--------------------------------------------------------------------------
                    | Loading
                    |--------------------------------------------------------------------------
                    */
                    <div className="main-slides-item">
                        <div className="container-fluid">
                            <div className="row align-items-center">

                                <div className="col-lg-7 col-md-12">
                                    <div className="main-slides-content placeholder-glow">

                                        <span className="placeholder col-3"></span>

                                        <h1>
                                            <span className="placeholder col-4"></span>
                                        </h1>

                                        <p>
                                            <span className="placeholder col-6"></span>
                                        </p>

                                        <div className="slides-btn">
                                            <a className="default-btn placeholder col-2"></a>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="main-slides-image">
                                        <img
                                            src="/images/home-slides/slides-preloading.png"
                                            alt="Camgotech Image"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                ) : (

                    /*
                    |--------------------------------------------------------------------------
                    | Slider
                    |--------------------------------------------------------------------------
                    */
                    <>
                        <Swiper
                            spaceBetween={0}
                            loop={true}
                            effect="fade"

                            pagination={{
                                clickable: true,
                            }}

                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: true,
                            }}

                            modules={[
                                EffectFade,
                                Pagination,
                                Autoplay,
                            ]}

                            className="mySwiper home-slides"

                            /*
                            |--------------------------------------------------------------------------
                            | Swiper initialization
                            |--------------------------------------------------------------------------
                            */
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                /*
                                 * Animate first slide
                                 */
                                setTimeout(() => {
                                    animateSlide(swiper);
                                }, 300);
                            }}

                            /*
                            |--------------------------------------------------------------------------
                            | Slide changed
                            |--------------------------------------------------------------------------
                            */
                            onSlideChange={(swiper) => {

                                /*
                                 * Small delay allows Swiper
                                 * to update active class
                                 */
                                setTimeout(() => {
                                    animateSlide(swiper);
                                }, 50);
                            }}
                        >

                            {sliders.map(
                                (el, index) => (

                                    <SwiperSlide
                                        key={index}
                                    >

                                        <div className="main-slides-item" style={{backgroundImage: `url(${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                                            <div className="container-fluid">

                                                <div className="row align-items-center">

                                                    {/* ============================
                                                        TEXT
                                                    ============================= */}

                                                    <div className="col-lg-7 col-md-12">

                                                        <div className="main-slides-content">

                                                            {/* Subtitle */}
                                                            <span className="slide-subtitle">
                                                                {el.subtitle}
                                                            </span>

                                                            {/* Title */}
                                                            <h1 className="slide-title" data-original-text={el.title}>
                                                            </h1>

                                                            {/* Description */}
                                                            <p
                                                                className="slide-description"
                                                                style={{
                                                                    fontSize:
                                                                        "19px",
                                                                }}
                                                            >
                                                                {
                                                                    el.description
                                                                }
                                                            </p>

                                                            {/* Button */}

                                                            {el.linkTo ? (

                                                                <div className="slides-btn slide-button">

                                                                    {el.redirectNewTap ? (

                                                                        <a
                                                                            href={
                                                                                el.linkTo
                                                                            }
                                                                            className="default-btn"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            {
                                                                                el.linkLabel
                                                                            }
                                                                        </a>

                                                                    ) : (

                                                                        <Link
                                                                            href={
                                                                                el.linkTo
                                                                            }
                                                                        >
                                                                            <a className="default-btn">
                                                                                {
                                                                                    el.linkLabel
                                                                                }
                                                                            </a>
                                                                        </Link>

                                                                    )}

                                                                </div>

                                                            ) : (

                                                                <div className="slides-btn slide-button">

                                                                    <Link href="/contact">
                                                                        <a className="default-btn">
                                                                            GET STARTED
                                                                        </a>
                                                                    </Link>

                                                                </div>

                                                            )}

                                                        </div>

                                                    </div>

                                                    {/* ============================
                                                        IMAGE
                                                    ============================= */}

                                                    <div className="col-lg-5 col-md-12">

                                                        <div className="main-slides-image">

                                                            <Tilt
                                                                lineGlareEnable={
                                                                    false
                                                                }
                                                                lineGlareBlurEnable={
                                                                    false
                                                                }
                                                                spotGlareEnable={
                                                                    false
                                                                }
                                                            >

                                                                <LazyImage
                                                                    src={`${api.FILE_URI}${el.image}`}
                                                                    alt={`${el.title}${el.subtitle}`}
                                                                    className="d-none d-lg-inline-block"
                                                                    placeholderSrc="/images/home-slides/slides-preloading.png"
                                                                    placeholderClassName="d-none d-lg-inline-block"
                                                                />

                                                            </Tilt>

                                                            <img
                                                                className="d-lg-none d-inline-block"
                                                                src={`${api.FILE_URI}${el.image}`}
                                                                alt={`${el.title}${el.subtitle}`}
                                                            />

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </SwiperSlide>

                                )
                            )}

                        </Swiper>

                        {/* ============================
                            Shape Images
                        ============================= */}

                        <div className="main-slides-shape-3">
                            <img
                                src="/images/home-slides/slides-shape-3.png"
                                alt="image"
                            />
                        </div>

                        <div className="main-slides-shape-5">
                            <img
                                src="/images/home-slides/slides-shape-5.png"
                                alt="image"
                            />
                        </div>

                    </>

                )}

            </div>
        </>
    );
};

HeroSlider.defaultProps = {
    sliders: [],
};

export default HeroSlider;