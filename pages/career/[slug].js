import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import CTO from "@/components/Common/CTO";
import CareerDetailsContent from "@/components/Career/CareerDetailsContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { useRouter } from "next/router";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Script from "next/script";
import useToggleTheme from "@/utils/useToggleTheme";

export async function getStaticPaths() {
	const response = await fetch(`${api.BASE_URL}/career-page`);
	const data = await response.json();

	return {
		paths: data.careers.map((career) => {
			return {
				params: {
					slug: `${career.id}`,
				},
			};
		}),
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/career-detail/${params.slug}`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function CareerDetails(props) {
	const global = useContext(GlobalContext);
	const router = useRouter(null);
	const [career, setCareer] = useState(null);
	const { isThemeDark } = useToggleTheme();

	useEffect(() => {
		fetch(`${api.BASE_URL}/career-detail/${router.query.slug}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setCareer(data.data);
				}
			});
	}, [router]);
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
				openGraph={{
					title: props?.data?.title,
					description: props?.article?.summary,
					url: `https://www.camgotech.com/career/${props?.data?.id}`,
					type: "article",
					article: {
						publishedTime: props?.data?.created_at,
						section: "Camgotech Career",
						authors: ["Camgotech"],
						tags: ["mobile", "development", "website"],
					},
				}}
			/>
			<Navbar />

			<CareerDetailsContent career={career} background={`${isThemeDark ? "/images/1.Black-Darkness.webp" : "/images/theme_blue.jpg"}`} />

			{/* <CTO /> */}

			<Footer />
		</>
	);
}
