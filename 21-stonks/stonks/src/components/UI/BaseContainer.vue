<template>
	<article
		class="border-2 border-green-300 rounded-md p-6 max-w-2xl mx-auto bg-transparent flex flex-col"
	>
		<header>
			<slot name="header"></slot>
		</header>
		<div>
			<slot></slot>
		</div>
	</article>
</template>