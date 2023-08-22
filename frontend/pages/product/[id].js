import { gql, useQuery } from '@apollo/client';

const SINGLE_ITEM_QUERY = gql`
  query {
    Product(where: { id: "649e57a453042f2dd5fd2855" }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct() {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
  console.log(data);
  return <p> Im a Single Product {data.Product.name}</p>;
}
