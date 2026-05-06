import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<button 
				onClick={() => {
					console.log("Demo button clicked");
					alert("Demo functionality - This would open a demo page or video");
				}}
				style={{ 
					marginRight: "16px",
					background: "transparent",
					border: "none",
					fontWeight: "500",
					cursor: "pointer",
					padding: "0",
					fontSize: "18px"
				}}
			>
				Demo
			</button>
			<button 
				onClick={() => {
					console.log("Login button clicked");
					alert("Login functionality - This would redirect to login page");
				}}
				style={{ 
					marginRight: "16px",
					background: "transparent",
					border: "none",
					fontWeight: "500",
					cursor: "pointer",
					padding: "0",
					fontSize: "18px"
				}}
			>
				Login
			</button>
			<Link className="sofax-default-btn pill sofax-header-btn" data-text="Get started" href="/contact">
				<span className="button-wraper">Get started</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
