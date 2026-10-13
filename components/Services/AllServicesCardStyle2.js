import React from "react";
import Link from "next/link";
import { api } from "@/utils/config";
import AnimatedText from "../Common/AnimatedText";

const AllServicesCardStyle2 = ({ services, setting, background }) => {
	return (
		<>
			<div className="services-area service-page" style={{backgroundImage: background}}>
				<div className="container">
					<div className="section-title">
						<span style={{visibility: "hidden"}}>SERVICES</span>
						<AnimatedText as="h2" className="title" html={setting?.title} />
						{/* <h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2> */}
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					
						{services.map((el,index) => (
							<div className="services-item" key={el?.id}>
								<div className="row align-items-center">
									<div className={`col-md-6 col-12 ${(index + 1) % 2 == 0 ? 'order-md-2' : 'order-md-1'} order-1`}>
										<div className="services-image">
											<Link href={`/services/${el.id}`}>
												<a>
													<img src={`${api.FILE_URI}${el.image}`} alt={el.image} />
												</a>
											</Link>
										</div>
									</div>
									<div className={`col-md-6 col-12 ${(index + 1) % 2 == 0 ? 'order-md-1' : 'order-md-2'} order-2`}>
										<div className={`services-content text-start ${(index + 1) % 2 == 0 ? 'text-md-end' : 'text-md-start'}`}>
											<h3>
												<Link href={`/services/${el.id}`}>
													<a>{el.title}</a>
												</Link>
											</h3>
											<p style={{ fontSize: "18px" }}>{el.summary}</p>
											<Link href={`/services/${el.id}`}>
												<a className="services-btn">View Detail</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>

				{/* Shape Images */}
				<div className="services-shape-1">
					<img src="/images/services/services-shape-1.png" alt="image" />
				</div>
				<div className="services-shape-2">
					<img src="/images/services/services-shape-2.png" alt="image" />
				</div>
			</div>
		</>
	);
};

AllServicesCardStyle2.defaultProps = {
	services: [],
};

export default AllServicesCardStyle2;
