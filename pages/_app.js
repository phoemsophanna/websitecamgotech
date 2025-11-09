import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";
import "../styles/dark.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import GlobalContext from "@/utils/global-context";
import axios from "axios";
import { api } from "@/utils/config";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Script from "next/script";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const TopProgressBar = dynamic(
	() => {
		return import("@/components/Layout/TopProgressBar");
	},
	{ ssr: false }
);

function MyApp({ Component, pageProps }) {
	const [isDark, setDark] = React.useState(true);
	const [state, setState] = React.useState({
		data: null,
	});

	const toggleTheme = () => {
		setDark(!isDark);
	};

	React.useEffect(() => {
		AOS.init();
		document.documentElement.className = isDark ? "theme-dark" : "";
		async function fetchGlobalState() {
			try {
				const url = `${api.BASE_URL}/contact-us-page`;
				const response = await axios.get(url);
				setState({ data: response.data });
			} catch (error) {
				console.log(error);
			}
		}
		fetchGlobalState();
	}, [isDark]);

	const router = useRouter();

	React.useEffect(() => {
		const handleRouteChange = (url) => {
			if (typeof window.gtag === "function") {
				window.gtag("config", "G-R5YFLGPENB", {
					page_path: url,
				});
				console.log(`Page view tracked: ${url}`); // Optional: for debugging
			}
		};

		// Listen to route changes and track page views
		router.events.on("routeChangeComplete", handleRouteChange);

		// Clean up the event listener when the component unmounts
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Script strategy="afterInteractive" src='https://www.googletagmanager.com/gtag/js?id=G-R5YFLGPENB' />
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R5YFLGPENB', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
			<Head>
				<title>Camgotech</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<GlobalContext.Provider value={state}>
				<TopProgressBar />
				<Component {...pageProps} />
			</GlobalContext.Provider>
			<ScrollToTop />
			<div className="switch-box">
				<label id="switch" className="switch">
					<input type="checkbox" onChange={toggleTheme} id="slider" />
					<span className="slider round"></span>
				</label>
			</div>
			<TawkMessengerReact
				propertyId="68a7e9306beb8c1922ef148d"
				widgetId="1j37udq7p"
			/>
		</>
	);
}

export default MyApp;
