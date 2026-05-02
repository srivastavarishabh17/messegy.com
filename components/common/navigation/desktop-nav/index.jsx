import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>

			<NavItem url="/">Home</NavItem>
			<NavItem url="/about-us">About Us</NavItem>
			<NavItem url="/pricing">Pricing</NavItem>
			<NavItem dropdown title="Pages">
				<Dropdown>
					<div className="dropdown-content">
						<div className="promo-container">
							<div className="promo-left">
								<DropdownItem url="/">Home</DropdownItem>
								<DropdownItem url="/about-us">About Us</DropdownItem>
								<DropdownItem url="/pricing">Pricing</DropdownItem>
								<DropdownItem url="/blogs">Blog</DropdownItem>
								<DropdownItem url="/contact">Contact Us</DropdownItem>
							</div>
							<div className="promo-right">
								<div className="promo-content">
									<h3>See Messegy In Action With A Personalized Demo!</h3>
									<p>Discover how our WhatsApp Business Platform can transform your customer communication</p>
									<button className="promo-button">Book Now</button>
								</div>
								<img src="/images/about/aboutthumb.png" alt="Pages" className="promo-image" />
							</div>
						</div>
					</div>
				</Dropdown>
			</NavItem>
			<NavItem url="/blogs">Blog</NavItem>
			{/* <NavItem dropdown title="Pages">
				<Dropdown>
					<DropdownItem url="about-us">About Us</DropdownItem>
					<DropdownItem url="pricing">Pricing</DropdownItem>
					<DropdownItem dropdown title="Blog">
						<Dropdown noShape>
							<DropdownItem url="blog">Our Blog</DropdownItem>
							<DropdownItem url="single-blog">Blog Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Service">
						<Dropdown noShape>
							<DropdownItem url="service">Service</DropdownItem>
							<DropdownItem url="single-service">Service Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Team"}>
						<Dropdown noShape>
							<DropdownItem url="team">Team</DropdownItem>
							<DropdownItem url="single-team">Team Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Career"}>
						<Dropdown noShape>
							<DropdownItem url="career">Career</DropdownItem>
							<DropdownItem url="single-career">Career Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Portfolio"}>
						<Dropdown noShape>
							<DropdownItem url="portfolio">Our Portfolio</DropdownItem>
							<DropdownItem url="single-portfolio">Portfolio Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Utility">
						<Dropdown noShape>
							<DropdownItem url="faq">FAQ</DropdownItem>
							<DropdownItem url="error-page">Error Page</DropdownItem>
							<DropdownItem url="coming-soon">Coming Soon</DropdownItem>
							<DropdownItem url="terms-and-condition">Terms & Condition</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Account">
						<Dropdown noShape>
							<DropdownItem url="sign-up">Sign Up</DropdownItem>
							<DropdownItem url="sign-in">Sign In</DropdownItem>
							<DropdownItem url="reset-password">Reset Password</DropdownItem>
						</Dropdown>
					</DropdownItem>
				</Dropdown>
			</NavItem> */}

			<NavItem url="/contact">Contact Us</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
