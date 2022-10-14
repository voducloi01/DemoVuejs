import { useData } from "./useData";
import { useInsert } from "./useInsert";

export const useStore = {
	setup() {
		const store = useData();
		const userInser = useInsert();

		return {
			// you can return the whole store instance to use it in the template
			store,
			userInser,
		};
	},
};
