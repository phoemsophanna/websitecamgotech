import React, { useEffect } from "react";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";

const WhyChooseUs = ({ performances, setting }) => {
	const [items, setItems] = React.useState([]);

	useEffect(() => {
		setItems(performances.map((el) => ({ ...el, truncate: true })));
	}, [performances]);

	function unTruncate(id) {
		setItems(items.map((el) => ({ ...el, truncate: el.id === id ? !el.truncate : el.truncate })));
	}

	return (
		<>
			<div className="choose-area pt-100 pb-75">
				<div className="container">
					<div className="section-title">
						<span>WHY CHOOSE US</span>
						<h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<div className="row justify-content-center">
						{items.map((el, index) => (
							<div key={index} className="col-lg-3 col-6" style={{ cursor: "pointer" }} onClick={() => unTruncate(el.id)}>
								<div
									className="single-choose-card"
									data-aos="fade-up"
									data-aos-delay={50 + index * 10}
									data-aos-duration={600 + index * 200}
									data-aos-once="true"
								>
									<div className="choose-image d-none d-lg-block">
										<a>
											<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
												<img src={`${api.FILE_URI}${el.image}`} alt={el.image} />
											</Tilt>
										</a>
									</div>
									<div className="choose-image d-lg-none d-block">
										<a>
											<img src={`${api.FILE_URI}${el.image}`} alt={el.image} />
										</a>
									</div>
									<div className="choose-content">
										<h3>
											<a>{el.title || ""}</a>
										</h3>
										<p style={{ fontSize: "19px" }} className={el.truncate ? "text-truncate-3" : ""}>
											{el.description || ""}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Shape Images */}
				<div className="choose-shape-1">
					<img src="/images/choose/choose-shape.png" alt="image" />
				</div>
				<div className="choose-shape-2">
					<img src="/images/choose/choose-shape-2.png" alt="image" />
				</div>
			</div>
		</>
	);
};

WhyChooseUs.defaultProps = {
	performances: [],
};

export default WhyChooseUs;
