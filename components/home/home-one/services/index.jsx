import Icon1 from "@/public/images/v1/icon1.png";
import Icon2 from "@/public/images/v1/icon2.png";
import Icon3 from "@/public/images/v1/icon3.png";
import Icon4 from "@/public/images/v1/icon4.png";
import Icon5 from "@/public/images/v1/icon5.png";
import Icon6 from "@/public/images/v1/icon6.png";

import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "WhatsApp Automation",
		description:
			"Automate customer replies, order updates, abandoned cart recovery, and support conversations on WhatsApp.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Shared Team Inbox",
		description:
			"Manage all customer chats from one collaborative inbox with agents, notes, assignments, and live tracking.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "AI Chatbot",
		description:
			"Use AI-powered chatbots to answer FAQs, capture leads, qualify customers, and provide instant support 24/7.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon4,
		title: "Broadcast Campaigns",
		description:
			"Send personalized WhatsApp campaigns, promotions, updates, and announcements to thousands of customers.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon5,
		title: "E-commerce Integrations",
		description:
			"Connect Shopify, WooCommerce, and other platforms to automate orders, payments, and customer engagement.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon6,
		title: "Analytics & Reports",
		description:
			"Track response times, campaign performance, agent productivity, and customer engagement with detailed insights.",
	},
];

function Services() {
	return (
		<div className="section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title max-width-770 ">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Powerful WhatsApp features built to grow your business</h2>
							</div>
						</div>

						<div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center">
							<FadeInUp className="sofax-title-btn">
								<Link
									className="sofax-default-btn pill"
									data-text="Explore Features"
									href="/features"
								>
									<span className="button-wraper">Explore Features</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>

				<div className="row">
					{servicesData.map((item, index) => (
						<FadeInStagger
							key={item.id}
							index={index}
							className="col-xl-4 col-md-6"
						>
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;