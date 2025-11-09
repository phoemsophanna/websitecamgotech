import { api } from "@/utils/config";
import React from "react";
import Tilt from "react-next-tilt";

const WhoWeAre = ({ item, styleCss }) => {
	return (
		<>
			{!item ? (
				<div className="about-area ptb-100">
					<div className="container">
						<div className="row align-items-center ">
							<div className="col-lg-6 col-md-12">
								<div className="about-image d-lg-none d-block">
									<img src="/images/about/about-preloading.png" alt="Camgotech | About US" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="about-content placeholder-glow" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
									<span className="placeholder col-2"></span>
									<h3 className="placeholder col-12"></h3>
									<p className="placeholder col-8"></p>
									<p className="placeholder col-9"></p>
								</div>
							</div>
						</div>
					</div>
					<div className="about-shape-1">
						<img src="/images/about/about-shape.png" alt="image" />
					</div>
				</div>
			) : (
				<div className="about-area who-we-are ptb-100" style={styleCss}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12">
								<div className="about-image d-none d-lg-block">
									<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
										<img
											src={`${api.FILE_URI}${item.thumbnail}`}
											alt={`Camgotech, About us | ${item.title}`}
											data-aos="fade-down"
											data-aos-delay="80"
											data-aos-duration="800"
											data-aos-once="true"
										/>
									</Tilt>
								</div>
								<div className="about-image d-lg-none d-block">
									<img
										src={`${api.FILE_URI}${item.thumbnail}`}
										alt={`Camgotech, About us | ${item.title}`}
										data-aos="fade-down"
										data-aos-delay="80"
										data-aos-duration="800"
										data-aos-once="true"
									/>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="about-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
									<span>WHO WE ARE</span>
									<h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
									<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
								</div>
							</div>
						</div>
					</div>
					<div className="about-shape-1">
						<img src="/images/about/about-shape.png" alt="image" />
					</div>
				</div>
			)}
		</>
	);
};

WhoWeAre.defaultProps = {
	item: null,
	styleCss: null,
};

export default WhoWeAre;
