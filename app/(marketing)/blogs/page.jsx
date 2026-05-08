"use client";

import { useEffect, useState } from "react";

import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";
import BlogCard from "@/components/home/home-one/blog/BlogCard";

export default function BlogsPage() {
	const [blogsData, setBlogsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await fetch(
					"https://dashone.blazync.com/api/blogs",
					{
						method: "GET",
						headers: {
							Authorization:
								"Bearer ccefd722bacf04dfdaca1cf7867c7986d9888c367ba6bc33125bb7702ebe77e0",
							"X-Workspace":
								"3zOFJUDDlLGp",
							"Content-Type":
								"application/json",
						},
					}
				);

				const result = await response.json();

				console.log(result);

				setBlogsData(result.data || []);
			} catch (error) {
				console.error(
					"Failed to fetch blogs:",
					error
				);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogs();
	}, []);

	return (
		<>
			<Header />

			<section
				className="section sofax-section-padding"
				style={{
					background: "#f8fafc",
					position: "relative",
					overflow: "hidden",
					paddingTop: "140px",
					paddingBottom: "120px",
				}}
			>
				<div className="container">

					{/* Heading */}
					<div
						style={{
							textAlign: "center",
							maxWidth: "820px",
							margin: "0 auto 70px",
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
							Latest Insights & Updates
						</div>

						<h2
							style={{
								fontSize: "clamp(3rem,5vw,4.8rem)",
								fontWeight: "800",
								lineHeight: "1.08",
								letterSpacing: "-0.03em",
								color: "#111827",
								marginBottom: "22px",
							}}
						>
							The latest news &
							<br />
							WhatsApp growth strategies
						</h2>

						<p
							style={{
								fontSize: "19px",
								lineHeight: "1.9",
								color: "#64748b",
								maxWidth: "720px",
								margin: "0 auto",
							}}
						>
							Explore insights on WhatsApp automation,
							customer engagement, AI chatbots, CRM
							workflows, and business communication trends.
						</p>

					</div>

					{/* Loading */}
					{loading ? (
						<div
							style={{
								textAlign: "center",
								fontSize: "20px",
								fontWeight: "600",
								color: "#64748b",
							}}
						>
							Loading blogs...
						</div>
					) : (
						<div className="row g-4">

							{blogsData.map((blog, index) => (
								<div
									className="col-lg-4 col-md-6"
									key={
										blog.id ||
										index
									}
								>
									<BlogCard
										blog={{
											title:
												blog.title,

											category:
												blog.category
													?.name ||
												"WhatsApp Automation",

											date: new Date(
												blog.published_at ||
												blog.created_at
											).toLocaleDateString(
												"en-US",
												{
													day: "numeric",
													month: "long",
													year: "numeric",
												}
											),

											image:
												blog.og_image,

											slug:
												blog.slug,
										}}
										index={index}
									/>
								</div>
							))}

						</div>
					)}

				</div>
			</section>

			<Footer />
		</>
	);
}