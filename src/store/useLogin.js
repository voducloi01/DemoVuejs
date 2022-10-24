import { defineStore } from "pinia";
import { ref } from "vue";
import { router } from "../main";
export const useLogin = defineStore("useLogin", () => {
	const isShow = ref(true);

	const users = [
		{
			username: "voducloi",
			password: "123",
		},
		{
			username: "voducloi1",
			password: "123",
		},
	];

	const handeleRegister = (userCopy) => {
		const checkUserName = users.map((e) => e.username);
		if (checkUserName.toString().includes(userCopy.username)) {
			alert("Đăng Ký Thất Bại !");
		} else {
			users.push({
				username: userCopy.username,
				password: userCopy.password,
			});
			isShow.value = !isShow.value;
			alert("Đăng Ký Thành Công !");
		}
	};
	const fetchUsers = (userCopy) => {
		const checkUser = users.filter(
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

	return { users, fetchUsers, handeleRegister, isShow };
});
