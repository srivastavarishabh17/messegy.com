import { DMSans, clashGrotesk, inter } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

// Bootstrap js
import ImportBsJS from "@/components/BootstrapClient";

// ScrollToTop
import ScrollToTop from "@/hooks/ScrollToTop";
import ScrollTopManager from "@/components/ScrollTopManager";
// main css
import "../public/css/app.css";
import "../public/css/main.css";
import "../public/css/mobile-nav.css";
import "../public/css/dropdown-fullwidth.css";

export const metadata = {
	title: "Messegy - WhatsApp Business Platform | AI-Powered Messaging & Automation",
	description: "Transform your business with Messegy's WhatsApp Business Platform. Automate conversations, capture leads, send bulk campaigns, and grow 10x faster with AI-powered messaging. 14-day free trial, no credit card required.",
	keywords: "WhatsApp Business Platform, AI chatbot, bulk messaging, lead capture, business automation, WhatsApp API, customer engagement, messaging automation",
	authors: [{ name: "Messegy Team" }],
	creator: "Messegy",
	publisher: "Messegy",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://messegy.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en",
			"en-GB": "/en",
		},
	},
	opengraph: {
		title: "Messegy - WhatsApp Business Platform | AI-Powered Messaging & Automation",
		description: "Transform your business with AI-powered WhatsApp messaging. Automate conversations, capture leads, and grow 10x faster.",
		url: "https://messegy.com",
		siteName: "Messegy",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Messegy WhatsApp Business Platform Dashboard",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Messegy - WhatsApp Business Platform",
		description: "AI-powered WhatsApp messaging for business growth and automation.",
		images: ["/images/twitter-image.jpg"],
		creator: "@messegy",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
		yandex: "your-yandex-verification-code",
	},
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${DMSans.variable} ${clashGrotesk.variable}`}>
				<ImportBsJS />
				<ScrollTopManager />
				{children}
			</body>
		</html>
	);
}