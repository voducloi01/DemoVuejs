import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import axios from "axios";
export const useData = defineStore("useData", () => {
	let ListProduct = ref([]);
	const product = {
		id: "",
		product: "",
		price: "",
		image: "",
	};
	const handleinsert = async (product) => {
		try {
			const res = await axios.post(
				"https://63564d459243cf412f812aea.mockapi.io/products",
				product
			);

			ListProduct.value.push(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	const searchText = ref("");
	const searchProduct = computed(() =>
		ListProduct.value.filter((e) =>
			e.product.toLowerCase().includes(searchText.value.toLowerCase())
		)
	);

	const getProduct = async () => {
		try {
			await axios
				.get("https://63564d459243cf412f812aea.mockapi.io/products")
				.then((response) => {
					ListProduct.value = response.data;
				});
		} catch (error) {
			console.log(error);
		}
	};

	const DeleteId = async (id) => {
		try {
			await axios.delete(
				`https://63564d459243cf412f812aea.mockapi.io/products/${id}`
			);
			ListProduct.value = ListProduct.value.filter((e) => e.id !== id);
		} catch (error) {
			console.log(error);
		}
	};

	let status = ref(true);

	const handleId = (id) => {
		const idProduct = ListProduct.value.findIndex((e) => e.id === id);
		const valueProduct = ListProduct.value[idProduct];
		product.id = valueProduct.id;
		product.product = valueProduct.product;
		product.price = valueProduct.price;
		product.image = valueProduct.image;
		status.value = false;
	};
	const handleUpdate = async (product) => {
		try {
			const respon = await axios.put(
				`https://63564d459243cf412f812aea.mockapi.io/products/${product.id}`,
				product
			);
			const index = ListProduct.value.findIndex((e) => e.id === product.id);
			ListProduct.value[index].product = respon.data.product;
			ListProduct.value[index].price = respon.data.price;
			ListProduct.value[index].image = respon.data.image;
		} catch (error) {
			console.log(error);
		}
	};

	onMounted(() => {
		getProduct();
	});

	return {
		ListProduct,
		handleinsert,
		product,
		searchProduct,
		searchText,
		DeleteId,
		handleUpdate,
		handleId,
		status,
	};
});
