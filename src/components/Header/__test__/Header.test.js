import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
	it("should render same text passed into title props", () => {
		render(<Header title="My Header" />);
		const headingElement = screen.getByText(/my header/i);
		expect(headingElement).toBeInTheDocument();
	});
});

//
// it("making sure the heading is loaded using getByRole", () => {
// 	render(<Header title="My Header" />);
// 	const headingElement = screen.getByRole("heading", { name: "My Header" });
// 	expect(headingElement).toBeInTheDocument();
// });

// // semantic quuery
// it("making sure the heading is loaded using getByTitle", () => {
// 	render(<Header title="My Header" />);
// 	const headingElement = screen.getByTitle("Header");
// 	expect(headingElement).toBeInTheDocument();
// });

// // test Id method
// it("making sure the heading is loaded using getByTestId", () => {
// 	render(<Header title="My Header" />);
// 	const headingElement = screen.getByTestId("header-1");
// 	expect(headingElement).toBeInTheDocument();
// });

// //-------------------------------FIND BY-----------------------------------------------
// it("Header test using findByText", async () => {
// 	render(<Header title="My Header" />);
// 	const headingElement = await screen.findByText(/my header/i);
// 	expect(headingElement).toBeInTheDocument();
// });

// //-------------------------------QUERY BY-----------------------------------------------

// it("Header test using queryByText", () => {
// 	render(<Header title="My Header" />);
// 	const headingElement = screen.queryByText(/dogs/i);
// 	expect(headingElement).not.toBeInTheDocument();
// 	// Line 42 not mean that we are not expecting line 41 element to be in the DOM
// });

// //-------------------------------GET ALL BY-----------------------------------------------
// it("Headers test using getAllByRole", () => {
// 	render(<Header title="My Header" />);
// 	const headingElements = screen.getAllByRole("heading");
// 	expect(headingElements.length).toBe(2);
// });
