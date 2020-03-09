import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class LoginPage extends BasePage {
	constructor() {
		super()
		this.usernameInput = Selector('#user_login')
		this.usernamePassword = Selector('#user_password')
		this.submitButton = Selector('.btn-primary')
		this.errorMsg = Selector('.alert-error')
	}

	async loginToApp(username, password) {
		await t
			.typeText(this.usernameInput, username, { paste: true, replace: true })
			.typeText(this.usernamePassword, password, { paste: true, replace: true })
			.click(this.submitButton)
	}
}

export default LoginPage
