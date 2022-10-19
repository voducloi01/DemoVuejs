import { defineStore } from "pinia";

export const useLogin = defineStore("useLogin", () => {
	const users = [
		{
			id: 1,
			username: "voducloi",
			password: "123",
		},
		{
			id: 2,
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
		}
	};

	return { users, fetchUsers };
});
