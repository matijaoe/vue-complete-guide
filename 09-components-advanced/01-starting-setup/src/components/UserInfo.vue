<template>
	<section>
		<base-card>
			<!-- Template is a default html element -->
			<template v-slot:header>
				<h3>{{ fullName }}</h3>
				<base-badge
					:type="role"
					:caption="role.toUpperCase()"
				></base-badge>
			</template>
      <!-- default moze i netreba stavit, automatski ce se stavit u jedini prazni slot -->
			<template v-slot:default>
				<p>{{ infoText }}</p>
			</template>
		</base-card>
	</section>
</template>

<script>
export default {
	props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>