import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
	return (
		<BrowserRouter>
			<TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
		</BrowserRouter>
	);
};

describe("TodoFooter", () => {
	it("should render the correct amount of incomplete task", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={5} />);
		const paragraphElement = screen.getByText(/5 tasks left/i);
		expect(paragraphElement).toBeInTheDocument();
	});

	it('should render "task" when the number of incomplete task is one', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const paragraphElement = screen.getByText(/1 task left/i);
		expect(paragraphElement).toBeInTheDocument();
	});
});

// // Example of another assertion test
// it("should render with test toBeTruthy", () => {
// 	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
// 	const paragraphElement = screen.getByText(/1 task left/i);
// 	expect(paragraphElement).toBeTruthy();
// });

// // Example of another assertion test checking if the element is accutally visible to user
// it("should render if element visible to user", () => {
// 	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
// 	const paragraphElement = screen.getByText(/1 task left/i);
// 	expect(paragraphElement).toBeVisible();
// 	// line below test if the element is not visible
// 	// expect(paragraphElement).not.toBeVisible();
// });

// // Example of another assertion test checking if element has a 'p' tag to it
// it('should render if element has a "p" tag', () => {
// 	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
// 	const paragraphElement = screen.getByText(/1 task left/i);
// 	expect(paragraphElement).toContainHTML("p");
// });

// // Example of another assertion test checking if element has a text content
// it("should render if element has a text content", () => {
// 	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
// 	const paragraphElement = screen.getByTestId("para");
// 	expect(paragraphElement).toHaveTextContent("1 task left");
// });

// // Example of another assertion test using 'not'
// it("should render with test not toBeFalsy", () => {
// 	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
// 	const paragraphElement = screen.getByText(/1 task left/i);
// 	expect(paragraphElement).not.toBeFalsy();
// });

// // Example of another assertion test accessing the element text content line 67
// it("should render if element has a text content 1 task left", () => {
// 	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
// 	const paragraphElement = screen.getByTestId("para");
// 	expect(paragraphElement.textContent).toBe("1 task left");
// });
