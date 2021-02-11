<template>
	<form @submit.prevent="submitData" autocomplete="off">
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" v-model="enteredName" />
		</div>
		<div>
			<label for="phone">Phone</label>
			<input type="tel" id="phone" v-model="enteredPhone" />
		</div>
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" v-model="enteredEmail" />
		</div>
		<div>
			<button>Add contact</button>
		</div>
	</form>
</template>

<script>
export default {
	emits: ['add-contact'],
	data() {
		return {
			enteredName: '',
			enteredPhone: '',
			enteredEmail: '',
		};
	},
	methods: {
		submitData() {
			this.$emit(
				'add-contact',
				this.enteredName,
				this.enteredPhone,
				this.enteredEmail,
			);
		},
	},
};
</script>
