"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
	FaHome,
	FaLightbulb,
	FaBook,
	FaCog,
	FaSignOutAlt,
	FaPlus,
	FaSearch,
	FaFacebook,
	FaInstagram,
	FaAmazon,
	FaYoutube,
	FaEnvelope,
	FaFileAlt,
	FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";

const categories = [
	"All Templates",
	"Social Media",
	"Digital Ads",
	"SEO",
	"Product Description",
	"Email Writing",
	"Website Copy",
];

const templates = [
	{
		id: 1,
		icon: FaFacebook,
		title: "Facebook Ads",
		description: "Facebook ad copies that make your ads stand out.",
		color: "#3b82f6",
		bgColor: "#dbeafe",
	},
	{
		id: 2,
		icon: FaFileAlt,
		title: "Blog Post Intro Paragraph",
		description: "Entice your audience with captivating blog intros using our AI-powered writing techniques.",
		color: "#6b7280",
		bgColor: "#f3f4f6",
	},
	{
		id: 3,
		icon: FaAmazon,
		title: "Amazon Product Description",
		description: "Description for amazon that ranks first on the first page.",
		color: "#f97316",
		bgColor: "#ffedd5",
	},
	{
		id: 4,
		icon: FaInstagram,
		title: "Instagram Post Captions",
		description: "Captions that grabs everyone's attention and make your posts go viral.",
		color: "#ec4899",
		bgColor: "#fce7f3",
	},
	{
		id: 5,
		icon: FaYoutube,
		title: "Youtube script",
		description: "Create youtube scripts that is engaging for viewers.",
		color: "#ef4444",
		bgColor: "#fee2e2",
	},
	{
		id: 6,
		icon: FaEnvelope,
		title: "Personalized Cold Emails",
		description: "Personalized cold emails that resonate with your target audience.",
		color: "#374151",
		bgColor: "#f3f4f6",
	},
];

const sidebarItems = [
	{ icon: FaHome, label: "Dashboard", active: true },
	{ icon: FaLightbulb, label: "Request Feature" },
	{ icon: FaBook, label: "Guides" },
	{ icon: FaCog, label: "Settings" },
];

