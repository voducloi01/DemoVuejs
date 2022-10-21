import { defineStore } from "pinia";
import { useData } from "../store/useData";

export const useDelete = defineStore("useDelete", () => {
	const dataStore = useData();
	const DeleteId = (ids) => {
		const ListProduct = dataStore.ListProduct;
		const idProduct = ListProduct.findIndex((e) => e.id === ids);
		ListProduct.splice(idProduct, 1);
	};

	return { DeleteId };
});
