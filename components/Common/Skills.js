import React from "react";
import Link from "next/link";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";

const Skills = ({ bgColor, skillsets, setting }) => {
	return (
		<>
			<div className={bgColor}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="skill-content section-title">
								<span>SKILLSET</span>
								<h3 dangerouslySetInnerHTML={{ __html: setting?.title }}></h3>
								<p dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
							</div>
							{skillsets.map((el, index) => (
								<div
									className="skill-bar"
									data-aos="fade-up"
									data-aos-delay={50 + 10 * index}
									data-aos-duration={500 + 100 * index}
									data-aos-once="true"
									key={index}
								>
									<h5 className="progress-title" style={{ fontSize: "16px" }}>
										{el.title}
										<span className="float-end">{el.percentage}%</span>
									</h5>
									<div className="progress" style={{ border: `1px solid ${el.barColor}` }}>
										<div
											className="progress-bar"
											role="progressbar"
											style={{ width: `${el.percentage}%`, backgroundColor: el.barColor }}
											aria-valuenow={el.percentage}
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
								</div>
							))}

							<div className="skill-bar-btn" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
								<Link href="/about">
									<a className="default-btn">Explore More</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="skill-image" data-aos="fade-left" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
								<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
									<img className="d-none d-lg-inline-block" src={`${api.FILE_URI}${setting?.thumbnail}`} alt="image" />
								</Tilt>
								<img className="d-lg-none d-inline-block" src={`${api.FILE_URI}${setting?.thumbnail}`} alt="image" />

								<div className="skill-shape-1">
									<img src="/images/skill/skill-shape-1.png" alt="image" />
								</div>
								<div className="skill-shape-2">
									<img src="/images/skill/skill-shape-2.png" alt="image" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="skill-bg-shape">
					<img src="/images/skill/skill-bg-shape.png" alt="image" />
				</div>
			</div>
		</>
	);
};

Skills.defaultProps = {
	bgColor: "skill-area ptb-100",
	skillsets: [],
};

export default Skills;
