import Link from "next/link";

export default function WhatsAppCloudHostingPage() {
	return (
		<div
			style={{
				background: "#ffffff",
				color: "#111111",
			}}
		>
			{/* Hero Section */}
			<section
				style={{
					padding: "120px 0 100px",
					background:
						"linear-gradient(180deg, #f3fff7 0%, #ffffff 100%)",
				}}
			>
				<div className="container">
					<div
						style={{
							maxWidth: "900px",
							margin: "0 auto",
							textAlign: "center",
						}}
					>
						<div
							style={{
								display: "inline-flex",
								alignItems: "center",
								padding: "10px 18px",
								background: "#dcfce7",
								borderRadius: "999px",
								fontSize: "14px",
								fontWeight: "700",
								color: "#15803d",
								marginBottom: "24px",
							}}
						>
							Official Meta Cloud API Solution
						</div>

						<h1
							style={{
								fontSize: "clamp(3rem, 6vw, 5.5rem)",
								fontWeight: "800",
								lineHeight: "1.05",
								letterSpacing: "-0.04em",
								marginBottom: "24px",
							}}
						>
							WhatsApp Cloud Hosting
							<br />
							built for scale
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
							Run your WhatsApp Business API on secure cloud
							infrastructure with high availability, faster
							message delivery, advanced automation, and
							enterprise-grade reliability powered by Messegy.
						</p>

						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "18px",
								marginTop: "42px",
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

			{/* Stats */}
			<section
				style={{
					padding: "80px 0",
				}}
			>
				<div className="container">
					<div className="row g-4">

						{[
							{
								number: "99.9%",
								label: "Infrastructure uptime",
							},
							{
								number: "<100ms",
								label: "API response latency",
							},
							{
								number: "24/7",
								label: "Monitoring & support",
							},
							{
								number: "1M+",
								label: "Messages processed",
							},
						].map((item, index) => (
							<div className="col-lg-3 col-md-6" key={index}>
								<div
									style={{
										padding: "40px 30px",
										borderRadius: "24px",
										background: "#f9fafb",
										textAlign: "center",
										border: "1px solid #f1f5f9",
									}}
								>
									<h2
										style={{
											fontSize: "52px",
											fontWeight: "800",
											color: "#16a34a",
											marginBottom: "10px",
										}}
									>
										{item.number}
									</h2>

									<p
										style={{
											fontSize: "17px",
											color: "#64748b",
											marginBottom: "0",
										}}
									>
										{item.label}
									</p>
								</div>
							</div>
						))}

					</div>
				</div>
			</section>

			{/* Features */}
			<section
				style={{
					padding: "110px 0",
				}}
			>
				<div className="container">

					<div
						style={{
							textAlign: "center",
							maxWidth: "760px",
							margin: "0 auto 70px",
						}}
					>
						<h2
							style={{
								fontSize: "52px",
								fontWeight: "800",
								marginBottom: "22px",
							}}
						>
							Enterprise-grade cloud infrastructure
						</h2>

						<p
							style={{
								fontSize: "19px",
								lineHeight: "1.8",
								color: "#64748b",
							}}
						>
							Messegy handles scaling, hosting, monitoring,
							security, and WhatsApp API infrastructure so your
							team can focus on growth and customer engagement.
						</p>
					</div>

					<div className="row g-4">

						{[
							{
								title: "Managed Cloud Infrastructure",
								desc: "Fully managed hosting with automatic scaling, backups, and infrastructure monitoring.",
							},
							{
								title: "Fast API Performance",
								desc: "Deliver messages instantly with optimized cloud architecture and low latency routing.",
							},
							{
								title: "Secure Message Delivery",
								desc: "End-to-end secure communication with encrypted API connections and access controls.",
							},
							{
								title: "High Availability",
								desc: "Reliable cloud environment with failover systems and maximum uptime for businesses.",
							},
							{
								title: "Webhook Management",
								desc: "Receive and process WhatsApp events in real time using stable webhook systems.",
							},
							{
								title: "Scalable Messaging",
								desc: "Handle thousands to millions of WhatsApp conversations without infrastructure issues.",
							},
						].map((item, index) => (
							<div className="col-lg-4 col-md-6" key={index}>
								<div
									style={{
										padding: "38px",
										borderRadius: "28px",
										background: "#ffffff",
										border: "1px solid #eef2f7",
										height: "100%",
										boxShadow:
											"0 10px 40px rgba(15,23,42,0.04)",
									}}
								>
									<div
										style={{
											width: "64px",
											height: "64px",
											borderRadius: "18px",
											background: "#dcfce7",
											marginBottom: "26px",
										}}
									/>

									<h4
										style={{
											fontSize: "26px",
											fontWeight: "700",
											marginBottom: "16px",
										}}
									>
										{item.title}
									</h4>

									<p
										style={{
											fontSize: "17px",
											lineHeight: "1.8",
											color: "#64748b",
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
					padding: "110px 0",
					background: "#0f172a",
					color: "#ffffff",
				}}
			>
				<div className="container">
					<div className="row align-items-center">

						<div className="col-lg-6">
							<h2
								style={{
									fontSize: "56px",
									fontWeight: "800",
									lineHeight: "1.1",
									marginBottom: "28px",
								}}
							>
								Why choose Messegy cloud hosting?
							</h2>

							<p
								style={{
									fontSize: "19px",
									lineHeight: "1.9",
									color: "#cbd5e1",
								}}
							>
								Traditional self-hosted WhatsApp setups require
								server maintenance, scaling management, API
								monitoring, and engineering resources.
								Messegy removes that complexity with managed
								cloud infrastructure built specifically for
								WhatsApp Business API.
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
									"Automatic scaling",
									"Real-time monitoring",
									"Secure API hosting",
									"Fast onboarding",
									"Developer-friendly APIs",
									"Enterprise reliability",
								].map((item, index) => (
									<div
										key={index}
										style={{
											padding: "24px",
											borderRadius: "22px",
											background:
												"rgba(255,255,255,0.05)",
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

			{/* Use Cases */}
			<section
				style={{
					padding: "110px 0",
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
								fontSize: "52px",
								fontWeight: "800",
								marginBottom: "20px",
							}}
						>
							Built for every business workflow
						</h2>

						<p
							style={{
								fontSize: "19px",
								color: "#64748b",
								maxWidth: "720px",
								margin: "0 auto",
							}}
						>
							Power marketing, support, authentication, sales,
							and operational communication through WhatsApp.
						</p>
					</div>

					<div className="row g-4">

						{[
							"OTP & authentication messages",
							"Order & shipping notifications",
							"Customer support automation",
							"WhatsApp marketing campaigns",
							"Appointment reminders",
							"Lead generation workflows",
						].map((item, index) => (
							<div className="col-lg-4 col-md-6" key={index}>
								<div
									style={{
										padding: "32px",
										borderRadius: "22px",
										background: "#f8fafc",
										fontSize: "20px",
										fontWeight: "700",
										border: "1px solid #eef2f7",
									}}
								>
									{item}
								</div>
							</div>
						))}

					</div>
				</div>
			</section>

			{/* CTA */}
			<section
				style={{
					padding: "120px 0",
					textAlign: "center",
					background:
						"linear-gradient(180deg, #ffffff 0%, #f3fff7 100%)",
				}}
			>
				<div className="container">
					<div
						style={{
							maxWidth: "820px",
							margin: "0 auto",
						}}
					>
						<h2
							style={{
								fontSize: "clamp(3rem, 5vw, 5rem)",
								fontWeight: "800",
								lineHeight: "1.08",
								marginBottom: "24px",
							}}
						>
							Launch WhatsApp Cloud API
							<br />
							in minutes
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								marginBottom: "42px",
							}}
						>
							Get enterprise-grade WhatsApp cloud hosting,
							automation tools, APIs, and team collaboration in
							one powerful platform.
						</p>

						<Link
							href="/contact-us"
							className="sofax-default-btn pill"
						>
							<span className="button-wraper">
								Get Started Today
							</span>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}