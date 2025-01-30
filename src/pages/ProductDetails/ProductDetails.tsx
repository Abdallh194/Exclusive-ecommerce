import useProducts from "@components/ProductCard/useProduct";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@components/Breadcrumb";
import { Rating } from "@mui/material";
import { FaCarCrash, FaRegHeart, FaRegThumbsDown } from "react-icons/fa";

const ProductDetails = () => {
  const { prefix } = useParams();
  const { ProductsFullInfo } = useProducts();
  const SelectedProduct = ProductsFullInfo.filter((p) => p.id == prefix);
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
                <div className="buy">Buy Now</div>
                <div className="fav">
                  <FaRegHeart />
                </div>
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
