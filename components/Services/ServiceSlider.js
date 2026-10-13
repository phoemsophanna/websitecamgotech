import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { api } from "@/utils/config";
import AnimatedText from "../Common/AnimatedText";

const ServiceSlider = ({ services, hasBgColor, setting, background }) => {
	return (
		<>
			<div className={"services-area homepage"} style={{backgroundImage: `url(${background})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
				<div className="container">
					<div className="section-title" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
						<span>SERVICES</span>
						<AnimatedText className="title" as="h2" html={setting?.title} />
						{/* <h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2> */}
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>
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
											<a className="services-btn">View Detail</a>
										</Link>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
};
ServiceSlider.defaultProps = { services: [], hasBgColor: false };
export default ServiceSlider;
