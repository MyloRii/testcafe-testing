import { Selector } from 'testcafe'

class FeedbackPage {
	formName: Selector = Selector('#name')
	formEmail: Selector = Selector('#email')
	formSubject: Selector = Selector('#subject')
	formComment: Selector = Selector('#comment')
	formSubmitButton: Selector = Selector('input').withAttribute(
		'value',
		'Send Message'
	)
	formMsg: Selector = Selector('div')

	async submitFeedback(t: TestController) {
		await t
			.typeText(this.formName, 'name', { paste: true, replace: true })
			.typeText(this.formEmail, 'email@mail.com', { paste: true })
			.typeText(this.formSubject, 'subject', { paste: true })
			.typeText(this.formComment, 'comment', { paste: true })
			.click(this.formSubmitButton)
	}
}

export default FeedbackPage
