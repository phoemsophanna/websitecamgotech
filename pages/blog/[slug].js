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
import Script from "next/script";
import useToggleTheme from "@/utils/useToggleTheme";

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
	const { isThemeDark } = useToggleTheme();

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

			{data?.article ? <SingleBlogContent article={data.article} articles={data.articles} services={data.services} background={`url(${isThemeDark ? "/images/1.Black-Darkness.webp" : "/images/theme_blue.jpg"})`} /> : null}

			<Footer />
		</>
	);
}
