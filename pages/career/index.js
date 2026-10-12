import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import CTO from "@/components/Common/CTO";
import CareerContent from "@/components/Career/CareerContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { api } from "@/utils/config";
import Head from "next/head";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";
import Script from "next/script";

export default function Career(props) {
	const global = useContext(GlobalContext);
	const [careers, setCareers] = useState([]);
	const [meta, setMeta] = useState(null);
	useEffect(() => {
		setCareers(props?.careers);
		setMeta(props?.meta);
	}, [props]);
	return (
		<>
			<Head>
				<title>Career - Camgotech</title>
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
			<NextSeo
				title='Career | Camgotech'
				description={meta?.metaDesc}
				canonical="https://camgotech.com/career"
				openGraph={{
					url: "https://camgotech.com/career",
					title: 'Career | Camgotech',
					description: meta?.metaDesc,
					images: [{
						url: `${api.FILE_URI}${meta?.image}`,
						width: 800,
						height: 600,
						alt: "career camgotech",
						type: "image/*",
					}],
					site_name: "camgotech",
				}}
				twitter={{
					handle: "@camgotech",
					site: "@camgotech",
					cardType: "summary_large_image",
				}}
				additionalMetaTags={[
					{
						name: "keywords",
						content: meta?.metaKeyword,
					},
					{
						name: "robots",
						content: "index, follow",
					},
					{
						name: "author",
						content: "Camgotech",
					},
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
				]}
			/>
			<Navbar />

			<CareerContent careers={careers} telegramLink={global.data?.contact?.telegramLink} background={`url(${api.FILE_URI}${global.data?.pageBanner?.CareerPage})`} />

			{/* <CTO /> */}

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/career-page`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}
