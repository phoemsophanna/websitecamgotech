import React from "react";

const CareerDetailsContent = ({ career }) => {
	return (
		<>
			<div className="career-details-area pt-100 pb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-12">
							<div className="career-details-desc">
								<h3>{career?.title}</h3>
								<div className="career-content" dangerouslySetInnerHTML={{ __html: career?.content }}></div>
							</div>
						</div>

						<div className="col-lg-3 col-md-12">
							<div className="career-details-info">
								<h3>Job Overview</h3>

								<ul className="list">
									<li>
										<span>Location:</span> {career?.location}
									</li>
									<li>
										<span>Job Title:</span> {career?.title}
									</li>
									<li>
										<span>Job Type:</span> {career?.type}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CareerDetailsContent;
