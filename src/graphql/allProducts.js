import gql from "graphql-tag";
export const ALL_PRODUCT_QUERY = gql`
	query allProduct {
		products {
			name
			price
			image
		}
	}
`;
