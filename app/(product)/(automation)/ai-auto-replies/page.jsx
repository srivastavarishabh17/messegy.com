import Link from "next/link";
import Image from "next/image";

import ContentThumb from "@/public/sharedteaminbox.png";

export default function SmartAIAutoRepliesPage() {
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
							AI-Powered WhatsApp Automation
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
							Smart AI Based
							<br />
							Auto Replies
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
							Automatically respond to customer questions,
							capture leads, answer FAQs, and engage customers
							using AI-powered WhatsApp auto replies built for
							sales and support teams.
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
									Start Automating
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

			{/* AI Replies Section */}
	
<section
	style={{
		padding: "120px 0",
		background: "#ffffff",
	}}
>
	<div className="container">

		<div className="row align-items-center">

			{/* Left Image */}
			<div className="col-lg-6">
				<div
					style={{
						position: "relative",
					}}
				>
					<Image
						src={ContentThumb}
						alt="Chatbot Builder"
						style={{
							borderRadius: "28px",
							boxShadow:
								"0 20px 60px rgba(15,23,42,0.08)",
						}}
					/>
				</div>
			</div>

			{/* Right Content */}
			<div className="col-lg-6">

				<div
					style={{
						paddingLeft: "30px",
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
						AI Conversation Engine
					</div>

					<h2
						style={{
							fontSize: "54px",
							fontWeight: "800",
							lineHeight: "1.08",
							marginBottom: "24px",
							letterSpacing: "-0.03em",
						}}
					>
						Respond instantly
using AI automation
					</h2>

					<p
						style={{
							fontSize: "19px",
							lineHeight: "1.9",
							color: "#64748b",
							marginBottom: "35px",
						}}
					>
						Reduce response times and automate customer communication with AI-powered replies that understand intent, answer questions, and route conversations intelligently.
					</p>


					<Link
						href="/contact-us"
						className="sofax-default-btn pill"
					>
						<span className="button-wraper">
							Try AI Replies
						</span>
					</Link>

				</div>

			</div>

		</div>

	</div>
</section>
			{/* Features */}
			<section
				style={{
					padding: "110px 0",
					background: "#0f172a",
					color: "#ffffff",
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
								color: "#ffffff",
							}}
						>
							AI automation built for customer engagement
						</h2>

						<p
							style={{
								fontSize: "19px",
								lineHeight: "1.8",
								color: "#cbd5e1",
							}}
						>
							Handle repetitive conversations automatically while
							your team focuses on high-value customer
							interactions.
						</p>

					</div>

					<div className="row g-4">

						{[
							"24/7 automated replies",
							"Lead capture automation",
							"Intent-based responses",
							"Multi-language support",
							"AI training workflows",
							"Human handoff support",
						].map((item, index) => (
							<div className="col-lg-4 col-md-6" key={index}>
								<div
									style={{
										padding: "32px",
										borderRadius: "24px",
										background:
											"rgba(255,255,255,0.05)",
										border:
											"1px solid rgba(255,255,255,0.08)",
										fontSize: "20px",
										fontWeight: "700",
										textAlign: "center",
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
						"linear-gradient(180deg, #ffffff 0%, #f5fff8 100%)",
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
							Automate replies
							<br />
							at scale with AI
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								marginBottom: "42px",
							}}
						>
							Improve response speed, customer experience, and
							lead conversion using Messegy Smart AI Based Auto
							Replies.
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