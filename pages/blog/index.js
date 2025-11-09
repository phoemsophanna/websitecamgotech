import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import BlogGridStyle2 from "@/components/Blog/BlogGridStyle2";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";

export default function Blog2(props) {
	const global = useContext(GlobalContext);
	const [articles, setArticle] = useState([]);
	const [settings, setSettings] = useState(null);

	useEffect(() => {
		setArticle(props?.articles);
		setSettings(props?.settings);
	}, [props]);

	return (
		<>
			<Head>
				<title>ព័ត៌មានបច្ចេកវិទ្យា - Camgotech</title>
				<meta name="description" content={props?.settings?.meta?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.settings?.meta?.metaKeyword} />
				<meta property="og:title" content="ព័ត៌មានបច្ចេកវិទ្យា - Camgotech" />
				<meta property="og:description" content={props?.settings?.meta?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="ព័ត៌មានបច្ចេកវិទ្យា - Camgotech" />
				<meta name="twitter:description" content={props?.settings?.meta?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.settings?.meta?.image}`} />
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.TechNewsPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>ព័ត៌មានបច្ចេកវិទ្យា</h2> */}
						<ul>
							<li style={{ fontSize: "19px" }}>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li style={{ fontSize: "19px" }}>ព័ត៌មានបច្ចេកវិទ្យា</li>
						</ul>
					</div>
				</div>
			</div>

			{articles?.length > 0 ? <BlogGridStyle2 articles={articles} setting={settings?.techNews} styleCss={{ borderTop: "0px solid" }} /> : null}

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/article-page`);
	const data = await response.json();	
	return {
		props: data,
		revalidate: 1,
	};
}
