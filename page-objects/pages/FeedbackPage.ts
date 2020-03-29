import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

export default class FeedbackPage extends BasePage {
	readonly formName: Selector = Selector('#name')
	readonly formEmail: Selector = Selector('#email')
	readonly formSubject: Selector = Selector('#subject')
	readonly formComment: Selector = Selector('#comment')
	readonly formSubmitButton: Selector = Selector('input').withAttribute('value','Send Message')
	readonly formMsg: Selector = Selector('div')

	async submitFeedback() {
		await t
			.typeText(this.formName, 'name', { paste: true, replace: true })
			.typeText(this.formEmail, 'email@mail.com', { paste: true })
			.typeText(this.formSubject, 'subject', { paste: true })
			.typeText(this.formComment, 'comment', { paste: true })
			.click(this.formSubmitButton)
	}
}
