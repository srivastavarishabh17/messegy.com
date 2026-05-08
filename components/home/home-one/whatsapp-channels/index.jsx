"use client";

import Image from "next/image";

function WhatsAppChannels() {
	return (
		<div
			className="sofax-section-padding"
			style={{
				background: "#ffffff",
				overflow: "hidden",
			}}
		>
			<div className="container">
				<div className="row align-items-center gy-5 mb-0">
					
					{/* Left Content */}
					<div className="col-lg-6">
						<div
							style={{
								maxWidth: "620px",
							}}
						>
							<div className="tg-heading-subheading animation-style3">
								<h2
									style={{
										fontSize: "clamp(2.5rem, 5vw, 4rem)",
										fontWeight: "800",
										lineHeight: "1.05",
										letterSpacing: "-0.04em",
										color: "#111111",
										marginBottom: "24px",
										fontFamily:
											"var(--font-DM-Sans), sans-serif",
									}}
								>
									WhatsApp at the center.
									<br />
									Every channel connected.
								</h2>
							</div>

							<p
								style={{
									fontSize: "18px",
									lineHeight: "1.8",
									color: "#5f5f5f",
									marginBottom: "0",
									fontWeight: "400",
									fontFamily:
										"var(--font-DM-Sans), sans-serif",
								}}
							>
								Messegy brings WhatsApp, Instagram, Facebook,
								RCS, calls, and ads into one unified customer
								conversation platform. Manage support, sales,
								marketing, and automation from a single inbox.
							</p>
						</div>
					</div>

					{/* Right Image */}
					<div className="col-lg-6">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "relative",
							}}
						>
							<Image
								src="/withbrands.png"
								alt="Messegy Omnichannel Platform"
								width={650}
								height={650}
								priority
								style={{
									width: "100%",
									maxWidth: "620px",
									height: "auto",
									objectFit: "contain",
								}}
							/>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default WhatsAppChannels;