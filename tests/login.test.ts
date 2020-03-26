import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

const navbar = new Navbar()
const loginPage = new LoginPage()

// prettier-ignore
fixture `Login`
    .page `http://zero.webappsecurity.com/index.html`

test('Verify error msg with invalid login credentials', async t => {
	await t.click(navbar.signInButton)
	loginPage.loginToApp('invalid username', 'invalid password')
	await t.expect(loginPage.errorMsg.innerText).contains('wrong')
})
