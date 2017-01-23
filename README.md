# ChuBot
*Bot made for everyday use with friends in Slack group chat.*

Bot is based on [SlackBot](https://github.com/kallaspriit/slackbot) by Priit Kallas.

## What bot can do:
- Help: prints commands help information
- Calculator: can evaluate mathematical expressions such as "(1+5)/2"
- Lunch: displays today's lunch menus

## Ideas for bot:
- Lmgtfy: Generates *Let me google that for you* url
- ++: Give and track positive things your friends do in Slack
- Weather: Get location and time based weather predictions
- Statistics: Get daily statistics about talking in chat

## Configuring
- copy `_config.js` to `config.js` and replace with your own info
- `npm install` to install the dependencies
- `npm run bot` to start it

### Keep the server running using PM2
- `npm install pm2 --global`
- `pm2 install pm2-logrotate`
- `pm2 set pm2-logrotate:max_size 10M`
- `pm2 set pm2-logrotate:retain 7`
- `pm2 set pm2-logrotate:interval_unit DD`
- `pm2 startup`
- `pm2 start bot.js --interpreter ./node_modules/.bin/babel-node`
- `pm2 save`

### PM2 helpful commands
- `pm2 list`
- `pm2 show server`
- `pm2 monit`
- `pm2 logs`
- `pm2 logs --out --lines 20 --timestamp`
- `pm2 stop server`
- `pm2 restart server`
- `pm2 delete server`

## Docs
- [Bot users](https://api.slack.com/bot-users)
- [Slack Real Time Messaging API](https://api.slack.com/rtm)
- [Message event](hhttps://api.slack.com/events/message)