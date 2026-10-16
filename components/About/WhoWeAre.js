import { api } from "@/utils/config";
import React from "react";
import Tilt from "react-next-tilt";
import AnimatedText from "../Common/AnimatedText";
import useToggleTheme from "@/utils/useToggleTheme";

const WhoWeAre = ({ item, styleCss }) => {
	const { isThemeDark } = useToggleTheme();
	return (
		<>
			<div className="about-area ptb-100" style={{backgroundImage: `url(${isThemeDark ? "/images/1.Black-Darkness.webp" : "/images/theme_blue.jpg"})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
				<div className="container">
					<div className="row align-items-center">
						{
							item ? (
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
							) : ""
						}
						<div className="col-lg-6 col-md-12">
							<div className="about-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
								<span>WHO WE ARE</span>
								<AnimatedText as="h3" className="title" html={item ? item.title : ""} />
								<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: item ? item.description : "" }}></p>
								<div className="about-btn">
									<Link href="/about">
										<a className="default-btn">Know More About Us</a>
									</Link>
								</div>
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
