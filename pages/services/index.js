import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AllServicesCardStyle2 from "@/components/Services/AllServicesCardStyle2";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Skills from "@/components/Common/Skills";
import Head from "next/head";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/service-page`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function Services2(props) {
	const global = useContext(GlobalContext);
	const [services, setServices] = useState([]);
	const [skillsets, setSkillset] = useState([]);
	const [settings, setSettings] = useState(null);
	useEffect(() => {
		fetch(`${api.BASE_URL}/service-page`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setSettings(data.settings);
					setServices(data.services);
					setSkillset(data.skillsets);
				}
			});
	}, []);
	return (
		<>
			<Head>
				<title>Service - Camgotech</title>
				<meta name="description" content={props?.settings?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.settings?.meta?.metaKeyword} />
				<meta property="og:title" content="Service - Camgotech" />
				<meta property="og:description" content={props?.settings?.meta?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Service - Camgotech" />
				<meta name="twitter:description" content={props?.settings?.meta?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.ServicePage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Services</h2> */}
						<ul className="with-black-bg">
							<li style={{ fontSize: "19px" }}>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li style={{ fontSize: "19px" }}>Services</li>
						</ul>
					</div>
				</div>
			</div>

			<AllServicesCardStyle2 services={services} setting={settings?.service} />

			<Skills bgColor="skill-area ptb-100 service-bg" skillsets={skillsets} setting={settings?.skillset} />

			<Footer />
		</>
	);
}
