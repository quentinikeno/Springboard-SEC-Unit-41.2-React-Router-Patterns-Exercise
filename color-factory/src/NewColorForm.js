import { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./NewColorForm.css";

const NewColorForm = ({ addColor }) => {
	const initialState = {
		name: "blue",
		color: "#0000ff",
	};
	const [formData, setFormData] = useState(initialState);
	const history = useHistory();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const newColor = { id: uuid(), ...formData };
		addColor(newColor);
		setFormData(initialState);
		history.push("/colors");
	};

	return (
		<div className="NewColorForm">
			<form onSubmit={handleSubmit}>
				<div>
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
				</div>
				<div>
					<label htmlFor="color">Color</label>
					<input
						type="color"
						id="color"
						name="color"
						value={formData.color}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<button type="submit">Create Color!</button>
				</div>
			</form>
		</div>
	);
};

export default NewColorForm;
