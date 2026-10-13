import React from "react";
import Link from "next/link";
import { DateTimeFormat } from "@/utils/DateTimeFormate";
import { api } from "@/utils/config";
import AnimatedText from "../Common/AnimatedText";

const BlogGridStyle2 = ({ articles, setting, styleCss }) => {
	return (
		<>
			<div className="blog-area" style={styleCss}>
				<div className="container">
					<div className="section-title">
						<span style={{visibility: "hidden"}}>ARTICLE</span>
						<AnimatedText as="h2" className="title" html={setting?.title} />
						{/* <h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2> */}
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<div className="row justify-content-center">
						{articles.map((el, index) => (
							<div className="col-lg-4 col-md-4" key={index}>
								<div className="single-blog-card">
									<div className="blog-image">
										<Link href={{ pathname: "/blog/[slug]", query: { slug: el.id } }}>
											<a>
												<img src={`${api.FILE_URI}${el.image}`} alt={`${el.title}|${el.image}`} />
											</a>
										</Link>
									</div>
									<div className="blog-content">
										<h3>
											<Link href={{ pathname: "/blog/[slug]", query: { slug: el.id } }}>
												<a>{el.title}</a>
											</Link>
										</h3>
										<p>{el.summary}</p>
										<div className="blog-footer">
											<Link href={{ pathname: "/blog/[slug]", query: { slug: el.id } }}>
												<a className="blog-btn">Read More</a>
											</Link>
											<div className="date">{DateTimeFormat(el.created_at)}</div>
										</div>
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
