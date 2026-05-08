import Link from "next/link";

export default function WhatsappBusinessApiPage() {
	return (
		<div
			style={{
				background: "#ffffff",
				color: "#111",
			}}
		>
			{/* Hero Section */}
			<section
				style={{
					padding: "120px 0 90px",
					background:
						"linear-gradient(180deg, #f7fff9 0%, #ffffff 100%)",
				}}
			>
				<div className="container">
					<div
						style={{
							maxWidth: "850px",
							margin: "0 auto",
							textAlign: "center",
						}}
					>
						<div
							style={{
								display: "inline-flex",
								alignItems: "center",
								padding: "10px 18px",
								background: "#eafbf0",
								borderRadius: "999px",
								fontSize: "14px",
								fontWeight: "600",
								color: "#16a34a",
								marginBottom: "25px",
							}}
						>
							Official Meta Partner Platform
						</div>

						<h1
							style={{
								fontSize: "clamp(3rem, 6vw, 5rem)",
								fontWeight: "800",
								lineHeight: "1.05",
								letterSpacing: "-0.04em",
								marginBottom: "25px",
							}}
						>
							WhatsApp Business API
							<br />
							for modern businesses
						</h1>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#5f5f5f",
								maxWidth: "760px",
								margin: "0 auto",
							}}
						>
							Scale customer conversations, automate support,
							send campaigns, and manage sales using the official
							WhatsApp Business API with Messegy.
						</p>

						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "16px",
								marginTop: "40px",
								flexWrap: "wrap",
							}}
						>
							<Link
								href="/contact-us"
								className="sofax-default-btn pill"
							>
								<span className="button-wraper">
									Start Free Trial
								</span>
							</Link>

							<Link
								href="/pricing"
								className="sofax-default-btn-outline pill"
							>
								<span className="button-wraper">
									View Pricing
								</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section
				style={{
					padding: "100px 0",
				}}
			>
				<div className="container">
					<div
						style={{
							textAlign: "center",
							marginBottom: "70px",
						}}
					>
						<h2
							style={{
								fontSize: "48px",
								fontWeight: "800",
								marginBottom: "20px",
							}}
						>
							Everything you need on WhatsApp
						</h2>

						<p
							style={{
								fontSize: "18px",
								color: "#666",
								maxWidth: "700px",
								margin: "0 auto",
							}}
						>
							Messegy combines automation, marketing, support,
							and CRM tools into one unified WhatsApp platform.
						</p>
					</div>

					<div className="row g-4">

						{[
							{
								title: "Shared Team Inbox",
								desc: "Collaborate with multiple agents using one centralized WhatsApp inbox.",
							},
							{
								title: "Broadcast Campaigns",
								desc: "Send bulk WhatsApp campaigns with personalization and analytics.",
							},
							{
								title: "AI Chatbot Automation",
								desc: "Automate FAQs, lead capture, and customer support with AI-powered bots.",
							},
							{
								title: "Sales CRM",
								desc: "Track leads, conversations, and customer journeys directly inside WhatsApp.",
							},
							{
								title: "Click-to-WhatsApp Ads",
								desc: "Convert Meta and Instagram ads into real customer conversations.",
							},
							{
								title: "Order Notifications",
								desc: "Send payment alerts, shipping updates, OTPs, and confirmations instantly.",
							},
						].map((item, index) => (
							<div className="col-lg-4 col-md-6" key={index}>
								<div
									style={{
										padding: "35px",
										borderRadius: "24px",
										background: "#f9fafb",
										height: "100%",
										border: "1px solid #f0f0f0",
									}}
								>
									<div
										style={{
											width: "58px",
											height: "58px",
											borderRadius: "16px",
											background: "#dcfce7",
											marginBottom: "24px",
										}}
									/>

									<h4
										style={{
											fontSize: "24px",
											fontWeight: "700",
											marginBottom: "15px",
										}}
									>
										{item.title}
									</h4>

									<p
										style={{
											fontSize: "16px",
											lineHeight: "1.8",
											color: "#666",
											marginBottom: "0",
										}}
									>
										{item.desc}
									</p>
								</div>
							</div>
						))}

					</div>
				</div>
			</section>

			{/* Benefits */}
			<section
				style={{
					padding: "100px 0",
					background: "#0f172a",
					color: "#fff",
				}}
			>
				<div className="container">
					<div className="row align-items-center">

						<div className="col-lg-6">
							<h2
								style={{
									fontSize: "54px",
									fontWeight: "800",
									lineHeight: "1.1",
									marginBottom: "30px",
								}}
							>
								Why businesses choose Messegy
							</h2>

							<p
								style={{
									fontSize: "18px",
									lineHeight: "1.9",
									color: "#cbd5e1",
								}}
							>
								Messegy helps businesses manage customer
								conversations at scale with enterprise-grade
								WhatsApp infrastructure, automation, analytics,
								and team collaboration tools.
							</p>
						</div>

						<div className="col-lg-6">
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: "20px",
									marginTop: "40px",
								}}
							>

								{[
									"Official WhatsApp API",
									"Fast onboarding",
									"99.9% uptime",
									"Multi-agent support",
									"Advanced automation",
									"Real-time analytics",
								].map((item, index) => (
									<div
										key={index}
										style={{
											padding: "24px",
											borderRadius: "20px",
											background: "rgba(255,255,255,0.06)",
											border:
												"1px solid rgba(255,255,255,0.08)",
											fontSize: "18px",
											fontWeight: "600",
										}}
									>
										{item}
									</div>
								))}

							</div>
						</div>

					</div>
				</div>
			</section>

			{/* CTA */}
			<section
				style={{
					padding: "110px 0",
					textAlign: "center",
				}}
			>
				<div className="container">
					<div
						style={{
							maxWidth: "760px",
							margin: "0 auto",
						}}
					>
						<h2
							style={{
								fontSize: "56px",
								fontWeight: "800",
								lineHeight: "1.1",
								marginBottom: "24px",
							}}
						>
							Start scaling conversations on WhatsApp
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#666",
								marginBottom: "40px",
							}}
						>
							Launch campaigns, automate support, manage leads,
							and grow your business with Messegy.
						</p>

						<Link
							href="/contact-us"
							className="sofax-default-btn pill"
						>
							<span className="button-wraper">
								Get Started Now
							</span>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}