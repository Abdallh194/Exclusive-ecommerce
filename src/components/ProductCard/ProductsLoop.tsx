import { Col, Spinner } from "react-bootstrap";
import {
  FaCheck,
  FaEye,
  FaHeart,
  FaRegHeart,
  FaTrashAlt,
} from "react-icons/fa";
import { IconButton, Rating, Tooltip } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Alert } from "@mui/material";
import useProducts from "./useProduct";
import { AddItemToCart } from "@redux/Cart/CartSliceEnhance";
import { memo } from "react";
import {
  AddItemToWishList,
  DeleteFavItem,
} from "@redux/WishList/WishlistSlice";
import { Link } from "react-router-dom";

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
      {products.map((e, idx) => (
        <Col lg={5} className="product" key={idx}>
          {isfav ? (
            <div
              className="fav-dlt"
              onClick={() => {
                dispatch(DeleteFavItem(e.id));
              }}
            >
              <FaTrashAlt />
            </div>
          ) : (
            <div className="d-flex top-menu">
              {e.isLiked ? (
                <Tooltip title="Item added to wishlist">
                  <IconButton>
                    <FaHeart className="fav-icon" style={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Add to favourites">
                  <IconButton
                    onClick={() => {
                      dispatch(AddItemToWishList(e.id));
                      setSuccessAddwishlist(true);
                    }}
                  >
                    <FaRegHeart className="fav-icon" />
                  </IconButton>
                </Tooltip>
              )}

              <div className="discount">-{e.discount}</div>
            </div>
          )}
          <Link to={`/Products/${e.id}`} className="view-details">
            <FaEye />
          </Link>
          <div className="img-container">
            <img src={e.images} className="img-fluid" />
          </div>

          <div className="product-name">{e.title}</div>
          <Rating value={5} className="mt-2" />
          <div className="price">
            {e.price}$<span>{e.price * 1.2}$</span>
          </div>
          <div className="qty">
            {(e.Quantity ?? 0) > 0 ? (
              <>
                {e.Quantity} in cart remaining{" "}
                {RemaingHandler(e.max, e.Quantity ?? 0)}
              </>
            ) : null}
          </div>

          <button
            className="addtocart btn"
            onClick={() => {
              dispatch(AddItemToCart(e.id));

              setisDisabled(true);
            }}
            disabled={isDisabled || e.Quantity === e.max}
          >
            {isDisabled ? (
              <>
                <Spinner animation="border" size="sm" /> Loading ...
              </>
            ) : (
              <>
                {e.Quantity === e.max ? (
                  "You Reached the limit"
                ) : (
                  <>
                    Add to Cart
                    <AiOutlineShoppingCart />
                  </>
                )}
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
