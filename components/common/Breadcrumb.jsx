import Arrow from "@/public/images/about/arrow.png";
import Image from "next/image";
import Link from "next/link";

function BreadCrumb({ title }) {
	return (
		<div className="page-header-breadcrumb">
			<div className="container">
				<h1 className="page-title">{title}</h1>
				<nav className="breadcrumb-nav">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Image src={Arrow} alt="arrow" className="breadcrumb-arrow" />
						</li>
						<li className="current-page" aria-current="page">{title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
