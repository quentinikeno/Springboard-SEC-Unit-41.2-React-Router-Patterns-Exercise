import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import DogDetail from "./DogDetail";
import dogs from "./dogs";

it("should render without crashing", () => {
	render(
		<MemoryRouter>
			<Route path="/dogs/:name">
				<DogDetail dogs={dogs} />
			</Route>
		</MemoryRouter>,
		{
			route: "/dogs/tubby",
		}
	);
});

it("should matchSnapshot", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<Route path="/dogs/:name">
				<DogDetail dogs={dogs} />
			</Route>
		</MemoryRouter>,
		{
			route: "/dogs/tubby",
		}
	);
	expect(asFragment()).toMatchSnapshot();
});
