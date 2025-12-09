import GlobalContext from "@/utils/global-context";
import React, { useContext, useEffect, useState } from "react";

const CTO = () => {
	const global = useContext(GlobalContext);
	const [contact, setContact] = useState(null);

	useEffect(() => {
		setContact(global.data?.contact);
	}, [global]);

	return (
		<>
			<div className="overview-area pt-100 pb-75">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-md-6">
							<div className="overview-card">
								<h3 style={{ 
									fontSize: "16px",
								}}>Chat Us</h3>
								<span>
									<a href={contact?.facebookLink} target="_blank" rel="noreferrer">
										<div className="icon-wrapper">
											<i className="ri-facebook-circle-fill"></i>
											Facebook
										</div>
									</a>
									<br />
									<a href={contact?.telegramLink} target="_blank" rel="noreferrer">
										<div className="icon-wrapper">
											<i className="ri-telegram-fill"></i>
											Telegram
										</div>
									</a>
								</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="overview-card">
								<h3 style={{ fontSize: "16px" }}>Call Us</h3>
								<span>
									{contact?.phoneNumber1 && (
										<a href={`tel:${contact.phoneNumber1}`} target="_blank" rel="noreferrer">
											<div className="icon-wrapper">
												<i className="ri-phone-line"></i>
												{contact.phoneNumber1}
											</div>
										</a>
									)}
									<br />
									{contact?.phoneNumber2 && (
										<a href={`tel:${contact.phoneNumber2}`} target="_blank" rel="noreferrer">
											<div className="icon-wrapper">
												<i className="ri-phone-line"></i>
												{contact.phoneNumber2}
											</div>
										</a>
									)}
								</span>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="overview-card">
								<h3 style={{ fontSize: "16px" }}>Email Us</h3>
								<span>
									{contact?.email1 && (
										<a href={`mailto:${contact.email1}`} target="_blank" rel="noreferrer">
											<div className="icon-wrapper">
												<i className="ri-mail-send-line"></i>
												{contact.email1}
											</div>
										</a>
									)}

									<br />
									{contact?.email2 && (
										<a href={`mailto:${contact.email2}`} target="_blank" rel="noreferrer">
											<div className="icon-wrapper">
												<i className="ri-mail-send-line"></i>
												{contact.email2}
											</div>
										</a>
									)}
								</span>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="overview-card">
								<h3 style={{ fontSize: "16px" }}>Visit Us</h3>
								<span>
									<a href={`https://maps.google.com/maps?q=${contact?.address}`} target="_blank" rel="noreferrer">
										<div className="icon-wrapper">{contact?.address}</div>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CTO;
