import { render, fireEvent, cleanup } from '@testing-library/vue'
import MainPanel from  "../src/renderer/containers/MainLoader/MainPanel/MainPanel.vue"

import { store } from "../src/renderer/store/store"

afterEach(cleanup)

function renderVuexComponent(customStore) {
	return render(MainPanel, {store: {...store, ...customStore}});
}

xtest('has component name', async () => {
	const { getByText } = renderVuexComponent();

	const componentName = getByText('Component Name')
})
