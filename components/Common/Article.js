import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";
import { api } from "@/utils/config";
import { DateTimeFormat } from "@/utils/DateTimeFormate";

const Article = ({ articles, setting }) => {
	const swiperRef = React.useRef();

	return (
		<>
			<div className="blog-area pt-100 pb-75">
				<div className="container">
					<div className="section-title">
						<span>ARTICLE</span>
						<h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>
					<div className="section-content">
						<div className="swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}></div>
						<div className="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}></div>
						<Swiper
							slidesPerView={2}
							spaceBetween={30}
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper;
							}}
							autoplay={{
								delay: 6000,
								disableOnInteraction: true,
							}}
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
							}}
							modules={[Autoplay]}
							className="mySwiper blog-slides"
							data-aos="fade-up"
							data-aos-delay="80"
							data-aos-duration="800"
							data-aos-once="true"
						>
							{articles.map((el, index) => (
								<SwiperSlide key={index}>
									<div className="blog-card">
										<div className="row align-items-center">
											<div className="col-lg-6">
												<div className="blog-image">
													<Link href={`/blog/${el.id}`}>
														<a>
															<img src={`${api.FILE_URI}${el.image}`} alt={`${el.title}|${el.image}`} />
														</a>
													</Link>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="blog-content">
													<h3>
														<Link href={`/blog/${el.id}`}>
															<a className="text-truncate-3">{el.title}</a>
														</Link>
													</h3>
													<p className="d-none d-md-inline-block">{el.summary}</p>

													<Link href={`/blog/${el.id}`}>
														<a className="blog-btn">View More</a>
													</Link>
													<div>
														<div className="date">{DateTimeFormat(el.created_at)}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

Article.defaultProps = {
	articles: [],
};

export default Article;
