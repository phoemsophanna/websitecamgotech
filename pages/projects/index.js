import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";
import { useInView } from "react-intersection-observer";

const NUMBER_OF_USERS_TO_FETCH = 12;

export default function Projects(props) {
	const global = useContext(GlobalContext);
	const [isAll, setIsAll] = useState(true);
	const [projectCategory, setProjectCategory] = useState([]);
	const [projects, setProjects] = useState([]);
	const [data, setData] = useState([]);
	const [setting, setSetting] = useState(null);
	const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH);
	const [allowScroll, setAllowScroll] = useState(true);
	const { ref, inView } = useInView();

	const handleSelectTypeProject = (id) => {
		setProjectCategory((state) => state.map((el) => ({ ...el, isActive: el.id === id })));
		if (id != 0) {
			setIsAll(false);
			setProjects(data ? data.filter((el) => el.category_id === id) : []);
			// getProjects(id);
		} else {
			setIsAll(true);
			setProjects(data ? data : []);
			// getProjects('all');
		}
	};

	async function getProjects(categoryId) {
		const response = await fetch(`${api.BASE_URL}/project-list?page=1&size=${offset}&categoryId=${categoryId}`);
		const responseData = await response.json();
		if (responseData.status == "success") {
			// responseData.projects.forEach(el => {
			// 	if(!projects.find(pro => pro.id == el.id)) {
			// 		projects.push(el);
			// 		data.push(el);
			// 	}
			// });

			setProjects(responseData.projects);
			setData(responseData.projects);
			// setAllowScroll(categoryId == 'all');
		}
	}

	useEffect(() => {
		setSetting(props?.settings.project);
		setProjectCategory(props?.projectCategory.map((el) => ({ ...el, isActive: false })));
		// if (inView && allowScroll) {
		getProjects("all");
		// setOffset(offset + NUMBER_OF_USERS_TO_FETCH);
		// }
	}, [props, inView]);

	return (
		<>
			<Head>
				<title>Our Project - Camgotech</title>
				<meta name="description" content={props?.settings?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.settings?.meta?.metaKeyword} />
				<meta property="og:title" content="Our Project - Camgotech" />
				<meta property="og:description" content={props?.settings?.meta?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Our Project - Camgotech" />
				<meta name="twitter:description" content={props?.settings?.meta?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.ProjectPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Projects</h2> */}
						<ul>
							<li style={{ fontSize: "19px" }}>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li style={{ fontSize: "19px" }}>Projects</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="projects-area pt-100 pb-75 project-bg" style={{ borderTop: "0px solid" }}>
				<div className="container">
					<div className="section-title">
						<span>OUR PROJECTS</span>
						<h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<ul className="projects-filter-menu">
						<li className={isAll ? "filter mixitup-control-active" : "filter"} onClick={() => handleSelectTypeProject(0)}>
							All
						</li>
						{projectCategory?.map((el, index) => (
							<li key={index} className={el.isActive ? "filter mixitup-control-active" : "filter"} onClick={() => handleSelectTypeProject(el.id)}>
								{el.name}
							</li>
						))}
					</ul>

					<div id="Container" className="row justify-content-center">
						{projects?.map((el, index) => (
							<div className="col-lg-3 col-md-6" key={index}>
								<div
									className="single-projects-item"
									data-aos="fade-up"
									data-aos-delay={50 + index * 10}
									data-aos-duration={500 + index * 100}
									data-aos-once="true"
								>
									<div className="projects-image">
										<a href={el.websiteLink} target="_blank" rel="noreferrer">
											<img src={`${api.FILE_URI}${el.image}`} alt={el.image} />
										</a>
									</div>
									<div className="projects-content">
										<h3>
											<a href={el.websiteLink} target="_blank" rel="noreferrer">
												{el.title}
											</a>
										</h3>
										<ul className="projects-social" style={{ paddingLeft: "0px" }}>
											{el.websiteLink && (
												<li>
													<a href={el.websiteLink} target="_blank" rel="noreferrer">
														<i className="ri-global-line"></i>
													</a>
												</li>
											)}
											{el.appStore && (
												<li>
													<a href={el.appStore} target="_blank" rel="noreferrer">
														<i className="ri-app-store-fill"></i>
													</a>
												</li>
											)}
											{el.playStore && (
												<li>
													<a href={el.playStore} target="_blank" rel="noreferrer">
														<i className="ri-google-play-fill"></i>
													</a>
												</li>
											)}

											{el.facebookLink && (
												<li>
													<a href={el.facebookLink} target="_blank" rel="noreferrer">
														<i className="ri-facebook-fill"></i>
													</a>
												</li>
											)}

											{el.instagramLink && (
												<li>
													<a href={el.instagramLink} target="_blank" rel="noreferrer">
														<i className="ri-instagram-line"></i>
													</a>
												</li>
											)}

											{el.telegramLink && (
												<li>
													<a href={el.telegramLink} target="_blank" rel="noreferrer">
														<i className="ri-telegram-line"></i>
													</a>
												</li>
											)}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="projects-bg-shape-1">
					<img src="/images/projects/projects-bg-shape.png" alt="image" />
				</div>
			</div>
			{/* <div ref={ref}></div> */}

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/project-page`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}
