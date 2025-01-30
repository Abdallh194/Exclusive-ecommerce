import Breadcrumbs from "@components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import FormDetails from "./FormDetails";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CheckOutBill from "./CheckOutBill";
import useCart from "@pages/Cart/useCart";
import empty from "@assets/LottieFiles/empty.json";
import Lottie from "lottie-react";

const Checkout = () => {
  const {
    CartInfo,
    setcheckoutformcomplete,
    checkoutformcomplete,
    formData,
    setFormData,
  } = useCart();
  return (
    <HelmetProvider>
      <Helmet>
        <title>checkout</title>
        <meta name="keywords" content="Store , Product , ecommerce , login " />
        <meta
          name="description"
          content="Shop the latest products and find great deals on electronics, fashion, home goods, and more. Your one-stop online store for quality and value. Explore our wide range of electronics, including smartphones, laptops, and home appliances. Shop now for high-quality products at unbeatable prices"
        />
      </Helmet>
      <div className="checkout">
        <Container>
          <Breadcrumbs />
          {CartInfo.length > 0 ? (
            <Row>
              <div className="head">Billing Details</div>
              <Col md={12} lg={6}>
                <FormDetails
                  setcheckoutformcomplete={setcheckoutformcomplete}
                  formData={formData}
                  setFormData={setFormData}
                />
              </Col>
              <Col md={12} lg={6}>
                <CheckOutBill
                  products={CartInfo}
                  checkoutformcomplete={checkoutformcomplete}
                />
              </Col>
            </Row>
          ) : (
            <div className="empty-cart">
              <Lottie animationData={empty} />
              <p>There are no products to pay for</p>
            </div>
          )}
        </Container>
      </div>
    </HelmetProvider>
  );
};

export default Checkout;
