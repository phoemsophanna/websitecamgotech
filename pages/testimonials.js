import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";
import { api } from "@/utils/config";
import GlobalContext from "@/utils/global-context";
import { NextSeo } from "next-seo";
import Script from "next/script";
import AnimatedText from "@/components/Common/AnimatedText";
import useToggleTheme from "@/utils/useToggleTheme";

export default function Testimonials() {
	const global = useContext(GlobalContext);
	const [testimonials, setTestimonial] = useState([]);
	const [meta, setMeta] = useState(null);
	const { isThemeDark } = useToggleTheme();

	useEffect(() => {
		fetch(`${api.BASE_URL}/testimonial-page`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.status === "success") {
					setTestimonial(data.testimonials);
					setMeta(data.meta);
				}
			});
	}, []);

	return (
		<>
			<Head>
				<title>Testimonial - Camgotech</title>
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
				title="Testimonial | Camgotech"
				description={meta?.metaDesc}
				canonical="https://camgotech.com/testimonials"
				openGraph={{
					url: "https://camgotech.com/testimonials",
					title: "Testimonial | Camgotech",
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

			<div className="testimonials-area" style={{ backgroundImage: `url(${isThemeDark ? "/images/1.Black-Darkness.webp" : "/images/theme_blue.jpg"})` }}>
				<div className="container">
					<div className="section-title">
						<span style={{visibility: "hidden"}}>TESTIMONIALS</span>
						<AnimatedText as="h2" className="title" html="Some <b>Sweet Feedback</b> of Our Happy Clients" />
						<p>We have many happy customers with us and they give us feedback and satisfaction.</p>
					</div>

					<div className="row justify-content-center">
						{testimonials.map((el, index) => (
							<div className="col-lg-4 col-md-6" key={index}>
								<div
									className="single-testimonials-card"
									data-aos="fade-up"
									data-aos-delay={50 + index * 10}
									data-aos-duration={500 + index * 100}
									data-aos-once="true"
								>
									<p className="single__testimonials--comment">{el.comment}</p>

									<div className="info-item-box">
										<div className="avatar-client">
											<img src={`${api.FILE_URI}${el.reviewerProfile}`} className="rounded-circle" alt={el.reviewerProfile} />
										</div>
										<div className="content-client">
											<h4>{el.reviewerName}</h4>
											<p>{el.reviewerPosition}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
