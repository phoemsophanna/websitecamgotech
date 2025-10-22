import React, { useContext } from "react";
import Link from "next/link";
import GlobalContext from "@/utils/global-context";

const PricingTable = ({ plans, setting }) => {
	const global = useContext(GlobalContext);
	return (
		<>
			<div className="pricing-area with-black-background pt-100 pb-75">
				<div className="container">
					<div className="section-title">
						<span>WEB HOSTING</span>
						<h2 dangerouslySetInnerHTML={{ __html: setting?.title }}></h2>
						<p style={{ fontSize: "19px" }} dangerouslySetInnerHTML={{ __html: setting?.description }}></p>
					</div>

					<div className="row justify-content-center">
						{plans.map((el, index) => (
							<div className="col-lg-4 col-md-6" key={index}>
								<div className="single-pricing-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="1000" data-aos-once="true">
									<h3>{el.type}</h3>
									<div className="price">
										{el.pricePerYear} <span>/ Year</span>
									</div>

									<ul className="pricing-list">
										<li>
											<i className="ri-check-fill"></i> Data Storage: {el.dataStorage}
										</li>
										<li>
											<i className="ri-check-fill"></i> Bandwidth: {el.bandwidth}
										</li>
										<li>
											<i className="ri-check-fill"></i> Email account: {el.emailAccounts}
										</li>
										<li>
											<i className="ri-check-fill"></i> Database: {el.database}
										</li>
										<li>
											<i className="ri-check-fill"></i> Domain add on: {el.domainAddOn}
										</li>
										<li>
											<i className="ri-check-fill"></i> Maximum hourly email send: {el.maxHourlyEmailSend}
										</li>
										<li>
											<i className="ri-check-fill"></i> Domain.com free: {el.isFreeDomain ? "Yes" : "No"}
										</li>
									</ul>
									<div className="pricing-btn">
										<a className="default-btn" href={global.data?.contact?.telegramLink} target="_blank">
											Choose Plan
										</a>
									</div>
									{el.isMostPopular ? (
										<div className="most-popular">
											<span>Most Popular</span>
										</div>
									) : null}
									{el.isGoodSpeed ? (
										<div className="good-speed">
											<span>Good Speed</span>
										</div>
									) : null}
								</div>
							</div>
						))}
					</div>
					<Link href="/web-hosting">
						<a className="pricing-area-btn">View all Hosting Packages</a>
					</Link>
				</div>

				{/* Shape Image */}
				<div className="pricing-bg-shape-1">
					<img src="/images/pricing/pricing-bg-shape.png" alt="image" />
				</div>
				<div className="pricing-shape-1">
					<img src="/images/pricing/pricing-shape-1.png" alt="image" />
				</div>
			</div>
		</>
	);
};

PricingTable.defaultProps = {
	plans: [],
};

export default PricingTable;
