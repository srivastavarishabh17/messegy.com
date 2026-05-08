import Link from "next/link";

export default function CampaignsBroadcastPage() {
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
						"linear-gradient(180deg, #f5fff8 0%, #ffffff 100%)",
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
							WhatsApp Marketing & Engagement
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
							Run powerful
							<br />
							WhatsApp campaigns
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
							Send personalized broadcasts, promotional offers,
							product updates, reminders, and customer engagement
							campaigns directly on WhatsApp using Messegy.
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
									Start Campaign
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
								title: "Bulk Broadcast Messaging",
								desc: "Send campaigns to thousands of customers instantly using approved WhatsApp templates.",
							},
							{
								title: "Advanced Personalization",
								desc: "Personalize messages with customer names, order details, offers, and dynamic variables.",
							},
							{
								title: "Campaign Analytics",
								desc: "Track delivery rates, opens, clicks, responses, and campaign engagement in real time.",
							},
							{
								title: "Audience Segmentation",
								desc: "Create customer segments based on activity, tags, interests, or purchase history.",
							},
							{
								title: "Click-to-WhatsApp Ads",
								desc: "Convert Meta and Instagram ads directly into WhatsApp conversations and leads.",
							},
							{
								title: "Automated Follow-Ups",
								desc: "Trigger reminder messages, offers, and re-engagement campaigns automatically.",
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
							Reach customers
							<br />
							where they respond fastest
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								marginBottom: "42px",
							}}
						>
							Increase engagement, boost conversions, and run
							high-performing WhatsApp marketing campaigns with
							Messegy.
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