import React from "react";
import Link from "next/link";
import { api } from "@/utils/config";
import { DateTimeFormat } from "@/utils/DateTimeFormate";

const Sidebar = ({ articles, services }) => {
	return (
		<>
			<aside className="widget-area">
				<div className="widget widget_search">
					<form className="search-form">
						<input type="search" className="search-field" placeholder="Search your article" />
						<button type="submit">
							<i className="ri-search-line"></i>
						</button>
					</form>
				</div>

				<div className="widget widget_recent_post">
					<h3 className="widget-title">Latest Post</h3>
					{articles.map((el, index) => (
						<article className="item" key={index}>
							<Link href={`/blog/${el.id}`}>
								<a className="thumb">
									<span className="fullimage" role="img" style={{ backgroundImage: `url('${api.FILE_URI}${el.image}')` }}></span>
								</a>
							</Link>
							<div className="info">
								<span>{DateTimeFormat(el.created_at)}</span>
								<h4 className="title usmall">
									<Link href={`/blog/${el.id}`}>
										<a>{el.title}</a>
									</Link>
								</h4>
							</div>
						</article>
					))}
				</div>

				<div className="widget widget_categories">
					<h3 className="widget-title">Our Services</h3>

					<ul className="list">
						{services.map((el, index) => (
							<li key={index}>
								<Link href={`/services/${el.id}`}>
									<a className=" d-flex justify-content-between align-items-center">{el.title}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</>
	);
};

Sidebar.defaultProps = {
	articles: [],
	services: [],
};

export default Sidebar;
