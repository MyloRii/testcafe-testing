import { Selector, t } from 'testcafe'

//example BasePage class
class BasePage {
	async waitFor(milliseconds) {
		await t.wait(milliseconds)
	}

	async setTestSpeed(speedLevel) {
		await t.setTestSpeed(speedLevel)
	}
}

export default BasePage
