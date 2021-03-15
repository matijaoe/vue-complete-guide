<template>
	<article
		class="border-2 border-green-300 rounded-md max-w-2xl mx-auto bg-transparent"
	>
		<header class="bg-green-300 relative">
			<slot name="header"></slot>
		</header>
		<div class="p-8">
			<slot></slot>
		</div>
	</article>
</template>