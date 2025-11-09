import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import GlobalContext from "@/utils/global-context";
import { api } from "@/utils/config";
import axios from "axios";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function PrivacyPolicy() {
	const global = useContext(GlobalContext);
	const [privacyPolicy, setPrivacyPolicy] = useState(null);
	const [meta, setMeta] = useState(null);

	useEffect(() => {
		async function fetchPrivacyPolicy() {
			try {
				const url = `${api.BASE_URL}/privacy-policy-page`;
				const response = await axios.get(url);
				console.log(response);
				setPrivacyPolicy(response.data?.privacyPolicy);
				setMeta(response.data?.meta);
			} catch (error) {
				console.log(error);
			}
		}
		fetchPrivacyPolicy();
	}, []);

	return (
		<>
			<Head>
				<title>Privacy Policy - Camgotech</title>
			</Head>
			<NextSeo
				title="Privacy Policy | Camgotech"
				description={meta?.metaDesc}
				canonical="https://camgotech.com/privacy-policy"
				openGraph={{
					url: "https://camgotech.com/privacy-policy",
					title: "Privacy Policy | Camgotech",
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

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.PrivacyPolicyPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Privacy Policy</h2> */}
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="privacy-policy-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-md-12">
							<div className="privacy-policy-content">
								<div className="privacy-policy-image">
									<img src={`${api.FILE_URI}${privacyPolicy?.thumbnail}`} alt={`CAMGOTECH | ${privacyPolicy?.thumbnail}`} />
								</div>

								<div dangerouslySetInnerHTML={{ __html: privacyPolicy?.description }}></div>
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
