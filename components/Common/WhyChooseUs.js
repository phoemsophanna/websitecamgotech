import React, { useEffect } from "react";
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";
import AnimatedText from "./AnimatedText";

const WhyChooseUs = ({ performances, setting, background }) => {
	const [items, setItems] = React.useState([]);

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
						{/* {items.map((el, index) => (
							<div key={index} className="col-lg-4 col-6" style={{ cursor: "pointer" }} onClick={() => unTruncate(el.id)}>
								<div
									className="single-choose-card"
									data-aos="fade-up"
									data-aos-delay={50 + index * 10}
									data-aos-duration={600 + index * 200}
									data-aos-once="true"
								>
									<div className="choose-image ">
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
						))} */}
						<div className="col-lg-4 col-6" style={{ cursor: "pointer" }}>
							<div
								className="single-choose-card why-choose-items"
								data-aos="fade-up"
								data-aos-delay={50 + 1 * 10}
								data-aos-duration={600 + 1 * 200}
								data-aos-once="true"
							>
								<div className="choose-image ">
									<a>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers lucide-layers-3 transition-transform duration-300 ease-out group-hover:scale-125 size-5 text-white" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
									</a>
								</div>
								<div className="choose-content">
									<h3>
										<a>GPT & Claude models</a>
									</h3>
									<p style={{ fontSize: "19px" }}>
										Every frontier model behind one thread — swap mid-conversation or let smart routing decide per message.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-6" style={{ cursor: "pointer" }}>
							<div
								className="single-choose-card why-choose-items"
								data-aos="fade-up"
								data-aos-delay={50 + 1 * 10}
								data-aos-duration={600 + 1 * 200}
								data-aos-once="true"
							>
								<div className="choose-image ">
									<a>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain transition-transform duration-300 ease-out group-hover:scale-125 size-5 text-white" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
									</a>
								</div>
								<div className="choose-content">
									<h3>
										<a>Persistent memory</a>
									</h3>
									<p style={{ fontSize: "19px" }}>
										Projects, preferences and decisions carry across sessions. Your assistant on Monday remembers Friday.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-6" style={{ cursor: "pointer" }}>
							<div
								className="single-choose-card why-choose-items"
								data-aos="fade-up"
								data-aos-delay={50 + 1 * 10}
								data-aos-duration={600 + 1 * 200}
								data-aos-once="true"
							>
								<div className="choose-image ">
									<a>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text transition-transform duration-300 ease-out group-hover:scale-125 size-5 text-white" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
									</a>
								</div>
								<div className="choose-content">
									<h3>
										<a>File analysis</a>
									</h3>
									<p style={{ fontSize: "19px" }}>
										Drop in PDFs, spreadsheets and codebases up to 200MB. Ask questions, extract tables, compare versions.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-6" style={{ cursor: "pointer" }}>
							<div
								className="single-choose-card why-choose-items"
								data-aos="fade-up"
								data-aos-delay={50 + 1 * 10}
								data-aos-duration={600 + 1 * 200}
								data-aos-once="true"
							>
								<div className="choose-image ">
									<a>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe transition-transform duration-300 ease-out group-hover:scale-125 size-5 text-white" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
									</a>
								</div>
								<div className="choose-content">
									<h3>
										<a>Web browsing</a>
									</h3>
									<p style={{ fontSize: "19px" }}>
										Live answers with cited sources — the assistant browses, cross-checks and links every claim.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-6" style={{ cursor: "pointer" }}>
							<div
								className="single-choose-card why-choose-items"
								data-aos="fade-up"
								data-aos-delay={50 + 1 * 10}
								data-aos-duration={600 + 1 * 200}
								data-aos-once="true"
							>
								<div className="choose-image ">
									<a>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug transition-transform duration-300 ease-out group-hover:scale-125 size-5 text-white" aria-hidden="true"><path d="M12 22v-5"></path><path d="M15 8V2"></path><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path><path d="M9 8V2"></path></svg>
									</a>
								</div>
								<div className="choose-content">
									<h3>
										<a>Tool calling</a>
									</h3>
									<p style={{ fontSize: "19px" }}>
										Connect calendars, CRMs and 6,000+ apps so answers become actions: book it, file it, send it.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-6" style={{ cursor: "pointer" }}>
							<div
								className="single-choose-card why-choose-items"
								data-aos="fade-up"
								data-aos-delay={50 + 1 * 10}
								data-aos-duration={600 + 1 * 200}
								data-aos-once="true"
							>
								<div className="choose-image ">
									<a>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users transition-transform duration-300 ease-out group-hover:scale-125 size-5 text-white" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>	
									</a>
								</div>
								<div className="choose-content">
									<h3>
										<a>Shared team threads</a>
									</h3>
									<p style={{ fontSize: "19px" }}>
										Hand a conversation to a teammate with full context, or pin threads to projects for the whole workspace.	
									</p>
								</div>
							</div>
						</div>
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
