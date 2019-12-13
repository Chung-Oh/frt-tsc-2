import Page from './page';
import PostHttp from '../http/post-http';
import Form from '../components/form';
import Validators from '../components/validators/validators';
import ValidatorManager from '../components/validators/validator-manager';

export default class PostNewPage implements Page {
	constructor(private postHttp: PostHttp) {
		this.init();
	}

	init(): void {
		document.querySelector('#my-form')
			.addEventListener('submit', (event: Event) => {
				event.preventDefault();
				this.submit();
				return false;
			});
	}

	submit() {
		if (!this.isValid()) {
			return;
		}
		this.postHttp.save({
			title: Form.getValueFromField('#title'),
			body: Form.getValueFromField('#body')
		}).then(obj => this.goToPostList());
	}

	goToPostList(): void {
		window.location.href = '/post/post-list.html';
	}

	isValid(): boolean {
		const validator = new ValidatorManager([
			{selectorField: '#title', rules: [Validators.required], messageInvalid: 'Título inválido.'},
			{selectorField: '#body', rules: [Validators.required], messageInvalid: 'Conteúdo inválido.'}
		]);
		return validator.isValid();
	}
}

new PostNewPage(new PostHttp());