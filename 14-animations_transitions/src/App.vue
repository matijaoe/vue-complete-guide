<template>
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component" />
		</transition>
	</router-view>

	<div class="container">
		<users-list></users-list>
	</div>

	<div class="container">
		<div class="block" :class="{ animate: animatedBlock }"></div>
		<button @click="animateBlock">Animate</button>
	</div>

	<div class="container">
		<!-- appear makes animation run on initial page load -->
		<!-- <transition name="para" enter-to-class="some-class"> -->
		<transition name="para" appear>
			<p v-if="paraIsVisible">This is only sometimes visible</p>
		</transition>
		<button @click="toggleParagraph">Toggle Paragraph (CSS)</button>
	</div>

	<div class="container">
		<!-- :css="false" skips vue searching/parsing css for transition times, improves performance if only js is used  -->
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@enter-cancelled="enterCancelled"
			@leave-cancelled="leaveCancelled"
			:css="false"
		>
			<p v-if="para2IsVisible">This is only sometimes visible</p>
		</transition>
		<button @click="toggleParagraph2">Toggle Paragraph (JS)</button>
	</div>

	<div class="container">
		<!-- exception where you are allowed to have 2 components, bcs at most one will be added to the DOM at the same time -->
		<transition name="fade-button" mode="out-in">
			<button @click="showUsers" v-if="!usersAreVisible">
				Show Users
			</button>
			<button @click="hideUsers" v-else>Hide Users</button>
		</transition>
	</div>

	<!-- transition must only have ONE child element
	if custom component - its definition has to have one root -->
	<base-modal @close="hideDialog" :open="dialogIsVisible">
		<p>This is a test dialog!</p>
		<button @click="hideDialog">Close it!</button>
	</base-modal>

	<div class="container">
		<button @click="showDialog">Show Dialog</button>
	</div>
</template>  

<script>
import UsersList from './components/UsersList';

export default {
	components: {
		UsersList,
	},
	data() {
		return {
			animatedBlock: false,
			dialogIsVisible: false,
			paraIsVisible: true,
			para2IsVisible: false,
			usersAreVisible: false,
			enterInterval: null,
			leaveInterval: null,
		};
	},
	methods: {
		// this are always emitted behind the scenes (then css is at work with them i guess)
		enterCancelled(el) {
			console.log('enterCancelled😎😎😎😎😎😎😎');
			console.log(el);
			clearInterval(this.enterInterval);
		},
		leaveCancelled(el) {
			console.log('leaveCancelled😂😂😂😂😂😂😂');
			console.log(el);
			clearInterval(this.leaveInterval);
		},
		beforeEnter(el) {
			// any name
			console.log('beforeEnter');
			console.log(el);
			el.style.opacity = 0;
		},
		enter(el, done) {
			console.log('enter');
			console.log(el);

			let round = 1;
			this.enterInterval = setInterval(() => {
				el.style.opacity = round++ * 0.01;
				if (round > 100) {
					clearInterval(this.enterInterval);
					// if animation is in js, we call done() when its done so afterEnter knows when to execute, otherwise in executes instantly (vue ususally checks css but we dont use it here)
					done();
				}
			}, 20);
		},
		afterEnter(el) {
			// gets called after animation finishes - vue parses css to find out when
			console.log('afterEnter');
			console.log(el);
		},
		beforeLeave(el) {
			console.log('beforeLeave');
			console.log(el);
			// el.style.opacity = 1;
		},
		leave(el, done) {
			console.log('leave');
			console.log(el);

			let round = 1;
			this.leaveInterval = setInterval(() => {
				el.style.opacity = 1 - round++ * 0.01;

				// console.log('opacity:' + el.style.opacity);
				if (round > 100) {
					clearInterval(this.leaveInterval);
					done();
				}
			}, 20);
		},
		afterLeave(el) {
			console.log('afterLeave');
			console.log(el);
		},
		animateBlock() {
			this.animatedBlock = true;
		},
		toggleParagraph() {
			this.paraIsVisible = !this.paraIsVisible;
		},
		toggleParagraph2() {
			this.para2IsVisible = !this.para2IsVisible;
		},
		showDialog() {
			this.dialogIsVisible = true;
		},
		hideDialog() {
			this.dialogIsVisible = false;
		},
		showUsers() {
			this.usersAreVisible = true;
		},
		hideUsers() {
			this.usersAreVisible = false;
		},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}
html {
	font-family: sans-serif;
}
body {
	margin: 0;
}
button {
	font: inherit;
	padding: 0.5rem 2rem;
	border: 1px solid #810032;
	border-radius: 30px;
	background-color: #810032;
	color: white;
	cursor: pointer;
}
button:hover,
button:active {
	background-color: #a80b48;
	border-color: #a80b48;
}
.block {
	width: 8rem;
	height: 8rem;
	background-color: #290033;
	margin-bottom: 2rem;
	/* transition: 300ms all ease-out; */
}
.container {
	max-width: 40rem;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	border: 2px solid #ccc;
	border-radius: 12px;
}

.animate {
	/* transform: translateX(-150px) translateY(20px); */
	/* background: #f34242; */
	/* animation: slide-fade 500ms alternate both infinite; */
	animation: slide-scale 500ms ease-in forwards;
}

/* animationsa are also supported but you only pout it in -active classes */

.para-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}

.para-enter-active {
	transition: all 300ms ease-out;
	/* animation: slide-scale 500ms ease-out; */
}

.para-enter-to {
	opacity: 1;
	transform: translateY(0);
}

.para-leave-from {
	opacity: 1;
	transform: translateY(0);
}

.para-leave-active {
	transition: all 300ms ease-in;
	/* animation: slide-scale 500ms ease-in; */
}

.para-leave-to {
	opacity: 0;
	transform: translateY(15px);
}

.fade-button-enter-from,
.fade-button-leave-to {
	opacity: 0;
}

.fade-button-enter-active {
	transition: opacity 300ms ease-out;
}

.fade-button-leave-active {
	transition: opacity 300ms ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
	opacity: 1;
}

.route-enter-from {
	opacity: 0;
	transform: translateX(100px);
}
.route-enter-active {
	transition: all 300ms ease-out;
}

.route-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}

.route-leave-active {
	transition: all 300ms ease-in;
}

@keyframes slide-scale {
	0% {
		transform: translateX(0) scale(1);
	}
	70% {
		transform: translateX(-120px) scale(1.1);
	}
	100% {
		transform: translateX(-150px) scale(1);
	}
}
</style>