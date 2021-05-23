<template>
	<header class="bg-green-100 mb-8 border-b-4 border-green-700">
		<div
			class="2xl:container mx-auto flex flex-col md:flex-row text-sm lg:text-base"
		>
			<div
				class="flex items-center justify-between space-x-4 flex-1 pr-1 sm:pr-2 pl-4 py-2 md:px-6 md:py-3"
			>
				<nav class="flex items-center">
					<ul class="inline-flex items-center space-x-2 md:space-x-4">
						<li id="logo" class="font-display font-medium mr-2">
							<router-link
								:to="{ name: 'home' }"
								class="flex items-center space-x-1"
								id="logo"
							>
								<svg
									class="w-7 h-7"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
									></path>
								</svg>
								<span class="text-3xl hidden md:block"
									>StonkTrader</span
								>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'portfolio' }"
								class="py-2 px-3 rounded-md hover:bg-green-200"
								>Portfolio</router-link
							>
						</li>
						<li>
							<router-link
								:to="{ name: 'stocks' }"
								class="py-2 px-3 rounded-md hover:bg-green-200"
								>Stocks</router-link
							>
						</li>
					</ul>
				</nav>
				<div class="flex items-center">
					<div
						class="hidden sm:inline-flex items-center space-x-2 space-x-4"
					>
						<base-button mode="clear" @click="endDay"
							>End Day</base-button
						>
						<base-button
							mode="clear"
							@click="toggleDropdown"
							class="relative"
						>
							<p class="flex items-center space-x-2">
								<span>Save & Load</span>
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</p>
							<transition name="slide">
								<div
									v-if="dropdownActive"
									class="shadow absolute top-full mt-1 md:mt-2 rounded-md bg-green-50 border-2 border-green-300 hidden sm:flex flex-col overflow-hidden w-full transform -translate-x-3 z-50"
								>
									<base-button mode="clear" @click="saveDay"
										>Save</base-button
									>
									<base-button mode="clear" @click="loadDay"
										>Load</base-button
									>
								</div>
							</transition>
						</base-button>
					</div>
					<div class="sm:hidden flex items-center">
						<transition name="slide">
							<base-button
								class="relative"
								mode="clear"
								@click="toggleMobileNav"
							>
								<div>
									<svg
										class="w-6 h-6 block"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
										></path>
									</svg>
								</div>
								<div
									v-if="mobileDropdownActive"
									class="shadow absolute right-0 top-full mt-1 rounded-md bg-green-50 border-2 border-green-300 flex sm:hidden flex-col overflow-hidden w-32 z-50"
								>
									<base-button mode="clear" @click="endDay"
										>End Day</base-button
									>
									<base-button mode="clear" @click="saveDay"
										>Save</base-button
									>
									<base-button mode="clear" @click="loadDay"
										>Load</base-button
									>
								</div>
							</base-button>
						</transition>
					</div>
				</div>
			</div>
			<div
				class="bg-green-700 text-green-100 flex items-center justify-center px-6 pt-1 md:pt-0"
			>
				<p
					class="flex flex-row md:flex-col items-center justify-center space-x-2 md:space-x-0"
				>
					<span class="uppercase text-xs">Funds</span>
					<span class="text-3xl font-display"
						>$ {{ formattedFunds }}</span
					>
				</p>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BaseButton from '../UI/BaseButton.vue';

export default {
	components: { BaseButton },
	data() {
		return {
			dropdownActive: false,
			mobileDropdownActive: false,
		};
	},
	computed: {
		...mapGetters('portfolio', ['formattedFunds']),
	},
	methods: {
		...mapActions('stocks', { endDay: 'randomizeStocks' }),
		...mapActions(['saveDay', 'loadDay']),
		toggleMobileNav() {
			this.mobileDropdownActive = !this.mobileDropdownActive;
			this.dropdownActive = false;
		},
		toggleDropdown() {
			this.dropdownActive = !this.dropdownActive;
			this.mobileDropdownActive = false;
		},
	},
};
</script>

<style scoped lang="postcss">
.router-link-active {
	@apply bg-green-200;
}

#logo.router-link-active {
	@apply bg-transparent;
}

/* .fade-up-enter-active,
.fade-up-leave-active {
	transition: opacity 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
	opacity: 0;
	transform: translateY(-10px);
} */
</style>