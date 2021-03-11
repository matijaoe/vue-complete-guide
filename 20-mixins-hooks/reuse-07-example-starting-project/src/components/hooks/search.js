import { ref, computed, watch } from 'vue';

function useSearch(items, searchProp) {
	const enteredSearchTerm = ref('');
	const activeSearchTerm = ref('');

	const availableItems = computed(function() {
		let availItems = [];
		if (activeSearchTerm.value) {
			availItems = items.value.filter(usr =>
				usr[searchProp].includes(activeSearchTerm.value)
			);
		} else if (items.value) {
			availItems = items.value;
		}
		return availItems;
	});

	watch(enteredSearchTerm, function(newValue) {
		setTimeout(() => {
			if (newValue === enteredSearchTerm.value) {
				activeSearchTerm.value = newValue;
			}
		}, 300);
	});

	function updateSearch(val) {
		enteredSearchTerm.value = val;
	}

	return {
		enteredSearchTerm,
		updateSearch,
		availableItems
	};
}

export default useSearch;
