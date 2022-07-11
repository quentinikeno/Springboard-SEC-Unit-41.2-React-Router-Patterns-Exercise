import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewColorForm = () => {
	const [formData, setFormData] = useState({
		name: "blue",
		color: "#0000ff",
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};
	return (
		<form className="NewColorForm">
			<label htmlFor="name">Color Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				placeholder="Color Name"
				required
			/>
			<label htmlFor="color">Color</label>
			<input
				type="color"
				id="color"
				name="color"
				value={formData.color}
				onChange={handleChange}
				required
			/>
			<button type="submit">Create Color!</button>
		</form>
	);
};

export default NewColorForm;
