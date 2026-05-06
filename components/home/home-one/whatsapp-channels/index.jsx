"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const channels = [
	{ name: "Facebook", icon: "fb", angle: 30 },
	{ name: "Instagram", icon: "ig", angle: 90 },
	{ name: "RCS", icon: "rcs", angle: 150 },
	{ name: "Meta Ads", icon: "meta", angle: 210, label: "Ads" },
	{ name: "Google Ads", icon: "gads", angle: 270, label: "Ads" },
	{ name: "Phone", icon: "phone", angle: 330 },
];

function WhatsAppChannels() {
	return (
		<div className="sofax-section-padding" style={{ background: "#ffffff" }}>
			<div className="container">
				<div className="row align-items-center">
					{/* Left Content */}
					<div className="col-lg-6" style={{ minWidth: "600px" }}>
						<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
							<div className="tg-heading-subheading animation-style3">
								<h2 style={{
									fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
									fontWeight: "800",
									lineHeight: "1.1",
									letterSpacing: "-0.02em",
									color: "#0a0a0a",
									marginBottom: "24px",
									textAlign: "left",
									maxWidth: "none",
									fontFamily: "var(--font-DM-Sans), sans-serif",
								}}>
									WhatsApp at the core.<br />
									Conversations everywhere.
								</h2>
							</div>
							<p style={{
								fontSize: "clamp(1rem, 2vw, 1.25rem)",
								lineHeight: "1.6",
								color: "#4a4a4a",
								marginTop: "0",
								textAlign: "left",
								maxWidth: "600px",
								fontWeight: "400",
								fontFamily: "var(--font-DM-Sans), sans-serif",
							}}>
								Start with WhatsApp and naturally extend to every channel your customers love. Manage website chat, Instagram, Facebook, SMS, calls and other social channels from one unified inbox.
							</p>
						</div>
					</div>

					{/* Right - Circular Graphic */}
					<div className="col-lg-6">
						<div style={{ position: "relative", width: "100%", maxWidth: "500px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
							{/* Concentric Circles Background */}
							<div style={{
								position: "absolute",
								width: "400px",
								height: "400px",
								borderRadius: "50%",
								background: "radial-gradient(circle, rgba(37, 211, 102, 0.1) 0%, rgba(37, 211, 102, 0.05) 50%, transparent 100%)",
								zIndex: 1,
							}} />
							<div style={{
								position: "absolute",
								width: "300px",
								height: "300px",
								borderRadius: "50%",
								border: "2px dashed rgba(37, 211, 102, 0.3)",
								zIndex: 2,
							}} />
							<div style={{
								position: "absolute",
								width: "200px",
								height: "200px",
								borderRadius: "50%",
								border: "2px dashed rgba(37, 211, 102, 0.2)",
								zIndex: 3,
							}} />
							
							{/* Central WhatsApp Icon */}
							<motion.div
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								style={{
									position: "absolute",
									width: "120px",
									height: "120px",
									background: "linear-gradient(135deg, #25D366, #128C7E)",
									borderRadius: "50%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									boxShadow: "0 20px 60px rgba(37, 211, 102, 0.4)",
									zIndex: 10,
								}}
							>
								<svg width="60" height="60" viewBox="0 0 24 24" fill="white">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
								</svg>
							</motion.div>

							{/* Orbiting Channel Icons */}
							{channels.map((channel, index) => (
								<motion.div
									key={channel.name}
									initial={{ scale: 0, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
									style={{
										position: "absolute",
										width: channel.label ? "75px" : "65px",
										height: channel.label ? "75px" : "65px",
										background: "white",
										borderRadius: "50%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
										top: "50%",
										left: "50%",
										transform: `translate(-50%, -50%) rotate(${channel.angle}deg) translate(180px) rotate(-${channel.angle}deg)`,
										zIndex: 5,
									}}
								>
									{channel.icon === "fb" && (
										<svg width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
											<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
										</svg>
									)}
									{channel.icon === "ig" && (
										<svg width="32" height="32" viewBox="0 0 24 24" fill="url(#ig-gradient)">
											<defs>
												<linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
													<stop offset="0%" stopColor="#833AB4"/>
													<stop offset="50%" stopColor="#FD1D1D"/>
													<stop offset="100%" stopColor="#FCB045"/>
												</linearGradient>
											</defs>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
										</svg>
									)}
									{channel.icon === "rcs" && (
										<svg width="32" height="32" viewBox="0 0 24 24" fill="#4285F4">
											<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
										</svg>
									)}
									{channel.icon === "gads" && (
										<div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
											<svg width="32" height="32" viewBox="0 0 24 24" fill="#4285F4">
												<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
											</svg>
											{channel.label && (
												<span style={{ 
													position: "absolute", 
													top: "-5px", 
													right: "-5px", 
													fontSize: "9px", 
													fontWeight: "600", 
													color: "#666",
													background: "white",
													padding: "2px 4px",
													borderRadius: "8px",
													boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
												}}>{channel.label}</span>
											)}
										</div>
									)}
									{channel.icon === "meta" && (
										<div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
											<svg width="32" height="32" viewBox="0 0 24 24" fill="#0668E1">
												<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
											</svg>
											{channel.label && (
												<span style={{ 
													position: "absolute", 
													top: "-5px", 
													right: "-5px", 
													fontSize: "9px", 
													fontWeight: "600", 
													color: "#666",
													background: "white",
													padding: "2px 4px",
													borderRadius: "8px",
													boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
												}}>{channel.label}</span>
											)}
										</div>
									)}
									{channel.icon === "phone" && (
										<svg width="32" height="32" viewBox="0 0 24 24" fill="#25D366">
											<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
										</svg>
									)}
								</motion.div>
							))}

							{/* Connecting Lines */}
							<svg
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									top: 0,
									left: 0,
									zIndex: 1,
								}}
							>
								<circle
									cx="50%"
									cy="50%"
									r="160"
									fill="none"
									stroke="rgba(37, 211, 102, 0.2)"
									strokeWidth="2"
									strokeDasharray="8 8"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhatsAppChannels;
