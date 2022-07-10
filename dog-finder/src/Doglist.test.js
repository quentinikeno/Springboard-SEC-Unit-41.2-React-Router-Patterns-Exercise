import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Doglist from "./Doglist";
import dogs from "./dogs";

it("should render without crashing", () => {
	render(
		<MemoryRouter>
			<Doglist dogs={dogs} />
		</MemoryRouter>
	);
});

it("should matchSnapshot", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<Doglist dogs={dogs} />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

it("should have all the dogs in the document", () => {
	const { getByText } = render(
		<MemoryRouter>
			<Doglist dogs={dogs} />
		</MemoryRouter>
	);
	expect(getByText("Whiskey")).toBeInTheDocument();
	expect(getByText("Duke")).toBeInTheDocument();
	expect(getByText("Perry")).toBeInTheDocument();
	expect(getByText("Tubby")).toBeInTheDocument();
});
