"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function WhatsAppButtonGeneratorPage() {
	const [brandName, setBrandName] = useState("Messegy");
	const [brandSubtitle, setBrandSubtitle] = useState("Typically replies instantly");
	const [phone, setPhone] = useState("+919876543210");
	const [buttonText, setButtonText] = useState("Chat with us");
	const [message, setMessage] = useState(
		"Hi, I want to know more about your services."
	);

	const [buttonColor, setButtonColor] = useState("#25D366");
	const [headerColor, setHeaderColor] = useState("#075E54");
	const [position, setPosition] = useState("right");
	const [borderRadius, setBorderRadius] = useState(24);

	const generatedCode = useMemo(() => {
		return `<script src="https://api.messegy.com/widget.js" data-phone="${phone}" data-message="${message}"></script>`;
	}, [phone, message]);

	return (
		<div
			style={{
				background: "#ffffff",
				minHeight: "100vh",
			}}
		>

			{/* Hero */}
			<section
				style={{
					padding: "120px 0 80px",
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
							Free Website Widget Tool
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
							WhatsApp Button
							<br />
							Generator
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
							Create a floating WhatsApp chat button for your
							website with live preview, branding, colors,
							prefilled messages, and instant customer support
							experience.
						</p>

					</div>

				</div>
			</section>

			{/* Generator */}
			<section
				style={{
					paddingBottom: "120px",
				}}
			>
				<div className="container">

					<div className="row g-4">

						{/* Left Config */}
						<div className="col-lg-7">

							<div
								style={{
									padding: "40px",
									borderRadius: "32px",
									background: "#ffffff",
									border: "1px solid #eef2f7",
									boxShadow:
										"0 20px 60px rgba(15,23,42,0.06)",
								}}
							>

								<h3
									style={{
										fontSize: "32px",
										fontWeight: "800",
										marginBottom: "40px",
									}}
								>
									Button Configuration
								</h3>

								<div className="row g-4">

									<div className="col-md-6">
										<label className="mb-2 fw-bold">
											Brand Name
										</label>

										<input
											value={brandName}
											onChange={(e) =>
												setBrandName(
													e.target.value
												)
											}
											className="form-control"
											style={{
												height: "58px",
												borderRadius: "16px",
											}}
										/>
									</div>

									<div className="col-md-6">
										<label className="mb-2 fw-bold">
											Phone Number
										</label>

										<input
											value={phone}
											onChange={(e) =>
												setPhone(
													e.target.value
												)
											}
											className="form-control"
											style={{
												height: "58px",
												borderRadius: "16px",
											}}
										/>
									</div>

									<div className="col-md-12">
										<label className="mb-2 fw-bold">
											Subtitle
										</label>

										<input
											value={brandSubtitle}
											onChange={(e) =>
												setBrandSubtitle(
													e.target.value
												)
											}
											className="form-control"
											style={{
												height: "58px",
												borderRadius: "16px",
											}}
										/>
									</div>

									<div className="col-md-12">
										<label className="mb-2 fw-bold">
											Button Text
										</label>

										<input
											value={buttonText}
											onChange={(e) =>
												setButtonText(
													e.target.value
												)
											}
											className="form-control"
											style={{
												height: "58px",
												borderRadius: "16px",
											}}
										/>
									</div>

									<div className="col-md-12">
										<label className="mb-2 fw-bold">
											Default Message
										</label>

										<textarea
											value={message}
											onChange={(e) =>
												setMessage(
													e.target.value
												)
											}
											className="form-control"
											rows={5}
											style={{
												borderRadius: "16px",
												padding: "18px",
											}}
										/>
									</div>

									<div className="col-md-6">
										<label className="mb-2 fw-bold">
											Button Color
										</label>

										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: "14px",
											}}
										>

											<input
												type="color"
												value={buttonColor}
												onChange={(e) =>
													setButtonColor(
														e.target
															.value
													)
												}
												style={{
													width: "70px",
													height: "58px",
													border: "none",
													background:
														"transparent",
												}}
											/>

											<div
												style={{
													fontWeight: "600",
													color: "#64748b",
												}}
											>
												{buttonColor}
											</div>

										</div>
									</div>

									<div className="col-md-6">
										<label className="mb-2 fw-bold">
											Header Color
										</label>

										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: "14px",
											}}
										>

											<input
												type="color"
												value={headerColor}
												onChange={(e) =>
													setHeaderColor(
														e.target
															.value
													)
												}
												style={{
													width: "70px",
													height: "58px",
													border: "none",
													background:
														"transparent",
												}}
											/>

											<div
												style={{
													fontWeight: "600",
													color: "#64748b",
												}}
											>
												{headerColor}
											</div>

										</div>
									</div>

									<div className="col-md-6">
										<label className="mb-2 fw-bold">
											Button Position
										</label>

										<select
											value={position}
											onChange={(e) =>
												setPosition(
													e.target.value
												)
											}
											className="form-control"
											style={{
												height: "58px",
												borderRadius: "16px",
											}}
										>
											<option value="right">
												Bottom Right
											</option>

											<option value="left">
												Bottom Left
											</option>
										</select>
									</div>

									<div className="col-md-6">
										<label className="mb-2 fw-bold">
											Border Radius
										</label>

										<input
											type="range"
											min="0"
											max="40"
											value={borderRadius}
											onChange={(e) =>
												setBorderRadius(
													e.target.value
												)
											}
											className="form-range"
										/>

										<div
											style={{
												fontSize: "14px",
												color: "#64748b",
											}}
										>
											{borderRadius}px
										</div>
									</div>

								</div>

							</div>

						</div>

						{/* Right Preview */}
						<div className="col-lg-5">

							<div
								style={{
									position: "sticky",
									top: "120px",
								}}
							>

								<div
									style={{
										borderRadius: "32px",
										overflow: "hidden",
										border: "1px solid #eef2f7",
										boxShadow:
											"0 20px 60px rgba(15,23,42,0.06)",
										background: "#ffffff",
									}}
								>

									{/* Browser */}
									<div
										style={{
											padding: "18px 22px",
											borderBottom:
												"1px solid #eef2f7",
											display: "flex",
											alignItems: "center",
											gap: "8px",
										}}
									>

										<div
											style={{
												width: "12px",
												height: "12px",
												borderRadius: "50%",
												background: "#ef4444",
											}}
										/>

										<div
											style={{
												width: "12px",
												height: "12px",
												borderRadius: "50%",
												background: "#f59e0b",
											}}
										/>

										<div
											style={{
												width: "12px",
												height: "12px",
												borderRadius: "50%",
												background: "#22c55e",
											}}
										/>

									</div>

									{/* Preview Area */}
									<div
										style={{
											position: "relative",
											height: "700px",
											background:
												"linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)",
											padding: "30px",
										}}
									>

										<div
											style={{
												position: "absolute",
												bottom: "30px",
												[position]:
													"30px",
												width: "340px",
											}}
										>

											{/* Chat Box */}
											<div
												style={{
													borderRadius:
														"24px",
													overflow:
														"hidden",
													background:
														"#ffffff",
													boxShadow:
														"0 20px 60px rgba(15,23,42,0.16)",
													marginBottom:
														"18px",
												}}
											>

												{/* Header */}
												<div
													style={{
														background:
															headerColor,
														padding:
															"18px",
														color: "#fff",
														display:
															"flex",
														alignItems:
															"center",
														gap: "14px",
													}}
												>

													<div
														style={{
															width: "48px",
															height: "48px",
															borderRadius:
																"50%",
															background:
																"#ffffff33",
														}}
													/>

													<div>
														<div
															style={{
																fontWeight:
																	"700",
																fontSize:
																	"18px",
															}}
														>
															{
																brandName
															}
														</div>

														<div
															style={{
																fontSize:
																	"14px",
																opacity:
																	0.9,
															}}
														>
															{
																brandSubtitle
															}
														</div>
													</div>

												</div>

												{/* Body */}
												<div
													style={{
														padding:
															"22px",
														background:
															"#efeae2",
													}}
												>

													<div
														style={{
															background:
																"#ffffff",
															padding:
																"16px",
															borderRadius:
																"18px",
															fontSize:
																"15px",
															lineHeight:
																"1.8",
															color:
																"#111827",
															boxShadow:
																"0 4px 20px rgba(15,23,42,0.04)",
														}}
													>
														{message}
													</div>

												</div>

											</div>

											{/* Floating Button */}
											<button
												style={{
													height: "64px",
													padding:
														"0 26px",
													borderRadius: `${borderRadius}px`,
													background:
														buttonColor,
													border: "none",
													color: "#fff",
													fontWeight:
														"700",
													fontSize:
														"17px",
													display:
														"flex",
													alignItems:
														"center",
													gap: "14px",
													boxShadow:
														"0 20px 40px rgba(37,211,102,0.3)",
												}}
											>

												<div
													style={{
														width: "36px",
														height: "36px",
														borderRadius:
															"50%",
														background:
															"#ffffff22",
													}}
												/>

												{buttonText}

											</button>

										</div>

									</div>

								</div>

								{/* Embed */}
								<div
									style={{
										marginTop: "24px",
										padding: "28px",
										borderRadius: "24px",
										background: "#111827",
										color: "#fff",
									}}
								>

									<div
										style={{
											fontSize: "20px",
											fontWeight: "700",
											marginBottom: "18px",
										}}
									>
										Embed Code
									</div>

									<div
										style={{
											padding: "18px",
											borderRadius: "16px",
											background:
												"rgba(255,255,255,0.06)",
											fontSize: "14px",
											lineHeight: "1.8",
											wordBreak:
												"break-all",
											color: "#cbd5e1",
											marginBottom: "18px",
										}}
									>
										{generatedCode}
									</div>

									<button
										onClick={() =>
											navigator.clipboard.writeText(
												generatedCode
											)
										}
										className="sofax-default-btn pill"
									>
										<span className="button-wraper">
											Copy Code
										</span>
									</button>

								</div>

							</div>

						</div>

					</div>

				</div>
			</section>

			{/* CTA */}
			<section
				style={{
					padding: "120px 0",
					background:
						"linear-gradient(180deg,#ffffff 0%,#f5fff8 100%)",
					textAlign: "center",
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
								fontSize: "clamp(3rem,5vw,5rem)",
								fontWeight: "800",
								lineHeight: "1.08",
								marginBottom: "24px",
							}}
						>
							Add WhatsApp chat
							<br />
							to your website
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								marginBottom: "42px",
							}}
						>
							Generate floating WhatsApp widgets with
							custom branding, live preview, and instant
							customer communication.
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