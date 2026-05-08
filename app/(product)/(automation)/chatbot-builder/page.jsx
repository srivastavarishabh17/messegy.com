import Link from "next/link";
import Image from "next/image";
import ContentThumb from "@/public/sharedteaminbox.png";

export default function ChatbotBuilderPage() {
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
							No-Code + Manual Chatbot Builder
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
							Build WhatsApp chatbots
							<br />
							without coding
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
							Create automated WhatsApp workflows using
							drag-and-drop flows or manually configure advanced
							bot logic for customer support, lead generation,
							and sales automation.
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
									Start Building
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

			{/* Visual Builder Section */}
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
						Visual Flow Builder
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
						Build chatbot flows
						<br />
						visually in minutes
					</h2>

					<p
						style={{
							fontSize: "19px",
							lineHeight: "1.9",
							color: "#64748b",
							marginBottom: "35px",
						}}
					>
						Create advanced WhatsApp chatbot workflows using
						a drag-and-drop visual builder. Automate lead
						capture, support, bookings, and customer journeys
						without writing code.
					</p>


					<Link
						href="/contact-us"
						className="sofax-default-btn pill"
					>
						<span className="button-wraper">
							Start Building
						</span>
					</Link>

				</div>

			</div>

		</div>

	</div>
</section>

			{/* Builder Types */}
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
							Two ways to build your chatbot
						</h2>

						<p
							style={{
								fontSize: "19px",
								lineHeight: "1.8",
								color: "#64748b",
							}}
						>
							Choose between a beginner-friendly no-code builder
							or advanced manual chatbot configuration for custom
							workflows and automation.
						</p>

					</div>

					<div className="row g-4">

						{/* No Code */}
						<div className="col-lg-6">
							<div
								style={{
									padding: "50px",
									borderRadius: "32px",
									background: "#f8fafc",
									border: "1px solid #eef2f7",
									height: "100%",
								}}
							>

								<div
									style={{
										width: "72px",
										height: "72px",
										borderRadius: "20px",
										background: "#dcfce7",
										marginBottom: "30px",
									}}
								/>

								<div
									style={{
										display: "inline-block",
										padding: "8px 16px",
										borderRadius: "999px",
										background: "#22c55e",
										color: "#ffffff",
										fontSize: "13px",
										fontWeight: "700",
										marginBottom: "20px",
									}}
								>
									NO-CODE BUILDER
								</div>

								<h3
									style={{
										fontSize: "38px",
										fontWeight: "800",
										marginBottom: "20px",
									}}
								>
									Drag & drop chatbot flows
								</h3>

								<p
									style={{
										fontSize: "18px",
										lineHeight: "1.9",
										color: "#64748b",
										marginBottom: "35px",
									}}
								>
									Build powerful automation workflows without
									writing code. Create conversation paths,
									button replies, lead capture flows, and FAQ
									automation visually.
								</p>

								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "18px",
									}}
								>

									{[
										"Visual flow builder",
										"Quick replies & buttons",
										"Lead generation forms",
										"FAQ automation",
										"Conditional workflows",
										"Beginner friendly setup",
									].map((item, index) => (
										<div
											key={index}
											style={{
												display: "flex",
												alignItems: "center",
												gap: "14px",
												fontSize: "17px",
												fontWeight: "600",
												color: "#111827",
											}}
										>
											<div
												style={{
													width: "10px",
													height: "10px",
													borderRadius: "50%",
													background: "#22c55e",
												}}
											/>
											{item}
										</div>
									))}

								</div>

							</div>
						</div>

						{/* Manual */}
						<div className="col-lg-6">
							<div
								style={{
									padding: "50px",
									borderRadius: "32px",
									background: "#111827",
									color: "#ffffff",
									height: "100%",
								}}
							>

								<div
									style={{
										width: "72px",
										height: "72px",
										borderRadius: "20px",
										background:
											"rgba(255,255,255,0.1)",
										marginBottom: "30px",
									}}
								/>

								<div
									style={{
										display: "inline-block",
										padding: "8px 16px",
										borderRadius: "999px",
										background:
											"rgba(255,255,255,0.1)",
										color: "#ffffff",
										fontSize: "13px",
										fontWeight: "700",
										marginBottom: "20px",
									}}
								>
									MANUAL BUILDER
								</div>

								<h3
									style={{
										fontSize: "38px",
										fontWeight: "800",
										marginBottom: "20px",
										color: "#ffffff",
									}}
								>
									Advanced custom bot logic
								</h3>

								<p
									style={{
										fontSize: "18px",
										lineHeight: "1.9",
										color: "#cbd5e1",
										marginBottom: "35px",
									}}
								>
									Configure advanced automation manually using
									custom triggers, APIs, integrations,
									webhooks, and developer workflows for
									enterprise-grade chatbot experiences.
								</p>

								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "18px",
									}}
								>

									{[
										"Webhook integrations",
										"API-based workflows",
										"Custom event triggers",
										"CRM & database sync",
										"Developer flexibility",
										"Enterprise automation",
									].map((item, index) => (
										<div
											key={index}
											style={{
												display: "flex",
												alignItems: "center",
												gap: "14px",
												fontSize: "17px",
												fontWeight: "600",
											}}
										>
											<div
												style={{
													width: "10px",
													height: "10px",
													borderRadius: "50%",
													background: "#22c55e",
												}}
											/>
											{item}
										</div>
									))}

								</div>

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
							Automate every customer interaction
						</h2>

						<p
							style={{
								fontSize: "19px",
								lineHeight: "1.8",
								color: "#cbd5e1",
							}}
						>
							Build WhatsApp chatbots for customer support,
							lead qualification, bookings, payments, marketing,
							and sales automation.
						</p>

					</div>

					<div className="row g-4">

						{[
							"Lead generation bots",
							"Customer support automation",
							"Appointment booking",
							"Payment reminders",
							"Order tracking workflows",
							"AI-powered conversations",
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
							Create your first
							<br />
							WhatsApp chatbot today
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								marginBottom: "42px",
							}}
						>
							Launch automated conversations, capture leads, and
							scale customer engagement with Messegy Chatbot
							Builder.
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