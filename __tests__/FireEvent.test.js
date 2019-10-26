import { render, fireEvent, cleanup } from '@testing-library/vue'
import FireEvent from  '../src/renderer/containers/MainLoader/MainPanel/FireEvent.vue'

afterEach(cleanup)

test('it should have an Event label', async () => {
	console.log(FireEvent)
	const { getByText } = render(FireEvent)

	const eventLabel = getByText('Event:')
})

xtest('it should have an Event input field', async () => {
	const { findByRole } = render(FireEvent)

	const eventInputField = findByRole('event-input')
})

xtest('it should have a Selector label', async () => {
	const { getByText } = render(FireEvent)

	const selectorLabel = getByText('Selector:')
})

xtest('it should have a Selector dropdown', async () => {
	const { getByRole, getByText } = render(FireEvent)

	const selectorDropdown = getByRole('selector-dropdown')

	await fireEvent.click(selectorDropdown)
	const firstElementInDropdown = getByText('selectorDropdown')
})
