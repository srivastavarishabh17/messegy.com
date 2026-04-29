import BreadCrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/contact-us-page";
import MyMap from "@/components/contact-us-page/MyMap";

export const metadata = {
	title: "Contact Messegy – Get Support or Book a Demo",
	description:
		"Get in touch with the Messegy team for support, sales inquiries, or help with WhatsApp automation.",
};

function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Messegy" />
			<Contact />
		</>
	);
}

export default ContactUs;