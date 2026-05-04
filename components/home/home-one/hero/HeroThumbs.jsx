import Dashboard from "@/public/images/v1/dashboard.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.2,
			delay: 0.8,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.8, rotateY: 180 },
	visible: {
		opacity: 1,
		scale: 1,
		rotateY: 0,
		transition: {
			duration: 1.4,
			delay: 1,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

const floatingVariants = {
	hidden: { y: 0 },
	visible: {
		y: [0, -20, 0],
		transition: {
			duration: 5,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const glowVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: [0.4, 0.7, 0.4],
		scale: [1, 1.15, 1],
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const pulseVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: [0.6, 1, 0.6],
		scale: [1, 1.05, 1],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

function HeroThumbs() {
	const [isHovered, setIsHovered] = useState(false);
	const [isReducedMotion, setIsReducedMotion] = useState(false);
	const [screenSize, setScreenSize] = useState({ width: 0 });

	useEffect(() => {
		const updateScreenSize = () => {
			setScreenSize({ width: window.innerWidth });
		};
		updateScreenSize();
		window.addEventListener('resize', updateScreenSize);
		
		// Check for reduced motion preference
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		setIsReducedMotion(mediaQuery.matches);
		const handleChange = (e) => setIsReducedMotion(e.matches);
		mediaQuery.addEventListener('change', handleChange);
		
		return () => {
			window.removeEventListener('resize', updateScreenSize);
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	const isLargeScreen = screenSize.width >= 1400;
	const isUltraWide = screenSize.width >= 1920;
	const isMobile = screenSize.width < 768;

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			style={{
				marginTop: isMobile ? "2rem" : "4rem",
				position: "relative",
				zIndex: 5,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				perspective: isMobile ? "800px" : "1200px",
				padding: isMobile ? "0 0.5rem" : "0 1rem",
				willChange: "transform",
				transform: "translateZ(0)",
			}}
			role="img"
			aria-label="Messegy Dashboard Interface showcasing WhatsApp Business Platform features"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Main transparent image container */}
			<motion.div
				variants={floatingVariants}
				style={{
					position: "relative",
					width: "100%",
					maxWidth: isMobile ? "100%" : "95%",
					height: "auto",
				}}
			>
				{/* Enhanced glow effect behind image */}
				<motion.div
					variants={glowVariants}
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "140%",
						height: "140%",
						background: "radial-gradient(circle, rgba(229, 171, 243, 0.15) 0%, rgba(39, 150, 121, 0.08) 50%, transparent 70%)",
						borderRadius: "25px",
						filter: "blur(40px)",
						zIndex: -1,
					}}
					animate={isHovered ? {
						scale: [1, 1.2, 1],
						opacity: [0.5, 0.8, 0.5],
					} : {}}
				/>

				{/* Enhanced decorative floating elements */}
				<motion.div
					style={{
						position: "absolute",
						top: "-40px",
						right: "60px",
						width: "100px",
						height: "100px",
						background: "linear-gradient(135deg, var(--accent-color), #d8a0e8)",
						borderRadius: "50%",
						opacity: 0.7,
						filter: "blur(20px)",
					}}
					animate={isReducedMotion ? {} : {
						scale: [1, 1.3, 1],
						rotate: [0, 180, 360],
						opacity: [0.5, 0.8, 0.5],
					}}
					transition={{
						duration: 8,
						repeat: isReducedMotion ? 0 : Infinity,
						ease: "easeInOut",
					}}
				/>

				<motion.div
					style={{
						position: "absolute",
						bottom: "-30px",
						left: "100px",
						width: "80px",
						height: "80px",
						background: "linear-gradient(135deg, rgba(39, 150, 121, 0.8), rgba(39, 150, 121, 0.6))",
						borderRadius: "50%",
						opacity: 0.6,
						filter: "blur(18px)",
					}}
					animate={isReducedMotion ? {} : {
						scale: [1.3, 1, 1.3],
						rotate: [360, 180, 0],
						opacity: [0.4, 0.7, 0.4],
					}}
					transition={{
						duration: 10,
						repeat: isReducedMotion ? 0 : Infinity,
						ease: "easeInOut",
					}}
				/>

				{/* Main transparent image */}
				<motion.div
					variants={imageVariants}
					style={{
						position: "relative",
						width: "100%",
						height: "auto",
						transformStyle: "preserve-3d",
						borderRadius: "16px",
						overflow: "hidden",
					}}
					whileHover={isMobile ? {} : {
						scale: 1.08,
						rotateY: 8,
						transition: { duration: 0.4 },
					}}
				>
					<Image
						src={Dashboard}
						alt="Messegy Dashboard - WhatsApp Business Platform Interface with AI automation, bulk campaigns, and analytics features"
						layout="responsive"
						width={isMobile ? 900 : 900}
						height={isMobile ? 600 : 500}
						objectFit="contain"
						loading="eager"
						priority={true}
						style={{
							filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2))",
							borderRadius: "16px",
							transition: "all 0.4s ease",
						}}
					/>

					{/* Enhanced overlay gradient for better text visibility */}
					<motion.div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background: "linear-gradient(135deg, rgba(229, 171, 243, 0.05) 0%, transparent 40%, rgba(39, 150, 121, 0.03) 60%, rgba(229, 171, 243, 0.05) 100%)",
							borderRadius: "16px",
							pointerEvents: "none",
						}}
						animate={{
							background: [
								"linear-gradient(135deg, rgba(229, 171, 243, 0.05) 0%, transparent 40%, rgba(39, 150, 121, 0.03) 60%, rgba(229, 171, 243, 0.05) 100%)",
								"linear-gradient(135deg, rgba(229, 171, 243, 0.08) 0%, transparent 40%, rgba(39, 150, 121, 0.06) 60%, rgba(229, 171, 243, 0.08) 100%)",
								"linear-gradient(135deg, rgba(229, 171, 243, 0.05) 0%, transparent 40%, rgba(39, 150, 121, 0.03) 60%, rgba(229, 171, 243, 0.05) 100%)",
							]
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</motion.div>

				{/* Enhanced floating UI elements */}
				<motion.div
					variants={pulseVariants}
					style={{
						position: "absolute",
						top: "20px",
						left: "-50px",
						background: "linear-gradient(135deg, var(--white-bg), rgba(255, 255, 255, 0.95))",
						backdropFilter: "blur(15px)",
						border: "1.5px solid rgba(229, 171, 243, 0.2)",
						borderRadius: "16px",
						padding: "14px 24px",
						color: "var(--heading-color)",
						fontSize: "15px",
						fontWeight: "700",
						boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
						textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
					}}
					animate={{
						y: [0, -12, 0],
						scale: [1, 1.02, 1],
					}}
					transition={{
						duration: 3.5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					role="status"
					aria-label="WhatsApp API integration feature"
				>
					🚀 WhatsApp API
				</motion.div>

				<motion.div
					variants={pulseVariants}
					style={{
						position: "absolute",
						top: "70px",
						right: "-40px",
						background: "linear-gradient(135deg, var(--accent-color), #d8a0e8)",
						backdropFilter: "blur(15px)",
						border: "1.5px solid rgba(229, 171, 243, 0.3)",
						borderRadius: "16px",
						padding: "14px 24px",
						color: "var(--white-color)",
						fontSize: "15px",
						fontWeight: "700",
						boxShadow: "0 8px 32px rgba(229, 171, 243, 0.4)",
						textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
					}}
					animate={{
						y: [0, -10, 0],
						scale: [1, 1.03, 1],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.5,
					}}
					role="status"
					aria-label="Instagram RCS integration feature"
				>
					📱 Instagram RCS
				</motion.div>

				<motion.div
					variants={pulseVariants}
					style={{
						position: "absolute",
						bottom: "50px",
						right: "30px",
						background: "linear-gradient(135deg, var(--white-bg), rgba(255, 255, 255, 0.95))",
						backdropFilter: "blur(15px)",
						border: "1.5px solid rgba(39, 150, 121, 0.2)",
						borderRadius: "16px",
						padding: "14px 24px",
						color: "var(--heading-color)",
						fontSize: "15px",
						fontWeight: "700",
						boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
						textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
					}}
					animate={{
						y: [0, -8, 0],
						scale: [1, 1.02, 1],
					}}
					transition={{
						duration: 4.5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
					role="status"
					aria-label="AI Automation feature"
				>
					🤖 AI Automation
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default HeroThumbs;
