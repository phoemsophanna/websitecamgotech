import { useState } from "react";

export default function SocialPopUp ({className}) {
    const [show, setShow] = useState(false);
    return <div className={`social-popup ${show ? "active" : ""} ${className}`}>
				<button type="button" className="social-toggle" onClick={() => setShow((prev) => !prev)}>
					<i className={show ? "ri-close-line" : `ri-customer-service-2-fill`}></i>
				</button>
				<ul>
                    <li>
						<a href="https://www.facebook.com/camgotech" target="_blank" className="messenger">
							<i className="ri-facebook-circle-fill"></i>
						</a>
					</li>
                    <li>
						<a href="https://t.me/camgotech" target="_blank" className="telegram">
							<i className="ri-telegram-fill"></i>
						</a>
					</li>
                    <li>
						<a href="https://web.whatsapp.com/" target="_blank" className="whatsapp">
							<i className="ri-whatsapp-fill"></i>
						</a>
					</li>
                    <li>
						<a href="tel:012 358 333" target="_blank" className="whatsapp">
							<i className="ri-phone-fill"></i>
						</a>
					</li>
				</ul>
			</div>;
}