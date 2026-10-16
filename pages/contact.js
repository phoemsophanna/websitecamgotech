import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import GoogleMap from "@/components/Common/GoogleMap";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";
import Script from "next/script";
import useToggleTheme from "@/utils/useToggleTheme";

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/contact-us-page`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function Contact(props) {
	const global = useContext(GlobalContext);
	const [contact, setContact] = useState(null);
	const { isThemeDark } = useToggleTheme();
	useEffect(() => {
		setContact(global.data?.contact);
	}, [global]);
	return (
		<>
			<Head>
				<title>Contact Us - Camgotech</title>
				<meta name="description" content={props?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.meta?.metaKeyword} />
				<meta property="og:title" content="About Us - Camgotech" />
				<meta property="og:description" content={props?.meta?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="About Us - Camgotech" />
				<meta name="twitter:description" content={props?.meta?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.meta?.image}`} />
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

			{/* <CTO background={`url(${api.FILE_URI}${global.data?.pageBanner?.ContactPage})`} /> */}

			<ContactForm thumbnail={contact?.thumbnail} background={`${isThemeDark ? "/images/1.Black-Darkness.webp" : "/images/theme_blue.jpg"}`} />

			<GoogleMap embedMap={contact?.embedMap} background={`${isThemeDark ? "/images/1.Black-Darkness.webp" : "/images/theme_blue.jpg"}`} />

			<Footer />
		</>
	);
}
