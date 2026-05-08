"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";

export default function BlogDetailsPage() {
	const params = useParams();

	const [blog, setBlog] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!params?.slug) return;

		const fetchBlog = async () => {
			try {
				const response = await fetch(
					`https://dashone.blazync.com/api/blogs/${params.slug}`,
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

				setBlog(result.data);
			} catch (error) {
				console.error(
					"Failed to fetch blog:",
					error
				);
			} finally {
				setLoading(false);
			}
		};

		fetchBlog();
	}, [params?.slug]);

	if (loading) {
		return (
			<>
				<Header />

				<div
					style={{
						padding: "220px 0",
						textAlign: "center",
						fontSize: "22px",
						fontWeight: "700",
					}}
				>
					Loading blog...
				</div>

				<Footer />
			</>
		);
	}

	if (!blog) {
		return (
			<>
				<Header />

				<div
					style={{
						padding: "220px 0",
						textAlign: "center",
					}}
				>
					<h2>Blog not found</h2>
				</div>

				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />

			{/* Hero */}
			<section
				style={{
					padding: "140px 0 80px",
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
							{blog.category?.name ||
								"WhatsApp Automation"}
						</div>

						<h1
							style={{
								fontSize:
									"clamp(3rem,6vw,5rem)",
								fontWeight: "800",
								lineHeight: "1.08",
								letterSpacing: "-0.04em",
								color: "#111827",
								marginBottom: "28px",
							}}
						>
							{blog.title}
						</h1>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "16px",
								flexWrap: "wrap",
								color: "#64748b",
								fontSize: "16px",
								fontWeight: "600",
							}}
						>

							<span>
								{new Date(
									blog.published_at ||
									blog.created_at
								).toLocaleDateString(
									"en-US",
									{
										day: "numeric",
										month: "long",
										year: "numeric",
									}
								)}
							</span>

							<div
								style={{
									width: "6px",
									height: "6px",
									borderRadius:
										"50%",
									background:
										"#cbd5e1",
								}}
							/>

							<span>Messegy Team</span>

						</div>

					</div>

				</div>
			</section>

			{/* Featured Image */}
			<section
				style={{
					paddingBottom: "80px",
					background: "#ffffff",
				}}
			>
				<div className="container">

					<div
						style={{
							position: "relative",
							maxWidth: "1200px",
							height: "620px",
							margin: "0 auto",
							borderRadius: "36px",
							overflow: "hidden",
							boxShadow:
								"0 30px 80px rgba(15,23,42,0.08)",
						}}
					>

						<Image
							src={blog.og_image ?? 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop'}
							alt={blog.title}
							fill
							style={{
								objectFit: "cover",
							}}
						/>

					</div>

				</div>
			</section>

			{/* Content */}
			<section
				style={{
					paddingBottom: "120px",
					background: "#ffffff",
				}}
			>
				<div className="container">

					<div
						style={{
							maxWidth: "900px",
							margin: "0 auto",
						}}
					>

						<div
							dangerouslySetInnerHTML={{
								__html: blog.content,
							}}
							style={{
								fontSize: "18px",
								lineHeight: "2",
								color: "#374151",
							}}
						/>

						{/* CTA */}
						<div
							style={{
								padding: "50px",
								borderRadius: "36px",
								background: "#111827",
								color: "#ffffff",
								marginTop: "70px",
							}}
						>

							<h3
								style={{
									fontSize: "38px",
									fontWeight: "800",
									lineHeight: "1.2",
									marginBottom: "20px",
									color: "#fff",
								}}
							>
								Ready to automate your customer conversations?
							</h3>

							<p
								style={{
									fontSize: "18px",
									lineHeight: "1.9",
									color: "#fff",
									marginBottom:
										"34px",
									maxWidth: "700px",
								}}
							>
								Start building WhatsApp
								automation workflows,
								AI replies, and
								marketing campaigns with
								Messegy.
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

				</div>
			</section>

			<Footer />
		</>
	);
}