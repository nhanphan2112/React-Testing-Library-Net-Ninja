import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "bootstrap";
import AddInput from "../AddInput";

// Below line is a mock function from jest that do nothing
// jest.fn() is equivalent to call back: () => {}
const mockSetTodo = jest.fn();

describe("AddInput", () => {
	it("should render input element", () => {
		render(<AddInput todos={[]} setTodos={mockSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});

	it("should be able to type into input using change method in fireEvent", () => {
		render(<AddInput todos={[]} setTodos={mockSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
		expect(inputElement.value).toBe("Go Grocery Shopping");
	});

	it("should have empty input when add button is clicked using fireEvent", () => {
		render(<AddInput todos={[]} setTodos={mockSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		const buttonElement = screen.getByRole("button", { name: /Add/i });
		fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
		fireEvent.click(buttonElement);
		expect(inputElement.value).toBe("");
	});
});
