import gql from "graphql-tag";
export const ALL_PRODUCT_QUERY = gql`
	query {
		getAllProduct {
			id
			name
			price
			image
		}
	}
`;
