import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

it("renders without crashing", () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
});

it("matches snapshot", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

describe("check that the routes are working", () => {
	it("should render the Doglist at /dogs", () => {
		const { getByText } = render(
			<MemoryRouter initalEntries={["/dogs"]}>
				<App />
			</MemoryRouter>
		);
		expect(getByText("React Dog Finder")).toBeInTheDocument();
	});

	it("should show the DogDetail for Whiskey", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/whiskey"]}>
				<App />
			</MemoryRouter>
		);
		expect(getByText("Whiskey loves eating popcorn.")).toBeInTheDocument();
	});

	it("should show the DogDetail for Duke", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/duke"]}>
				<App />
			</MemoryRouter>
		);
		expect(
			getByText("Duke believes that ball is life.")
		).toBeInTheDocument();
	});

	it("should show the DogDetail for Perry", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/perry"]}>
				<App />
			</MemoryRouter>
		);
		expect(getByText("Perry loves all humans.")).toBeInTheDocument();
	});

	it("should show the DogDetail for Tubby", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/tubby"]}>
				<App />
			</MemoryRouter>
		);
		expect(
			getByText("Angelina used to hate Tubby, but claims not to anymore.")
		).toBeInTheDocument();
	});
});

describe("check that the navbar links are working", () => {
	it("should render the Doglist at /dogs for the Home NavLink", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/duke"]}>
				<App />
			</MemoryRouter>
		);
		expect(
			getByText("Duke believes that ball is life.")
		).toBeInTheDocument();
		const link = getByText("Home");
		fireEvent.click(link);
		expect(getByText("React Dog Finder")).toBeInTheDocument();
	});

	it("should show the DogDetail for Whiskey when Whiskey's NavLink is clicked", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/duke"]}>
				<App />
			</MemoryRouter>
		);
		expect(
			getByText("Duke believes that ball is life.")
		).toBeInTheDocument();
		const link = getByText("Whiskey");
		fireEvent.click(link);
		expect(getByText("Whiskey loves eating popcorn.")).toBeInTheDocument();
	});

	it("should show the DogDetail for Duke when Duke's NavLink is clicked", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/whiskey"]}>
				<App />
			</MemoryRouter>
		);
		expect(getByText("Whiskey loves eating popcorn.")).toBeInTheDocument();
		const link = getByText("Duke");
		fireEvent.click(link);
		expect(
			getByText("Duke believes that ball is life.")
		).toBeInTheDocument();
	});

	it("should show the DogDetail for Perry when Perry's NavLink is clicked", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/duke"]}>
				<App />
			</MemoryRouter>
		);
		expect(
			getByText("Duke believes that ball is life.")
		).toBeInTheDocument();
		const link = getByText("Perry");
		fireEvent.click(link);
		expect(getByText("Perry loves all humans.")).toBeInTheDocument();
	});

	it("should show the DogDetail for Tubby when Tubby's NavLink is clicked", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/dogs/duke"]}>
				<App />
			</MemoryRouter>
		);
		expect(
			getByText("Duke believes that ball is life.")
		).toBeInTheDocument();
		const link = getByText("Tubby");
		fireEvent.click(link);
		expect(
			getByText("Angelina used to hate Tubby, but claims not to anymore.")
		).toBeInTheDocument();
	});
});
