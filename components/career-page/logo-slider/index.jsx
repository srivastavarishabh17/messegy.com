"use client";
import Alterbone from "@/public/images/v1/alterbone.png";
import Carbonia from "@/public/images/v1/carbonia.png";
import Logoipsum from "@/public/images/v1/logoipsum.png";
import Tinygone from "@/public/images/v1/tinygone.png";
import Waverio from "@/public/images/v1/waverio.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: 1,
		img: Waverio,
	},
	{
		id: 2,
		img: Logoipsum,
	},
	{
		id: 3,
		img: Alterbone,
	},
	{
		id: 4,
		img: Carbonia,
	},
	{
		id: 5,
		img: Tinygone,
	},
	{
		id: 6,
		img: Waverio,
	},
	{
		id: 7,
		img: Logoipsum,
	},
	{
		id: 8,
		img: Alterbone,
	},
	{
		id: 9,
		img: Carbonia,
	},
	{
		id: 10,
		img: Tinygone,
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
};

function LogoSlider() {
	return (
		<section className="sofax-slider-section bg-light">
			<div className="container">
				<div className="sofax-title-section">
					<h4>Trusted by 1600+ of the world&apos;s most popular companies</h4>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item) => (
								<SwiperSlide key={item.id}>
									<div className="sofax-logo-icon-item">
										<Image src={item.img} alt={item.title} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</section>
	);
}

export default LogoSlider;
