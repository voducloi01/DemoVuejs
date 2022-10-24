import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useData = defineStore("useData", () => {
	const ListProduct = ref([
		{
			id: 1,
			product: "LapTop MacBook",
			price: 100,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZHli-QLtw3UamhiDq4H9o4fuIHd9rcgA-w&usqp=CAU",
		},
		{
			id: 2,
			product: "LapTop Asus",
			price: 300,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16rrJ2XljHQFvcI3wCJehmex248cfHTrfYw&usqp=CAU",
		},
		{
			id: 3,
			product: "LapTop Dell",
			price: 400,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3bLKfrXKuhnU9bBQeiS0RJuWnkEt3xG6ZA&usqp=CAU",
		},
	]);
	const product = {
		id: "",
		product: "",
		price: "",
		image: "",
	};
	const handleinsert = (product) => {
		ListProduct.value.push({
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

	const searchText = ref("");
	const searchProduct = computed(() =>
		ListProduct.value.filter((e) =>
			e.product.toLowerCase().includes(searchText.value.toLowerCase())
		)
	);

	return { ListProduct, handleinsert, product, searchProduct, searchText };
});
