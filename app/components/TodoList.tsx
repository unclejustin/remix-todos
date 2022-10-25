type Todo = {
	todo: string
	completed: boolean
}

interface TodoListProps {
	todos: Todo[]
}

export default function TodoList({ todos }: TodoListProps) {
	if (todos.length === 0) {
		return <EmptyTodoList />
	}

	return (
		<ul>
			{todos.map((todo) => (
				<TodoListItem key={todo.todo} todo={todo} />
			))}
		</ul>
	)
}

interface TodoListItemProps {
	todo: Todo
}

function TodoListItem({ todo }: TodoListItemProps) {
	return <li>{todo.todo}</li>
}

function EmptyTodoList() {
	return <div>No todos created yet.</div>
}
