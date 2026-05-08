import { useState } from "react";

function LanguageSelector() {
	const [selectedLanguage, setSelectedLanguage] = useState("English");

	const languages = ["English", "Spanish", "French", "German", "Hindi"];

	return (
		<div className="sofax-subscription-field-language">
			<h4>Select Language:</h4>
			<div className="language-buttons">
				{languages.map((language) => (
					<button
						key={language}
						onClick={() => setSelectedLanguage(language)}
						className={`language-btn ${selectedLanguage === language ? "active" : ""}`}
					>
						{language}
					</button>
				))}
			</div>
		</div>
	);
}

export default LanguageSelector;
