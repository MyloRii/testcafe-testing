import { Selector, t } from 'testcafe'

class Navbar {
	searchBox = Selector('#searchTerm')
	signInButton = Selector('#signin_button')

	async search(text) {
		await t
			.typeText(this.searchBox, text, { paste: true, replace: true })
			.pressKey('enter')
	}
}

export default Navbar
