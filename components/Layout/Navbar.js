import React, { useContext, useEffect, useState } from "react";
import Link from "@/utils/ActiveLink";
import { useRouter } from "next/router";
import GlobalContext from "@/utils/global-context";
import imageLogo from "@/public/images/logo.png";
import Aos from "aos";
import useToggleTheme from "@/utils/useToggleTheme";
import { svg } from "@/utils/data/Svg";

const Navbar = () => {
	const router = useRouter();
	const [menu, setMenu] = React.useState(true);
	const [dropdown, setDropdown] = useState(false);
	const global = useContext(GlobalContext);
	const { setTheme, isThemeDark } = useToggleTheme();
	const toggleNavbar = () => {
		setMenu(!menu);
	};
	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const [contact, setContact] = useState(null);
	const [aboutCompany, setAboutCompany] = useState(null);
	useEffect(() => {
		setContact(global.data?.contact);
		setAboutCompany(global.data?.aboutCompany);
	}, [global]);

	const classOne = menu ? "collapse navbar-collapse mean-menu" : "collapse navbar-collapse show";
	const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";

	// Search Modal
	const [isActiveSearchModal, setActiveSearchModal] = useState("false");
	const handleToggleSearchModal = () => {
		setActiveSearchModal(!isActiveSearchModal);
	};

	// Sidebar Modal
	const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
	const handleToggleSidebarModal = () => {
		setActiveSidebarModal(!isActiveSidebarModal);
	};
	// Sidebar Modal
	const [isActiveSidebarLeftModal, setActiveSidebarLeftModal] = useState("false");
	const handleToggleSidebarLeftModal = () => {
		setActiveSidebarLeftModal(!isActiveSidebarLeftModal);
	};
	
	const toggleTheme = () => {
		setTheme();
	};

	useEffect(() => {
		Aos.init();
		document.documentElement.className = isThemeDark ? "theme-dark" : "theme-light";
	}, [isThemeDark]);

	return (
		<>
			{/* Start Header Area */}
			<header className="main-header-area">
				<div id="navbar" className="navbar-area">
					<div className="main-navbar main-navbar navbar-with-black-color">
						<div className="container-fluid">
							<nav className="navbar navbar-expand-md navbar-light">
								<Link href="/">
									<a className="navbar-brand">
										<img src={imageLogo.src} alt="camgotech,camgotech logo" />
									</a>
								</Link>

								<div className={classOne} id="navbarSupportedContent">
									<ul className="navbar-nav mx-auto">
										{/* <li className="nav-item">
											<Link href="/" activeClassName="active">
												<a className="nav-link">HOME</a>
											</Link>
										</li> */}
										<li className="nav-item">
											<Link href="/about" activeClassName="active">
												<a className="nav-link">ABOUT US</a>
											</Link>
										</li>
										<li className={router.pathname === "/services" || router.pathname === "/services/[slug]" ? "nav-item active" : "nav-item"}>
											<Link href="/services">
												<a className={router.pathname === "/services" || router.pathname === "/services/[slug]" ? "nav-link active" : "nav-link"}>
													SERVICES
												</a>
											</Link>
											<ul className="dropdown-menu">
												<li className="nav-item">
													<Link href="/">
														<a className="nav-link">
															<span dangerouslySetInnerHTML={{__html: svg.websites_design}}></span>
															Website design and development
														</a>
													</Link>
												</li>
						
												<li className="nav-item">
													<Link href="/index-2" activeClassName="active">
													<a className="nav-link">
														<span dangerouslySetInnerHTML={{__html: svg.mobile_app}}></span>
														Mobile app development
													</a>
													</Link>
												</li>
						
												<li className="nav-item">
													<Link href="/index-3" activeClassName="active">
													<a className="nav-link">
														<span dangerouslySetInnerHTML={{__html: svg.software}}></span>
														Software development</a>
													</Link>
												</li>

												<li className="nav-item">
													<Link href="/index-3" activeClassName="active">
													<a className="nav-link">
														<span dangerouslySetInnerHTML={{__html: svg.digital}}></span>
														Digital Marketing & Seo Solution</a>
													</Link>
												</li>

												<li className="nav-item">
													<Link href="/index-3" activeClassName="active">
													<a className="nav-link">
														<span dangerouslySetInnerHTML={{__html: svg.domain}}></span>
														Domain Register & Web Hosting</a>
													</Link>
												</li>

												<li className="nav-item">
													<Link href="/index-3" activeClassName="active">
													<a className="nav-link">
														<span dangerouslySetInnerHTML={{__html: svg.design}}></span>
														Corporate Design</a>
													</Link>
												</li>
											</ul>
										</li>
										<li className="nav-item">
											<Link href="/web-hosting" activeClassName="active">
												<a className="nav-link">WEB HOSTING</a>
											</Link>
										</li>
										<li className={router.pathname === "/projects" || router.pathname === "/projects/[slug]" ? "nav-item active" : "nav-item"}>
											<Link href="/projects">
												<a className={router.pathname === "/projects" || router.pathname === "/projects/[slug]" ? "nav-link active" : "nav-link"}>
													OUR PROJECTS
												</a>
											</Link>
										</li>
										<li className={router.pathname === "/blog" || router.pathname === "/blog/[slug]" ? "nav-item active" : "nav-item"}>
											<Link href="/blog" activeClassName="active">
												<a className={router.pathname === "/blog" || router.pathname === "/blog/[slug]" ? "nav-link active" : "nav-link"}>
													TECH NEWS
												</a>
											</Link>
										</li>

										<li className="nav-item">
											<Link href="/contact" activeClassName="active">
												<a className="nav-link">CONTACT US</a>
											</Link>
										</li>
									</ul>
								</div>

								<div className="others-options d-none d-md-flex align-items-center">
									<div className="switch-box">
										<label className="switch">
											<input type="checkbox" checked={isThemeDark ? false : true} onChange={toggleTheme} />
											<span className="slider round"></span>
										</label>
									</div>
									{/* <div className="option-item">
										<div className="side-menu-btn" onClick={handleToggleSidebarModal}>
											<i className="ri-bar-chart-horizontal-line"></i>
										</div>
									</div> */}
								</div>
								<div className="others-options d-flex d-md-none align-items-center">
									<div className="switch-box">
										<label className="switch">
											<input type="checkbox" onChange={toggleTheme} />
											<span className="slider round"></span>
										</label>
									</div>
									<div className="option-item">
										<div className="side-menu-btn" onClick={handleToggleSidebarLeftModal}>
											<i className="ri-bar-chart-horizontal-line"></i>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
			{/* End Header Area */}

			{/* Sidebar Modal */}
			<div className={`sidebarModal modal right fade ${isActiveSidebarModal ? "" : "show"}`}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<button type="button" className="close" onClick={handleToggleSidebarModal}>
							<i className="ri-close-line"></i>
						</button>

						<div className="modal-body">
							<Link href="/">
								<a>
									<img src="/images/logo.png" alt="camgotech,camgotech logo" />
								</a>
							</Link>
							<div className="sidebar-content">
								<h3>About Us</h3>
								<p>{aboutCompany?.aboutCompany}</p>

								<div className="sidebar-btn">
									<a className="default-btn" href={global.data?.contact?.telegramLink} target="_blank">
										Let’s Talk
									</a>
								</div>
							</div>

							<div className="sidebar-contact-info">
								<h3>Contact Information</h3>

								<ul className="info-list">
									<li>
										<i className="ri-phone-fill"></i>
										{contact?.phoneNumber1 && (
											<a href={`tel:855${contact?.phoneNumber1}`} target="_blank" rel="noreferrer">
												{contact?.phoneNumber1}
											</a>
										)}

										{contact?.phoneNumber1 && contact?.phoneNumber2 ? <span> / </span> : ""}

										{contact?.phoneNumber2 && (
											<a href={`tel:855${contact?.phoneNumber2}`} target="_blank" rel="noreferrer">
												{contact?.phoneNumber2}
											</a>
										)}
									</li>

									<li>
										<i className="ri-mail-line"></i>
										<a href={`mailto:${contact?.email1}`} target="_blank" rel="noreferrer">
											{contact?.email1}
										</a>
									</li>

									<li>
										<i className="ri-map-pin-line"></i>
										{contact?.address}
									</li>
								</ul>
							</div>

							<ul className="sidebar-social-list">
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
											<i className="ri-instagram-fill"></i>
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
				</div>
			</div>
			{/* End Sidebar Modal */}

			{/* Sidebar Left Modal */}
			<div className={`sidebarModal modal left fade ${isActiveSidebarLeftModal ? "" : "show"}`}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<button type="button" className="close" onClick={handleToggleSidebarLeftModal}>
							<i className="ri-close-line"></i>
						</button>

						<div className="modal-body">
							<Link href="/">
								<a>
									<img src="/images/logo.png" alt="camgotech,camgotech logo" />
								</a>
							</Link>
							<div className="sidebar-content">
								<ul className="navbar-nav ms-auto">
									<li className="nav-item">
										<Link href="/about" activeClassName="active">
											<a className="nav-link">ABOUT US</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/services" activeClassName="active">
											<a className="nav-link">SERVICE</a>
										</Link>
										<button className={`dropdown-btn ${dropdown ? "active" : ""}`} onClick={(e) => {
											e.preventDefault();
											setDropdown((prev) => !prev);
										}}>
											{dropdown ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
										</button>
										<ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
											<li className="nav-item">
												<Link href="/">
													<a className="nav-link">
														<span dangerouslySetInnerHTML={{__html: svg.websites_design}}></span>
														Website design and development
													</a>
												</Link>
											</li>
					
											<li className="nav-item">
												<Link href="/index-2" activeClassName="active">
												<a className="nav-link">
													<span dangerouslySetInnerHTML={{__html: svg.mobile_app}}></span>
													Mobile app development
												</a>
												</Link>
											</li>
					
											<li className="nav-item">
												<Link href="/index-3" activeClassName="active">
												<a className="nav-link">
													<span dangerouslySetInnerHTML={{__html: svg.software}}></span>
													Software development</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link href="/index-3" activeClassName="active">
												<a className="nav-link">
													<span dangerouslySetInnerHTML={{__html: svg.digital}}></span>
													Digital Marketing & Seo Solution</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link href="/index-3" activeClassName="active">
												<a className="nav-link">
													<span dangerouslySetInnerHTML={{__html: svg.domain}}></span>
													Domain Register & Web Hosting</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link href="/index-3" activeClassName="active">
												<a className="nav-link">
													<span dangerouslySetInnerHTML={{__html: svg.design}}></span>
													Corporate Design</a>
												</Link>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<Link href="/web-hosting" activeClassName="active">
											<a className="nav-link">WEB HOSTING</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/projects" activeClassName="active">
											<a className="nav-link">OUR PROJECTS</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/blog" activeClassName="active">
											<a className="nav-link">ព័ត៌មានបច្ចេកវិទ្យា</a>
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/contact" activeClassName="active">
											<a className="nav-link">CONTACT</a>
										</Link>
									</li>
								</ul>
							</div>

							<div className="sidebar-contact-info">
								<h3>Contact Information</h3>

								<ul className="info-list">
									<li>
										<i className="ri-phone-fill"></i>
										<a href="tel:855012 358 333">012 358 333</a>
										<span> / </span>
										<a href="tel:855069 565 956">069 565 956</a>
									</li>
								</ul>
							</div>

							<ul className="sidebar-social-list">
								<li>
									<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
										<i className="ri-facebook-fill facebook"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
										<i className="ri-instagram-fill instagram"></i>
									</a>
								</li>
								<li>
									<a href="https://www.telegram.com/" target="_blank" rel="noreferrer">
										<i className="ri-telegram-fill telegram"></i>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
										<i className="ri-linkedin-fill linkedin"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* End Sidebar Modal */}
		</>
	);
};

export default Navbar;
