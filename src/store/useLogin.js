import { defineStore } from "pinia";
import { ref } from "vue";
export const useLogin = defineStore("useLogin", () => {
	const isShow = ref(true);
	const isLogin = ref(false);

	const users = [
		{
			username: "voducloi",
			password: "123",
		},
		{
			username: "voducloi1",
			password: "123456",
		},
	];

	const fetchUsers = (userCopy) => {
		const checkUser = users.filter(
			(e) =>
				e.username === userCopy.username && e.password === userCopy.password
		);

		if (checkUser.length === 0) {
			alert("Đăng nhập thất bại");
		} else {
			alert("Đăng nhập thành công");
			isLogin.value = true;
		}
	};

	const handeleRegister = (userCopy) => {
		const checkUserName = users.map((e) => e.username);
		if (checkUserName.toString().includes(userCopy.username)) {
			alert("Đăng Ký Thất Bại !");
		} else {
			users.push({
				username: userCopy.username,
				password: userCopy.password,
			});
			userCopy.username = "";
			userCopy.password = "";
			isShow.value = !isShow.value;
			alert("Đăng Ký Thành Công !");
		}
	};

	return { users, fetchUsers, handeleRegister, isShow, isLogin };
});
