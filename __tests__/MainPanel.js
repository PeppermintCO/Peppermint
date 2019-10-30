import { render, fireEvent, cleanup } from '@testing-library/vue'
import MainPanel from  "../src/renderer/containers/MainLoader/MainPanel/MainPanel.vue"

afterEach(cleanup)

test('has component name', async () => {
	const { getByText } = render(MainPanel)

	const componentName = getByText('Component Name')
})

