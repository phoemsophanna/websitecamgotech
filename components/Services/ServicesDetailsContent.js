import { api } from "@/utils/config";
import React from "react";

const ServicesDetailsContent = ({ service }) => {
	return (
		<>
			<div className="services-details-area ptb-100">
				<div className="container">
					<div className="services-details-desc">
						<div className="article-services-image">
							<img src={`${api.FILE_URI}${service.image}`} alt={service.image} style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }} />
						</div>
						<h2 className="mt-4 mb-3">{service.title || ""}</h2>
						<div dangerouslySetInnerHTML={{ __html: service.content }}></div>
					</div>
				</div>

				<div className="services-details-shape">
					<img src="/images/services-details/line-shape.png" alt="image" />
				</div>
			</div>
		</>
	);
};

export default ServicesDetailsContent;
