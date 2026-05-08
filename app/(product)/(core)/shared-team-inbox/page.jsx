import Link from "next/link";

export default function SharedTeamInboxPage() {
	return (
		<div
			style={{
				background: "#ffffff",
				color: "#111111",
			}}
		>
			{/* Hero */}
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
							Team Collaboration on WhatsApp
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
							Shared Team Inbox
							<br />
							for faster customer support
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
							Collaborate with your sales and support teams from
							one centralized WhatsApp inbox. Assign chats, track
							conversations, manage agents, and respond faster
							using Messegy.
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
								number: "10x",
								label: "Faster response time",
							},
							{
								number: "24/7",
								label: "Team collaboration",
							},
							{
								number: "100%",
								label: "Conversation visibility",
							},
							{
								number: "1 Inbox",
								label: "For all customer chats",
							},
						].map((item, index) => (
							<div className="col-lg-3 col-md-6" key={index}>
								<div
									style={{
										padding: "40px 30px",
										borderRadius: "24px",
										background: "#f8fafc",
										textAlign: "center",
										border: "1px solid #eef2f7",
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
							maxWidth: "760px",
							margin: "0 auto 70px",
							textAlign: "center",
						}}
					>
						<h2
							style={{
								fontSize: "52px",
								fontWeight: "800",
								marginBottom: "22px",
							}}
						>
							Built for modern support & sales teams
						</h2>

						<p
							style={{
								fontSize: "19px",
								lineHeight: "1.8",
								color: "#64748b",
							}}
						>
							Manage thousands of customer conversations with
							clear ownership, internal collaboration, automation,
							and centralized communication workflows.
						</p>
					</div>

					<div className="row g-4">

						{[
							{
								title: "Multi-Agent Collaboration",
								desc: "Allow multiple team members to manage customer conversations together.",
							},
							{
								title: "Assign Conversations",
								desc: "Assign chats to sales or support agents with clear ownership and accountability.",
							},
							{
								title: "Internal Notes",
								desc: "Collaborate privately using internal notes without exposing messages to customers.",
							},
							{
								title: "Real-Time Notifications",
								desc: "Get instant updates when new conversations or replies arrive from customers.",
							},
							{
								title: "Conversation Labels",
								desc: "Organize chats using labels, priorities, tags, and workflow statuses.",
							},
							{
								title: "Complete Chat History",
								desc: "Access full customer conversation history from one centralized dashboard.",
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

			{/* Workflow */}
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
								Keep every conversation organized
							</h2>

							<p
								style={{
									fontSize: "19px",
									lineHeight: "1.9",
									color: "#cbd5e1",
								}}
							>
								Without a shared inbox, teams lose visibility,
								duplicate replies happen, and customers wait
								longer for responses. Messegy centralizes every
								WhatsApp conversation into one collaborative
								workspace.
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
									"Unified inbox",
									"Team permissions",
									"Chat assignments",
									"Live activity tracking",
									"Customer timeline",
									"Smart workflow automation",
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
							Perfect for growing businesses
						</h2>

						<p
							style={{
								fontSize: "19px",
								color: "#64748b",
								maxWidth: "720px",
								margin: "0 auto",
							}}
						>
							Whether you run sales, support, operations, or
							customer success — Messegy keeps your entire team
							connected on WhatsApp.
						</p>
					</div>

					<div className="row g-4">

						{[
							"E-commerce support teams",
							"Sales & lead management",
							"Customer success operations",
							"Healthcare appointment handling",
							"Education inquiry management",
							"Service & ticketing workflows",
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
							One inbox for your
							<br />
							entire team
						</h2>

						<p
							style={{
								fontSize: "20px",
								lineHeight: "1.8",
								color: "#64748b",
								marginBottom: "42px",
							}}
						>
							Improve response times, increase collaboration, and
							scale customer support with Messegy Shared Team
							Inbox.
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