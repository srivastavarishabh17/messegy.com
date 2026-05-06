import Image from "next/image";
import FadeInLeft from "./animation/FadeInLeft";
import FadeInUp from "./animation/FadeInUp";
import Link from "next/link";

// Enhanced Counter Component with animations
function AboutCounter() {
	return (
		<div className="sofax-counter-wrap-v5">
			<div className="sofax-counter-data-v5">
				<h2>50K</h2>
				<p>Happy Clients</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>78K+</h2>
				<p>Project Completed</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>100%</h2>
				<p>Client Satisfaction</p>
			</div>
		</div>
	);
}

function AboutUs() {
	return (
		<>
			{/* Enhanced Hero Section */}
			<section className="sofax-section-padding2 position-ralatiove">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="sofax-default-content tac">
								<div className="tg-heading-subheading animation-style3">
									<h2>We are loyal to innovative brands</h2>
								</div>
								<p>
									We are a one-stop digital agency, taking care of everything from custom web design to meticulous planning with strategies that increase your reach, drive traffic and engagement.
								</p>
								
								<AboutCounter />
								
								<FadeInUp className="extra-mt tac3">
									<Link className="sofax-default-btn pill" data-text="Explore More" href="/contact-us">
										<span className="button-wraper">Explore More</span>
									</Link>
								</FadeInUp>
							</div>
						</div>
						<div className="col-lg-6">
							<FadeInLeft className="about-thumbv5 mr-80">
								<Image 
									src="/images/about/aboutthumb.png" 
									alt="About Us" 
									width={600}
									height={500}
								/>
							</FadeInLeft>
						</div>
					</div>
				</div>
			</section>

			{/* Integration Features Section */}
			<section className="sofax-section-padding2 bg-light">
				<div className="container">
					<div className="sofax-section-title center max-width-large">
						<h2>Seamless Integration with Leading Platforms</h2>
					</div>
					<div className="row extra-mt">
						<div className="col-lg-6">
							<div className="sofax-default-content tac">
								<p>
									Business environment, integration, collaboration and growth are key to staying competitive. We provide innovative business solutions that connect with your favorite tools.
								</p>
								<div className="sofax-integration-list-icon-wrap">
									<div className="sofax-integration-list-icon-icon">
										<ul>
											<li>
												<Image src="/images/service/icon2.png" alt="icon" width={24} height={24} />
												WhatsApp Business API
											</li>
											<li>
												<Image src="/images/service/icon3.png" alt="icon" width={24} height={24} />
												CRM Integration
											</li>
										</ul>
									</div>
									<div className="sofax-integration-list-icon-icon">
										<ul>
											<li>
												<Image src="/images/service/icon4.png" alt="icon" width={24} height={24} />
												Marketing Automation
											</li>
											<li>
												<Image src="/images/service/icon2.png" alt="icon" width={24} height={24} />
												Analytics & Reporting
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="sofax-default-content">
								<div className="sofax-counter-wrapperv7 ml-50">
									<div className="sofax-counter-wrap-v7">
										<div className="sofax-counter-data-v7">
											<h2>75%</h2>
											<p>Positive Ratings</p>
										</div>
										<div className="sofax-counter-data-v7">
											<h2>80</h2>
											<p>Award Win</p>
										</div>
									</div>
									<div className="sofax-counter-wrap-v7">
										<div className="sofax-counter-data-v7">
											<h2>95%</h2>
											<p>Happy Customers</p>
										</div>
										<div className="sofax-counter-data-v7">
											<h2>90%</h2>
											<p>Project Completed</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="sofax-section-padding2">
				<div className="container">
					<div className="sofax-section-title center max-width-large">
						<h2>Our values are what separate us from others</h2>
					</div>
					<div className="row extra-mt">
						<div className="col-lg-4">
							<div className="sofax-iconbox-wrap">
								<div className="sofax-iconbox-icon">
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
										<path d="M30 15V30L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
										<path d="M25 25L30 30L35 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									</svg>
								</div>
								<div className="sofax-iconbox-data">
									<h4>Innovation as tradition</h4>
									<p>
										Innovation isn't just a practice, it's a tradition that shapes our approach to solving problems for our clients.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sofax-iconbox-wrap">
								<div className="sofax-iconbox-icon">
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M30 5L35 20H50L38 30L43 45L30 35L17 45L22 30L10 20H25L30 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
										<circle cx="30" cy="30" r="5" fill="currentColor"/>
									</svg>
								</div>
								<div className="sofax-iconbox-data">
									<h4>Empowerment with knowledge</h4>
									<p>
										Empower our clients by demystifying technology and providing them with the knowledge & tools they need.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sofax-iconbox-wrap">
								<div className="sofax-iconbox-icon">
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10 30C10 30 20 10 30 10C40 10 50 30 50 30C50 30 40 50 30 50C20 50 10 30 10 30Z" stroke="currentColor" strokeWidth="2"/>
										<circle cx="30" cy="30" r="8" fill="currentColor"/>
										<path d="M20 15L25 20M40 15L35 20M20 45L25 40M40 45L35 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									</svg>
								</div>
								<div className="sofax-iconbox-data">
									<h4>Honesty in every interaction</h4>
									<p>
										Integrity is at the core of everything we do. We uphold the standards of integrity and transparency.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutUs;
