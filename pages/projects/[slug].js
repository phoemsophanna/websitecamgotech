import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import ProjectsDetailsContent from "@/components/Projects/ProjectsDetailsContent";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { useRouter } from "next/router";
import { api } from "@/utils/config";
import Head from "next/head";
import GlobalContext from "@/utils/global-context";

export default function ProjectsDetails() {
	const global = useContext(GlobalContext);
	const router = useRouter(null);
	const [project, setProject] = useState(null);

	useEffect(() => {
		fetch(`${api.BASE_URL}/project-detail/${router.query.slug}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === "success") {
					setProject(data.project);
				}
			});
	}, [router]);

	return (
		<>
			<Head>
				<title>Our Project - Camgotech</title>
			</Head>
			<Navbar />

			<div className="page-banner-area mt-94" style={{ backgroundImage: `url(${api.FILE_URI}${global.data?.pageBanner?.ProjectDetailPage})` }}>
				<div className="container">
					<div className="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
						{/* <h2>Projects Details</h2> */}
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Projects Details</li>
						</ul>
					</div>
				</div>
			</div>

			{project ? <ProjectsDetailsContent project={project} /> : ""}

			<CTO />

			<ContactForm />

			<Footer />
		</>
	);
}
