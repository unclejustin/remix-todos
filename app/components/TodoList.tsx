interface TodoListProps {
	todos: unknown[]
}

export default function TodoList({ todos }: TodoListProps) {
	if (todos.length === 0) {
		return <EmptyTodoList />
	}

	return (
		<ul>
			<li>Complete item</li>
			<li>Incomplete item</li>
		</ul>
	)
}

function EmptyTodoList() {
	return <div>No todos created yet.</div>
}
