import BaseHandler from '../src/BaseHandler';

export default class InsaneHandler extends BaseHandler {

	getDescription() {
		return 'Insane: everything and anything is insane';
	}

	getHelp() {
		return '*Insane* and other similar words.';
	}

	match(message) {
		const regexp = /insane/i;
		const regexpIgnore = /^help/i;

		return regexp.test(message.text) && !regexpIgnore.test(message.text);
	}

	handle(message) {
		const responseMessage = 'While the thing you\'ve written/seen may be *INSANE*, so are the people constantly '
			+ 'seeing texts about *INSANE* stuff. \n'
			+ 'Your text has not been removed, but here are some alternative words we suggest using in future '
			+ 'texts instead: \n'
			+ '* awesome \n'
			+ '* impressive \n'
			+ '* amazing \n'
			+ '* magnificent \n'
			+ '* eye-popping \n'
			+ '* phenomenal \n'
			+ '* majestic \n'
			+ '* prodigious \n'
			+ '* miraculous \n'
			+ '* superhuman \n'
			+ '* divine';

		message.respond(responseMessage);
	}
}