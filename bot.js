import Bot from './src/Bot';
// import config from './config';

// run the bot
let conf = {
	default: {}
};

if (!process.env.token) { // workaround for heroku
	conf = require('./config');
}
Bot.run(conf.default);