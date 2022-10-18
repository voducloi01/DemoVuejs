import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useInsert } from "./useInsert";

export const useSearch = defineStore("useSearch", () => {
	const searchText = ref("");
	const productCopy = useInsert();

	let listSearch = productCopy.productCopy;

	const searchProduct = computed(() =>
		listSearch.filter((e) =>
			e.product.toLowerCase().includes(searchText.value.toLowerCase())
		)
	);
	return { searchText, searchProduct };
});
