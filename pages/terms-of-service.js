import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import axios from "axios";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function TermsOfService() {
	const global = useContext(GlobalContext);
	const [termService, setTermService] = useState(null);
	const [meta, setMeta] = useState(null);

	useEffect(() => {
		async function fetchTermService() {
			try {
				const url = `${api.BASE_URL}/term-service-page`;
				const response = await axios.get(url);
				console.log(response);
				setTermService(response.data?.termService);
				setMeta(response.data?.meta);
			} catch (error) {
				console.log(error);
			}
		}
		fetchTermService();
	}, []);
	return (
		<>
			<Head>
				<title>Term of Service - Camgotech</title>
			</Head>
			<NextSeo
				title="Term of Service | Camgotech"
				description={meta?.metaDesc}
				canonical="https://camgotech.com/terms-of-service"
				openGraph={{
					url: "https://camgotech.com/terms-of-service",
					title: "Term of Service | Camgotech",
					description: meta?.metaDesc,
					images: [
						{
							url: `${api.FILE_URI}${meta?.image}`,
							width: 800,
							height: 600,
							alt: "about camgotech",
							type: "image/*",
						},
					],
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

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.TermsofServicePage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Terms of Service</h2> */}
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Terms of Service</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="terms-of-service-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-md-12">
							<div className="terms-of-service-content">
								<div className="terms-of-service-image">
									<img src={`${api.FILE_URI}${termService?.thumbnail}`} alt={`CAMGOTECH | ${termService?.thumbnail}`} />
								</div>
								<div dangerouslySetInnerHTML={{ __html: termService?.description }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<CTO />

			<Footer />
		</>
	);
}
