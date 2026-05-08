"use client";

import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import Link from "next/link";

export default function DocumentationPage() {
	return (
		<>
			<Header />

			<section
				style={{
					padding: "160px 0 120px",
					background:
						"linear-gradient(180deg,#f5fff8 0%,#ffffff 100%)",
					position: "relative",
					overflow: "hidden",
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

						{/* Badge */}
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
								marginBottom: "28px",
							}}
						>
							Developer Documentation
						</div>

						{/* Heading */}
						<h1
							style={{
								fontSize: "clamp(3.5rem,7vw,6rem)",
								fontWeight: "800",
								lineHeight: "1.05",
								letterSpacing: "-0.04em",
								color: "#111827",
								marginBottom: "28px",
							}}
						>
							Build faster with
							<br />
							Messegy APIs &
							automation tools
						</h1>

						{/* Description */}
						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.9",
								color: "#64748b",
								maxWidth: "760px",
								margin: "0 auto 50px",
							}}
						>
							Explore guides, APIs, webhooks, chatbot
							workflows, integrations, authentication,
							and developer tools to build powerful
							WhatsApp automation experiences using
							Messegy.
						</p>

						{/* Buttons */}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "18px",
								flexWrap: "wrap",
							}}
						>

							<Link
								href="https://docs.messegy.com"
								target="_blank"
								className="sofax-default-btn pill"
							>
								<span className="button-wraper">
									Open Documentation
								</span>
							</Link>

							<Link
								href="https://docs.messegy.com"
								target="_blank"
								style={{
									height: "62px",
									padding: "0 28px",
									borderRadius: "18px",
									border:
										"1px solid #dbe4ee",
									display: "inline-flex",
									alignItems: "center",
									justifyContent:
										"center",
									fontWeight: "700",
									fontSize: "16px",
									color: "#111827",
									textDecoration:
										"none",
									background:
										"#ffffff",
								}}
							>
								View API Reference
							</Link>

						</div>

					</div>

					{/* Preview Card */}
					<div
						style={{
							marginTop: "90px",
							background: "#ffffff",
							borderRadius: "36px",
							border: "1px solid #eef2f7",
							boxShadow:
								"0 30px 80px rgba(15,23,42,0.06)",
							overflow: "hidden",
							maxWidth: "1200px",
							marginInline: "auto",
						}}
					>

						{/* Browser Top */}
						<div
							style={{
								height: "72px",
								borderBottom:
									"1px solid #eef2f7",
								display: "flex",
								alignItems: "center",
								padding: "0 28px",
								background: "#f8fafc",
							}}
						>

							<div
								style={{
									display: "flex",
									gap: "10px",
									marginRight: "20px",
								}}
							>

								<div
									style={{
										width: "12px",
										height: "12px",
										borderRadius:
											"50%",
										background:
											"#ef4444",
									}}
								/>

								<div
									style={{
										width: "12px",
										height: "12px",
										borderRadius:
											"50%",
										background:
											"#f59e0b",
									}}
								/>

								<div
									style={{
										width: "12px",
										height: "12px",
										borderRadius:
											"50%",
										background:
											"#22c55e",
									}}
								/>

							</div>

							<div
								style={{
									flex: 1,
									height: "44px",
									borderRadius: "12px",
									background: "#ffffff",
									border:
										"1px solid #e2e8f0",
									display: "flex",
									alignItems: "center",
									padding: "0 18px",
									fontSize: "15px",
									fontWeight: "600",
									color: "#64748b",
								}}
							>
								https://docs.messegy.com
							</div>

						</div>

						{/* Iframe */}
						<div
							style={{
								position: "relative",
								width: "100%",
								height: "780px",
							}}
						>

							<iframe
								src="https://docs.messegy.com/"
								title="Messegy Documentation"
								style={{
									width: "100%",
									height: "100%",
									border: "none",
									background: "#fff",
								}}
							/>

						</div>

					</div>

				</div>
			</section>

			<Footer />
		</>
	);
}