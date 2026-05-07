"use client";
import { motion } from "framer-motion";
import {
	FaExchangeAlt,
	FaShieldAlt,
	FaChartLine,
	FaDesktop,
	FaMobileAlt,
	FaLock,
} from "react-icons/fa";

const features = [
	{
		id: "send-receive",
		title: "Send & Receive",
		description:
			"Sending & receiving cryptocurrencies such as Bitcoin, Ethereum or to other digital assets between deggernent.",
		Icon: FaExchangeAlt,
	},
	{
		id: "secure-wallet",
		title: "100% Secure Wallet",
		description:
			"Cryptocurrency wallets implement to robust security measures there is no such thing as absolute security.",
		Icon: FaLock,
	},
	{
		id: "trading-charts",
		title: "Trading Charts",
		description:
			"Traders investors & analyze historical price data, identify trendsand, make informed decisions about buying.",
		Icon: FaChartLine,
	},
	{
		id: "real-time",
		title: "Real Time Trending",
		description:
			"This data includes current prices that trading volume, bid-ask to spreads or order book depth & relevant metrics.",
		Icon: FaDesktop,
	},
];

function FeatureCard({ feature, index }) {
	const Icon = feature.Icon;
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="secure-feature-card"
			style={{
				background: "#ffffff",
				borderRadius: "20px",
				padding: "42px",
				border: "1px solid #f0f0f0",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
			}}
		>
			<div style={{ color: "#1a1a1a", marginBottom: "16px", fontSize: "28px" }}>
				<Icon />
			</div>
			<h4
				style={{
					fontSize: "1.05rem",
					fontWeight: 700,
					color: "#0a0a0a",
					marginBottom: "8px",
					fontFamily: "var(--font-DM-Sans), sans-serif",
				}}
			>
				{feature.title}
			</h4>
			<p
				style={{
					fontSize: "0.9rem",
					lineHeight: 1.6,
					color: "#666",
					margin: 0,
					fontFamily: "var(--font-DM-Sans), sans-serif",
				}}
			>
				{feature.description}
			</p>
		</motion.div>
	);
}

