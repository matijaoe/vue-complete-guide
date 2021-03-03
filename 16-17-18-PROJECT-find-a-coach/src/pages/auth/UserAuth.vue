<template>
	<div>
		<base-dialog
			:show="!!error"
			title="An error occurred"
			@close="handleError"
		>
			{{ error }}
		</base-dialog>
		<base-dialog :show="isLoading" title="Authenticating..." fixed>
			<base-spinner></base-spinner>
		</base-dialog>
		<div class="row">
			<base-card class="card" mode="shadow" color="color">
				<form @submit.prevent="submitForm">
					<div class="form-control">
						<transition name="title-fade" mode="out-in">
							<h2 v-if="mode === 'login'">Login</h2>
							<h2 v-else>Signup</h2>
						</transition>
					</div>
					<div class="form-control">
						<label for="email">Email</label>
						<input type="email" id="email" v-model.trim="email" />
					</div>
					<div class="form-control">
						<label for="password">Password</label>
						<input
							type="password"
							id="password"
							v-model.trim="password"
						/>
					</div>
					<p v-if="!formIsValid">
						Please enter a valid email and password (must be at
						least 6 characters long
					</p>
					<div class="actions">
						<transition name="btn-fade" mode="out-in">
							<base-button v-if="mode === 'login'"
								>Login</base-button
							>
							<base-button
								type="button"
								mode="flat"
								@click="switchAuthMode"
								v-else
								>Login instead</base-button
							>
						</transition>
						<transition name="btn-fade" mode="out-in">
							<base-button v-if="mode === 'signup'"
								>Signup</base-button
							>
							<base-button
								type="button"
								mode="flat"
								@click="switchAuthMode"
								v-else
								>Signup instead</base-button
							>
						</transition>
					</div>
				</form>
			</base-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			formIsValid: true,
			mode: 'login',
			isLoading: false,
			error: null,
		};
	},
	computed: {
		submitButtonCaption() {
			return this.mode === 'login' ? 'Login' : 'Signup';
		},
		switchModeButtonCaption() {
			return this.mode === 'login' ? 'Signup instead' : 'Login instead';
		},
	},
	methods: {
		async submitForm() {
			this.formIsValid = true;
			if (
				!this.validateEmail(this.email) ||
				!this.validatePassword(this.password)
			) {
				this.formIsValid = false;
				return;
			}

			const actionPayload = {
				email: this.email,
				password: this.password,
			};

			this.isLoading = true;

			try {
				await this.$store.dispatch(this.mode, actionPayload);

				// if you click on element that has query, redirect to that route after submit, otherwise to coaches
				// ie click on 'login to register as coach' redirects to coach registration
				// http://localhost:8080/auth?redirect=register

				const redirectUrl = `/${
					this.$route.query.redirect || 'coaches'
				}`;

				this.$router.replace(redirectUrl);
			} catch (err) {
				console.log(err);

				if (err.message === 'EMAIL_EXISTS') {
					this.error = 'Email already in use.';
				} else if (err.message === 'TOO_MANY_ATTEMPTS_TRY_LATER') {
					this.error =
						'We have blocked all requests from this device due to unusual activity. Try again later.';
				} else if (err.message === 'EMAIL_NOT_FOUND') {
					this.error = 'Email not found.';
				} else if (err.message === 'INVALID_PASSWORD') {
					this.error = 'Invalid password.';
				} else if (err.message === 'USER_DISABLED') {
					this.error =
						'Account has been disabled by an administrator.';
				} else {
					this.error = 'Failed to authenticate, try again later.';
				}
			}

			this.isLoading = false;
		},
		switchAuthMode() {
			this.mode = this.mode === 'login' ? 'signup' : 'login';
		},
		validateEmail(email) {
			const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
			return regex.test(email);
		},
		validatePassword() {
			if (this.isEmpty(this.password) || this.password.length < 6) {
				return false;
			} else {
				return true;
			}
		},
		isEmpty(value) {
			return value === '';
		},
		handleError() {
			this.error = null;
		},
	},
};
</script>

<style scoped>
.row {
	margin-top: 6.4rem;
}
.card {
	margin-top: 5rem;
}

.form-control {
	margin: 1.6rem 0;
}

h2 {
	font-family: var(--font-display);
	font-weight: normal;
	text-align: center;
	font-size: 2.4rem;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
	font-size: 1.4rem;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 0.2rem solid #ccc;
	font: inherit;
	padding: 0.2em 0.4em;
	border-radius: 0.8rem;
}

input:focus,
textarea:focus {
	background-color: var(--pink-2);
	outline: none;
	border-color: var(--purple-3);
}

input[type='checkbox'] {
	display: inline-block;
	width: auto;
	border: none;
	transform: scale(1.2);
}

h3 {
	margin: 0.5rem 0;
	font-size: 1.2rem;
	margin-bottom: 1rem;
}

button[type='button'] {
	order: -1;
}

.actions {
	margin-top: 2.4rem;
	display: flex;
	gap: 1.6rem;
	justify-content: flex-end;
}

p {
	margin-top: 0.2em;
	margin-bottom: 1.6rem;
	font-size: 1.4rem;
}

.title-fade-enter-from {
	opacity: 0;
	transform: translateX(-40px);
}

.title-fade-leave-to {
	opacity: 0;
	transform: translateX(40px);
}

.title-fade-enter-active {
	transition: all 300ms ease-out 100ms;
}

.title-fade-leave-active {
	transition: all 300ms ease-in;
}

.btn-fade-enter-from {
	opacity: 0;
	transform: translateX(-40px);
}

.btn-fade-leave-to {
	opacity: 0;
}

.btn-fade-enter-active {
	transition: all 300ms ease-out;
}

.btn-fade-leave-active {
	transition: all 300ms ease-in;
}
</style>