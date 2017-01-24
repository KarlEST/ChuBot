import BaseHandler from '../src/BaseHandler';

export default class LmgtfyHandler extends BaseHandler {

	static regexp = /^lmgtfy (.+)$/i;

	getDescription() {
		return 'Lmgtfy: Generates "Let me google that for you" url';
	}

	getHelp() {
		return '*Lmgtfy* returns "Let me google that for you" url';
	}

	match(message) {
		return LmgtfyHandler.regexp.test(message.text);
	}

	handle(message) {
		const matches = LmgtfyHandler.regexp.exec(message.text);
		const commandName = matches[1] || 'This should never happen but something went wrong!';
		const responseMessage = 'http://lmgtfy.com/?q=' + encodeURIComponent(commandName);

		message.respond(responseMessage);
	}
}