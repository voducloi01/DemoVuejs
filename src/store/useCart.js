import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";
export const useCart = defineStore("useCart", () => {
	const MyCart = ref([]);
	const getProduct = async () => {
		try {
			await axios
				.get("https://63564d459243cf412f812aea.mockapi.io/cart")
				.then((response) => {
					MyCart.value = response.data;
				});
		} catch (error) {
			console.log(error);
		}
	};
	onMounted(() => {
		getProduct();
	});
	const handleBuy = async (product) => {
		try {
			const res = await axios.post(
				"https://63564d459243cf412f812aea.mockapi.io/cart",
				product
			);

			MyCart.value.push(res.data);
			alert("Thêm thành công !");
		} catch (error) {
			console.log(error);
		}
	};

	return { handleBuy, MyCart };
});
