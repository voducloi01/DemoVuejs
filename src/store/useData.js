import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useData = defineStore("useData", () => {
	let ListProduct = ref([]);
	const product = {
		id: "",
		name: "",
		price: 0,
		image: "",
	};

	const handleId = (Product) => {
		product.id = Product.id;
		product.name = Product.name;
		product.price = Product.price;
		product.image = Product.image;
	};
	const searchText = ref("");
	const searchProduct = computed(() =>
		ListProduct.value.filter((e) =>
			e.product.toLowerCase().includes(searchText.value.toLowerCase())
		)
	);

	const DeleteId = async (id) => {
		console.log(id);
	};

	return {
		ListProduct,
		product,
		searchProduct,
		searchText,
		DeleteId,
		handleId,
	};
});
