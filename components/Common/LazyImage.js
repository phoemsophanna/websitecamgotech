import { useEffect, useRef, useState } from "react";

const LazyImage = ({ placeholderSrc, placeholderClassName, src, alt, className }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [view, setView] = useState("");
	const placeholderRef = useRef(null);

	useEffect(() => {
		// Initiating Intersection Observer
		const observer = new IntersectionObserver((entries) => {
			// Set actual image source && unobserve when intersecting
			if (entries[0].isIntersecting) {
				setView(src);
				observer.unobserve(placeholderRef.current);
			}
		});

		// observe for an placeholder image
		if (placeholderRef && placeholderRef.current) {
			observer.observe(placeholderRef.current);
		}
	}, [src]);

	return (
		<>
			{isLoading && <img src={placeholderSrc} alt="" className={placeholderClassName} ref={placeholderRef} />}
			<img
				src={view} // Gets src only when placeholder intersecting
				className="d-none"
				alt={alt}
				onLoad={() => setIsLoading(false)}
			/>
			{!isLoading && (
				<img
					src={view} // Gets src only when placeholder intersecting
					className={className}
					alt={alt}
				/>
			)}
		</>
	);
};
export default LazyImage;
