import { memo } from "react";

const ProductsDetails: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {products.map((product, idx) => (
        <div
          className="d-flex justify-between align-items-center bill-card"
          key={idx}
        >
          <div className="d-flex align-items-center">
            <img
              src={product.images}
              alt={product.title}
              className="img-fluid"
              width={55}
            />
            <div className="name">
              {product.title} x {product.Quantity}
            </div>
          </div>
          <div className="price">{product.price}$</div>
        </div>
      ))}
    </>
  );
};

export default memo(ProductsDetails);
