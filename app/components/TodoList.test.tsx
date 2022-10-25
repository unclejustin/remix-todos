import { render, screen } from 'tests/utils'
import TodoList from './TodoList'

describe('TodoList', () => [
	it('renders an empty list', () => {
		render(<TodoList todos={[]} />)
		// eslint-disable-next-line jest-dom/prefer-in-document
		expect(screen.queryAllByText('listitem')).toHaveLength(0)
		expect(screen.getByText('No todos created yet.')).toBeInTheDocument()
	}),
])
