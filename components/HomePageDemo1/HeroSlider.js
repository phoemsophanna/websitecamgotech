/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import { Autoplay } from "swiper";
import Link from "next/link";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";
import axios from "axios";
import LazyImage from "../Common/LazyImage";

const HeroSlider = ({sliders = []}) => {
	// const [sliders, setSliders] = useState([]);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const url = `${api.BASE_URL}/sliders`;
	// 			const response = await axios.get(url);
	// 			setSliders(response.data.sliders);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// 	fetchData();
	// }, []);
	useEffect(() => {
		console.log(sliders);
		
	}, []);

	return (
		<>
			<div className="main-slides-area">
				{sliders.length <= 0 ? (
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

								<div className="col-lg-5 col-md-12" data-aos="fade-down" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
									<div className="main-slides-image">
										<img src="/images/home-slides/slides-preloading.png" alt="Camgotech Image" />
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<Swiper
							spaceBetween={0}
							effect={"fade"}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 6000,
								disableOnInteraction: true,
							}}
							modules={[EffectFade, Pagination, Autoplay]}
							className="mySwiper home-slides"
						>
							{sliders.map((el, index) => (
								<SwiperSlide key={index}>
									<div className="main-slides-item">
										<div className="container-fluid">
											<div className="row align-items-center">
												<div className="col-lg-7 col-md-12">
													<div className="main-slides-content">
														<span data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
															{el.subtitle}
														</span>
														<h1 data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
															{el.title}
														</h1>
														<p style={{ fontSize: "19px" }} data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
															{el.description}
														</p>

														{el.linkTo ? (
															<div className="slides-btn" data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
																{el.redirectNewTap ? (
																	<a href={el.linkTo} className="default-btn" target="_blank">
																		{el.linkLabel}
																	</a>
																) : (
																	<Link href={el.linkTo}>
																		<a className="default-btn">{el.linkLabel}</a>
																	</Link>
																)}
															</div>
														) : (
															<div className="slides-btn" data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
																<Link href="/contact">
																	<a className="default-btn">GET STARTED</a>
																</Link>
															</div>
														)}
													</div>
												</div>

												<div className="col-lg-5 col-md-12" data-aos="fade-down" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
													<div className="main-slides-image">
														<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
															<LazyImage
																src={`${api.FILE_URI}${el.image}`}
																alt={`${el.title}${el.subtitle}`}
																className="d-none d-lg-inline-block"
																placeholderSrc="/images/home-slides/slides-preloading.png"
																placeholderClassName="d-none d-lg-inline-block"
															/>
															{/* <img className="d-none d-lg-inline-block" src={`${api.FILE_URI}${el.image}`} alt={`${el.title}${el.subtitle}`} /> */}
														</Tilt>
														<img className="d-lg-none d-inline-block" src={`${api.FILE_URI}${el.image}`} alt={`${el.title}${el.subtitle}`} />
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Shape Images */}
						<div className="main-slides-shape-3">
							<img src="/images/home-slides/slides-shape-3.png" alt="image" />
						</div>
						<div className="main-slides-shape-5">
							<img src="/images/home-slides/slides-shape-5.png" alt="image" />
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
