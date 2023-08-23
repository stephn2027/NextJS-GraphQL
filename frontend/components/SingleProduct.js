import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });

  if (loading) return <div>Loading..</div>;
  if (error) return <DisplayError />;
  const { name, price, description, photo } = data?.Product;
  return (
    <ProductStyles>
      <Head>
        <title>Kicks Factory | {name}</title>
      </Head>
      <img src={photo.image.publicUrlTransformed} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </ProductStyles>
  );
}
