/* eslint-disable react/prop-types */
import Link from "next/link";
import ArrowDown from "./ArrowDown";
import { FaHome, FaInfoCircle, FaDollarSign } from "react-icons/fa";

function DropdownItem({ dropdown, children, title, url, description, icon }) {
	const urlFormated = url;

	const getIcon = (pageName) => {
		switch(pageName) {
			case "Home":
				return <FaHome />;
			case "About Us":
				return <FaInfoCircle />;
			case "Pricing":
				return <FaDollarSign />;
			default:
				return <FaHome />;
		}
	};

	return dropdown ? (
		<li className="sub-menu--item nav-item-has-children">
			<a href="#" data-menu-get="h3" className="drop-trigger">
				{title} <ArrowDown />
			</a>
			{children}
		</li>
	) : (
		<li className="sub-menu--item">
			<Link href={urlFormated}>
				<span className="dropdown-icon">{icon || getIcon(children)}</span>
				{description ? (
					<span className="menu-item-text-wrapper">
						<span className="menu-item-text">{children}</span>
						<span className="menu-item-description">{description}</span>
					</span>
				) : (
					<span className="menu-item-text">{children}</span>
				)}
			</Link>
		</li>
	);
}

export default DropdownItem;
