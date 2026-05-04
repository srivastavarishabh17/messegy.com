"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Head from 'next/head';
import { FaStar, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 1.2,
			staggerChildren: 0.3,
		},
	},
};

const textVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

function HeroContent() {
	const [isHovered, setIsHovered] = useState(false);
	const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
	const [isReducedMotion, setIsReducedMotion] = useState(false);

	useEffect(() => {
		const updateScreenSize = () => {
			setScreenSize({ width: window.innerWidth, height: window.innerHeight });
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

	return (
		<>
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "SoftwareApplication",
							"name": "Messegy WhatsApp Business Platform",
							"description": "Automate conversations, capture leads, send bulk campaigns and grow 10x faster with AI-powered WhatsApp Business messaging",
							"url": "https://messegy.com",
							"applicationCategory": "BusinessApplication",
							"operatingSystem": "Web",
							"offers": {
								"@type": "Offer",
								"price": "0",
								"priceCurrency": "USD",
								"description": "14 day free trial - No credit card required"
							},
							"aggregateRating": {
								"@type": "AggregateRating",
								"ratingValue": "4.8",
								"reviewCount": "1000",
								"bestRating": "5"
							},
							"provider": {
								"@type": "Organization",
								"name": "Messegy",
								"url": "https://messegy.com"
							}
						})
					}}
				/>
			</Head>
			
			<motion.div 
				className="sofax-hero-content"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				role="main"
				aria-labelledby="hero-heading"
				aria-describedby="hero-description"
				style={{
					textAlign: "center",
					color: "#1a1a1a",
					position: "relative",
					zIndex: 10,
					padding: isUltraWide ? "6rem 4rem" : isLargeScreen ? "5rem 3rem" : screenSize.width < 768 ? "3rem 1rem" : "4rem 2rem",
					marginTop: "60px",
					width: "100%",
					minHeight: "auto",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					background: "#ffffff",
				}}
			>
			
			<motion.header style={{ position: "relative", zIndex: 2, width: "100%" }}>
				<motion.h1
					id="hero-heading"
					variants={textVariants}
					style={{
						fontSize: isUltraWide ? "clamp(3.5rem, 5vw, 4.5rem)" : isLargeScreen ? "clamp(3rem, 4.5vw, 4rem)" : screenSize.width < 768 ? "clamp(2rem, 8vw, 2.5rem)" : "clamp(2.5rem, 5vw, 3.5rem)",
						fontWeight: "800",
						lineHeight: "1.15",
						marginBottom: isUltraWide ? "1.5rem" : screenSize.width < 768 ? "1rem" : "1.25rem",
						color: "#1a1a1a",
						letterSpacing: "-0.03em",
						maxWidth: "850px",
						margin: "0 auto 1.5rem",
						position: "relative",
						zIndex: 2,
						fontFamily: "var(--font-DM-Sans), sans-serif",
					}}
				>
					<span style={{ display: "inline" }}>The #1 </span>
					<motion.span
						style={{ 
							display: "inline",
							background: "#00d26a",
							color: "#1a1a1a",
							padding: "0.15rem 0.6rem",
							borderRadius: "12px",
							fontWeight: "800",
							marginRight: "0.2rem",
						}}
						variants={textVariants}
					>
						WhatsApp
					</motion.span>
					<br style={{ display: screenSize.width < 640 ? "none" : "block" }} />
					<motion.span
						style={{ 
							display: "inline",
							background: "#00d26a",
							color: "#1a1a1a",
							padding: "0.15rem 0.6rem",
							borderRadius: "12px",
							fontWeight: "800",
							marginRight: "0.2rem",
						}}
						variants={textVariants}
					>
						Business Messaging
					</motion.span>
					<span style={{ display: "inline" }}>Platform</span>
				</motion.h1>
			</motion.header>

			<motion.p
				id="hero-description"
				variants={textVariants}
				style={{
					fontSize: isUltraWide ? "22px" : isLargeScreen ? "20px" : screenSize.width < 768 ? "17px" : "19px",
					color: "#4a4a4a",
					maxWidth: "650px",
					margin: "0 auto 2rem",
					lineHeight: "1.5",
					fontWeight: "500",
					position: "relative",
					zIndex: 2,
					fontFamily: "var(--font-DM-Sans), sans-serif",
				}}
			>
				Automate conversations, capture leads & grow 3x faster with Messegy
			</motion.p>

			<motion.nav
				variants={textVariants}
				style={{
					display: "flex",
					gap: isUltraWide ? "1rem" : screenSize.width < 768 ? "0.75rem" : "1rem",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
					marginBottom: screenSize.width < 768 ? "1.5rem" : "2rem",
					position: "relative",
					zIndex: 2,
				}}
				role="navigation"
				aria-label="Primary call-to-action buttons"
			>
				<motion.button
					whileHover={{ 
						scale: 1.02,
					}}
					whileTap={{ scale: 0.98 }}
					style={{
						background: "#1a1a1a",
						color: "#ffffff",
						padding: screenSize.width < 768 ? "14px 28px" : "16px 32px",
						borderRadius: "8px",
						border: "none",
						fontSize: screenSize.width < 768 ? "15px" : "16px",
						fontWeight: "600",
						cursor: "pointer",
						transition: "all 0.2s ease",
					}}
					onClick={() => window.location.href = '/auth/register'}
					aria-label="Start free 14-day trial - no credit card required"
				>
					Start Free 14-Day Trial
				</motion.button>

				<motion.button
					whileHover={{ 
						scale: 1.02,
						background: "#f5f5f5",
					}}
					whileTap={{ scale: 0.98 }}
					style={{
						background: "transparent",
						color: "#1a1a1a",
						padding: screenSize.width < 768 ? "14px 28px" : "16px 32px",
						borderRadius: "8px",
						border: "1px solid #d0d0d0",
						fontSize: screenSize.width < 768 ? "15px" : "16px",
						fontWeight: "600",
						cursor: "pointer",
						transition: "all 0.2s ease",
					}}
					onClick={() => window.location.href = '/contact'}
					aria-label="Book a demo with Messegy team"
				>
					Book a Demo
				</motion.button>
			</motion.nav>

			{/* Trust Badges */}
			<motion.div
				variants={textVariants}
				style={{
					display: "flex",
					gap: isUltraWide ? "2rem" : isLargeScreen ? "1.5rem" : screenSize.width < 768 ? "1rem" : "1.25rem",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: screenSize.width < 640 ? "wrap" : "nowrap",
					position: "relative",
					zIndex: 2,
				}}
			>
				<motion.div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "0.4rem",
						color: "#666",
						fontSize: screenSize.width < 768 ? "14px" : "15px",
						fontWeight: "500",
					}}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					<FaStar style={{ color: "#f5a623" }} />
					4.8/5 Rating
				</motion.div>
				
				<motion.div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "0.4rem",
						color: "#666",
						fontSize: screenSize.width < 768 ? "14px" : "15px",
						fontWeight: "500",
					}}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					<FaBuilding style={{ color: "#00d26a" }} />
					1600+ Businesses
				</motion.div>
				
				<motion.div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "0.4rem",
						color: "#666",
						fontSize: screenSize.width < 768 ? "14px" : "15px",
						fontWeight: "500",
					}}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					<FaCheckCircle style={{ color: "#00d26a" }} />
					Official WhatsApp Business API
				</motion.div>
			</motion.div>

			
		</motion.div>
		</>
	);
}

export default HeroContent;
