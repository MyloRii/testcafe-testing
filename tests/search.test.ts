import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

fixture(`Search`)
	.page(`http://zero.webappsecurity.com/index.html`)

test('User can search info using search box', async t => {
	navbar.search('online bank')
	await t
		.expect(searchResultsPage.resultTitle.exists).ok()
		.expect(navbar.searchBox.exists).ok()
		.expect(searchResultsPage.linkText.innerText).contains('Zero - Free Access to Online Banking')
})
