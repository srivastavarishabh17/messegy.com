"use client";

import { useState } from "react";

export default function WhatsAppLinkGenerator() {
	const [activeTab, setActiveTab] = useState("basic");

	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [groupLink, setGroupLink] = useState("");
	const [generatedLink, setGeneratedLink] = useState("");

	const generateBasicLink = () => {
		if (!phone) return;

		const cleanPhone = phone.replace(/\D/g, "");
		setGeneratedLink(`https://wa.me/${cleanPhone}`);
	};

	const generateMessageLink = () => {
		if (!phone) return;

		const cleanPhone = phone.replace(/\D/g, "");
		const encodedMessage = encodeURIComponent(message);

		setGeneratedLink(
			`https://wa.me/${cleanPhone}?text=${encodedMessage}`
		);
	};

	const generateGroupLink = () => {
		setGeneratedLink(groupLink);
	};

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
						"linear-gradient(180deg, #f5fff8 0%, #ffffff 100%)",
				}}
			>
				<div className="container">

					<div
						style={{
							maxWidth: "860px",
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
							Free WhatsApp Tool
						</div>

						<h1
							style={{
								fontSize: "clamp(3rem, 6vw, 5.2rem)",
								fontWeight: "800",
								lineHeight: "1.05",
								letterSpacing: "-0.04em",
								marginBottom: "24px",
								color: "#111827",
							}}
						>
							WhatsApp Link
							<br />
							Generator
						</h1>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								maxWidth: "720px",
								margin: "0 auto",
							}}
						>
							Create click-to-chat WhatsApp links with
							prefilled messages for marketing campaigns,
							customer support, websites, and social media.
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

					<div
						style={{
							maxWidth: "1100px",
							margin: "0 auto",
							background: "#ffffff",
							borderRadius: "32px",
							padding: "50px",
							border: "1px solid #eef2f7",
							boxShadow:
								"0 20px 80px rgba(15,23,42,0.06)",
						}}
					>

						{/* Tabs */}
						<div
							style={{
								display: "flex",
								gap: "16px",
								marginBottom: "50px",
								flexWrap: "wrap",
							}}
						>

							{[
								{
									key: "basic",
									label: "Basic Link",
								},
								{
									key: "message",
									label: "Prefilled Message",
								},
								{
									key: "group",
									label: "Group Link",
								},
							].map((tab) => (
								<button
									key={tab.key}
									onClick={() => {
										setActiveTab(tab.key);
										setGeneratedLink("");
									}}
									style={{
										height: "54px",
										padding: "0 24px",
										borderRadius: "14px",
										border:
											activeTab === tab.key
												? "1px solid #bbf7d0"
												: "1px solid #e5e7eb",
										background:
											activeTab === tab.key
												? "#f0fdf4"
												: "#ffffff",
										color:
											activeTab === tab.key
												? "#166534"
												: "#64748b",
										fontWeight: "700",
										fontSize: "16px",
										cursor: "pointer",
										transition: "0.2s",
									}}
								>
									{tab.label}
								</button>
							))}

						</div>

						{/* Basic */}
						{activeTab === "basic" && (
							<div>

								<div style={{ marginBottom: "30px" }}>
									<label
										style={{
											display: "block",
											fontSize: "16px",
											fontWeight: "700",
											marginBottom: "14px",
											color: "#111827",
										}}
									>
										Phone Number
									</label>

									<div
										style={{
											display: "flex",
											gap: "14px",
											flexWrap: "wrap",
										}}
									>

										<select
											style={{
												height: "64px",
												padding: "0 18px",
												borderRadius: "16px",
												border:
													"1px solid #e5e7eb",
												fontSize: "17px",
												minWidth: "180px",
												outline: "none",
											}}
										>
											<option>India (+91)</option>
											<option>USA (+1)</option>
											<option>UAE (+971)</option>
										</select>

										<input
											type="text"
											placeholder="Enter phone number with country code"
											value={phone}
											onChange={(e) =>
												setPhone(e.target.value)
											}
											style={{
												flex: "1",
												height: "64px",
												padding: "0 22px",
												borderRadius: "16px",
												border:
													"1px solid #e5e7eb",
												fontSize: "17px",
												outline: "none",
												minWidth: "250px",
											}}
										/>

									</div>
								</div>

								<button
									onClick={generateBasicLink}
									style={{
										width: "100%",
										height: "68px",
										borderRadius: "18px",
										border: "none",
										background: "#22c55e",
										color: "#ffffff",
										fontSize: "20px",
										fontWeight: "700",
										cursor: "pointer",
									}}
								>
									Generate WhatsApp Link
								</button>

							</div>
						)}

						{/* Prefilled */}
						{activeTab === "message" && (
							<div>

								<div style={{ marginBottom: "24px" }}>
									<label
										style={{
											display: "block",
											fontSize: "16px",
											fontWeight: "700",
											marginBottom: "14px",
										}}
									>
										Phone Number
									</label>

									<div
										style={{
											display: "flex",
											gap: "14px",
											flexWrap: "wrap",
										}}
									>

										<select
											style={{
												height: "64px",
												padding: "0 18px",
												borderRadius: "16px",
												border:
													"1px solid #e5e7eb",
												fontSize: "17px",
												minWidth: "180px",
											}}
										>
											<option>India (+91)</option>
										</select>

										<input
											type="text"
											placeholder="Enter phone number"
											value={phone}
											onChange={(e) =>
												setPhone(e.target.value)
											}
											style={{
												flex: "1",
												height: "64px",
												padding: "0 22px",
												borderRadius: "16px",
												border:
													"1px solid #e5e7eb",
												fontSize: "17px",
											}}
										/>

									</div>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<label
										style={{
											display: "block",
											fontSize: "16px",
											fontWeight: "700",
											marginBottom: "14px",
										}}
									>
										Prefilled Message
									</label>

									<textarea
										placeholder="Hi, I want to know more about your services..."
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
										style={{
											width: "100%",
											height: "180px",
											padding: "22px",
											borderRadius: "16px",
											border:
												"1px solid #e5e7eb",
											fontSize: "17px",
											resize: "none",
											outline: "none",
										}}
									/>
								</div>

								<button
									onClick={generateMessageLink}
									style={{
										width: "100%",
										height: "68px",
										borderRadius: "18px",
										border: "none",
										background: "#22c55e",
										color: "#ffffff",
										fontSize: "20px",
										fontWeight: "700",
										cursor: "pointer",
									}}
								>
									Generate WhatsApp Link
								</button>

							</div>
						)}

						{/* Group */}
						{activeTab === "group" && (
							<div>

								<div style={{ marginBottom: "30px" }}>
									<label
										style={{
											display: "block",
											fontSize: "16px",
											fontWeight: "700",
											marginBottom: "14px",
										}}
									>
										Group Invite Link
									</label>

									<input
										type="text"
										placeholder="https://chat.whatsapp.com/..."
										value={groupLink}
										onChange={(e) =>
											setGroupLink(
												e.target.value
											)
										}
										style={{
											width: "100%",
											height: "64px",
											padding: "0 22px",
											borderRadius: "16px",
											border:
												"1px solid #e5e7eb",
											fontSize: "17px",
											outline: "none",
										}}
									/>

									<p
										style={{
											marginTop: "14px",
											fontSize: "15px",
											color: "#64748b",
										}}
									>
										Get this link from your WhatsApp
										group settings.
									</p>
								</div>

								<button
									onClick={generateGroupLink}
									style={{
										width: "100%",
										height: "68px",
										borderRadius: "18px",
										border: "none",
										background: "#22c55e",
										color: "#ffffff",
										fontSize: "20px",
										fontWeight: "700",
										cursor: "pointer",
									}}
								>
									Generate Group Link
								</button>

							</div>
						)}

						{/* Output */}
						{generatedLink && (
							<div
								style={{
									marginTop: "40px",
									padding: "30px",
									borderRadius: "22px",
									background: "#f0fdf4",
									border: "1px solid #bbf7d0",
								}}
							>

								<div
									style={{
										display: "flex",
										justifyContent:
											"space-between",
										alignItems: "center",
										gap: "20px",
										flexWrap: "wrap",
									}}
								>

									<div style={{ flex: 1 }}>
										<h4
											style={{
												fontSize: "18px",
												fontWeight: "700",
												marginBottom: "12px",
												color: "#166534",
											}}
										>
											Generated Link
										</h4>

										<div
											style={{
												wordBreak:
													"break-all",
												fontSize: "16px",
												color: "#166534",
												lineHeight: "1.8",
											}}
										>
											{generatedLink}
										</div>
									</div>

									<div
										style={{
											display: "flex",
											gap: "12px",
											flexWrap: "wrap",
										}}
									>

										<button
											onClick={() =>
												navigator.clipboard.writeText(
													generatedLink
												)
											}
											style={{
												height: "52px",
												padding:
													"0 22px",
												borderRadius:
													"14px",
												border: "none",
												background:
													"#111827",
												color: "#fff",
												fontWeight:
													"600",
												cursor:
													"pointer",
											}}
										>
											Copy Link
										</button>

										<a
											href={generatedLink}
											target="_blank"
											rel="noreferrer"
											style={{
												height: "52px",
												padding:
													"0 22px",
												borderRadius:
													"14px",
												background:
													"#22c55e",
												color: "#fff",
												fontWeight:
													"600",
												display:
													"flex",
												alignItems:
													"center",
												textDecoration:
													"none",
											}}
										>
											Open Link
										</a>

									</div>

								</div>

							</div>
						)}

					</div>

				</div>
			</section>

		</div>
	);
}