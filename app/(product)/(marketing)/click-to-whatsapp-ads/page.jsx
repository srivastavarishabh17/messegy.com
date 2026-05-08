import Link from "next/link";

export default function ClickToWhatsAppAdsPage() {
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
						"linear-gradient(180deg, #f6fff8 0%, #ffffff 100%)",
				}}
			>
				<div className="container">

					<div
						style={{
							maxWidth: "920px",
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
							Meta Ads + WhatsApp Conversations
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
							Turn Meta ads into
							<br />
							real WhatsApp leads
						</h1>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								maxWidth: "760px",
								margin: "0 auto",
							}}
						>
							Run Click-to-WhatsApp ads on Facebook and Instagram
							to instantly start customer conversations, capture
							qualified leads, and increase conversions with
							Messegy.
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
									Start Running Ads
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

					<div className="row g-4">

						{[
							{
								title: "Instant WhatsApp Conversations",
								desc: "Convert ad clicks directly into WhatsApp chats with your sales or support team.",
							},
							{
								title: "Lead Qualification Automation",
								desc: "Automatically ask questions, capture details, and qualify leads using workflows.",
							},
							{
								title: "Facebook & Instagram Ads",
								desc: "Run Click-to-WhatsApp campaigns across Meta platforms from one connected flow.",
							},
							{
								title: "CRM & Lead Tracking",
								desc: "Track conversations, customer journeys, and campaign-generated leads in one place.",
							},
							{
								title: "Automated Follow-Ups",
								desc: "Send reminders, offers, and follow-up messages automatically after conversations.",
							},
							{
								title: "Campaign Analytics",
								desc: "Measure conversions, response rates, ad performance, and WhatsApp engagement.",
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
											fontSize: "24px",
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
							Convert ad traffic
							<br />
							into customer conversations
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								marginBottom: "42px",
							}}
						>
							Generate high-intent WhatsApp leads from Facebook
							and Instagram ads using Messegy Click-to-WhatsApp
							solutions.
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