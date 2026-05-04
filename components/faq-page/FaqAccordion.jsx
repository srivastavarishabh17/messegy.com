import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
function FaqAccordion() {
	return (
		<div className="sofax-accordion-section-wrapper">
			<div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							Is there a free trial?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion2"
					>
						<div className="accordion-body sofax-accordion-body">
							Yes! We offer a 14-day free trial for all our plans. You can explore all features including WhatsApp Business API integration, chatbot builder, and broadcast campaigns. No credit card required to start your trial.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							Can I cancel anytime?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Absolutely! You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your current billing period, and you can export all your data before cancellation.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							What is WhatsApp Business API?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							WhatsApp Business API is a powerful tool that allows businesses to communicate with customers at scale. It enables automated messaging, chatbot integration, broadcast campaigns, and customer support through WhatsApp, helping you reach over 2 billion users worldwide.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							How many messages can I send?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Message limits depend on your plan: Starter plan allows up to 1,000 contacts with basic messaging, Growth plan supports 5,000 contacts with advanced features, and Enterprise plans offer unlimited messaging. All plans comply with WhatsApp's conversation-based pricing model.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							Do I need a Facebook Business account?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Yes, you need a Facebook Business account to access WhatsApp Business API. It's free to create and required for verification. Our platform guides you through the setup process, making it easy to connect your existing Facebook Business account or create a new one.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaqAccordion;
