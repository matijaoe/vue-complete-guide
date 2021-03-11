import { ref } from 'vue';

export default function useAlert() {
	const alertIsVisible = ref(false);

	function showAlert() {
		alertIsVisible.value = true;
	}
	function hideAlert() {
		alertIsVisible.value = false;
	}

	// we can return anything, ie array, doenst have to be object
	return {
		alertIsVisible,
		showAlert,
		hideAlert
	};
}
