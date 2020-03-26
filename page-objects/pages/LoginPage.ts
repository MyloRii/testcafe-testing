import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class LoginPage extends BasePage {	
	usernameInput = Selector('#user_login')
	usernamePassword = Selector('#user_password')
	submitButton = Selector('.btn-primary')
	errorMsg = Selector('.alert-error')


	async loginToApp(username, password) {
		await t
			.typeText(this.usernameInput, username, { paste: true, replace: true })
			.typeText(this.usernamePassword, password, { paste: true, replace: true })
			.click(this.submitButton)
	}
}

export default LoginPage
