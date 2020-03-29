import { Selector } from 'testcafe'
import BasePage from './BasePage'

export default class SearchResultsPage extends BasePage {
	readonly resultTitle = Selector('h2')
	readonly linkText = Selector('div.container > div > ul > li > a')
}
