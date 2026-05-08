"use client";

import Header from "@/components/home/home-one/header/multi-page";
import Footer from "@/components/home/home-one/footer/index";

export default function MainLayout({ children }) {
	return (
		<>
			<Header />

			<main>
				{children}
			</main>

			<Footer />
		</>
	);
}