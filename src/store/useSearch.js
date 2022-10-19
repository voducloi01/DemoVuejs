import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useData } from "./useData";

export const useSearch = defineStore("useSearch", () => {
	const searchText = ref("");
	const productCopy = useData();

	let listSearch = productCopy.ListProduct;

	const searchProduct = computed(() =>
		listSearch.filter((e) =>
			e.product.toLowerCase().includes(searchText.value.toLowerCase())
		)
	);
	return { searchText, searchProduct };
});
