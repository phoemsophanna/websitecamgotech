import { api } from "@/utils/config";
import React from "react";
import Tilt from "react-next-tilt";
import AnimatedText from "../Common/AnimatedText";

const WhoWeAre = ({ item, styleCss }) => {
	return (
		<>
			{
				item ? (
					<div className="about-area who-we-are" style={styleCss}>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-12">
									<div className="about-image d-none d-lg-block">
										<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
											<img
												src={`${api.FILE_URI}${item ? item.thumbnail : "/site-setting/CamGoTech_ZL1bDBI9IKXSrVBhW35ZIJJMhBpBe0XLlZZPrWmV.png"}`}
												alt={`Camgotech, About us | ${item ? item.title : "Empowering Businesses Through Technology"}`}
												data-aos="fade-down"
												data-aos-delay="80"
												data-aos-duration="800"
												data-aos-once="true"
											/>
										</Tilt>
									</div>
									<div className="about-image d-lg-none d-block">
										<img
											src={`${api.FILE_URI}${item ? item.thumbnail : "/site-setting/CamGoTech_ZL1bDBI9IKXSrVBhW35ZIJJMhBpBe0XLlZZPrWmV.png"}`}
											alt={`Camgotech, About us | ${item ? item.title : "Empowering Businesses Through Technology"}`}
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
										<AnimatedText as="h3" className="title" html={item ? item.title : "Empowering Businesses Through Technology"} />
										<p dangerouslySetInnerHTML={{ __html: item ? item.description : "" }}></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="about-area who-we-are" style={styleCss}>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-12">
									<div className="about-image d-none d-lg-block">
										<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
											<img
												src={`${api.FILE_URI}${"/site-setting/CamGoTech_ZL1bDBI9IKXSrVBhW35ZIJJMhBpBe0XLlZZPrWmV.png"}`}
												alt={`Camgotech, About us | ${"Empowering Businesses Through Technology"}`}
												data-aos="fade-down"
												data-aos-delay="80"
												data-aos-duration="800"
												data-aos-once="true"
											/>
										</Tilt>
									</div>
									<div className="about-image d-lg-none d-block">
										<img
											src={`${api.FILE_URI}${"/site-setting/CamGoTech_ZL1bDBI9IKXSrVBhW35ZIJJMhBpBe0XLlZZPrWmV.png"}`}
											alt={`Camgotech, About us | ${"Empowering Businesses Through Technology"}`}
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
										<AnimatedText as="h3" className="title" html={"Empowering Businesses Through Technology"} />
										<p dangerouslySetInnerHTML={{ __html: "" }}></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</>
	);
};

WhoWeAre.defaultProps = {
	item: null,
	styleCss: null,
};

export default WhoWeAre;
