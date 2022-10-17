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
		StoreInsert.changeId = valueProduct.id;
		StoreInsert.changeName = valueProduct.product;
		StoreInsert.changePrice = valueProduct.price;
		StoreInsert.changeImage = valueProduct.image;
		status.value = false;
	};

	const handleUpdate = () => {
		const ListProduct = [...dataStore.ListProduct];
		const index = ListProduct.findIndex((e) => e.id === StoreInsert.changeId);
		ListProduct[index].product = StoreInsert.changeName;
		ListProduct[index].price = StoreInsert.changePrice;
		ListProduct[index].image = StoreInsert.changeImage;

		StoreInsert.changeId = "";
		StoreInsert.changeName = "";
		StoreInsert.changePrice = "";
		StoreInsert.changeImage = "";
		status.value = true;
	};

	return { handleId, status, handleUpdate };
});
