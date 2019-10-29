import { render, fireEvent, cleanup, updateProps } from '@testing-library/vue'
import CreateTest from  '../src/renderer/containers/MainLoader/MainPanel/CreateTest.vue'

afterEach(cleanup)

updateProps({})

test('it has a test name label', async () => {
	const { getByText } = render(CreateTest, props: {key: value})

	const testNameLabel = getByText('Test Name')
})

test('it has a button to add queries', async () => {
	const { getByText } = render(CreateTest)

	const addQueryButton = getByText('Add Query')
})

test('it has a button to add events', async () => {
	const { getByText } = render(CreateTest)

	const addEventButton = getByText('Add Event')
})

test('it has a button to delete tests', async () => {
	const { getByText } = render(CreateTest)

	const deleteTestButton = getByText('Delete Test')
})
