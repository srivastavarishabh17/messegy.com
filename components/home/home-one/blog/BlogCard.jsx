import Arrow from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";

function BlogCard({
	blog: { title, category, date, image, slug },
}) {
	return (
		<div className="sofax-blog-wrap-v4">

			{/* Image */}
			<div
				className="sofax-blog-img"
				style={{
					position: "relative",
					width: "100%",
					height: "260px",
					overflow: "hidden",
					borderRadius: "24px",
				}}
			>

				<Link href={`/blog/${slug}`}>

					<Image
						src={image}
						alt={title}
						fill
						style={{
							objectFit: "cover",
						}}
					/>

				</Link>

			</div>

			{/* Content */}
			<Link
				href={`/blog/${slug}`}
				style={{
					textDecoration: "none",
				}}
			>

				<div className="sofax-blog-content">

					<div className="sofax-blog-meta">

						<div className="blog-btn">
							{category}
						</div>

						<ul>
							<li>{date}</li>
						</ul>

					</div>

					<h4>{title}</h4>

					<div className="sofax-icon-btn sofax-blog-icon-btn">

						Learn More

						<Image
							src={Arrow}
							alt="arrow"
						/>

					</div>

				</div>

			</Link>

		</div>
	);
}

export default BlogCard;