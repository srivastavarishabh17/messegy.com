import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import { motion } from "framer-motion";

function HeroSection() {
	return (
		<section className="sofax-hero-section overflow-hidden" id="hero" style={{
			position: "relative",
			minHeight: "auto",
			display: "flex",
			alignItems: "center",
			background: "transparent",
			overflow: "hidden",
			marginTop: "0",
			paddingTop: "0",
		}}>
			




			<div style={{ 
				position: "relative", 
				zIndex: 10,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "0",
				width: "100%",
				maxWidth: "none"
			}}>
				<HeroContent />
				<HeroThumbs />
			</div>
		</section>
	);
}

export default HeroSection;
