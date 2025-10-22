import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { api } from "@/utils/config";

const ServiceSlider = ({ services, hasBgColor, setting }) => {
	return (
		<>
			<div className={hasBgColor ? "services-area with-radius ptb-100 bg-0e0e0e-color mb-5" : "services-area with-radius ptb-100"}>
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="services-section-content" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
								<div className="services-bg-text">SERVICE</div>
								<span>SERVICES</span>
								<h3 dangerouslySetInnerHTML={{ __html: setting?.title }}></h3>
								<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
								<div className="services-section-btn">
									<Link href="/services">
										<a className="default-btn">Explore All Services</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-8 col-md-12">
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								pagination={{
									clickable: true,
								}}
								autoplay={{
									delay: 6000,
									disableOnInteraction: true,
								}}
								breakpoints={{
									0: {
										slidesPerView: 1,
									},
									768: {
										slidesPerView: 2,
									},
									1024: {
										slidesPerView: 3,
									},
								}}
								modules={[Autoplay, Pagination]}
								className="mySwiper services-slides"
							>
								{services.map((el, index) => (
									<SwiperSlide key={index}>
										<div className="services-item">
											<div className="services-image">
												<Link href={`/services/${el.id}`}>
													<a>
														<img src={`${api.FILE_URI}${el.image}`} alt={el.title} />
													</a>
												</Link>
											</div>
											<div className="services-content">
												<h3>
													<Link href={`/services/${el.id}`}>
														<a className="text-truncate" style={{ width: "100%" }}>
															{el.title}
														</a>
													</Link>
												</h3>
												<p style={{ fontSize: "18px" }} className="text-overflow-3">
													{el.summary}
												</p>
												<Link href={`/services/${el.id}`}>
													<a className="services-btn">View More</a>
												</Link>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
ServiceSlider.defaultProps = { services: [], hasBgColor: false };
export default ServiceSlider;
