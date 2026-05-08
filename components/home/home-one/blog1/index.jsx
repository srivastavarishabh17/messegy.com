"use client";
import ArrowRight from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const blogData = [
	{
		id: 1,
		image: "/images/blog/blogthumb1.png",
		category: "Advertising",
		date: "March 15, 2024",
		title: "How to Create Effective Ad Campaigns That Convert",
		description: "Learn the secrets behind creating advertising campaigns that not only grab attention but drive real results for your business.",
	},
	{
		id: 2,
		image: "/images/blog/blogthumb2.png",
		category: "Social",
		date: "March 12, 2024",
		title: "Social Media Marketing Trends You Need to Know",
		description: "Stay ahead of the curve with the latest social media marketing trends that can help your brand stand out in crowded feeds.",
	},
	{
		id: 3,
		image: "/images/blog/blogthumb3.png",
		category: "Promotion",
		date: "March 10, 2024",
		title: "Promotional Strategies That Actually Work",
		description: "Discover proven promotional strategies that can help increase brand awareness and drive customer engagement effectively.",
	},
];

function BlogCard({ blog }) {
	return (
		<div className="col-lg-4 col-md-6 d-flex">
			<div className="sofax-inner-blog-wrap h-100 d-flex flex-column">
				<div className="sofax-inner-blog-img">
					<Image src={blog.image} alt="blog thumb" width={400} height={250} />
				</div>
				<div className="sofax-inner-blog-content flex-grow-1 d-flex flex-column">
					<div className="sofax-inner-blog-meta">
						<Link href="/single-blog">
							<h5>{blog.category}</h5>
							<ul>
								<li>{blog.date}</li>
							</ul>
						</Link>
					</div>
					<div className="sofax-inner-blog-text flex-grow-1">
						<Link href="/single-blog">
							<h3>{blog.title}</h3>
						</Link>
						<p>{blog.description}</p>
					</div>
					<div className="mt-auto">
						<Link className="sofax-icon-btn sofax-blog-icon-btn" href="/single-blog">
							Learn More <Image src={ArrowRight} alt="arrow right" width={20} height={20} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function Blog() {
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const getFontSize = () => {
		if (screenWidth < 350) return '1.2rem';
		if (screenWidth < 400) return '1.4rem';
		if (screenWidth < 480) return '1.6rem';
		if (screenWidth < 600) return '2rem';
		if (screenWidth < 768) return '2.5rem';
		if (screenWidth < 1024) return '3rem';
		return '3.5rem';
	};

	return (
		<section className="sofax-section-padding2" id="blog">
			<div className="container">
				<div className="sofax-section-title center" style={{ maxWidth: 'none' }}>
					<div className="tg-heading-subheading animation-style3" style={{ maxWidth: 'none', margin: '0 auto', padding: '0' }}>
						<h2 style={{
							textAlign: 'center',
							fontSize: getFontSize(),
							lineHeight: '1.1',
							letterSpacing: 'normal'
						}}>
							Latest news & tips<br />for optimal marketing
						</h2>
					</div>
				</div>
				<div className="row g-4">
					{blogData.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Blog;
