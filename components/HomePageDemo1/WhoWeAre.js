/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";

const WhoWeAre = ({ item }) => {
	return (
		<>
			{!item ? (
				<div className="about-area ptb-100">
					<div className="container">
						<div className="row align-items-center ">
							<div className="col-lg-6 col-md-12 placeholder-glow">
								<div className="about-image placeholder" style={{ width: "90%", height: "300px" }}></div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="about-content placeholder-glow" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
									<span className="placeholder col-2"></span>
									<h3 className="placeholder col-12"></h3>
									<p className="placeholder col-8"></p>
									<p className="placeholder col-9"></p>
									<div className="about-btn">
										<Link href="/about">
											<a className="default-btn placeholder col-3"></a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="about-shape-1">
						<img src="/images/about/about-shape.png" alt="image" />
					</div>
				</div>
			) : (
				<div className="about-area ptb-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12">
								<div className="about-image">
									<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
										<img
											className="d-none d-lg-inline-block"
											src={`${api.FILE_URI}${item.thumbnail}`}
											alt={`Camgotech, who we are, ${item.title}`}
											data-aos="fade-down"
											data-aos-delay="80"
											data-aos-duration="800"
											data-aos-once="true"
										/>
									</Tilt>
									<img
										className="d-lg-none d-inline-block"
										src={`${api.FILE_URI}${item.thumbnail}`}
										alt={`Camgotech, who we are, ${item.title}`}
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
									<div className="about-btn">
										<Link href="/about">
											<a className="default-btn">Know More About Us</a>
										</Link>
									</div>
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
};

export default WhoWeAre;
