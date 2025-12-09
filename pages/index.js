import React, { useEffect, useState } from "react";
import Navbar from "@/components/Layout/Navbar";
import HeroSlider from "@/components/HomePageDemo1/HeroSlider";
import Partners from "@/components/Common/Partners";
import WhoWeAre from "@/components/HomePageDemo1/WhoWeAre";
import ServiceSlider from "@/components/Services/ServiceSlider";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import ProjectSlider from "@/components/Projects/ProjectSlider";
import Testimonials from "@/components/Common/Testimonials";
import PricingTable from "@/components/Pricing/PricingTable";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layout/Footer";
import { api } from "@/utils/config";
import Head from "next/head";

export default function Home(props) {
	const [settings, setSettings] = useState(null);

	useEffect(() => {
		fetch(`${api.BASE_URL}/homepage`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setSettings(data.settings);
				}
			});
	}, []);


	return (
		<>
			<Head>
				<title>Home - Camgotech</title>
				<meta name="description" content={props?.data?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.data?.meta?.metaKeyword} />
				<meta property="og:title" content="Home - Camgotech" />
				<meta property="og:description" content={props?.data?.meta?.metaKeyword} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.data?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Home - Camgotech" />
				<meta name="twitter:description" content={props?.data?.meta?.metaKeyword} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.data?.meta?.image}`} />
			</Head>
			<Navbar />

			<HeroSlider sliders={props?.sliders?.sliders} />

			<WhoWeAre item={settings?.whoWeAre} />

			{props?.data?.services?.length > 0 ? <ServiceSlider services={props?.data?.services} setting={settings?.service} /> : ""}
			{props?.data?.performances?.length > 0 ? <WhyChooseUs performances={props?.data?.performances} setting={settings?.whyChooseUs} /> : ""}
			{props?.data?.projects?.length > 0 ? <ProjectSlider projects={props?.data?.projects} setting={settings?.project} /> : ""}
			{props?.data?.testimonials?.length > 0 ? <Testimonials testimonials={props?.data?.testimonials} setting={settings?.testimonial} /> : ""}
			{props?.data?.plans?.length > 0 ? <PricingTable className="rounded-4" plans={props?.data?.plans} setting={settings?.webHosting} /> : ""}
			{props?.data?.articles?.length > 0 ? <Article articles={props?.data?.articles} color={"var(--black-color)"} setting={settings?.techNews} /> : ""}
			{props?.data?.technologies?.length > 0 ? <Partners technologies={props?.data?.technologies} /> : ""}

			<Footer className="rounded-4" />
		</>
	);
}

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/homepage`);
	const data = await response.json();
	const responseSliders = await fetch(`${api.BASE_URL}/sliders`);
	const sliders = await responseSliders.json();
	return {
		props: {
			data: data,
			sliders: sliders,
		},
		revalidate: 10,
	};
}
