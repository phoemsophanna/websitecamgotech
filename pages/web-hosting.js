import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/web-hosting-page`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function WebHosting(props) {
	const global = useContext(GlobalContext);
	const [currentPage, setCurrentPage] = React.useState(null);
	const [plans, setPlans] = React.useState([]);
	const [group, setGroup] = React.useState([]);
	const [defaultPlan, setDefaultPlan] = React.useState([]);
	const [settings, setSettings] = React.useState(null);
	const [meta, setMeta] = React.useState(null);

	useEffect(() => {
		fetch(`${api.BASE_URL}/web-hosting-page`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setGroup(data.hostingGroup);
					setSettings(data.settings);
					setPlans(data.hostingList);
					setDefaultPlan(data.defaultPlan);
					setCurrentPage(data.hostingGroup[0].id);
					setMeta(data.meta);
				}
			});
	}, []);

	const handleChangeGroup = (id) => {
		setCurrentPage(id);
	};

	return (
		<>
			<Head>
				<title>Web Hosting - Camgotech</title>
				<meta name="description" content={props?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.meta?.metaKeyword} />
				<meta property="og:title" content="Web Hosting - Camgotech" />
				<meta property="og:description" content={props?.meta?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Web Hosting - Camgotech" />
				<meta name="twitter:description" content={props?.meta?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.meta?.image}`} />
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.WebHostingPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Web Hosting</h2> */}
						<ul>
							<li style={{ fontSize: "19px" }}>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li style={{ fontSize: "19px" }}>Web Hosting</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="pricing-area pt-100 pb-75 pricing-bg" style={{ borderTop: "0px solid" }}>
				<div className="container">
					<div className="section-title">
						<span>WEB HOSTING</span>
						<h2 dangerouslySetInnerHTML={{ __html: settings?.webHosting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: settings?.webHosting?.description }}></p>
					</div>

					{group.length > 0 ? (
						<ul className="projects-filter-menu with-background">
							{group.map((el, index) => (
								<li
									key={index}
									onClick={() => handleChangeGroup(el.id)}
									className={el.id === currentPage ? "filter mixitup-control-active" : "filter"}
								>
									{el.title}
								</li>
							))}
						</ul>
					) : null}

					<div className="row justify-content-center">
						{plans.length > 0
							? plans.map((el, index) =>
									el.hostingGroup && JSON.parse(el.hostingGroup).includes(`${currentPage}`) ? (
										<div className="col-lg-4 col-md-6" key={index}>
											<div className="single-pricing-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="1000" data-aos-once="true">
												<h3>{el.type}</h3>
												<div className="price">
													{el.pricePerYear} <span>/ Year</span>
												</div>

												<ul className="pricing-list">
													<li>
														<i className="ri-check-fill"></i> Data Storage: {el.dataStorage}
													</li>
													<li>
														<i className="ri-check-fill"></i> Bandwidth: {el.bandwidth}
													</li>
													<li>
														<i className="ri-check-fill"></i> Email account: {el.emailAccounts}
													</li>
													<li>
														<i className="ri-check-fill"></i> Database: {el.database}
													</li>
													<li>
														<i className="ri-check-fill"></i> Domain add on: {el.domainAddOn}
													</li>
													<li>
														<i className="ri-check-fill"></i> Maximum hourly email send: {el.maxHourlyEmailSend}
													</li>
													<li>
														<i className="ri-check-fill"></i> Domain.com free: {el.isFreeDomain ? "Yes" : "No"}
													</li>
												</ul>
												<div className="pricing-btn">
													<a className="default-btn" href={global.data?.contact?.telegramLink} target="_blank">
														Choose Plan
													</a>
												</div>
												{el.isMostPopular ? (
													<div className="most-popular">
														<span style={{ backgroundColor: el.mostPopularColor }}>Most Popular</span>
													</div>
												) : null}
												{el.isGoodSpeed ? (
													<div className="good-speed">
														<span style={{ backgroundColor: el.goodSpeedColor }}>Good Speed</span>
													</div>
												) : null}
											</div>
										</div>
									) : null
							  )
							: "Data Not Found"}
					</div>
					{defaultPlan.length > 0 ? (
						<>
							<div className="section-title" style={{ marginTop: "30px" }}>
								<p style={{ fontSize: "24px", fontWeight: 600, display: "inline-block", fontFamily: "'jost', sans-serif" }}>
									All plans also include these benefits
								</p>
							</div>
							<div className="single-pricing-card" style={{ padding: "0px", backgroundColor: "transparent", border: "none" }}>
								<ul className="row pricing-list px-3">
									{defaultPlan.map((el, index) => (
										<li
											className="col-md-4"
											style={index === defaultPlan.length - 1 ? { marginBottom: "20px" } : null}
											key={index}
											data-aos="fade-up"
											data-aos-delay={70}
											data-aos-duration={1000}
											data-aos-once="true"
										>
											<i className="ri-check-fill"></i> {el.title}
										</li>
									))}
								</ul>
							</div>
						</>
					) : null}
				</div>
				<div className="projects-bg-shape-1">
					<img src="/images/projects/projects-bg-shape.png" alt="image" />
				</div>
			</div>

			<Footer />
		</>
	);
}
