import { defineStore } from "pinia";
import { useData } from "../store/useData";

export const useCart = defineStore("useCart", () => {
	let MyCart = [];
	const dataStore = useData();

	const handleBuy = (id) => {
		const listProduct = dataStore.ListProduct.filter((e) => e.id === id);
		const checkCart = MyCart.map((e) => e.id);
		if (checkCart.includes(listProduct[0].id)) {
			const index = MyCart.findIndex((e) => e.id === listProduct[0].id);
			MyCart[index].soluong = MyCart[index].soluong + 1;
		} else {
			MyCart.push({
				id: listProduct[0].id,
				name: listProduct[0].product,
				price: listProduct[0].price,
				image: listProduct[0].image,
				soluong: 1,
			});
			alert("Thêm giỏ hàng thành công !");
		}
	};

	return { handleBuy, MyCart };
});
