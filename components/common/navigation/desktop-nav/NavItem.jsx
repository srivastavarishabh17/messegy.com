/* eslint-disable react/prop-types */
import Link from "next/link";
import ArrowDown from "./ArrowDown";

function setFullWidthStyles(dropdown, isVisible) {
	if (!dropdown) return;
	
	// Calculate the header's bottom position
	const header = document.querySelector('.site-header');
	const headerBottom = header ? header.getBoundingClientRect().bottom : 70;
	
	// Use setProperty with 'important' to override any CSS !important rules
	const styles = {
		'position': 'fixed',
		'left': '0',
		'right': '0',
		'width': '100vw',
		'max-width': '100vw',
		'min-width': '100vw',
		'transform': 'none',
		'margin-left': '0',
		'margin-right': '0',
		'top': headerBottom + 'px',
		'border-radius': '0',
		'background': '#ffffff',
		'z-index': '9999',
		'box-sizing': 'border-box',
		'opacity': isVisible ? '1' : '0',
		'visibility': isVisible ? 'visible' : 'hidden'
	};
	
	for (const [property, value] of Object.entries(styles)) {
		dropdown.style.setProperty(property, value, 'important');
	}
}

function NavItem({ dropdown, title, children, url = "", pill = false }) {
	return dropdown ? (
		<li className="nav-item nav-item-has-children">
			<a href="#" className={`nav-link-item drop-trigger ${pill ? "drop-trigger-pill" : ""}`}>
				{title} <ArrowDown />
			</a>
			{children}
		</li>
	) : (
		<li className="nav-item">
			<Link href={url} className="nav-link-item">
				{children}
			</Link>
		</li>
	);
}

export default NavItem;
