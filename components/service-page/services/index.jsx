import image1 from "@/public/images/service/image1.png";
import image2 from "@/public/images/service/image2.png";
import image3 from "@/public/images/service/image3.png";
import image4 from "@/public/images/service/image4.png";
import image5 from "@/public/images/service/image5.png";
import image6 from "@/public/images/service/image6.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: 1,
		title: "User Interface/Experience",
		description:
			"UI & UX are crucial aspects of design digital products & services. UI refers to the visual elements that users.",
		icon: image1,
	},
	{
		id: 2,
		title: "Search Engine Optimization",
		description:
			"The goal of SEO to increase organic (non-paid) traffic website by ranking higher in search engine results.",
		icon: image2,
	},
	{
		id: 3,
		title: "Performance Management",
		description: "Process designed to continuously is a monitor measure & enhance the performance of individuals.",
		icon: image3,
	},
	{
		id: 4,
		title: "Leadership Development",
		description:
			"The process of the enhancing ablities skill and quqlities of the individuals to become effective to leaders.",
		icon: image4,
	},
	{
		id: 5,
		title: "Training & Development",
		description:
			"Involves assessing the skills equired for various roles the organization and identifying gaps between current.",
		icon: image5,
	},
	{
		id: 6,
		title: "Resource Allocation",
		description:
			"Assessing requirements of projects to initiatives or operational activities or determine the types & quantities.",
		icon: image6,
	},
];

function Services() {
	return (
		<section className="sofax-section-padding">
			<div className="container">
				<div className="row">
					<div className="sofax-section-title center">
						<h2>We provide all effective services</h2>
					</div>
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
