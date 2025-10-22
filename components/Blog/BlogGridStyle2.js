import React from "react";
import Link from "next/link";
import { DateTimeFormat } from "@/utils/DateTimeFormate";
import { api } from "@/utils/config";

const BlogGridStyle2 = ({ articles, setting, styleCss }) => {
	return (
		<>
			<div className="blog-area pt-100 pb-75" style={styleCss}>
				<div className="container">
					<div className="section-title">
						<span>ARTICLE</span>
						<h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<div className="row justify-content-center">
						{articles.map((el, index) => (
							<div className="col-lg-3 col-md-4" key={index}>
								<div className="single-blog-card">
									<div className="blog-image">
										<Link href={{ pathname: "/blog/detail", query: { id: el.id } }}>
											<a>
												<img src={`${api.FILE_URI}${el.image}`} alt={`${el.title}|${el.image}`} />
											</a>
										</Link>

										<div className="date">{DateTimeFormat(el.created_at)}</div>
									</div>
									<div className="blog-content">
										<h3>
											<Link href={{ pathname: "/blog/[slug]", query: { slug: el.id } }}>
												<a>{el.title}</a>
											</Link>
										</h3>
										<p>{el.summary}</p>
										<Link href={{ pathname: "/blog/[slug]", query: { slug: el.id } }}>
											<a className="blog-btn">View More</a>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

BlogGridStyle2.defaultProps = {
	articles: [],
	styleCss: null,
};

export default BlogGridStyle2;
