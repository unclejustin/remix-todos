import type { useLoaderData } from '@remix-run/react'
import type { Todos } from '~/domains/todos.server'

type TodoListProps = { todos: ReturnType<typeof useLoaderData<Todos>> }
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

type Todo = TodoListProps['todos'][0]
type TodoListItemProps = { todo: Todo }
function TodoListItem({ todo }: TodoListItemProps) {
	return <li>{todo.todo}</li>
}

function EmptyTodoList() {
	return <div>No todos created yet.</div>
}
