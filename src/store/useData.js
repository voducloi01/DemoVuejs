import { defineStore } from "pinia";
import { ref } from "vue";
export const useData = defineStore("counter", () => {
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

	return { ListProduct };
});
