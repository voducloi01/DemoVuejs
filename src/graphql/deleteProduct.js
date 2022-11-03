import gql from "graphql-tag";

export const deleteProduct = gql`
	mutation deleteProduct($id: ID!) {
		deleteProduct(id: $id) {
			message
		}
	}
`;
