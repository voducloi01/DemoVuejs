import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";
export const useCart = defineStore("useCart", () => {
	const MyCart = ref([]);
	const Total = ref(0);
	const SoLuong = ref(1);
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
			const checkcart = MyCart.value.find((e) => e.id === product.id);
			if (!checkcart) {
				const res = await axios.post(
					"https://63564d459243cf412f812aea.mockapi.io/cart",
					{
						product: product.id,
						price: product.price,
						image: product.image,
					}
				);
				const data = { ...res.data, SoLuong: SoLuong.value };
				MyCart.value.push(data);
				Total.value += product.price;
				alert("Thêm sản phẩm thành công !");
			} else {
				alert("Đã có trong giỏ hàng !");
				const index = MyCart.value.findIndex((e) => e.id === product.id);
				Total.value += product.price;
				MyCart.value[index].SoLuong += 1;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (product) => {
		try {
			await axios.delete(
				`https://63564d459243cf412f812aea.mockapi.io/cart/${product.id}`
			);
			MyCart.value = MyCart.value.filter((e) => e.id !== product.id);
			// Total.value = Total.value - Number(product.price);
		} catch (error) {
			console.log(error);
		}
	};

	return { handleBuy, MyCart, handleDelete, Total, SoLuong };
});
