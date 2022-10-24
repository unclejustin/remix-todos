import '@testing-library/jest-dom'
import { render, screen } from 'tests/utils'
import { describe, expect, it } from 'vitest'
import ExampleComponent from '~/components/ExampleComponent'

describe('Example unit tests.', () => {
	it('Should have "Default message." as text content.', async () => {
		render(<ExampleComponent message="" />)
		expect(screen.getByRole('heading')).toHaveTextContent('Default message.')
	})

	it('Should have "Vitest message." as text content.', async () => {
		render(<ExampleComponent message="Vitest message." />)
		expect(screen.getByRole('heading')).toHaveTextContent('Vitest message.')
	})
})
