import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ProjectsSocial from "./ProjectsSocial";
import { api } from "@/utils/config";

const ProjectSlider = ({ projects, setting }) => {
	return (
		<>
			<div className="projects-area with-black-background pb-100">
				<div className="container-fluid">
					<div className="section-title">
						<span>OUR PROJECTS</span>
						<h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<div className="px-3 text-center">
						<Swiper
							slidesOffsetAfter={100}
							slidesPerView={1}
							spaceBetween={30}
							navigation={true}
							autoplay={{
								delay: 6000,
								disableOnInteraction: true,
							}}
							initialSlide={2}
							centeredSlides={true}
							loop={true}
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
								1200: {
									slidesPerView: 4,
								},
							}}
							modules={[Autoplay, Navigation]}
							className="mySwiper projects-slides"
						>
							{projects.map((el, index) => (
								<SwiperSlide key={index}>
									<div
										className="projects-item text-start"
										data-aos="fade-up"
										data-aos-delay={50 + index * 10}
										data-aos-duration={500 + index * 100}
										data-aos-once="true"
									>
										<div className="projects-image">
											<a href={el.websiteLink} target="_blank" rel="noreferrer">
												<img src={`${api.FILE_URI}${el.image}`} alt={el.title} />
											</a>
											<ProjectsSocial
												websiteLink={el.websiteLink}
												appStore={el.appStore}
												playStore={el.playStore}
												facebookLink={el.facebookLink}
												instagramLink={el.instagramLink}
												telegramLink={el.telegramLink}
											/>
										</div>
										<div className="projects-content">
											<h3>
												<a href={el.websiteLink} target="_blank" rel="noreferrer">
													{el.title}
												</a>
											</h3>
											<a href={el.websiteLink} target="_blank" rel="noreferrer" className="projects-btn">
												View More
											</a>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				{/* Shape Images */}
				<div className="projects-bg-shape-1">
					<img src="/images/projects/projects-bg-shape.png" alt="image" />
				</div>
				<div className="projects-shape-1">
					<img src="/images/projects/projects-shape-1.png" alt="image" />
				</div>
			</div>
		</>
	);
};
ProjectSlider.defaultProps = { projects: [] };
export default ProjectSlider;
