import { api } from "@/utils/config";
import React from "react";
import Tilt from "react-next-tilt";
import AnimatedText from "../Common/AnimatedText";

const WhoWeAre = ({ item, styleCss }) => {
	if(!item) return;
	return (
		<>
			<div className="about-area who-we-are" style={styleCss}>
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
								<AnimatedText as="h3" className="title" html={item.title} />
								<p dangerouslySetInnerHTML={{ __html: item.description }}></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

WhoWeAre.defaultProps = {
	item: null,
	styleCss: null,
};

export default WhoWeAre;
