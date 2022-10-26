import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { router } from "../main";
import axios from "axios";
export const useLogin = defineStore("useLogin", () => {
	const isShow = ref(true);

	const users = ref([]);

	const getUsers = async () => {
		try {
			await axios
				.get("https://63564d459243cf412f812aea.mockapi.io/users")
				.then((response) => {
					users.value = response.data;
				});
		} catch (error) {
			console.log(error);
		}
	};
	onMounted(() => {
		getUsers();
	});
	const handeleRegister = async (userCopy) => {
		try {
			const checkUserName = users.value.map((e) => e.username);
			if (checkUserName.includes(userCopy.username)) {
				alert("Đăng Ký Thất Bại !");
			} else {
				const res = await axios.post(
					"https://63564d459243cf412f812aea.mockapi.io/users",
					userCopy
				);
				users.value.push(res.data);
				alert("Đăng ký thành công !");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchUsers = (userCopy) => {
		const checkUser = users.value.filter(
			(e) =>
				e.username === userCopy.username && e.password === userCopy.password
		);
		if (checkUser.length === 0) {
			alert("Đăng nhập thất bại");
		} else {
			alert("Đăng nhập thành công");
			router.push({ path: "/", replace: true });
		}
	};

	return { users, fetchUsers, handeleRegister, isShow, getUsers };
});
