import React, { useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { CustomChat, FacebookProvider, Page } from "react-facebook";
import GlobalContext from "@/utils/global-context";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import useToggleTheme from "@/utils/useToggleTheme";

gsap.registerPlugin(TextPlugin);

const Footer = () => {
	const global = useContext(GlobalContext);
	const { isThemeDark } = useToggleTheme();
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
			<footer className="footer-area pt-100" style={{backgroundImage: `url(${isThemeDark ? "/images/theme_dark.jpg" : "/images/theme_blue.jpg"})`}}>
				<div className="container">
					<div className="row justify-content-between">

						<div className="col-lg-3 col-md-6 order-2 order-lg-1">
							<div className="single-footer-widget dropdown-mobile" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
								<h3 onClick={() => setDropdown2(!dropdown2)} className={`${dropdown2 ? "active" : ""}`}>MENU</h3>

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

						<div className="col-lg-4 col-md-6 order-1 order-lg-2">
							<div className="single-footer-widget dropdown-mobile" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
								<h3 className={`header-profile`}>
									{/* {aboutCompany?.companyName || "Camgotech"} */}
									<span>CAMGO</span>TECH
								</h3>
								<p className={`active`} style={{ fontSize: "19px" }}>{aboutCompany?.aboutCompany}</p>

								<ul className={`active d-md-block d-none widget-social`}>
									{contact?.facebookLink && (
										<li>
											<a href={contact?.facebookLink} target="_blank" rel="noreferrer">
												<i className="ri-facebook-fill facebook"></i>
											</a>
										</li>
									)}
									{contact?.instagramLink && (
										<li>
											<a href={contact?.instagramLink} target="_blank" rel="noreferrer">
												<i className="ri-instagram-line instagram"></i>
											</a>
										</li>
									)}
									{contact?.telegramLink && (
										<li>
											<a href={contact?.telegramLink} target="_blank" rel="noreferrer">
												<i className="ri-telegram-fill telegram"></i>
											</a>
										</li>
									)}
									{contact?.linkedinLink && (
										<li>
											<a href={contact?.linkedinLink} target="_blank" rel="noreferrer">
												<i className="ri-linkedin-fill linkedin"></i>
											</a>
										</li>
									)}
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 order-3 order-lg-3">
							<div className="single-footer-widget dropdown-mobile" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
								<h3 onClick={() => setDropdown3(!dropdown3)} className={`${dropdown3 ? "active" : ""}`}>OTHER PAGES</h3>

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
						<ul className={`active d-md-none d-block widget-social`}>
							{contact?.facebookLink && (
								<li>
									<a href={contact?.facebookLink} target="_blank" rel="noreferrer">
										<i className="ri-facebook-fill facebook"></i>
									</a>
								</li>
							)}
							{contact?.instagramLink && (
								<li>
									<a href={contact?.instagramLink} target="_blank" rel="noreferrer">
										<i className="ri-instagram-line instagram"></i>
									</a>
								</li>
							)}
							{contact?.telegramLink && (
								<li>
									<a href={contact?.telegramLink} target="_blank" rel="noreferrer">
										<i className="ri-telegram-fill telegram"></i>
									</a>
								</li>
							)}
							{contact?.linkedinLink && (
								<li>
									<a href={contact?.linkedinLink} target="_blank" rel="noreferrer">
										<i className="ri-linkedin-fill linkedin"></i>
									</a>
								</li>
							)}
						</ul>
					</div>
				</div>

				<FooterTitle />

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

function FooterTitle() {
    const titleRef = useRef(null);

    useEffect(() => {
        const element = titleRef.current;

        if (!element) return;

        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 1,
            });

            timeline
                // Type
                .to(element, {
                    duration: 2.5,
                    text: "CAMGOTECH",
                    ease: "none",
                })

                // Wait
                .to({}, {
                    duration: 2,
                })

                // Delete
                .to(element, {
                    duration: 1.5,
                    text: "",
                    ease: "none",
                });
        }, titleRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <h2
            ref={titleRef}
            className="footer-automation-title"
        ></h2>
    );
}

export default Footer;
