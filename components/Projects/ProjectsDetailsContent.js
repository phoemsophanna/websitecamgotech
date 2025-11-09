import { api } from "@/utils/config";
import React from "react";

const ProjectsDetailsContent = ({ project }) => {
	return (
		<>
			<div className="projects-details-area ptb-100">
				<div className="container">
					<div className="projects-details-desc">
						<div className="article-projects-with-info">
							<div className="row align-items-center">
								<div className="col-lg-7 col-md-6">
									<div className="projects-info-image">
										<img src={`${api.FILE_URI}${project.image}`} alt={`${project.title} | ${project.image}`} />
									</div>
								</div>

								<div className="col-lg-5 col-md-6">
									<div className="projects-info-content">
										<span>PROJECT DETAILS</span>
										<h1 className="fs-1">{project.title}</h1>

										<ul className="info-list">
											<li>
												<span>Category:</span> {project?.category?.name}
											</li>
											<li>
												<span>Client:</span> {project.client}
											</li>
											<li>
												<span>Duration:</span> August 2020 - January 2022
											</li>
											<li>
												<span>Location:</span> {project.location}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-4" dangerouslySetInnerHTML={{ __html: project.content }}></div>
					</div>
				</div>

				<div className="projects-details-shape">
					<img src="/images/projects-details/line-shape.png" alt="image" />
				</div>
			</div>
		</>
	);
};

export default ProjectsDetailsContent;
