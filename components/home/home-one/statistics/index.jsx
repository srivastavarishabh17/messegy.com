import FadeInUp from "../../../animation/FadeInUp";

function Statistics() {
	return (
		<section className="sofax-section-padding bg-white">
			<div className="container">
				{/* Top Section - Light Green Box */}
				<div className="statistics-top-box">
					<div className="statistics-header">
						<h2>What Sets Messegy Apart?</h2>
						<p>Businesses using Messegy see measurable impact:</p>
					</div>
					<div className="statistics-grid">
						<div className="stat-item">
							<span className="stat-percentage">89%</span>
							<span className="stat-label">Higher Average CSAT</span>
						</div>
						<div className="stat-item">
							<span className="stat-percentage">133%</span>
							<span className="stat-label">Higher Agent Efficiency</span>
						</div>
						<div className="stat-item">
							<span className="stat-percentage">60%</span>
							<span className="stat-label">Faster Response Times</span>
						</div>
						<div className="stat-item">
							<span className="stat-percentage">75%</span>
							<span className="stat-label">Boost in Customer Engagement</span>
						</div>
					</div>
				</div>

				{/* Tagline below box */}
				<div className="statistics-tagline">
					<p>A simple, transparent, and powerful WhatsApp platform, built to scale with your business!</p>
				</div>

				{/* Bottom Section - Larger Statistics */}
				<div className="statistics-bottom">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="bottom-stat-item">
									<span className="bottom-stat-number">3x</span>
									<span className="bottom-stat-label">Growth in Sales</span>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="bottom-stat-item">
									<span className="bottom-stat-number">60%</span>
									<span className="bottom-stat-label">Increase in Cart Recoveries</span>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="bottom-stat-item">
									<span className="bottom-stat-number">80%</span>
									<span className="bottom-stat-label">Reduction in CRM spends</span>
								</div>
							</FadeInUp>
						</div>
						<div className="col-lg-3 col-md-6">
							<FadeInUp>
								<div className="bottom-stat-item">
									<span className="bottom-stat-number">90%</span>
									<span className="bottom-stat-label">Boost In Customer Engagements</span>
								</div>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Statistics;
