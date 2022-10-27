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
						SoLuong: SoLuong.value,
					}
				);
				const data = { ...res.data, SoLuong: SoLuong.value };
				MyCart.value.push(data);
				Total.value = 0;
				for (const value of MyCart.value) {
					Total.value += value.price * value.SoLuong;
				}
				alert("Thêm sản phẩm thành công !");
			} else {
				const index = MyCart.value.findIndex((e) => e.id === product.id);
				MyCart.value[index].SoLuong += 1;
				Total.value = 0;
				for (const value of MyCart.value) {
					Total.value += value.price * value.SoLuong;
				}
				alert("Đã có trong giỏ hàng !");
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
			alert("Xóa thành công !");
			Total.value = 0;
			for (const value of MyCart.value) {
				Total.value += value.price * value.SoLuong;
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleUpdate = async (product) => {
		try {
			const respon = await axios.put(
				`https://63564d459243cf412f812aea.mockapi.io/cart/${product.id}`,
				{
					product: product.id,
					price: product.price,
					image: product.image,
					SoLuong: Number(product.SoLuong),
				}
			);

			const index = MyCart.value.findIndex((e) => e.id === product.id);
			MyCart.value[index].SoLuong = respon.data.SoLuong;
			Total.value = 0;
			for (const value of MyCart.value) {
				Total.value += value.price * value.SoLuong;
			}
			alert("Cập nhập thành công!");
		} catch (error) {
			console.log(error);
		}
	};

	return { handleBuy, MyCart, handleDelete, Total, SoLuong, handleUpdate };
});
