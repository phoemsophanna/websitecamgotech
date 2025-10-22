import React, { createRef, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import Tilt from "react-next-tilt";
import { api } from "@/utils/config";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const alertContent = () => {
	MySwal.fire({
		title: "Congratulations!",
		text: "Your message was successfully send and will back to you soon",
		icon: "success",
		timer: 2000,
		timerProgressBar: true,
		showConfirmButton: false,
	});
};

// Form initial state
const INITIAL_STATE = {
	name: "",
	email: "",
	number: "",
	subject: "",
	text: "",
};

const ContactForm = ({ thumbnail }) => {
	const [contact, setContact] = useState(INITIAL_STATE);
	const [isLoading, setIsLoading] = useState(false);
	const [recaptcha, setRecaptcha] = useState(null);
	const [recaptchaMsg, setRecaptchaMsg] = useState(null);
	const recaptchaRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevState) => ({ ...prevState, [name]: value }));
		// console.log(contact)
	};

	function onChange(value) {
		setRecaptcha(value);
		recaptchaMsg(null);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const url = `${api.BASE_URL}/sending-email`;
			const { name, email, number, subject, text } = contact;
			const payload = { name, email, number, subject, text };
			if (!recaptcha) {
				setRecaptchaMsg("Please verify.");
				setIsLoading(false);
			} else {
				setRecaptchaMsg(null);
				const response = await axios.post(url,  payload);
				console.log(response);
				setIsLoading(false);
				setContact(INITIAL_STATE);
				setRecaptcha(null);
				recaptchaRef.current.reset();
				alertContent();
			}
			// sendingEmail();
		} catch (error) {
			console.log(error);
			setRecaptchaMsg(null);
			setRecaptcha(null);
			recaptchaRef.current.reset();
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="talk-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="talk-image d-none d-lg-block">
								<Tilt lineGlareEnable={false} lineGlareBlurEnable={false} spotGlareEnable={false}>
									<img src={api.FILE_URI + thumbnail} alt="image" />
								</Tilt>
							</div>
							<div className="talk-image d-lg-none d-block">
								<img src={api.FILE_URI + thumbnail} alt="image" />
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="talk-content margin-zero">
								<div className="talk-bg-text">LET&apos;S TALK</div>
								<span>LET&apos;S TALK</span>
								<h3>We Would Like To Hear From You Anytime</h3>

								<div className="contact-from">
									<form onSubmit={handleSubmit}>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<input
														type="text"
														name="name"
														className="form-control"
														placeholder="Your name"
														value={contact.name}
														onChange={handleChange}
														required
													/>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<input
														type="text"
														name="email"
														className="form-control"
														placeholder="Your email address"
														value={contact.email}
														onChange={handleChange}
														required
													/>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<input
														type="text"
														name="subject"
														className="form-control"
														placeholder="Your Subject"
														value={contact.subject}
														onChange={handleChange}
														required
													/>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="form-group">
													<input
														type="text"
														name="number"
														className="form-control"
														value={contact.number}
														onChange={handleChange}
														placeholder="Your Phone"
														required
													/>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12">
												<div className="form-group">
													<textarea
														name="text"
														cols="30"
														rows="6"
														className="form-control"
														placeholder="Your message..."
														value={contact.text}
														onChange={handleChange}
														required
													></textarea>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12">
												<div className="d-md-flex justify-content-between align-items-center">
													<div className="mb-md-0 mb-3">
														<ReCAPTCHA ref={recaptchaRef} sitekey="6LcMMAIpAAAAALQr-OGnTjWcWO8I-nJpNlf5NwH0" onChange={onChange} />
														{recaptchaMsg && (
															<small className="text-danger" style={{ fontSize: "14px" }}>
																{recaptchaMsg}
															</small>
														)}
													</div>
													<div>
														{!isLoading ? (
															<button type="submit" className="default-btn">
																Send Message <span></span>
															</button>
														) : (
															<div style={{ display: "flex", alignItems: "center" }}>
																<span class="camgotech_loader"></span>
																<span>Sending...</span>
															</div>
														)}
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
