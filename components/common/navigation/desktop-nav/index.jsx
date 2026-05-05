import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
import { FaBlog, FaBook, FaFileAlt, FaChartBar, FaQuestionCircle, FaCode, FaBookOpen, FaServer, FaHandshake, FaStore, FaPlug, FaUserFriends } from "react-icons/fa";
function DesktopMenu() {
	return (
		<DesktopNav>

			<NavItem dropdown title="Products">
				<Dropdown>
					<div className="dropdown-content">
						<div className="products-container">
							<div className="products-column">
								<h4 className="column-title">Core Platform</h4>
								<DropdownItem url="/whatsapp-business-api">WhatsApp Business API</DropdownItem>
								<DropdownItem url="/whatsapp-cloud-hosting">WhatsApp Cloud Hosting</DropdownItem>
								<DropdownItem url="/shared-team-inbox">Shared Team Inbox</DropdownItem>
							</div>
							<div className="products-column">
								<h4 className="column-title">Marketing</h4>
								<DropdownItem url="/campaigns-broadcast">Campaigns / Broadcast</DropdownItem>
								<DropdownItem url="/click-to-whatsapp-ads">Click-to-WhatsApp Ads</DropdownItem>
								<DropdownItem url="/whatsapp-link-generator">WhatsApp Link Generator</DropdownItem>
							</div>
							<div className="products-column">
								<h4 className="column-title">Automation</h4>
								<DropdownItem url="/chatbot-builder">Chatbot Builder</DropdownItem>
								<DropdownItem url="/ai-auto-replies">AI Auto Replies</DropdownItem>
								<DropdownItem url="/whatsapp-button-generator">WhatsApp Button Generator</DropdownItem>
							</div>
						</div>
					</div>
				</Dropdown>
			</NavItem>
			<NavItem dropdown title="Solutions">
				<Dropdown>
					<div className="dropdown-content">
						<div className="solutions-container">
							<div className="solutions-column">
								<h4 className="column-title">Use Cases</h4>
								<DropdownItem url="#" description="Lead conversion, cart recovery, follow-ups">Increase Sales on WhatsApp</DropdownItem>
								<DropdownItem url="#" description="Auto replies, FAQs, ticket handling">Customer Support Automation</DropdownItem>
								<DropdownItem url="#" description="Automated dues, confirmations">Payment Reminders & Collections</DropdownItem>
								<DropdownItem url="#" description="Doctors, gyms, services">Appointment Booking & Reminders</DropdownItem>
								<DropdownItem url="#" description="Offers, updates, re-engagement">Bulk Campaigns & Engagement</DropdownItem>
							</div>
							<div className="solutions-column">
								<h4 className="column-title">Industries</h4>
								<DropdownItem url="#">E-commerce</DropdownItem>
								<DropdownItem url="#" description="Clinics, Doctors">Healthcare</DropdownItem>
								<DropdownItem url="#">Education & Institutions</DropdownItem>
								<DropdownItem url="#">Manufacturing & Distributors</DropdownItem>
								<DropdownItem url="#">Gyms, PGs & Local Services</DropdownItem>
							</div>
							<div className="solutions-column">
								<img src="/images/dropdownimg.png" alt="Demo" className="promo-image" />
							</div>
						</div>
					</div>
				</Dropdown>
			</NavItem>
			<NavItem url="/pricing">Pricing</NavItem>
			<NavItem dropdown title="Resources">
				<Dropdown>
					<div className="dropdown-content">
						<div className="resources-container">
							<div className="resources-column">
								<h4 className="column-title">Learning</h4>
								<DropdownItem url="/blogs" icon={<FaBlog />}>Blog</DropdownItem>
								<DropdownItem url="/documentation" icon={<FaBook />}>WhatsApp API Guide</DropdownItem>
								<DropdownItem url="#" icon={<FaFileAlt />}>Templates Library</DropdownItem>
								<DropdownItem url="#" icon={<FaChartBar />}>Case Studies</DropdownItem>
							</div>
							<div className="resources-column">
								<h4 className="column-title">Support & Dev</h4>
								<DropdownItem url="/faq" icon={<FaQuestionCircle />}>Help Center</DropdownItem>
								<DropdownItem url="/documentation" icon={<FaCode />}>Developer Documentation</DropdownItem>
								<DropdownItem url="/documentation" icon={<FaBookOpen />}>API Reference</DropdownItem>
								<DropdownItem url="#" icon={<FaServer />}>System Status</DropdownItem>
							</div>
						</div>
					</div>
				</Dropdown>
			</NavItem>
			<NavItem dropdown title="Partners">
				<Dropdown>
					<div className="dropdown-content">
						<div className="resources-container">
							<div className="resources-column">
								<h4 className="column-title">Partner Options</h4>
								<DropdownItem url="/partner-program" icon={<FaHandshake />}>Partner Program</DropdownItem>
								<DropdownItem url="/become-a-reseller" icon={<FaStore />}>Become a Reseller</DropdownItem>
								<DropdownItem url="/integrations" icon={<FaPlug />}>Integrations</DropdownItem>
								<DropdownItem url="/affiliate-program" icon={<FaUserFriends />}>Affiliate Program</DropdownItem>
							</div>
							<div className="resources-column">
								<div className="promo-content" style={{ padding: '20px' }}>
									<h3>Grow With Messegy</h3>
									<p>Join our partner ecosystem and unlock new revenue streams with WhatsApp Business solutions.</p>
									<a href="/contact" className="sofax-default-btn pill">
										<span className="button-wraper">Become a Partner</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Dropdown>
			</NavItem>
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
		</DesktopNav>
	);
}

export default DesktopMenu;
