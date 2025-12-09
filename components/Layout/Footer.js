import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CustomChat, FacebookProvider, Page } from "react-facebook";
import GlobalContext from "@/utils/global-context";

const Footer = () => {
	const global = useContext(GlobalContext);
	const [contact, setContact] = useState(null);
	const [aboutCompany, setAboutCompany] = useState(null);
	const [dropdown, setDropdown] = useState(false);
	const [dropdown2, setDropdown2] = useState(false);
	const [dropdown3, setDropdown3] = useState(false);
	const [dropdown4, setDropdown4] = useState(false);
	useEffect(() => {
		setContact(global.data?.contact);
		setAboutCompany(global.data?.aboutCompany);
	}, [global]);

	return (
		<>
			<footer className="footer-area with-black-background pt-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget dropdown-mobile" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
								<h3 onClick={() => setDropdown(!dropdown)} className={`${dropdown ? "active" : ""}`}>{aboutCompany?.companyName || "Camgotech"}</h3>
								<p className={`${dropdown ? "active" : ""}`} style={{ fontSize: "19px" }}>{aboutCompany?.aboutCompany}</p>

								<ul className={`${dropdown ? "active widget-social" : "widget-social"}`}>
									{contact?.facebookLink && (
										<li>
											<a href={contact?.facebookLink} target="_blank" rel="noreferrer">
												<i className="ri-facebook-fill"></i>
											</a>
										</li>
									)}
									{contact?.instagramLink && (
										<li>
											<a href={contact?.instagramLink} target="_blank" rel="noreferrer">
												<i className="ri-instagram-line"></i>
											</a>
										</li>
									)}
									{contact?.telegramLink && (
										<li>
											<a href={contact?.telegramLink} target="_blank" rel="noreferrer">
												<i className="ri-telegram-fill"></i>
											</a>
										</li>
									)}
									{contact?.linkedinLink && (
										<li>
											<a href={contact?.linkedinLink} target="_blank" rel="noreferrer">
												<i className="ri-linkedin-fill"></i>
											</a>
										</li>
									)}
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget dropdown-mobile ps-5" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
								<h3 onClick={() => setDropdown2(!dropdown2)} className={`${dropdown2 ? "active" : ""}`}>Menu</h3>

								<ul className={`${dropdown2 ? "active quick-links" : "quick-links"}`}>
									<li>
										<Link href="/about">
											<a style={{ fontSize: "19px" }}>About Us</a>
										</Link>
									</li>
									<li>
										<Link href="/services">
											<a style={{ fontSize: "19px" }}>Services</a>
										</Link>
									</li>
									<li>
										<Link href="/web-hosting">
											<a style={{ fontSize: "19px" }}>Web Hosting</a>
										</Link>
									</li>
									<li>
										<Link href="/projects">
											<a style={{ fontSize: "19px" }}>Our Projects</a>
										</Link>
									</li>
									<li>
										<Link href="/blog">
											<a style={{ fontSize: "19px" }}>Tech News</a>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<a style={{ fontSize: "19px" }}>Contact Us</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget dropdown-mobile ps-5" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
								<h3 onClick={() => setDropdown3(!dropdown3)} className={`${dropdown3 ? "active" : ""}`}>Page</h3>

								<ul className={`${dropdown3 ? "active quick-links" : "quick-links"}`}>
									<li>
										<Link href="/testimonials">
											<a style={{ fontSize: "19px" }}>Client's Feedback</a>
										</Link>
									</li>
									<li>
										<Link href="/faq">
											<a style={{ fontSize: "19px" }}>FAQ's</a>
										</Link>
									</li>
									<li>
										<Link href="/career">
											<a style={{ fontSize: "19px" }}>Careers</a>
										</Link>
									</li>
									<li>
										<Link href="/terms-of-service">
											<a style={{ fontSize: "19px" }}>Terms of Service</a>
										</Link>
									</li>
									<li>
										<Link href="/privacy-policy">
											<a style={{ fontSize: "19px" }}>Privacy Policy</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget dropdown-mobile" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
								<h3 onClick={() => setDropdown4(!dropdown4)} className={`${dropdown4 ? "active" : ""}`}>Facebook Page</h3>
								<div className={`facebook-plugin ${dropdown4 ? "active" : ""}`}>
									{contact && (
										<FacebookProvider appId={contact.appId}>
											<Page href={`https://www.facebook.com/${contact.pageId}`} tabs="timeline" width={500} height={230} />
										</FacebookProvider>
									)}
									{contact && (
										<FacebookProvider appId={contact.appId} chatSupport>
											<CustomChat pageId="100662512843050" minimized="false" />
										</FacebookProvider>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="copyright-area">
					<div className="container">
						<div className="copyright-area-content">
							<p>
								Copyright @ {new Date().getFullYear()}{" "}
								<a href="/" target="_blank" rel="noreferrer">
									Camgotech
								</a>{" "}
								. All Rights Reserved
							</p>
						</div>
					</div>
				</div>

				{/* Shape Images */}
				<div className="footer-shape-1">
					<img src="/images/footer/footer-shape-1.png" alt="image" />
				</div>
				<div className="footer-shape-2">
					<img src="/images/footer/footer-shape-2.png" alt="image" />
				</div>
				<div className="footer-shape-3">
					<img src="/images/footer/footer-shape-3.png" alt="image" />
				</div>
			</footer>
		</>
	);
};

export default Footer;
