<template>
	<section>
		<base-card>
			<!-- Template is a default html element -->
			<!-- <template v-slot:header> -->
			<template #header>
				<h3>{{ fullName }}</h3>
				<base-badge
					:type="role"
					:caption="role.toUpperCase()"
				></base-badge>
			</template>
			<!-- default moze i netreba stavit, automatski ce se stavit u jedini prazni slot -->
			<template #default>
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

