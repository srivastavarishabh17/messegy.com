import Image from "next/image";

import HeroContent from "./HeroContent";

import HeroThumbs from "./HeroThumbs";

import { motion } from "framer-motion";



function HeroSection() {

	return (

		<section className="sofax-hero-section overflow-hidden" id="hero" style={{

			position: "relative",

			minHeight: "100vh",

			display: "flex",

			alignItems: "center",

			background: "#ffffff",

			overflow: "hidden",

		}}>

			{/* Transparent background image overlay */}

			<div

				style={{

					position: "absolute",

					top: 0,

					left: 0,

					width: "100%",

					height: "100%",

					backgroundImage: "url('/images/v1/shape5.png')",

					backgroundSize: "cover",

					backgroundPosition: "center",

					backgroundRepeat: "no-repeat",

					opacity: 0.1,

					zIndex: 1,

				}}

			/>



			{/* Subtle floating particles */}

			{[...Array(4)].map((_, i) => (

				<motion.div

					key={i}

					style={{

						position: "absolute",

						width: "2px",

						height: "2px",

						background: "var(--accent-color)",

						borderRadius: "50%",

						top: `${15 + (i % 4) * 20}%`,

						left: `${15 + (i % 4) * 25}%`,

						zIndex: 2,

					}}

					animate={{

						y: [0, -40, 0],

						x: [0, Math.random() * 10 - 5, 0],

						opacity: [0, 0.6, 0],

					}}

					transition={{

						duration: 5 + i * 1.5,

						repeat: Infinity,

						delay: i * 0.8,

						ease: "easeInOut"

					}}

				/>

			))}



			{/* Subtle grid pattern */}

			<div

				style={{

					position: "absolute",

					top: 0,

					left: 0,

					width: "100%",

					height: "100%",

					backgroundImage: `

						linear-gradient(rgba(229, 171, 243, 0.02) 1px, transparent 1px),

						linear-gradient(90deg, rgba(229, 171, 243, 0.02) 1px, transparent 1px)

					`,

					backgroundSize: "60px 60px",

					zIndex: 3,

				}}

			/>



			{/* Additional decorative elements */}

			<motion.div

				style={{

					position: "absolute",

					top: "10%",

					left: "5%",

					width: "150px",

					height: "150px",

					background: "radial-gradient(circle, rgba(229, 171, 243, 0.03) 0%, transparent 70%)",

					borderRadius: "50%",

					zIndex: 2,

				}}

				animate={{

					scale: [1, 1.2, 1],

					rotate: [0, 90, 180],

				}}

				transition={{

					duration: 15,

					repeat: Infinity,

					ease: "easeInOut"

				}}

			/>



			<motion.div

				style={{

					position: "absolute",

					bottom: "15%",

					right: "8%",

					width: "120px",

					height: "120px",

					background: "radial-gradient(circle, rgba(229, 171, 243, 0.02) 0%, transparent 70%)",

					borderRadius: "50%",

					zIndex: 2,

				}}

				animate={{

					scale: [1.1, 1, 1.1],

					rotate: [180, 90, 0],

				}}

				transition={{

					duration: 18,

					repeat: Infinity,

					ease: "easeInOut"

				}}

			/>



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