function PhoneMockup() {
	return (
		<div
			style={{
				position: "relative",
				width: "260px",
				margin: "0 auto",
				marginTop: "auto",
				paddingBottom: "8px",
			}}
		>
			<div
				style={{
					background: "#0a0a0a",
					borderRadius: "36px",
					padding: "10px",
					boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
					position: "relative",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "10px",
						left: "50%",
						transform: "translateX(-50%)",
						width: "80px",
						height: "22px",
						background: "#0a0a0a",
						borderRadius: "0 0 14px 14px",
						zIndex: 10,
					}}
				/>
				<div
					style={{
						background: "#ffffff",
						borderRadius: "28px",
						overflow: "hidden",
						position: "relative",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							padding: "10px 18px 4px",
							fontSize: "0.7rem",
							fontWeight: 600,
							color: "#0a0a0a",
						}}
					>
						<span>9:41</span>
						<div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
							<svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
								<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
							</svg>
						</div>
					</div>
					<div style={{ padding: "8px 16px 16px" }}>
						<div style={{ marginBottom: "12px" }}>
							<p style={{ fontSize: "0.65rem", color: "#999", margin: "0 0 2px" }}>Market is down</p>
							<p style={{ fontSize: "1.1rem", fontWeight: 800, color: "#e74c3c", margin: 0, letterSpacing: "-0.02em" }}>-14.02%</p>
						</div>
						<div
							style={{
								background: "#f5f5f5",
								borderRadius: "10px",
								padding: "8px 12px",
								display: "flex",
								alignItems: "center",
								gap: "8px",
								marginBottom: "12px",
							}}
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="11" cy="11" r="8" />
								<path d="M21 21l-4.35-4.35" />
							</svg>
							<span style={{ fontSize: "0.75rem", color: "#bbb" }}>Search</span>
						</div>
						<div style={{ display: "flex", gap: "14px", marginBottom: "12px" }}>
							<span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0a0a0a" }}>Coins</span>
							<span style={{ fontSize: "0.75rem", color: "#bbb" }}>Gainer</span>
							<span style={{ fontSize: "0.75rem", color: "#bbb" }}>Loser</span>
							<span style={{ fontSize: "0.75rem", color: "#bbb" }}>Favourites</span>
						</div>
						<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
							<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<div
									style={{
										width: "26px",
										height: "26px",
										borderRadius: "50%",
										background: "#f7931a",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="white">
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
									</svg>
								</div>
								<div>
									<p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>Bitcoin</p>
									<p style={{ fontSize: "0.6rem", color: "#bbb", margin: 0 }}>BTC</p>
								</div>
							</div>
							<div style={{ textAlign: "right" }}>
								<p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>₹2,569.75</p>
								<p style={{ fontSize: "0.65rem", color: "#27ae60", margin: 0, fontWeight: 600 }}>+2.4%</p>
							</div>
						</div>
						<div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "32px" }}>
							{[18, 32, 24, 38, 28, 42, 32, 48, 38, 52, 42, 58, 48, 62, 52, 68, 58, 74, 64, 78].map((h, i) => (
								<div
									key={i}
									style={{
										flex: 1,
										height: `${h}%`,
										background: i > 12 ? "#27ae60" : "#e8e8e8",
										borderRadius: "1px 1px 0 0",
										minWidth: "3px",
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function SecureSolutions() {
	return (
		<section className="sofax-section-padding" style={{ background: "#ffffff" }}>
			<div className="container">
				{/* Section Title — matches other pages exactly */}
				<div className="sofax-section-title center" style={{ marginBottom: "48px" }}>
					<div className="tg-heading-subheading animation-style3">
						<h2>
							Secure solutions for<br />your digital assets
						</h2>
					</div>
				</div>

				{/* Bento Grid */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1.4fr 1fr",
						gap: "20px",
						maxWidth: "1100px",
						margin: "0 auto",
					}}
					className="secure-solutions-grid"
				>
					{/* Left Column */}
					<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
						<FeatureCard feature={features[0]} index={0} />
						<FeatureCard feature={features[1]} index={1} />
					</div>

					{/* Center Highlight Card */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
						viewport={{ once: true }}
						style={{
							background: "#dcb3f0",
							borderRadius: "24px",
							padding: "42px 28px 0",
							display: "flex",
							flexDirection: "column",
							position: "relative",
							overflow: "hidden",
						}}
					>
						<div>
							<div style={{ color: "#1a1a1a", marginBottom: "16px", fontSize: "28px" }}>
								<FaMobileAlt />
							</div>
							<h4
								style={{
									fontSize: "1.05rem",
									fontWeight: 700,
									color: "#0a0a0a",
									marginBottom: "8px",
									fontFamily: "var(--font-DM-Sans), sans-serif",
								}}
							>
								iOS & Android App
							</h4>
							<p
								style={{
									fontSize: "0.9rem",
									lineHeight: 1.6,
									color: "#4a4a4a",
									margin: 0,
									maxWidth: "260px",
									fontFamily: "var(--font-DM-Sans), sans-serif",
								}}
							>
								Apps developed using programming languages such as swift or objective-c & are typically distributed.
							</p>
						</div>
						<PhoneMockup />
					</motion.div>

					{/* Right Column */}
					<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
						<FeatureCard feature={features[2]} index={2} />
						<FeatureCard feature={features[3]} index={3} />
					</div>
				</div>
			</div>

			<style jsx>{`
				@media (max-width: 991px) {
					.secure-solutions-grid {
						grid-template-columns: 1fr 1fr !important;
					}
				}
				@media (max-width: 575px) {
					.secure-solutions-grid {
						grid-template-columns: 1fr !important;
					}
				}
			`}</style>
		</section>
	);
}

export default SecureSolutions;
