import React, { useState } from "react";
import { products } from "../../DummyData/products";
import { Container, Row, Spinner } from "react-bootstrap";

import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // loading next page
  const loadNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      {true && (
        <InfiniteScroll
          dataLength={products.length}
          next={loadNextPage}
          hasMore={true}
          loader={
            <div className="text-center mb-3">
              {/* <Spinner animation="border" as="span" size="lg"></Spinner> */}
            </div>
          }
        >
          <Container className="mt-4">
            <Row>
              {products.map((product) => {
                return <ProductCard product={product}></ProductCard>;
              })}
            </Row>
          </Container>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Products;
