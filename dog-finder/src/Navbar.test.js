import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import dogs from "./dogs";

const dogNames = dogs.map((dog) => dog.name);

it("should render without crashing", () => {
	render(
		<MemoryRouter>
			<Navbar names={dogNames} />
		</MemoryRouter>
	);
});

it("should matchSnapshot", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<Navbar names={dogNames} />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

it("should have all the dogs in the document", () => {
	const { getByText } = render(
		<MemoryRouter>
			<Navbar names={dogNames} />
		</MemoryRouter>
	);
	expect(getByText("Home")).toBeInTheDocument();
	expect(getByText("Whiskey")).toBeInTheDocument();
	expect(getByText("Duke")).toBeInTheDocument();
	expect(getByText("Perry")).toBeInTheDocument();
	expect(getByText("Tubby")).toBeInTheDocument();
});
