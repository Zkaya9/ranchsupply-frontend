import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import "./ProductCard.css";
// import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  //   const navigate = useNavigate();
  return (
    <Col
      className="mb-3 productCard w-[15rem] transition-all cursor-pointer"
      md={6}
      lg={4}
      xl={3}
    >
      <div className="h-[20rem]">
        <Card>
          <img
            src={product.imageUrl}
            className="object-cover object-left-top"
            //   src={`${process.env.REACT_APP_IMAGE_KIT_URL}/tr:h-300,w-400/products/${product.imageUrl}`}
            alt={product.title}
            width="100%"
            height="180px"
            //   className="card-img-top trans"
            //   onClick={() => navigate(`/product/${1}`)}
            // style={{
            //   objectFit: "cover",
            //   cursor: "pointer",
            // }}
          />

          <Card.Body>
            <div className="d-flex justify-content-between">
              <small className="text-muted fw-semibold">{product.brand}</small>
              {product.quantity <= 0 ? (
                <Badge bg="danger">Out of Stock</Badge>
              ) : (
                ""
              )}
            </div>
            <h6
              className="mb-0 product-title"
              style={{ minHeight: "46px" }}
              // onClick={() => navigate(`/product/${1}`)}
            >
              {product.title.length > 60
                ? product.title.slice(0, 60) + "..."
                : product.title}
            </h6>

            <small style={{ minHeight: "68px", display: "inline-block" }}>
              {product.description.length > 85
                ? product.description.slice(0, 85) + "..."
                : product.description}
            </small>
            <div className="d-flex align-items-center mb-1">
              {product.discountedPrice ? (
                <div className="text-muted">
                  <del>
                    <small>$ {product.price}</small>
                  </del>
                  <small className="text-danger ms-2">
                    $ {product.discountedPrice}
                  </small>
                </div>
              ) : (
                <div className="me-3">
                  <small>$ {product.price}</small>
                </div>
              )}
            </div>
            <Button
              variant="primary"
              size="sm"
              disabled={product.quantity <= 0}
              onClick={() => {
                console.log("Add to cart");
              }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default ProductCard;
