import React from "react";

const ProjectsSocial = ({ websiteLink, facebookLink, instagramLink, telegramLink, appStore, playStore }) => {
	return (
		<ul className="projects-social">
			{websiteLink && (
				<li>
					<a href={websiteLink} target="_blank">
						<i className="ri-global-line"></i>
					</a>
				</li>
			)}
			{appStore && (
				<li>
					<a href={appStore} target="_blank">
						<i className="ri-app-store-fill"></i>
					</a>
				</li>
			)}
			{playStore && (
				<li>
					<a href={playStore} target="_blank">
						<i className="ri-google-play-fill"></i>
					</a>
				</li>
			)}
			{facebookLink && (
				<li>
					<a href={facebookLink} target="_blank">
						<i className="ri-facebook-fill"></i>
					</a>
				</li>
			)}
			{instagramLink && (
				<li>
					<a href={instagramLink} target="_blank">
						<i className="ri-instagram-line"></i>
					</a>
				</li>
			)}
			{telegramLink && (
				<li>
					<a href={telegramLink} target="_blank">
						<i className="ri-telegram-line"></i>
					</a>
				</li>
			)}
		</ul>
	);
};

export default ProjectsSocial;
