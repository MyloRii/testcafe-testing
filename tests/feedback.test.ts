import { Selector, t } from 'testcafe'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

const feedbackPage = new FeedbackPage()

// prettier-ignore
fixture `Feedback`
    .page `http://zero.webappsecurity.com/index.html`

test('User can submit feedback through form', async t => {
	const linkToFeedback = Selector('#feedback')
	await t.click(linkToFeedback)
	feedbackPage.submitFeedback(t)

	await t.expect(feedbackPage.formMsg.innerText).contains('Thank you')
})
