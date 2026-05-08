import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<section className="section sofax-section-padding bg-light">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<h2>Frequently Asked Questions</h2>
					<p>Everything you need to know about our WhatsApp Business solutions</p>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
					<FaqAccordion />
				</div>
			</div>
		</section>
	);
}

export default Faq;
