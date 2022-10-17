import { defineStore } from "pinia";
import { useData } from "../store/useData";
export const useInsert = defineStore("useInsert", () => {
	const storeData = useData();
	const ListProducts = storeData.ListProduct;

	const product = {
		id: "",
		product: "",
		price: "",
		image: "",
	};
	const handleinsert = (product) => {
		ListProducts.push({
			id: product.id,
			product: product.product,
			price: product.price,
			image: product.image,
		});
		product.id = "";
		product.product = "";
		product.price = "";
		product.image = "";
	};
	return { handleinsert, product };
});
