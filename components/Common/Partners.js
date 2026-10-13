import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { api } from "@/utils/config";
import AnimatedText from "./AnimatedText";

const Partners = ({ technologies, background }) => {
	return (
		<>
			<div className="partner-area homepage" style={{backgroundImage: `url(${background})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
				<div className="partner-marquee">
					<div className="container">
						<div className="section-title">
							<AnimatedText as="h2" className="title" html={"Our Technology"} />
						</div>
						<div className="partner-track">
							{technologies.map((el, index) => (
								<div className="partner-card" key={`first-${index}`}>
									<a href="#">
										<img
											src={`${api.FILE_URI}${el.image}`}
											alt={`Camgotech Technology | ${el.title}`}
										/>

										<img
											src={`${api.FILE_URI}${el.image}`}
											alt={`Camgotech Technology | ${el.title}`}
										/>
									</a>

									<div className="title">
										<h2>{el.title}</h2>
									</div>
								</div>
							))}
							{technologies.map((el, index) => (
								<div className="partner-card" key={`second-${index}`}>
									<a href="#">
										<img
											src={`${api.FILE_URI}${el.image}`}
											alt={`Camgotech Technology | ${el.title}`}
										/>

										<img
											src={`${api.FILE_URI}${el.image}`}
											alt={`Camgotech Technology | ${el.title}`}
										/>
									</a>

									<div className="title">
										<h2>{el.title}</h2>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Partners.defaultProps = {
	technologies: [],
};

export default Partners;
