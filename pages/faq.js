import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import FaqContent from "@/components/FAQ/FaqContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { api } from "@/utils/config";
import Head from "next/head";
import GlobalContext from "@/utils/global-context";

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/faq-page`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function Faq(props) {
	const [faqs, setFaqs] = useState([]);
	const global = useContext(GlobalContext);

	useEffect(() => {
		setFaqs(props.faqs);
	}, [props]);

	return (
		<>
			<Head>
				<title>FAQ | Camgotech</title>
				<meta name="description" content={props?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.meta?.metaKeyword} />
				<meta property="og:title" content="FAQ - Camgotech" />
				<meta property="og:description" content={props?.meta?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="FAQ - Camgotech" />
				<meta name="twitter:description" content={props?.meta?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.meta?.image}`} />
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.FaqPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Faq</h2> */}
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Faq</li>
						</ul>
					</div>
				</div>
			</div>

			<FaqContent faqs={faqs} />

			<CTO />

			<Footer />
		</>
	);
}
