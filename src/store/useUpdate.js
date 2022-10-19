import { defineStore } from "pinia";
import { useData } from "../store/useData";

import { ref } from "vue";
export const useUpdate = defineStore("useUpdate", () => {
	const dataStore = useData();
	let status = ref(true);
	const handleId = (id) => {
		const ListProduct = dataStore.ListProduct;
		const idProduct = ListProduct.findIndex((e) => e.id === id);
		const valueProduct = ListProduct[idProduct];

		dataStore.product.id = valueProduct.id;
		dataStore.product.product = valueProduct.product;
		dataStore.product.price = valueProduct.price;
		dataStore.product.image = valueProduct.image;
		status.value = false;
	};

	const handleUpdate = () => {
		const ListProduct = dataStore.ListProduct;
		const index = ListProduct.findIndex((e) => e.id === dataStore.product.id);

		ListProduct[index].product = dataStore.product.product;
		ListProduct[index].price = dataStore.product.price;
		ListProduct[index].image = dataStore.product.image;
		status.value = true;

		dataStore.product.id = "";
		dataStore.product.product = "";
		dataStore.product.price = "";
		dataStore.product.image = "";
	};

	return { handleId, status, handleUpdate };
});
