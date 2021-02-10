<template>
	<div class="container">
		<user-data @enterUser="showActiveUser"></user-data>
		<active-user :username="username" :age="userAge"></active-user>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			userAge: '',
		};
	},
	methods: {
		showActiveUser(name, age) {
			this.username = name;
			this.userAge = +age;
		},
	},
};
</script>

<style >
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:focus {
	outline: none;
}

body {
	color: #111;
	background: #d5d5ff;
	font-size: 1.4rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	padding: 6rem;
	display: flex;
	justify-content: center;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	max-width: 600px;
}
</style>