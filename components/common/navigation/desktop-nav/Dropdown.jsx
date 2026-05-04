/* eslint-disable react/prop-types */
function Dropdown({ children, noShape }) {
	return (
		<ul 
			className={`sub-menu megamenu full-width-dropdown ${noShape && "shape-none"}`}
		>
			{children}
		</ul>
	);
}

export default Dropdown;
