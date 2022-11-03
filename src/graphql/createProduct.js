import gql from "graphql-tag";

export const createProduct = gql`
	mutation ($name: String!, $price: Int!, $image: String!) {
		createProduct(name: $name, price: $price, image: $image) {
			id
			name
			price
			image
		}
	}
`;
