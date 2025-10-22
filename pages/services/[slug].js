import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import ServiceSlider from "@/components/Services/ServiceSlider";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { useRouter } from "next/router";
import { api } from "@/utils/config";
import Head from "next/head";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";

export async function getStaticPaths() {
	const response = await fetch(`${api.BASE_URL}/service-page`);
	const data = await response.json();

	return {
		paths: data.services.map((service) => {
			return {
				params: {
					slug: `${service.id}`,
				},
			};
		}),
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	// fetch single post detail
	const response = await fetch(`${api.BASE_URL}/service-detail/${params.slug}`);
	const data = await response.json();
	return {
		props: data,
		revalidate: 1,
	};
}

export default function ServiceDetails(props) {
	const global = useContext(GlobalContext);
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [service, setService] = useState(null);
	const [settings, setSettings] = useState(null);
	const [relatedServices, setRelatedServices] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(`${api.BASE_URL}/service-detail/${router.query.slug}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setService(data.data);
					setRelatedServices(data.relatedServices);
					setSettings(data.settings);
				}
				setLoading(false);
			});
	}, [router]);

	return (
		<>
			<Head>
				<title>Service - Camgotech</title>
			</Head>

			<NextSeo
				title={`${props?.data?.title} | Camgotech`}
				description={props?.data?.metaDesc}
				canonical={`https://www.camgotech.com/services/${props?.data?.id}`}
				openGraph={{
					url: `https://www.camgotech.com/services/${props?.data?.id}`,
					title: `${props?.data?.title} | Camgotech`,
					description: props?.data?.metaDesc,
					images: [
						{
							url: `${api.FILE_URI}${props?.data?.image}`,
							width: 850,
							height: 650,
							alt: props?.data?.title,
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
						content: props?.data?.metaKeyword,
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

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.ServiceDetailPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2 className="fs-1">{service ? service.title : "Loading..."}</h2> */}
						<ul className="with-black-bg">
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/services">
									<a>Services</a>
								</Link>
							</li>
							<li>{service ? service.title : "Loading..."}</li>
						</ul>
					</div>
				</div>
			</div>

			{loading ? <div className="camgotech_spinner"></div> : null}

			{service ? <ServicesDetailsContent service={service} /> : null}

			{relatedServices.length > 0 ? (
				<div className="radius-0">
					<ServiceSlider hasBgColor={true} services={relatedServices} setting={settings?.service} />
				</div>
			) : null}

			<Footer />
		</>
	);
}
