import type { LoaderFunction } from '@remix-run/node'
import type { Todos } from '~/domains/todos.server'

import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import TodoList from '~/components/TodoList'
import { getTodos } from '~/domains/todos.server'

type LoaderData = Todos
export const loader: LoaderFunction = async () => {
	const result = await getTodos(null)

	if (!result.success) {
		throw new Error('Something went wrong fetching todos.')
	}

	return json<LoaderData>(result.data)
}

export default function Index() {
	const todos = useLoaderData<LoaderData>()

	return (
		<>
			<h1>Todos</h1>

			<TodoList todos={todos} />
		</>
	)
}
