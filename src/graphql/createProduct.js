import { gql } from "@apollo/client";

export const createProduct = gql`
	mutation createProduct($name: String, $price: Int, $image: String) {
		createProduct(name: $name, price: $price, image: $image) {
			id
			name
			price
			image
		}
	}
`;
