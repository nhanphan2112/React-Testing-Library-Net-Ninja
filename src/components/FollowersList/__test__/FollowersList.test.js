import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe("FollowersList", () => {
	beforeEach(() => {
		console.log("RUNNING BEFORE EACH TEST");
	});

	beforeAll(() => {
		console.log("RUNNING ONCE BEFORE ALL TESTS");
	});

	afterEach(() => {
		console.log("RUNNING AFTER EACH TEST");
	});

	afterAll(() => {
		console.log("RUNNING ONCE AFTER ALL TESTS");
	});

	//Below test run matching with the __mocks__ folder content
	it("should render first follower div element", async () => {
		render(<MockFollowersList title="My Header" />);
		const followerDivElement = await screen.findByTestId("follower-item-0");
		expect(followerDivElement).toBeInTheDocument();
	});

	it("should render first follower div element", async () => {
		render(<MockFollowersList title="My Header" />);
		const followerDivElement = await screen.findByTestId("follower-item-0");
		expect(followerDivElement).toBeInTheDocument();
	});

	it("should render first follower div element", async () => {
		render(<MockFollowersList title="My Header" />);
		const followerDivElement = await screen.findByTestId("follower-item-0");
		expect(followerDivElement).toBeInTheDocument();
	});

	// it("should render all 5 follower div elements", async () => {
	// 	render(<MockFollowersList title="My Header" />);
	// 	const followerDivElements = await screen.findAllByTestId(/follower-item/i);
	// 	expect(followerDivElements.length).toBe(5);
	// });
});
