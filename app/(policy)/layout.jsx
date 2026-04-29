import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

export const metadata = {
	title: "Messegy – Automate WhatsApp Conversations & Grow Faster",
	description:
		"Messegy helps businesses automate WhatsApp replies, capture leads, and scale customer engagement with powerful messaging tools.",
};

function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;