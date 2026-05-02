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

export const metadata = {
	title: "Messegy || WhatsApp Business Platform",
	description: "Messegy || WhatsApp Business Platform",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${DMSans.variable} ${clashGrotesk.variable}`}>
				<ImportBsJS />
				<ScrollTopManager />
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}