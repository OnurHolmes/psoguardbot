module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log("Bot Aktif!");
		client.user.setActivity('.gg/prosocceronlinetr');
	},
};
