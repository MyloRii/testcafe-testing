import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

export default class LoginPage extends BasePage {	
	readonly usernameInput = Selector('#user_login')
	readonly usernamePassword = Selector('#user_password')
	readonly submitButton = Selector('.btn-primary')
	readonly errorMsg = Selector('.alert-error')

	async loginToApp(username: string, password: string) {
		await t
			.typeText(this.usernameInput, username, { paste: true, replace: true })
			.typeText(this.usernamePassword, password, { paste: true, replace: true })
			.click(this.submitButton)
	}
}
