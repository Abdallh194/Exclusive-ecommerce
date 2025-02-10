import { Col, Spinner } from "react-bootstrap";
import {
  FaCheck,
  FaEye,
  FaHeart,
  FaRegHeart,
  FaTrashAlt,
} from "react-icons/fa";
import { IconButton, Rating, Tooltip, Alert } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { memo } from "react";
import { Link } from "react-router-dom";

import useProducts from "./useProduct";
import { AddItemToCart } from "@redux/Cart/CartSliceEnhance";
import {
  AddItemToWishList,
  DeleteFavItem,
} from "@redux/WishList/WishlistSlice";

const ProductsLoop: React.FC<ProductListProps> = ({ products, isfav }) => {
  const {
    dispatch,
    isDisabled,
    setisDisabled,
    successAddCart,
    SuccessAddwishlist,
    setSuccessAddwishlist,
    RemaingHandler,
  } = useProducts();

  return (
    <>
      {products.map((product) => (
        <Col lg={5} className="product" key={product.id}>
          {isfav ? (
            <div
              className="fav-dlt"
              onClick={() => dispatch(DeleteFavItem(product.id))}
            >
              <FaTrashAlt />
            </div>
          ) : (
            <div className="d-flex top-menu">
              <Tooltip
                title={
                  product.isLiked
                    ? "Item added to wishlist"
                    : "Add to favourites"
                }
              >
                <IconButton
                  onClick={() => {
                    if (!product.isLiked) {
                      dispatch(AddItemToWishList(product.id));
                      setSuccessAddwishlist(true);
                    }
                  }}
                >
                  {product.isLiked ? (
                    <FaHeart className="fav-icon" style={{ color: "red" }} />
                  ) : (
                    <FaRegHeart className="fav-icon" />
                  )}
                </IconButton>
              </Tooltip>
              <div className="discount">-{product.discount}</div>
            </div>
          )}

          <Link
            to={`/Products/${encodeURIComponent(product.title)}`}
            className="view-details"
          >
            <FaEye />
          </Link>

          <div className="img-container">
            <img
              src={product.images}
              className="img-fluid"
              alt={product.title}
            />
          </div>

          <div className="product-name">{product.title}</div>
          <Rating value={5} className="mt-2" />

          <div className="price">
            {product.price}$ <span>{(product.price * 1.2).toFixed(2)}$</span>
          </div>

          {(product.Quantity ?? 0) > 0 && (
            <div className="qty">
              {product.Quantity} in cart remaining{" "}
              {RemaingHandler(product.max, product.Quantity ?? 0)}
            </div>
          )}

          <button
            className="addtocart btn"
            onClick={() => {
              dispatch(AddItemToCart(product.id));
              setisDisabled(true);
            }}
            disabled={isDisabled || product.Quantity === product.max}
          >
            {isDisabled ? (
              <>
                <Spinner animation="border" size="sm" /> Loading ...
              </>
            ) : product.Quantity === product.max ? (
              "You Reached the limit"
            ) : (
              <>
                Add to Cart <AiOutlineShoppingCart />
              </>
            )}
          </button>
        </Col>
      ))}

      {successAddCart && (
        <Alert icon={<FaCheck fontSize="inherit" />} severity="success">
          The item has been added to cart
        </Alert>
      )}
      {SuccessAddwishlist && (
        <Alert icon={<FaCheck fontSize="inherit" />} severity="success">
          The item has been added to Wishlist
        </Alert>
      )}
    </>
  );
};

export default memo(ProductsLoop);
