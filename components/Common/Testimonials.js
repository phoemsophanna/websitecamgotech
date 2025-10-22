/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";

const Testimonials = ({ testimonials, setting }) => {
	return (
		<>
			<div className="testimonials-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="testimonials-section-content" data-aos="fade-right" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
								<span>TESTIMONIALS</span>
								<h3 dangerouslySetInnerHTML={{ __html: setting?.title }}></h3>
								<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>

								<div className="testimonials-btn">
									<Link href="/testimonials">
										<a className="default-btn">Know More Client Feedback</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div
								className="testimonials-item  d-none d-lg-block"
								data-aos="fade-left"
								data-aos-delay="80"
								data-aos-duration="800"
								data-aos-once="true"
							>
								{testimonials.map((el, index) => (
									<Tilt key={index} lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
										<div className="item-box">
											<img src={`${api.FILE_URI}${el.reviewerProfile}`} className="rounded-circle" alt={el.reviewerProfile} />
											<p>{el.comment}</p>
											<h4>
												{el.reviewerName}, <span>{el.reviewerPosition}</span>
											</h4>
										</div>
									</Tilt>
								))}
							</div>
							<div
								className="testimonials-item d-lg-none d-block"
								data-aos="fade-left"
								data-aos-delay="80"
								data-aos-duration="800"
								data-aos-once="true"
							>
								{testimonials.map((el, index) => (
									<div key={index} className="item-box">
										<img src={`${api.FILE_URI}${el.reviewerProfile}`} className="rounded-circle" alt={el.reviewerProfile} />
										<p style={{ fontSize: "19px" }}>{el.comment}</p>
										<h4>
											{el.reviewerName}, <span>{el.reviewerPosition}</span>
										</h4>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="testimonialsbg-shape">
					<img src="/images/testimonials/testimonials-shape.png" alt="image" />
				</div>
			</div>
		</>
	);
};

Testimonials.defaultProps = {
	testimonials: [],
};

export default Testimonials;
