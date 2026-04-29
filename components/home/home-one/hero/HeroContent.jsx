"use client";
import { useEffect, useState } from "react";

const headlines = [
	["The #1", "business", "messaging platform"],
	["Automate", "WhatsApp", "conversations"],
	["Convert", "leads", "into customers"],
	["Scale your", "communication", ""],
];

function HeroContent() {
	const [index, setIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);

			setTimeout(() => {
				setIndex((prev) => (prev + 1) % headlines.length);
				setFade(true);
			}, 200);

		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const [before, highlight, after] = headlines[index];

	const highlightStyle = {
		backgroundColor: "#178d72",
		color: "#fff",
		padding: "8px 16px",
		borderRadius: "12px",
		display: "inline-block",
		fontWeight: "700",
		transition: "all 0.3s ease",
		opacity: fade ? 1 : 0,
		transform: fade ? "translateY(0)" : "translateY(6px)",
	};

	return (
		<div className="sofax-hero-content center">
			<h1
				style={{
					fontSize: "64px",
					fontWeight: "700",
					lineHeight: "1.2",
				}}
			>
				{before}{" "}

				<span key={highlight} style={highlightStyle}>
					{highlight}
				</span>

				{" "}{after}
			</h1>

			<p style={{ marginTop: "20px" }}>
				Messegy helps businesses automate WhatsApp conversations,
				capture leads, and grow faster.
			</p>
		</div>
	);
}

export default HeroContent;