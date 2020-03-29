import { Selector, t } from 'testcafe'

export default class Navbar {
	readonly signInButton = Selector('#signin_button')
	readonly searchBox = Selector('#searchTerm')

	async search(text: string) {
		await t
			.typeText(this.searchBox, text, { paste: true, replace: true })
			.pressKey('enter')
	}
}
