import { render, fireEvent, cleanup } from '@testing-library/vue'
import Query from  '../src/renderer/containers/MainLoader/MainPanel/Query.vue'

afterEach(cleanup)

test('it should have a Name label', async () => {
	const { getByText } = render(Query)

	const nameLabel = getByText('Name:')
})

test('it should have an input field for Name', async () => {
	const { getByRole } = render(Query)

	const nameInputField = getByRole('name-input')
})

test('it should have a Variant label', async () => {
	const { getByText } = render(Query)

	const variantLabel = getByText('Variant:')
})

test('it should have a Variant dropdown', async () => {
	const { getByRole, getByText } = render(Query)

	const variantDropdown = getByRole('variant-dropdown')

	await fireEvent.click(variantDropdown)
	const firstElementInDropdown = getByText('getBy')
})

test('it should have a Type label', async () => {
	const { getByText } = render(Query)

	const typeLabel = getByText('Type:')
})

test('it should have a Type dropdown', async () => {
	const { getByRole, findByText } = render(Query)

	const typeDropdown = getByRole('type-dropdown')

	await fireEvent.click(typeDropdown)
	const firstElementInDropdown = findByText('LabelText')
})

test('it should have a Matcher label', async () => {
	const { findByText } = render(Query)

	const matcherLabel = findByText('Matcher:')
})

test('it should have a Matcher input field', async () => {
	const { findByRole } = render(Query)

	const matcherInputField = findByRole('matcher-input')
})
