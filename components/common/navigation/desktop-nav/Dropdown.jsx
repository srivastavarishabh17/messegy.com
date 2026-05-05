"use client";
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

function Dropdown({ children, noShape }) {
	const dropdownRef = useRef(null);
	
	useEffect(() => {
		const dropdown = dropdownRef.current;
		if (!dropdown) return;
		
		// Calculate the header's bottom position
		const header = document.querySelector('.site-header');
		const headerBottom = header ? header.getBoundingClientRect().bottom : 70;
		
		// Set styles with !important to override any CSS !important rules
		const importantStyles = {
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
			'padding-top': '0',
			'box-sizing': 'border-box',
			'float': 'none',
			'display': 'block',
			'clear': 'both',
			'z-index': '9999'
		};
		
		for (const [property, value] of Object.entries(importantStyles)) {
			dropdown.style.setProperty(property, value, 'important');
		}
	}, []);
	
	return (
		<ul 
			ref={dropdownRef}
			className={`sub-menu megamenu full-width-dropdown ${noShape && "shape-none"}`}
			data-full-width-dropdown="true"
		>
			{children}
		</ul>
	);
}

export default Dropdown;
