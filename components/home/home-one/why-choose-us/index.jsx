import Card from "@/public/images/v1/card.png";
import CheckCircle from "@/public/images/v1/check-circle.png";
import Contentimg2 from "@/public/images/v1/contentimg2.png";
import ContentThumb from "@/public/sharedteaminbox.png";
import Icon4 from "@/public/images/v1/icon4.png";
import Icon9 from "@/public/images/v1/icon9.png";
import Shape3 from "@/public/images/v1/shape3.png";

import Image from "next/image";
import Link from "next/link";

import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";

function WhyChooseUs() {
	return (
		<div className="sofax-section-padding2">
			
			{/* Section 1 */}
			<div className="container">
				<div className="row align-items-center">
					
					<div className="col-lg-5">
						<FadeInLeft className="sofax-content-img box-shadow mb-130">
							<Image src={ContentThumb} alt="Messegy Dashboard" />
						</FadeInLeft>
					</div>

					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
							
							<div className="tg-heading-subheading animation-style3">
								<h2>
									Manage customer conversations from one shared inbox
								</h2>
							</div>

							<p>
								Messegy helps your entire team manage WhatsApp,
								Instagram, Facebook, website chat, and customer
								support from one powerful collaborative workspace.
							</p>

							<div className="extra-mt">

								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>

									<div className="sofax-iconbox-data2">
										<h4>Shared Team Inbox</h4>

										<p>
											Assign chats, add notes, manage agents,
											and collaborate with your support and
											sales team in real time.
										</p>
									</div>
								</div>

								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>

									<div className="sofax-iconbox-data2">
										<h4>WhatsApp Automation</h4>

										<p>
											Automate replies, follow-ups, abandoned
											cart recovery, lead qualification, and
											customer notifications effortlessly.
										</p>
									</div>
								</div>

								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>

									<div className="sofax-iconbox-data2">
										<h4>AI Chatbot Support</h4>

										<p>
											Use AI-powered chatbots to instantly
											answer FAQs, capture leads, and provide
											24/7 customer support.
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>

			{/* Section 2 */}
			<div className="container">
				<div className="row align-items-center">

					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-img2 position-ralatiove ml-31">

							<Image src={Contentimg2} alt="Messegy Features" />

							<div className="sofax-content-shape-v1">
								<Image src={Shape3} alt="shape" />
							</div>

						</FadeInRight>
					</div>

					<div className="col-lg-7">
						<div className="sofax-default-content mr-80 tac fs-19">

							<div className="tg-heading-subheading animation-style3">
								<h2>
									Everything your business needs to scale conversations
								</h2>
							</div>

							<p>
								Run marketing campaigns, track sales, manage
								customers, and automate communication using one
								unified WhatsApp engagement platform.
							</p>

							<div className="extra-mt">

								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon9} alt="icon" />
									</div>

									<div className="sofax-iconbox-data2">
										<h4>Sales CRM & Lead Tracking</h4>

										<p>
											Track leads, monitor customer journeys,
											and manage your sales pipeline directly
											inside Messegy.
										</p>
									</div>
								</div>

								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="icon" />
									</div>

									<div className="sofax-iconbox-data2">
										<h4>Broadcast Campaigns & Analytics</h4>

										<p>
											Send personalized WhatsApp campaigns and
											measure delivery, engagement, response,
											and conversion performance.
										</p>
									</div>
								</div>

							</div>

							<FadeInUp className="extra-mt">
								<Link
									className="sofax-default-btn pill"
									data-text="Start Free Trial"
									href="/contact-us"
								>
									<span className="button-wraper">
										Start Free Trial
									</span>
								</Link>
							</FadeInUp>

							<div className="sofax-content-shape-v1">
								<Image src={Shape3} alt="shape" />
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;