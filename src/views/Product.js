import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Container } from "reactstrap";
const Product = () => {
  const { data, loading } = useQuery(FETCH_ITEMS_QUERY);

  return (
    <section className="section">
      <Container>
        <h2>This is product page</h2>
        {data && data.items.map(item => <div key={item.id}>{item.name}</div>)}
      </Container>
    </section>
  );
};

const FETCH_ITEMS_QUERY = gql`
  query GET_ITEMS {
    items {
      id
      name
      description
      price
      image {
        url
      }
    }
  }
`;
export default Product;
