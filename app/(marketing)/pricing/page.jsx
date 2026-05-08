"use client";

import { useEffect, useState } from "react";
import BreadCrumb from "@/components/common/Breadcrumb";

export default function PricingPage() {
	const [billing, setBilling] = useState("monthly");
	const [plans, setPlans] = useState([]);
	const [enterprise, setEnterprise] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPlans = async () => {
			try {
				const res = await fetch(
					"https://api.messegy.com/api/plans"
				);

				const data = await res.json();

				setPlans(data.plans || []);
				setEnterprise(data.enterprise || null);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPlans();
	}, []);

	return (
		<div
			style={{
				background: "#ffffff",
			}}
		>
{/* 
			<BreadCrumb title="Pricing" /> */}

			{/* Hero */}
			<section
				style={{
					padding: "100px 0 60px",
					background:
						"linear-gradient(180deg,#f5fff8 0%,#ffffff 100%)",
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
							Simple & Transparent Pricing
						</div>

						<h1
							style={{
								fontSize: "clamp(3rem,6vw,5.2rem)",
								fontWeight: "800",
								lineHeight: "1.05",
								letterSpacing: "-0.04em",
								marginBottom: "24px",
								color: "#111827",
							}}
						>
							Pricing built for
							<br />
							growing businesses
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
							Start with a flexible plan and scale your
							WhatsApp marketing, automation, CRM, and
							customer support workflows with Messegy.
						</p>

						{/* Toggle */}
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "40px",
							}}
						>

							<div
								style={{
									background: "#f8fafc",
									padding: "8px",
									borderRadius: "16px",
									display: "flex",
									gap: "8px",
									border: "1px solid #eef2f7",
								}}
							>

								<button
									onClick={() =>
										setBilling("monthly")
									}
									style={{
										height: "52px",
										padding: "0 24px",
										borderRadius: "12px",
										border: "none",
										background:
											billing === "monthly"
												? "#22c55e"
												: "transparent",
										color:
											billing === "monthly"
												? "#fff"
												: "#64748b",
										fontWeight: "700",
										cursor: "pointer",
									}}
								>
									Monthly
								</button>

								<button
									onClick={() =>
										setBilling("yearly")
									}
									style={{
										height: "52px",
										padding: "0 24px",
										borderRadius: "12px",
										border: "none",
										background:
											billing === "yearly"
												? "#22c55e"
												: "transparent",
										color:
											billing === "yearly"
												? "#fff"
												: "#64748b",
										fontWeight: "700",
										cursor: "pointer",
									}}
								>
									Yearly
								</button>

							</div>

						</div>

					</div>

				</div>
			</section>

			{/* Pricing Cards */}
			<section
				style={{
					padding: "40px 0 120px",
				}}
			>
				<div className="container">

					{loading ? (
						<div
							style={{
								textAlign: "center",
								fontSize: "20px",
								fontWeight: "600",
								color: "#64748b",
							}}
						>
							Loading pricing plans...
						</div>
					) : (
						<div className="row g-4 justify-content-center">

							{plans.map((plan, index) => (
								<div
									className="col-lg-4 col-md-6"
									key={plan.id}
								>

									<div
										style={{
											height: "100%",
											padding: "42px",
											borderRadius: "32px",
											background:
												index === 1
													? "#111827"
													: "#ffffff",
											color:
												index === 1
													? "#ffffff"
													: "#111827",
											border:
												index === 1
													? "none"
													: "1px solid #eef2f7",
											boxShadow:
												"0 20px 60px rgba(15,23,42,0.06)",
											position: "relative",
											overflow: "hidden",
										}}
									>

										{index === 1 && (
											<div
												style={{
													position:
														"absolute",
													top: "24px",
													right: "24px",
													padding:
														"8px 14px",
													borderRadius:
														"999px",
													background:
														"#22c55e",
													fontSize:
														"13px",
													fontWeight:
														"700",
													color: "#fff",
												}}
											>
												POPULAR
											</div>
										)}

										<div
											style={{
												fontSize: "18px",
												fontWeight: "700",
												marginBottom:
													"18px",
											}}
										>
											{plan.name}
										</div>

										<div
											style={{
												display: "flex",
												alignItems:
													"flex-end",
												gap: "8px",
												marginBottom:
													"18px",
											}}
										>

											<h2
												style={{
													fontSize:
														"64px",
													fontWeight:
														"800",
													lineHeight:
														"1",
													marginBottom:
														"0",
                            color:
														"#22c55e",
												}}
											>
												₹
												{billing ===
												"monthly"
													? plan.price
													: plan.yearly_price}
											</h2>

											<div
												style={{
													fontSize:
														"16px",
													marginBottom:
														"10px",
													color:
														index ===
														1
															? "#cbd5e1"
															: "#64748b",
												}}
											>
												/
												{billing ===
												"monthly"
													? "month"
													: "year"}
											</div>

										</div>

										<p
											style={{
												fontSize: "17px",
												lineHeight:
													"1.8",
												color:
													index === 1
														? "#cbd5e1"
														: "#64748b",
												marginBottom:
													"36px",
											}}
										>
											{plan.features[0]}
										</p>

										<button
											style={{
												width: "100%",
												height: "60px",
												borderRadius:
													"18px",
												border: "none",
												background:
													index === 1
														? "#22c55e"
														: "#111827",
												color: "#ffffff",
												fontWeight:
													"700",
												fontSize:
													"17px",
												marginBottom:
													"40px",
												cursor:
													"pointer",
											}}
										>
											Get Started
										</button>

										<div
											style={{
												display: "flex",
												flexDirection:
													"column",
												gap: "18px",
											}}
										>

										{plan.features
	.slice(1)
	.map((feature, i) => {
		const isNegative =
			feature.includes("❌") ||
			feature.toLowerCase().includes("not included");

		return (
			<div
				key={i}
				style={{
					display: "flex",
					alignItems: "flex-start",
					gap: "14px",
					fontSize: "16px",
					lineHeight: "1.7",
					color:
						index === 1
							? isNegative
								? "#64748b"
								: "#e2e8f0"
							: isNegative
							? "#9ca3af"
							: "#374151",
					opacity: isNegative ? 0.75 : 1,
				}}
			>

				{/* Icon */}
				<div
					style={{
						width: "22px",
						height: "22px",
						borderRadius: "50%",
						background: isNegative
							? "rgba(239,68,68,0.12)"
							: "rgba(34,197,94,0.12)",
						color: isNegative
							? "#ef4444"
							: "#22c55e",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "12px",
						fontWeight: "800",
						marginTop: "2px",
						flexShrink: 0,
					}}
				>
					{isNegative ? "✕" : "✓"}
				</div>

				{/* Feature Text */}
				<div>
					{feature.replace("❌", "").trim()}
				</div>

			</div>
		);
	})}

										</div>

									</div>

								</div>
							))}

							{/* Enterprise */}
							{enterprise && (
								<div className="col-lg-4 col-md-6">

									<div
										style={{
											height: "100%",
											padding: "42px",
											borderRadius: "32px",
											background:
												"linear-gradient(180deg,#052e16 0%,#111827 100%)",
											color: "#ffffff",
											boxShadow:
												"0 20px 60px rgba(15,23,42,0.08)",
										}}
									>

										<div
											style={{
												fontSize: "18px",
												fontWeight: "700",
												marginBottom:
													"18px",
											}}
										>
											{
												enterprise.name
											}
										</div>

										<h2
											style={{
												fontSize: "58px",
												fontWeight: "800",
												lineHeight:
													"1.1",
												marginBottom:
													"18px",
                        color:
														"#22c55e",
											}}
										>
											Custom
										</h2>

										<p
											style={{
												fontSize: "17px",
												lineHeight:
													"1.8",
												color: "#cbd5e1",
												marginBottom:
													"36px",
											}}
										>
                    
											Custom pricing for
											large businesses,
											enterprises, and
											high-volume
											operations.
										</p>

										<button
											style={{
												width: "100%",
												height: "60px",
												borderRadius:
													"18px",
												border: "none",
												background:
													"#22c55e",
												color: "#ffffff",
												fontWeight:
													"700",
												fontSize:
													"17px",
												marginBottom:
													"40px",
												cursor:
													"pointer",
											}}
										>
											Contact Sales
										</button>

										<div
											style={{
												display: "flex",
												flexDirection:
													"column",
												gap: "18px",
											}}
										>

											<div
	style={{
		display: "flex",
		flexDirection: "column",
		gap: "18px",
	}}
>

	{/* Custom Point */}
	<div
		style={{
			display: "flex",
			alignItems: "flex-start",
			gap: "14px",
			fontSize: "16px",
			lineHeight: "1.7",
			color: "#e2e8f0",
		}}
	>

		<div
			style={{
				width: "22px",
				height: "22px",
				borderRadius: "50%",
				background: "rgba(34,197,94,0.12)",
				color: "#22c55e",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "12px",
				fontWeight: "800",
				marginTop: "2px",
				flexShrink: 0,
			}}
		>
			✓
		</div>

		<div>
			Includes everything in Premium
		</div>

	</div>

	{/* Enterprise Features */}
	{enterprise.features.map((feature, i) => (
		<div
			key={i}
			style={{
				display: "flex",
				alignItems: "flex-start",
				gap: "14px",
				fontSize: "16px",
				lineHeight: "1.7",
				color: "#e2e8f0",
			}}
		>

			<div
				style={{
					width: "22px",
					height: "22px",
					borderRadius: "50%",
					background: "rgba(34,197,94,0.12)",
					color: "#22c55e",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "12px",
					fontWeight: "800",
					marginTop: "2px",
					flexShrink: 0,
				}}
			>
				✓
			</div>

			<div>{feature}</div>

		</div>
	))}

</div>
										</div>

									</div>

								</div>
							)}

						</div>
					)}

				</div>
			</section>

		</div>
	);
}