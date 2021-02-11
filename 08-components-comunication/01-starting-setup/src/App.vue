<template>
	<section>
		<header>
			<h1>My Friends</h1>
		</header>
		<new-friend @add-contact="addContact"></new-friend>
		<ul>
			<friend-contact
				v-for="friend in friends"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:phone-number="friend.phone"
				:email-address="friend.email"
				:is-favorite="friend.isFavorite"
				@toggle-favorite="toggleFavoriteStatus"
				@delete="deleteContact"
			></friend-contact>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			friends: [
				{
					id: 'lovrom1',
					name: 'Lovro Majer',
					phone: '098 3272 1002',
					email: 'lovrek@mail.com',
					isFavorite: true,
				},
				{
					id: 'brunop1',
					name: 'Bruno Petković',
					phone: '093 7873 4000',
					email: 'petko@gmail.com',
					isFavorite: false,
				},
				{
					id: 'domil1',
					name: 'Domagoj Livaković',
					phone: '091 2228 0239',
					email: 'liva@gmail.com',
					isFavorite: false,
				},
			],
		};
	},
	watch: {
		friends(value) {
			console.log('Friends changed');
			// eslint-disable-next-line no-restricted-syntax
			for (const friend in value) {
				if (Object.prototype.hasOwnProperty.call(value, friend)) {
					console.log(friend);
				}
			}
		},
	},
	methods: {
		toggleFavoriteStatus(friendId) {
			const identifiedFriend = this.friends.find(
				(friend) => friend.id === friendId,
			);
			identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
		},
		addContact(name, phone, email) {
			const newFriendContact = {
				id: new Date().toISOString(),
				name,
				phone,
				email,
				isFavorite: false,
			};
			this.friends.push(newFriendContact);
		},
		deleteContact(friendId) {
			this.friends = this.friends.filter(
				(friend) => friend.id !== friendId,
			);
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
	box-sizing: border-box;
}
html {
	font-family: 'Jost', sans-serif;
}
body {
	margin: 0;
	background: #cfcfcf;
}
header {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 3rem auto;
	border-radius: 10px;
	padding: 1rem;
	background-color: #58004d;
	color: white;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}
#app ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
#app li,
#app form {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}
#app h2 {
	font-size: 2rem;
	border-bottom: 4px solid #ccc;
	color: #58004d;
	margin: 0 0 1rem 0;
}
#app button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
	font: inherit;
	padding: 0.15rem;
}
#app label {
	font-weight: bold;
	margin-right: 1rem;
	width: 7rem;
	display: inline-block;
}
#app form div {
	margin: 1rem 0;
}
</style>
