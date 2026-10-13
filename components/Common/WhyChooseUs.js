import React, { useEffect } from "react";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";
import AnimatedText from "./AnimatedText";

const WhyChooseUs = ({ performances, setting, background }) => {
	const [items, setItems] = React.useState([]);
	console.log(performances);
	useEffect(() => {
		setItems(performances.map((el) => ({ ...el, truncate: true })));
	}, [performances]);

	function unTruncate(id) {
		setItems(items.map((el) => ({ ...el, truncate: el.id === id ? !el.truncate : el.truncate })));
	}

	return (
		<>
			<div className="choose-area pt-100 pb-75" style={{backgroundImage: `url(${background})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
				<div className="container">
					<div className="section-title">
						<span>WHY CHOOSE US</span>
						<AnimatedText as="h2" className="title" html={setting?.title} />
						{/* <h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2> */}
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<div className="row justify-content-center">
						{items.map((el, index) => (
							<div className="col-lg-4 col-6" style={{ cursor: "pointer" }}>
								<div
									className="single-choose-card why-choose-items"
									data-aos="fade-up"
									data-aos-delay={50 + index * 10}
									data-aos-duration={600 + index * 200}
									data-aos-once="true"
								>
									<div className="choose-image ">
										<a>
											<img  
												src={`${api.FILE_URI}${el.image}`}
												alt=""
											/>
										</a>
									</div>
									<div className="choose-content">
										<h3>
											<a>{el.title}</a>
										</h3>
										<p style={{ fontSize: "19px" }}>
											{el.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Shape Images */}
				{/* <div className="choose-shape-1">
					<img src="/images/choose/choose-shape.png" alt="image" />
				</div>
				<div className="choose-shape-2">
					<img src="/images/choose/choose-shape-2.png" alt="image" />
				</div> */}
			</div>
		</>
	);
};

WhyChooseUs.defaultProps = {
	performances: [],
};

export default WhyChooseUs;
