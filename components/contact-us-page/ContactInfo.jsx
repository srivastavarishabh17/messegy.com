import Icon1 from "@/public/images/contact/icon1.png";
import Icon2 from "@/public/images/contact/icon2.png";
import Icon3 from "@/public/images/contact/icon3.png";
import Image from "next/image";

function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">

			{/* CHAT / SUPPORT */}
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon1} alt="Chat support" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Chat with us</h4>
					<p>
						Get help with Messegy setup, automation flows, and integrations.
						Support available Monday–Saturday, 10 AM – 7 PM (IST).
					</p>
				</div>
			</div>

			{/* CALL (ONLY KEEP IF REAL) */}
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon2} alt="Call support" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Call us</h4>
					<p>
						Have a quick question? Reach us at +91-7376750302 during working hours.
					</p>
				</div>
			</div>

			{/* EMAIL */}
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon3} alt="Email support" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Email support</h4>
					<p>
						Email us at support@messegy.com and we’ll respond within 24 hours.
					</p>
				</div>
			</div>

		</div>
	);
}

export default ContactInfo;