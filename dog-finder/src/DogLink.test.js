import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import DogLink from "./DogLink";
import dogs from "./dogs";

it("should render without crashing", () => {
	render(
		<MemoryRouter>
			<DogLink name={dogs[0].name} src={dogs[0].src} />
		</MemoryRouter>
	);
});

it("should matchSnapshot", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<DogLink name={dogs[0].name} src={dogs[0].src} />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
