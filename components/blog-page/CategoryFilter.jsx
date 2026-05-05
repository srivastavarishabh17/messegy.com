import { useState } from "react";

function CategoryFilter() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Sass", "Business", "Marketing", "Technology", "Development"];

	return (
		<div className="sofax-subscription-field-filter">
			<h4>Filter by Category:</h4>
			<select
				value={selectedCategory}
				onChange={(e) => setSelectedCategory(e.target.value)}
				className="category-filter-dropdown"
			>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	);
}

export default CategoryFilter;
