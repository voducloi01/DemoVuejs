import gql from "graphql-tag";

export const update_product = gql`
	mutation ($id: ID!, $name: String, $price: Int, $image: String) {
		updateProduct(id: $id, name: $name, price: $price, image: $image) {
			message
		}
	}
`;
