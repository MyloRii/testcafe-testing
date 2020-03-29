import { Selector } from 'testcafe'

export default class SearchResultsPage {
	readonly resultTitle = Selector('h2')
	readonly linkText = Selector('div.container > div > ul > li > a')
}
