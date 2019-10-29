import { render, fireEvent, cleanup } from '@testing-library/vue'
import MainPanel from  "../src/renderer/containers/MainLoader/MainPanel/MainPanel.vue"

afterEach(cleanup)

test('has component name', async () => {
	const { getByText } = render(MainPanel, {store: { actions: { addTest() {} }}});

	const componentName = getByText('Component Name')
})

test('it has a button to display tests', async () => {
	const { getByText } = render(MainPanel, {store: { actions: { addTest() {} }}})

	const displayTestButton = getByText('Display Test')
})

test('it has a button to add tests', async () => {
	const { getByText } = render(MainPanel, {store: { actions: { addTest() {} }}})

	const displayTestButton = getByText('Add Test')
})

test('it has a button to add props', async () => {
	const { getByText } = render(MainPanel, {store: { actions: { addTest() {} }}})

	const displayTestButton = getByText('Add Props')
})
