import { Row } from "react-bootstrap";
import ProductsLoop from "./ProductCard/ProductsLoop";
import { memo } from "react";

const ExploreProducts: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Row className="Categories">
      <ProductsLoop products={products} />
    </Row>
  );
};

export default memo(ExploreProducts);
