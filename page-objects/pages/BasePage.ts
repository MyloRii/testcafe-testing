import { t } from 'testcafe'

class BasePage {
	async waitFor(milliseconds: number) {
		await t.wait(milliseconds)
	}

	async setTestSpeed(speedLevel: number) {
		await t.setTestSpeed(speedLevel)
	}
}

export default BasePage
