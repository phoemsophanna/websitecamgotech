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

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.CareerPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Career</h2> */}
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Career</li>
						</ul>
					</div>
				</div>
			</div>

			<CareerContent careers={careers} telegramLink={global.data?.contact?.telegramLink} />

			<CTO />

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
