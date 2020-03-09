import { Selector } from 'testcafe'

class SearchResultsPage {
	constructor() {
		this.resultTitle = Selector('h2')
		this.linkText = Selector('div.container > div > ul > li > a')
	}
}

export default SearchResultsPage
