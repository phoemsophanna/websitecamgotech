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
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.ContactPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Contact Us</h2> */}
						<ul className="with-contact-bg">
							<li style={{ fontSize: "19px" }}>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li style={{ fontSize: "19px" }}>Contact Us</li>
						</ul>
					</div>
				</div>
			</div>

			<CTO />

			<ContactForm thumbnail={contact?.thumbnail} />

			<GoogleMap embedMap={contact?.embedMap} />

			<Footer />
		</>
	);
}
