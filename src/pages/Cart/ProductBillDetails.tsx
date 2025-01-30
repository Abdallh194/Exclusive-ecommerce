import { memo } from "react";

const ProductBillDetails: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <div className="d-flex mt-4 justify-content-between">
        <div className="bill-head">Product Name</div>
        <div className="bill-head">Price per one </div>
      </div>
      <hr />
      {products.map((e, idx) => (
        <div className="d-flex mt-2 justify-content-between" key={idx}>
          <div className="bill-head">
            {e.title} * {e.Quantity}
          </div>
          <div className="bill-head">{e.price}$ </div>
        </div>
      ))}
    </>
  );
};

export default memo(ProductBillDetails);
