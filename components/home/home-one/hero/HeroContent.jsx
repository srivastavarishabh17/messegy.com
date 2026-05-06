"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Head from 'next/head';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import DashboardImg from '@/public/images/v7/deshbordv7.png';

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
					padding: "0",
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
						fontSize: isUltraWide ? "clamp(5rem, 7vw, 7rem)" : isLargeScreen ? "clamp(4rem, 6vw, 5.5rem)" : screenSize.width < 768 ? "clamp(2.5rem, 11vw, 3.5rem)" : "clamp(3.5rem, 8vw, 5rem)",
						fontWeight: "800",
						lineHeight: "1.05",
						marginBottom: isUltraWide ? "2rem" : screenSize.width < 768 ? "1.25rem" : "1.75rem",
						color: "#0a0a0a",
						letterSpacing: "-0.02em",
						width: "100%",
						maxWidth: "none",
						padding: "0 3%",
						margin: "0 auto 2rem",
						position: "relative",
						zIndex: 2,
						fontFamily: "var(--font-DM-Sans), sans-serif",
						textAlign: "center",
					}}
				>
					Discover the power<br />of Messegy AI platform
				</motion.h1>
			</motion.header>

			<motion.p
				id="hero-description"
				variants={textVariants}
				style={{
					fontSize: isUltraWide ? "24px" : isLargeScreen ? "22px" : screenSize.width < 768 ? "18px" : "21px",
					color: "#4a4a4a",
					width: "100%",
					maxWidth: "1400px",
					padding: "0 5%",
					margin: "0 auto 2.5rem",
					lineHeight: "1.6",
					fontWeight: "400",
					position: "relative",
					zIndex: 2,
					fontFamily: "var(--font-DM-Sans), sans-serif",
					textAlign: "center",
				}}
			>
				AI platforms provide powerful analytics capabilities, enabling businesses to gain deep insights from their data. This includes predictive analytics, which can forecast trends and behaviors and prescriptive analytics.
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
						background: "#e0aaff",
						color: "#0a0a0a",
						padding: screenSize.width < 768 ? "14px 24px" : "16px 28px",
						borderRadius: "50px",
						border: "none",
						fontSize: screenSize.width < 768 ? "15px" : "16px",
						fontWeight: "600",
						cursor: "pointer",
						transition: "all 0.2s ease",
					}}
					onClick={() => window.location.href = '/auth/register'}
					aria-label="Start free 14-day trial - no credit card required"
				>
					Start Free Trial
				</motion.button>

				<motion.button
					whileHover={{
						scale: 1.02,
					}}
					whileTap={{ scale: 0.98 }}
					style={{
						background: "#0a0a0a",
						color: "#ffffff",
						padding: screenSize.width < 768 ? "14px 24px" : "16px 28px",
						borderRadius: "50px",
						border: "none",
						fontSize: screenSize.width < 768 ? "15px" : "16px",
						fontWeight: "600",
						cursor: "pointer",
						transition: "all 0.2s ease",
						display: "flex",
						alignItems: "center",
						gap: "8px",
					}}
					onClick={() => window.location.href = '/contact'}
					aria-label="Schedule a demo with Messegy team"
				>
					<FaPlay size={14} />
					Schedule Demo
				</motion.button>
			</motion.nav>

			{/* Dashboard Preview Image */}
			<motion.div
				variants={textVariants}
				style={{
					width: "100%",
					maxWidth: "1200px",
					margin: "2rem auto 0",
					padding: "0 20px",
					position: "relative",
					zIndex: 2,
				}}
			>
				<Image
					src={DashboardImg}
					alt="Messegy Dashboard Preview"
					style={{
						width: "100%",
						height: "auto",
						borderRadius: "12px",
						boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
					}}
					priority
				/>
			</motion.div>

		</motion.div>
		</>
	);
}

export default HeroContent;
