import { memo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useProducts from "./useProduct";
import ProductsLoop from "./ProductsLoop";
import Loading from "@components/feedback/Loading";

const ProductCard = ({ products }: ProductListProps) => {
  const {
    scrollLeft,
    scrollRight,
    containerRef,
    loading,
    error,
    wishlistitems,
  } = useProducts();
  const WishListWithLike = products.map((el) => ({
    ...el,
    isLiked: wishlistitems.includes(el.id),
  }));
  return (
    <Loading status={loading} error={error}>
      <div className="position-relative">
        <div className="btns">
          <button className="button left" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <button className="button right" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
        <div className="Products-container" ref={containerRef}>
          <ProductsLoop products={WishListWithLike} />
        </div>
      </div>
    </Loading>
  );
};

export default memo(ProductCard);