import useProducts from "@components/ProductCard/useProduct";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@components/Breadcrumb";
import { Button, Rating, Tooltip } from "@mui/material";
import {
  FaCarCrash,
  FaHeart,
  FaRegHeart,
  FaRegThumbsDown,
} from "react-icons/fa";
import { AddItemToCart } from "@redux/Cart/CartSliceEnhance";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AddItemToWishList } from "@redux/WishList/WishlistSlice";
import { IconButton } from "@mui/joy";
import { useEffect } from "react";

const ProductDetails = () => {
  const { prefix } = useParams();
  const PName = decodeURIComponent(prefix?.toString() ?? "");

  const {
    ProductsFullInfo,
    dispatch,
    setisDisabled,
    isDisabled,
    RemaingHandler,
  } = useProducts();
  const SelectedProduct = ProductsFullInfo.filter((p) => p.title == PName);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>{SelectedProduct.map((e) => e.title)}</title>
        <meta name="keywords" content="Store , Product , ecommerce , login " />
        <meta
          name="description"
          content="Shop the latest products and find great deals on electronics, fashion, home goods, and more. Your one-stop online store for quality and value. Explore our wide range of electronics, including smartphones, laptops, and home appliances. Shop now for high-quality products at unbeatable prices"
        />
      </Helmet>
      <Container className="ProductDetails">
        <Breadcrumbs />
        {SelectedProduct.map((product, idx) => (
          <Row key={idx}>
            <Col md={12} lg={7} className="d-flex ProductDetails-imgCard">
              <div className="product-imgs">
                <img src={product.images} className="img-fluid" />
                <img src={product.images} className="img-fluid" />
                <img src={product.images} className="img-fluid" />
                <img src={product.images} className="img-fluid" />
              </div>
              <div className="main-img">
                <img src={product.images} className="img-fluid" />
              </div>
            </Col>
            <Col md={12} lg={5}>
              <div className="name">{product.title}</div>
              <div className="rating d-flex">
                <Rating value={5} />{" "}
                <span className="review rate">(150 Reviews)</span> |
                <span className="in-stock rate">in Stock</span>
              </div>
              <div className="price">${product.price}.00</div>
              <div className="product-desc">
                Shop the latest products and find great deals on electronics,
                fashion, home goods, and more. Your one-stop online store for
                quality and value. Explore our wide range of electronics,
                including smartphones, laptops, and home appliances. Shop now
                for high-quality products at unbeatable prices
              </div>
              <hr />
              <div className="colors title">
                Colours : <span className="red"></span>{" "}
                <span className="green"></span>
              </div>
              <div className="Size title">
                Size : <span>XS</span>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="d-flex mt-4 buy-sec">
                <div className="quntity">
                  <span className="dec">-</span>
                  <span className="num">1</span>
                  <span className="inc">+</span>
                </div>
                <Button
                  variant="contained"
                  color="error"
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
                  ) : (
                    <>
                      {product.Quantity === product.max ? (
                        "You Reached the limit"
                      ) : (
                        <>
                          Add to Cart
                          <AiOutlineShoppingCart />
                        </>
                      )}
                    </>
                  )}
                </Button>
                {product.isLiked ? (
                  <Tooltip className="fav" title="Item added to wishlist">
                    <IconButton>
                      <FaHeart className="fav-icon" style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip className="fav" title="Add to favourites">
                    <IconButton
                      onClick={() => {
                        dispatch(AddItemToWishList(product.id));
                      }}
                    >
                      <FaRegHeart className="fav-icon" />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <div className="qty">
                {(product.Quantity ?? 0) > 0 ? (
                  <>
                    {product.Quantity} in cart remaining{" "}
                    {RemaingHandler(product.max, product.Quantity ?? 0)}
                  </>
                ) : null}
              </div>
              <div className="delivey">
                <div className="d-flex">
                  <FaCarCrash className="icon" />
                  <div className="delivey-desc">
                    <div className="">
                      <b>Free Delivery</b>
                    </div>
                    <div className="">
                      Enter Your Postal Code For Delivey Availability
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex">
                  <FaRegThumbsDown className="icon" />
                  <div className="delivey-desc">
                    <div className="">
                      <b>Return Delivery</b>
                    </div>
                    <div className="">
                      Free 30 Day Delivery Return . Details
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </HelmetProvider>
  );
};

export default ProductDetails;
