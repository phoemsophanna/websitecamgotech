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

const SingleBlog = (props) => {
	const [data, setData] = useState(null);
	const [meta, setMeta] = useState({
		title: "Some Meta Title",
		description: "I am a description, and I can create multiple tags",
		canonical: "http://example.com/path/to/page",
		meta: {
			charset: "utf-8",
			name: {
				keywords: "react,meta,document,html,tags",
			},
		},
	});
	const router = useRouter();
	const global = useContext(GlobalContext);

	useEffect(() => {
		async function callMeta() {
			await fetch(`${api.BASE_URL}/article-detail/${router.query.id}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.status === "success") {
						setData(data);
						setMeta({
							title: data.article.title,
							description: "I am a description, and I can create multiple tags",
							canonical: "http://example.com/path/to/page",
							meta: {
								charset: "utf-8",
								name: {
									keywords: "react,meta,document,html,tags",
								},
							},
						});
					}
				});
		}
		callMeta();
	}, [router]);

	return (
		<>
			<Head>
				<title>Blog Detail</title>
			</Head>
			<NextSeo
				openGraph={{
					title: data?.article?.title,
					description: data?.article?.summary,
					url: `https://www.camgotech.com/blog/${data?.article?.id}`,
					type: "article",
					article: {
						publishedTime: data?.article?.created_at,
						section: "Camgotech News",
						authors: ["Camgotech"],
						tags: ["mobile", "development", "website"],
					},
					images: [
						{
							url: `${api.FILE_URI}${data?.article?.image}`,
							width: 850,
							height: 650,
							alt: data?.article?.title,
						},
					],
				}}
			/>

			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.TechNewsDetailPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Blog Details</h2> */}
						<ul>
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
							<li>Blog Details</li>
						</ul>
					</div>
				</div>
			</div>

			{data?.article ? <SingleBlogContent article={data.article} articles={data.articles} services={data.services} /> : null}

			<Footer />
		</>
	);
};

SingleBlog.getInitialProps = async (context) => {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/article-detail/${context.query.id}`);
	const data = await response.json();

	return {
		props: data,
	};
};

export default SingleBlog;
