import React from "react";
import Sidebar from "./Sidebar";
import { api, web } from "@/utils/config";
import { DateTimeFormat } from "@/utils/DateTimeFormate";

const SingleBlogContent = ({ article, articles, services }) => {
	return (
		<>
			<div className="blog-details-area pt-100 pb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="blog-details-desc">
								<div className="article-image">
									<img src={`${api.FILE_URI}${article.image}`} alt={`Camgotech Article | ${article.title}`} />
								</div>

								<div className="article-content">
									<ul className="entry-list">
										<li>Post Date: {DateTimeFormat(article.created_at)}</li>
									</ul>
									<h1 className="fs-1 mb-3">{article.title}</h1>

									<div dangerouslySetInnerHTML={{ __html: article.content }}></div>
								</div>

								<div className="article-share">
									<div className="row align-items-center">
										<div className="col-lg-6 col-md-6">
											<div className="share-content">
												<h4>Share The Article:</h4>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<ul className="share-social text-end">
												<li>
													<a
														href={`https://www.facebook.com/sharer/sharer.php?display=page&u=${web.BASE_URL}/blog/${article.id}`}
														target="_blank"
														rel="noreferrer"
													>
														<i className="ri-facebook-fill"></i>
													</a>
												</li>
												<li>
													<a
														href={`https://t.me/share/url?url=${web.BASE_URL}/blog/${article.id}&text=${article.title}`}
														target="_blank"
														rel="noreferrer"
													>
														<i className="ri-telegram-fill"></i>
													</a>
												</li>
												<li>
													<a
														href={`https://www.linkedin.com/sharing/share-offsite/?url=${web.BASE_URL}/blog/${article.id}`}
														target="_blank"
														rel="noreferrer"
													>
														<i className="ri-linkedin-fill"></i>
													</a>
												</li>
												<li>
													<a
														href={`https://api.whatsapp.com/send/?text=${web.BASE_URL}/blog/${article.id}&type=custom_url&app_absent=0`}
														target="_blank"
														rel="noreferrer"
													>
														<i className="ri-whatsapp-fill"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<Sidebar articles={articles} services={services} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

SingleBlogContent.defaultProps = {
	article: null,
	articles: [],
	services: [],
};

export default SingleBlogContent;
