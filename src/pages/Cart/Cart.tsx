import Breadcrumbs from "@components/Breadcrumb";
import { CartHeaders } from "@constants/constants";
import { Col, Container, Row } from "react-bootstrap";
import CartProduct from "./CartProduct";
import { useAppSelector } from "@redux/hooks";
import Lottie from "lottie-react";
import empty from "@assets/LottieFiles/empty.json";

import Loading from "@components/feedback/Loading";
import useCart from "./useCart";

const Cart = () => {
  const { loading, error } = useAppSelector((s) => s.cartenhance);
  const { CartInfo } = useCart();

  return (
    <Loading status={loading} error={error}>
      <div className="cart">
        <Container>
          <Breadcrumbs />
          {CartInfo.length > 0 ? (
            <>
              <Row className="row-container cart-header">
                {CartHeaders.map((e, idx) => (
                  <Col xs={2} key={idx} className={e.class}>
                    {e.title}
                  </Col>
                ))}
              </Row>
              <CartProduct products={CartInfo} isfav={false} />
            </>
          ) : (
            <div className="empty-cart">
              <Lottie animationData={empty} />
              <p>Your Cart is empty</p>
            </div>
          )}
        </Container>
      </div>
    </Loading>
  );
};

export default Cart;
