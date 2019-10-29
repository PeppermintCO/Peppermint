import { render, fireEvent, cleanup } from '@testing-library/vue'
import FireEvent from  '../src/renderer/containers/MainLoader/MainPanel/FireEvent.vue'

afterEach(cleanup)
const mockedStore = {
	state: {
		testList: {
			1: {
				testItems: {
					2: {
						selectorName: "button",
						queryVariant: "getBy",
						queryType: "Text",
						textToMatch: "submit"
					}
				}
			}
		}
	}
}

test('it should have an Event label', async () => {
	const { getByText } = render(FireEvent, {props: {testId: 1}, store: mockedStore})

	const eventLabel = getByText('Event:')
})

test('it should have an Event input field', async () => {
	const { findByRole } = render(FireEvent, {props: {testId: 1}, store: mockedStore})

	const eventInputField = findByRole('event-input')
})

test('it should have a Selector label', async () => {
	const { getByText } = render(FireEvent, {props: {testId: 1}, store: mockedStore})

	const selectorLabel = getByText('Selector:')
})

test('it should have a Selector dropdown', async () => {
	const { getByRole, getByText } = render(FireEvent, {props: {testId: 1}, store: mockedStore})

	const selectorDropdown = getByRole('selector-dropdown')

	await fireEvent.click(selectorDropdown)
	const firstElementInDropdown = getByText('button')
})
