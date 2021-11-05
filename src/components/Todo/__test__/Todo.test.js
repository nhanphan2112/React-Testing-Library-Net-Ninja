import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTask = (tasks) => {
	const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
	const buttonElement = screen.getByRole("button", { name: /Add/i });
	tasks.forEach((task) => {
		fireEvent.change(inputElement, { target: { value: task } });
		fireEvent.click(buttonElement);
	});
};

describe("Todo", () => {
	it("should render when user add 1 task to TodoList", () => {
		render(<MockTodo />);
		addTask(["Go Grocery Shopping"]);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		expect(divElement).toBeInTheDocument();
	});

	it("should render when user add multiple tasks to TodoList", () => {
		render(<MockTodo />);
		addTask(["Go Grocery Shopping", "Pet my Cat", "Wash my hand"]);
		const divElement = screen.getAllByTestId("task-container");
		expect(divElement.length).toBe(3);
	});

	it("should render when a task is NOT completed which mean there is NO dynamic class todo-item-active", () => {
		render(<MockTodo />);
		addTask(["Go Grocery Shopping"]);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		expect(divElement).not.toHaveClass("todo-item-active");
	});

	it("should render when a task IS COMPLETED which mean there IS dynamic class todo-item-active", () => {
		render(<MockTodo />);
		addTask(["Go Grocery Shopping"]);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		fireEvent.click(divElement);
		expect(divElement).toHaveClass("todo-item-active");
	});
});
