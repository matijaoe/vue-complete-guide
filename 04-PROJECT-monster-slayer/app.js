/* eslint-disable no-plusplus */
// https://monster-slayer.mat2ja.vercel.app/

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// eslint-disable-next-line no-undef
const app = Vue.createApp({
	data() {
		return {
			playerName: '',
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logMessages: [],
		};
	},
	computed: {
		monsterBarStyles() {
			const damage = this.monsterHealth / 100;
			return { transform: `scaleX(${damage})` };
		},
		playerBarStyles() {
			const damage = this.playerHealth / 100;
			return { transform: `scaleX(${damage})` };
		},
		mayUseSpecialAttack() {
			return this.currentRound % 3 !== 0;
		},
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				this.winner = 'draw';
			} else if (value <= 0) {
				this.winner = 'monster';
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				this.winner = 'draw';
			} else if (value <= 0) {
				this.winner = 'player';
			}
		},
		winner(value) {
			if (value === 'player') {
				this.monsterHealth = 0;
				this.addLogMessage(this.playerName, 'win', '');
			} else if (value === 'monster') {
				this.playerHealth = 0;
				this.addLogMessage('monster', 'win', '');
			} else if (value === 'draw') {
				this.playerHealth = 0;
				this.monsterHealth = 0;
				this.addLogMessage('monster', 'loss', '');
				this.addLogMessage(this.playerName, 'loss', '');
			}
		},
		currentRound(value) {
			if (value > 0 && !this.playerName.trim()) {
				this.playerName = 'Player';
			}
		},
		playerName(value) {
			if (value.length > 16) {
				this.playerName = value.slice(0, 16);
			}
		},
	},
	methods: {
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue;
			this.addLogMessage(
				this.playerName || 'player',
				'attack',
				attackValue
			);
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;
			this.addLogMessage('monster', 'attack', attackValue);
		},
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(10, 25);
			this.monsterHealth -= attackValue;
			this.addLogMessage(this.playerName, 'special-attack', attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomValue(12, 20);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addLogMessage(this.playerName, 'heal', healValue);
			this.attackPlayer();
		},
		surrenderPlayer() {
			this.playerHealth = 0;
			this.addLogMessage(this.playerName, 'forfeit', '');
		},
		restartGame() {
			this.winner = null;
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.currentRound = 0;
			this.playerName = '';
			this.logMessages = [];
		},
		setPlayerName(e) {
			this.playerName = e.target.value;
		},
		addLogMessage(who, what, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			});
		},
		stylePlayer(log) {
			return {
				'log--player': log.actionBy === this.playerName,
				'log--monster': log.actionBy === 'monster',
			};
		},
		currentTime() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds = now.getSeconds();
			return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
				seconds < 10 ? `0${seconds}` : seconds
			}`;
		},
	},
});

const vm = app.mount('#game');
