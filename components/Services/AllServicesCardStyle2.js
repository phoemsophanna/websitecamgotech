import React from "react";
import Link from "next/link";
import { api } from "@/utils/config";

const AllServicesCardStyle2 = ({ services, setting }) => {
	return (
		<>
			<div className="services-area pt-100 pb-75">
				<div className="container">
					<div className="section-title">
						<span>SERVICES</span>
						<h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<div className="row justify-content-center">
						{services.map((el) => (
							<div className="col-lg-4 col-md-6" key={el.id}>
								<div className="services-item">
									<div className="services-image">
										<Link href={`/services/${el.id}`}>
											<a>
												<img src={`${api.FILE_URI}${el.image}`} alt={el.image} />
											</a>
										</Link>
									</div>
									<div className="services-content">
										<h3>
											<Link href={`/services/${el.id}`}>
												<a>{el.title}</a>
											</Link>
										</h3>
										<p style={{ fontSize: "18px" }}>{el.summary}</p>
										<Link href={`/services/${el.id}`}>
											<a className="services-btn">View More</a>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
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
