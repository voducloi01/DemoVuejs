import { defineStore } from "pinia";
import { useData } from "../store/useData";
import { useInsert } from "../store/useInsert";
import { ref } from "vue";
export const useUpdate = defineStore("useUpdate", () => {
	const dataStore = useData();
	const StoreInsert = useInsert();
	let status = ref(true);
	const handleId = (id) => {
		const ListProduct = dataStore.ListProduct;
		const idProduct = ListProduct.findIndex((e) => e.id === id);
		const valueProduct = ListProduct[idProduct];

		StoreInsert.product.id = valueProduct.id;
		StoreInsert.product.product = valueProduct.product;
		StoreInsert.product.price = valueProduct.price;
		StoreInsert.product.image = valueProduct.image;
		status.value = false;
	};

	const handleUpdate = () => {
		const ListProduct = [...dataStore.ListProduct];
		const index = ListProduct.findIndex((e) => e.id === StoreInsert.product.id);

		ListProduct[index].product = StoreInsert.product.product;
		ListProduct[index].price = StoreInsert.product.price;
		ListProduct[index].image = StoreInsert.product.image;
		status.value = true;

		StoreInsert.product.id = "";
		StoreInsert.product.product = "";
		StoreInsert.product.price = "";
		StoreInsert.product.image = "";
	};

	return { handleId, status, handleUpdate };
});
