import React from "react";
import Link from "next/link";
import AnimatedText from "../Common/AnimatedText";

const CareerContent = ({ careers, telegramLink, background }) => {
	return (
		<>
			<div className="career-area" style={{backgroundImage: background}}>
				<div className="container">
					<div className="section-title">
						<span>Career</span>
						<AnimatedText as="h2" className="title" html="When You Have Jobs In Multiple <b>Locations</b>" />
					</div>

					{careers.map((el, index) => (
						<div className="career-item" key={index}>
							<div className="row align-items-center">
								<div className="col-lg-9 col-md-9">
									<div className="career-content">
										<h3>
											<Link href={`/career/${el.id}`}>
												<a>{el.title}</a>
											</Link>
										</h3>
										<p>{el.summary}</p>
										<ul className="list">
											<li>
												<span>Location:</span> {el.location}
											</li>
											<li>
												<span>Type:</span> {el.type}
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-3 col-md-3">
									<div className="career-btn text-end">
										<a href={telegramLink} target="_blank" rel="noreferrer" className="default-btn">
											Get Started
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

CareerContent.defaultProps = {
	careers: [],
};

export default CareerContent;
