import React, { useEffect } from "react";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";
import AnimatedText from "./AnimatedText";

const WorkingProcess = ({ performances, setting, background }) => {
	const [items, setItems] = React.useState([]);
	const [item, setItem] = React.useState(null);

	useEffect(() => {
		setItems(performances.map((el) => ({ ...el, truncate: true })));
		setItem(performances.find((el, index) => index == 0));
	}, [performances]);

	function unTruncate(id) {
		setItems(items.map((el) => ({ ...el, truncate: el.id === id ? !el.truncate : el.truncate })));
	}

	const handleChangeWorkProcess = (id) => {
		setItem(items.find((el) => el.id == id));
	}

	return (
		<>
			<div className="choose-area pt-100 pb-75" style={{backgroundImage: `url(${background})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
				<div className="container">
					<div className="section-title">
						<span>WORKING PROCCESS</span>
						<AnimatedText as="h2" html={setting?.title} className="title" />
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>
					<div className="menu-step">
    					<div className="menu-step-inner">
							{items.map((el, index) => (
								<button onClick={() => handleChangeWorkProcess(el.id)} className={`${item.id == el.id ? "active" : ""}`}>
									<span>STEP 0{index + 1}</span>
									{el.title || ""}
								</button>
							))}
						</div>
					</div>
					<div
						className="single-choose-card working-process-item"
						data-aos="fade-up"
						data-aos-delay={50 + 1 * 10}
						data-aos-duration={600 + 1 * 200}
						data-aos-once="true"
					>
						{
							item ? (
								<div className="group-working-process" key={item.id}>
									<div className="col-md-6 order-md-1 order-2 col-12">
										<div className="choose-content item-animate">
											<h3>
												<a>{item.title || ""}</a>
											</h3>
											<p style={{ fontSize: "19px" }}>
												{item.description || ""}
											</p>
										</div>
									</div>
									<div className="col-md-6 order-md-2 order-1 col-12">
										<div className="choose-image item-animate">
											<a>
												<img src={`${api.FILE_URI}${item.image}`} alt={item.image} />
											</a>
										</div>
									</div>
								</div>
							) : ""
						}
					</div>
					{/* <div className="row justify-content-center">
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
					</div> */}
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

WorkingProcess.defaultProps = {
	performances: [],
};

export default WorkingProcess;
