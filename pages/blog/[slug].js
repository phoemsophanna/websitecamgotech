import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import SingleBlogContent from "@/components/Blog/SingleBlogContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { useRouter } from "next/router";
import { api } from "@/utils/config";
import Head from "next/head";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";

export async function getStaticPaths() {
	const response = await fetch(`${api.BASE_URL}/article-page`);
	const data = await response.json();

	return {
		paths: data.articles.map((blog) => {
			return {
				params: {
					slug: `${blog.id}`,
				},
			};
		}),
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/article-detail/${params.slug}`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function SingleBlog(props) {
	const [data, setData] = useState(null);
	const router = useRouter();
	const global = useContext(GlobalContext);

	useEffect(() => {
		fetch(`${api.BASE_URL}/article-detail/${router.query.slug}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setData(data);
				}
			});
	}, [router]);

	return (
		<>
			<Head>
				<title>Blog Detail</title>
				<meta name="description" content={props?.article?.metaDesc} />
				<link rel="author" href="https://camgotech.com/" />
				<meta name="author" content="camgotech" />
				<meta name="keywords" content={props?.article?.metaKeyword} />
				<meta property="og:title" content={`${props?.article?.title} - Camgotech`} />
				<meta property="og:description" content={props?.article?.metaDesc} />
				<meta property="og:image" content={`${api.FILE_URI}${props?.article?.image}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={`${props?.article?.title} - Camgotech`} />
				<meta name="twitter:description" content={props?.article?.metaDesc} />
				<meta name="twitter:image" content={`${api.FILE_URI}${props?.article?.image}`} />
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.TechNewsDetailPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Blog Details</h2> */}
						<ul className="with-black-bg">
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/blog">
									<a>ព័​ត៌​មាន​ប​ច្ចេ​កវិទ្យា</a>
								</Link>
							</li>
							<li>Detail</li>
						</ul>
					</div>
				</div>
			</div>

			{data?.article ? <SingleBlogContent article={data.article} articles={data.articles} services={data.services} /> : null}

			<Footer />
		</>
	);
}
