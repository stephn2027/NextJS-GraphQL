import { gql, useQuery } from '@apollo/client';

// TODO
// 1. Need to get the existing product
const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
    }
  }
`;

// 2. Need to mutate the product for updating it
const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;
// 3. Need a form to handle the update

export default function UpdateProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  return <div>UpdateProduct now {data?.Product.name} </div>;
}
