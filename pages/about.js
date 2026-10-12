import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import WhoWeAre from "@/components/About/WhoWeAre";
import Partners from "@/components/Common/Partners";
import OurGoal from "@/components/About/OurGoal";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import Skills from "@/components/Common/Skills";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";
import Script from "next/script";
import WorkingProcess from "@/components/Common/WorkingProcess";
import useToggleTheme from "@/utils/useToggleTheme";

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/about-us-page`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function About(props) {
	const [performances, setPerformance] = useState([]);
	const [skillsets, setSkillset] = useState([]);
	const [technologies, setTechnology] = useState([]);
	const [settings, setSettings] = useState(null);
	const [meta, setMeta] = useState(null);
	const { isThemeDark } = useToggleTheme();
	const global = useContext(GlobalContext);
	useEffect(() => {
		fetch(`${api.BASE_URL}/about-us-page`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setPerformance(data.performances);
					setSkillset(data.skillsets);
					setTechnology(data.technologies);
					setSettings(data.settings);
					setMeta(data.settings.meta);
				}
			});
	}, []);
	return (
		<>
			<Head>
				<title>About Us - Camgotech</title>
				<meta name="description" content={props?.settings?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.settings?.meta?.metaKeyword} />
				<meta property="og:title" content="About Us - Camgotech" />
				<meta property="og:description" content={props?.settings?.meta?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="About Us - Camgotech" />
				<meta name="twitter:description" content={props?.settings?.meta?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-R5YFLGPENB"
					strategy="afterInteractive"
				/>

				<Script id="google-ads" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-R5YFLGPENB');
					`}
				</Script>
			</Head>
			<Navbar />

			<WhoWeAre item={settings?.whoWeAre} styleCss={{ borderTop: "0px solid", backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.AboutPage})` }} />

			{settings?.ourGoal && <OurGoal item={settings?.ourGoal} background={`${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"}`} />}
			
			<WorkingProcess performances={performances} setting={settings?.whyChooseUs} background={`${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"}`} />

			<div className="bg-with-F5F5F5-color">
				<WhyChooseUs performances={performances} setting={settings?.whyChooseUs} background={`${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"}`} />
			</div>

			<Skills skillsets={skillsets} setting={settings?.skillset} background={`${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"}`} />

			<Partners technologies={technologies} background={`${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"}`} />

			<Footer />
		</>
	);
}
