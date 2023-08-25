import { gql, useMutation, useQuery } from '@apollo/client';
import Form from './styles/Form';

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
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id,
      //TODO: pass in updates to product here
    },
  });
  return (
    <div>UpdateProduct</div>
    // <Form
    //   onSubmit={(e) => {
    //     e.preventDefault();

    //   }}
    // >
    //   <fieldset>
    //     <label htmlFor="image">
    //       Image
    //       <input
    //         required
    //         type="file"
    //         name="image"
    //         id="image"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label htmlFor="name">
    //       Name
    //       <input
    //         type="text"
    //         name="name"
    //         id="name"
    //         placeholder="Name"
    //         value={inputs.name}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label htmlFor="price">
    //       Price
    //       <input
    //         type="number"
    //         name="price"
    //         id="price"
    //         placeholder="Price"
    //         value={inputs.price}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label htmlFor="description">
    //       Description
    //       <textarea
    //         name="description"
    //         id="description"
    //         value={inputs.description}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     {/* <button type="submit">+Add Product</button> */}
    //   </fieldset>
    // </Form>
  );
}
