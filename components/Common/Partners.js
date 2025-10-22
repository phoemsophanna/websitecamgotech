import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { api } from "@/utils/config";

const Partners = ({ technologies }) => {
	return (
		<>
			<div className="partner-area ptb-100">
				<div className="container">
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						autoplay={{
							delay: 6000,
							disableOnInteraction: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							576: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 6,
							},
						}}
						modules={[Autoplay]}
						className="mySwiper partner-slides"
					>
						{technologies.map((el, index) => (
							<SwiperSlide key={index}>
								<div className="partner-card">
									<a>
										<img src={`${api.FILE_URI}${el.image}`} alt={`Camgotech Technology | ${el.title}`} />
										<img src={`${api.FILE_URI}${el.image}`} alt={`Camgotech Technology | ${el.title}`} />
									</a>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
};

Partners.defaultProps = {
	technologies: [],
};

export default Partners;
