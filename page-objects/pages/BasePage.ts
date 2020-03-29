import { t } from 'testcafe'

export default abstract class BasePage {
	protected async waitFor(milliseconds: number) {
		await t.wait(milliseconds)
	}

	protected async setTestSpeed(speedLevel: number) {
		await t.setTestSpeed(speedLevel)
	}
}
