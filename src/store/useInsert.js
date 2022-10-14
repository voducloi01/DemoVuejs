import { defineStore } from "pinia";
import { ref } from "vue";
import { useData } from "../store/useData";
export const useInsert = defineStore("useInsert", () => {
	const storeData = useData();
	const ListProducts = storeData.ListProduct;
	const changeId = ref("");
	const changeName = ref("");
	const changePrice = ref("");
	const changeImage = ref("");
	const handleinsert = () => {
		ListProducts.push({
			id: changeId,
			product: changeName,
			price: changePrice,
			image: changeImage,
		});
	};
	return { changeId, changeName, changePrice, changeImage, handleinsert };
});
