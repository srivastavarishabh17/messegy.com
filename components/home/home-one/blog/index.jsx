"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Shape12 from "@/public/images/v4/shape12.png";

function Blog() {
	const [blogsData, setBlogsData] = useState([]);
	const [loading, setLoading] = useState(true);
const fallbackImage =
	"https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop";
	useEffect(() => {

		const fetchBlogs = async () => {

			try {

				const response = await fetch(
					"https://dashone.blazync.com/api/blogs?per_page=3",
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
						cache: "no-store",
					}
				);

				if (!response.ok) {
					throw new Error(
						"Failed to fetch blogs"
					);
				}

				const result =
					await response.json();

				console.log(result);

				setBlogsData(
					result.data || []
				);

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
		<section
			className="section sofax-section-padding bg-light position-relative"
			id="blog"
			style={{
				overflow: "hidden",
			}}
		>
			<div className="container">

				{/* Heading */}
				<div
					className="sofax-section-title center max-width-large2"
					style={{
						position: "relative",
						zIndex: 2,
					}}
				>

					<div className="tg-heading-subheading animation-style3">

						<h2>
							The latest insights &
							WhatsApp growth strategies
						</h2>

					</div>

					<p
						style={{
							maxWidth: "760px",
							margin:
								"20px auto 0",
							fontSize: "18px",
							lineHeight: "1.8",
							color: "#64748b",
						}}
					>
						Explore the latest
						trends in WhatsApp
						automation, AI
						customer engagement,
						shared inbox systems,
						and conversational
						growth strategies.
					</p>

					<div className="sofax-blog-shapev4">

						<Image
							src={Shape12}
							alt="Shape"
						/>

					</div>

				</div>

				{/* Loading */}
				{loading ? (

					<div
						style={{
							textAlign:
								"center",
							padding:
								"60px 0",
							fontSize: "18px",
							fontWeight:
								"600",
							color:
								"#64748b",
						}}
					>
						Loading blogs...
					</div>

				) : (

					<div className="row g-4">

						{blogsData.map(
							(blog, index) => (

								<div
									className="col-lg-4 col-md-6"
									key={
										blog.id ||
										index
									}
								>

									<div
										style={{
											background:
												"#ffffff",
											borderRadius:
												"28px",
											overflow:
												"hidden",
											border:
												"1px solid #edf2f7",
											boxShadow:
												"0 10px 40px rgba(15,23,42,0.04)",
											height:
												"100%",
											transition:
												"0.3s ease",
										}}
									>

										{/* Image */}
										<Link
											href={`/blog/${blog.slug}`}
											style={{
												textDecoration:
													"none",
											}}
										>

											<div
												style={{
													position:
														"relative",
													width:
														"100%",
													height:
														"260px",
													background:
														"#f1f5f9",
												}}
											>

												<Image
													src={
	blog.og_image ||
	fallbackImage
}
													alt={
														blog.title
													}
													fill
													style={{
														objectFit:
															"cover",
													}}
												/>

											</div>

										</Link>

										{/* Content */}
										<div
											style={{
												padding:
													"32px",
											}}
										>

											{/* Meta */}
											<div
												style={{
													display:
														"flex",
													alignItems:
														"center",
													gap:
														"12px",
													flexWrap:
														"wrap",
													marginBottom:
														"18px",
												}}
											>

												<div
													style={{
														padding:
															"8px 14px",
														borderRadius:
															"999px",
														background:
															"#dcfce7",
														color:
															"#15803d",
														fontSize:
															"13px",
														fontWeight:
															"700",
													}}
												>
													{blog
														.category
														?.name ||
														"WhatsApp Automation"}
												</div>

												<span
													style={{
														fontSize:
															"14px",
														color:
															"#94a3b8",
														fontWeight:
															"600",
													}}
												>
													{new Date(
														blog.published_at ||
														blog.created_at
													).toLocaleDateString(
														"en-US",
														{
															day:
																"numeric",
															month:
																"long",
															year:
																"numeric",
														}
													)}
												</span>

											</div>

											{/* Title */}
											<Link
												href={`/blog/${blog.slug}`}
												style={{
													textDecoration:
														"none",
												}}
											>

												<h4
													style={{
														fontSize:
															"28px",
														fontWeight:
															"800",
														lineHeight:
															"1.3",
														color:
															"#0f172a",
														marginBottom:
															"18px",
													}}
												>
													{
														blog.title
													}
												</h4>

											</Link>

											{/* Excerpt */}
											<p
												style={{
													fontSize:
														"16px",
													lineHeight:
														"1.9",
													color:
														"#64748b",
													marginBottom:
														"28px",
												}}
											>
												{(
													blog.excerpt ||
													"Discover how businesses are scaling customer engagement using WhatsApp automation and AI workflows."
												)
													.replace(
														/<[^>]*>/g,
														""
													)
													.substring(
														0,
														140
													)}
												...
											</p>

											{/* CTA */}
											<Link
												href={`/blog/${blog.slug}`}
												style={{
													display:
														"inline-flex",
													alignItems:
														"center",
													gap:
														"10px",
													fontWeight:
														"700",
													fontSize:
														"16px",
													color:
														"#16a34a",
													textDecoration:
														"none",
												}}
											>
												Read Article →

											</Link>

										</div>

									</div>

								</div>

							)
						)}

					</div>

				)}

			</div>
		</section>
	);
}

export default Blog;