import { api } from "@/utils/config";
import React from "react";
import Tilt from "react-next-tilt";

const OurGoal = ({ item }) => {
	return (
		<>
			<div className="about-area our-goal pt-100 pb-75">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="about-wrap-image d-none d-lg-block">
								<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
									<img
										src={`${api.FILE_URI}${item.thumbnail}`}
										alt={`Camgotech | ${item.title}`}
										data-aos="fade-down"
										data-aos-delay="80"
										data-aos-duration="800"
										data-aos-once="true"
									/>
								</Tilt>
							</div>
							<div className="about-wrap-image d-lg-none d-block">
								<img
									src={`${api.FILE_URI}${item.thumbnail}`}
									alt={`Camgotech | ${item.title}`}
									data-aos="fade-down"
									data-aos-delay="80"
									data-aos-duration="800"
									data-aos-once="true"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="about-wrap-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
								<span>OUR GOAL</span>
								<h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
								<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
							</div>
						</div>
					</div>

					<div className="about-inner-box">
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-4 col-md-6">
								<div className="single-about-card section-title" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
									<h3>
										<b>Our Vision</b>
									</h3>
									<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: item.vision }}></p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div
									className="single-about-card section-title"
									data-aos="fade-down"
									data-aos-delay="70"
									data-aos-duration="700"
									data-aos-once="true"
								>
									<h3>
										<b>Our Mission</b>
									</h3>
									<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: item.mission }}></p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div
									className="single-about-card section-title"
									data-aos="fade-down"
									data-aos-delay="70"
									data-aos-duration="700"
									data-aos-once="true"
								>
									<h3>
										<b>Our Value</b>
									</h3>
									<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: item.ourvalue }}></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurGoal;