export default function DashboardPreview() {
	const [activeCategory, setActiveCategory] = useState("All Templates");
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
			style={{
				width: "100%",
				maxWidth: "1000px",
				margin: "2.5rem auto 0",
				background: "#ffffff",
				borderRadius: "20px",
				boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
				overflow: "hidden",
				border: "1px solid #e5e7eb",
			}}
		>
			<div style={{ display: "flex", minHeight: "500px" }}>
				{/* Sidebar */}
				<div
					style={{
						width: "220px",
						background: "#fafafa",
						padding: "24px 16px",
						borderRight: "1px solid #e5e5e5",
						display: "flex",
						flexDirection: "column",
					}}
				>
					{/* Logo */}
					<div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", paddingLeft: "8px" }}>
						<div
							style={{
								width: "28px",
								height: "28px",
								borderRadius: "6px",
								background: "#22c55e",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5 12L12 5L19 12M12 5V19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
						<span style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>Messegy</span>
					</div>

					{/* New Project Button */}
					<button
						style={{
							width: "100%",
							padding: "12px 16px",
							background: "#d8b4fe",
							border: "none",
							borderRadius: "8px",
							display: "flex",
							alignItems: "center",
							gap: "8px",
							fontSize: "14px",
							fontWeight: "600",
							color: "#1a1a1a",
							cursor: "pointer",
							marginBottom: "20px",
							transition: "all 0.2s ease",
						}}
					>
						<FaPlus size={14} />
						New Project
					</button>

					{/* Sidebar Items */}
					<nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
						{sidebarItems.map((item, index) => (
							<button
								key={index}
								style={{
									width: "100%",
									padding: "12px 16px",
									display: "flex",
									alignItems: "center",
									gap: "12px",
									background: "transparent",
									border: "none",
									borderRadius: "8px",
									fontSize: "14px",
									fontWeight: item.active ? "500" : "400",
									color: item.active ? "#22c55e" : "#9ca3af",
									cursor: "pointer",
									transition: "all 0.2s ease",
								}}
							>
								<item.icon size={18} color={item.active ? "#22c55e" : "#9ca3af"} />
								{item.label}
							</button>
						))}
					</nav>

					{/* Log Out */}
					<button
						style={{
							width: "100%",
							padding: "12px 16px",
							display: "flex",
							alignItems: "center",
							gap: "12px",
							background: "transparent",
							border: "none",
							borderRadius: "8px",
							fontSize: "14px",
							fontWeight: "500",
							color: "#6b7280",
							cursor: "pointer",
							transition: "all 0.2s ease",
						}}
					>
						<FaSignOutAlt size={18} />
						Log Out
					</button>
				</div>

				{/* Main Content */}
				<div style={{ flex: 1, padding: "24px", background: "#ffffff" }}>
					{/* Header */}
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "24px",
						}}
					>
						{/* Search */}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "12px",
								padding: "10px 16px",
								background: "#fafafa",
								borderRadius: "8px",
								border: "1px solid #e5e7eb",
								flex: 1,
								maxWidth: "400px",
							}}
						>
							<FaSearch size={18} color="#9ca3af" />
							<span style={{ fontSize: "13px", color: "#9ca3af", fontWeight: "400" }}>
								What do you want to create
							</span>
						</div>

						{/* Avatar */}
						<div
							style={{
								width: "36px",
								height: "36px",
								borderRadius: "50%",
								background: "#22c55e",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "13px",
								fontWeight: "600",
								color: "#ffffff",
							}}
						>
							JD
						</div>
					</div>

					{/* Title */}
					<h2
						style={{
							fontSize: "20px",
							fontWeight: "700",
							color: "#111827",
							marginBottom: "20px",
						}}
					>
						Choose Template
					</h2>

					{/* Categories */}
					<div
						style={{
							display: "flex",
							gap: "10px",
							marginBottom: "24px",
							flexWrap: "wrap",
						}}
					>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								style={{
									padding: "8px 16px",
									borderRadius: "50px",
									border: activeCategory === category ? "none" : "1px solid #d1d5db",
									background: activeCategory === category ? "#d8b4fe" : "#ffffff",
									fontSize: "12px",
									fontWeight: "500",
									color: activeCategory === category ? "#111827" : "#4b5565",
									cursor: "pointer",
									transition: "all 0.2s ease",
									whiteSpace: "nowrap",
								}}
							>
								{category}
							</button>
						))}
						<div
							style={{
								width: "28px",
								height: "28px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#9ca3af",
							}}
						>
							<FaChevronRight size={14} />
						</div>
					</div>

					{/* Template Grid */}
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gap: "16px",
						}}
					>
						{templates.map((template) => (
							<motion.div
								key={template.id}
								onMouseEnter={() => setHoveredCard(template.id)}
								onMouseLeave={() => setHoveredCard(null)}
								whileHover={{ y: -2, boxShadow: "0 8px 20px -6px rgba(0, 0, 0, 0.1)" }}
								style={{
									padding: "16px",
									background: "#ffffff",
									borderRadius: "12px",
									border: "1px solid #e5e7eb",
									cursor: "pointer",
									transition: "all 0.2s ease",
								}}
							>
								<div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
									<div
										style={{
											width: "40px",
											height: "40px",
											borderRadius: "10px",
											background: template.bgColor,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
										}}
									>
										<template.icon size={24} color={template.color} />
									</div>
									<div>
										<h3
											style={{
												fontSize: "14px",
												fontWeight: "600",
												color: "#1f2937",
												marginBottom: "6px",
												lineHeight: "1.3",
											}}
										>
											{template.title}
										</h3>
										<p
											style={{
												fontSize: "12px",
												color: "#6b7280",
												lineHeight: "1.5",
												margin: 0,
											}}
										>
											{template.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
