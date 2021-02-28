<template>
	<teleport to="body">
		<div v-if="show" @click="tryClose" class="backdrop"></div>
		<dialog open v-if="show">
			<header>
				<slot name="header">
					<h2>{{ title }}</h2>
				</slot>
			</header>
			<section>
				<slot></slot>
			</section>
			<menu v-if="!fixed">
				<slot name="actions">
					<base-button @click="tryClose">Close</base-button>
				</slot>
			</menu>
		</dialog>
	</teleport>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			required: false,
		},
		fixed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ['close'],
	methods: {
		tryClose() {
			if (this.fixed) {
				return;
			}
			this.$emit('close');
		},
	},
};
</script>

<style scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 10;
	backdrop-filter: blur(4px);
}

dialog {
	position: fixed;
	top: 20vh;
	left: 50%;
	transform: translateX(-50%);
	width: 90%;
	z-index: 100;
	overflow: hidden;
	max-width: 50rem;

	border-radius: 1.2rem;
	border: none;
	border: 0.3rem solid var(--purple-1);
}

header {
	display: flex;
	background: var(--purple-2);
	padding: 1.6rem;
}

header h2 {
	color: var(--white-2);
}

section {
	padding: 1.6rem;
	margin: 0;
	margin-top: 1.6rem;
}

menu {
	padding: 1.6rem;
	display: flex;
	justify-content: flex-end;
	margin: 0;
}
</style>