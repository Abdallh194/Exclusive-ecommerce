import Breadcrumbs from "@components/Breadcrumb";
import { CartHeaders } from "@constants/constants";
import { Col, Container, Row } from "react-bootstrap";
import CartProduct from "./CartProduct";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import Lottie from "lottie-react";
import empty from "@assets/LottieFiles/empty.json";
import { useEffect } from "react";
import {
  clearcartproductfullinfo,
  GetAllCartItemsThunck,
} from "@redux/Cart/CartSliceEnhance";
import Loading from "@components/feedback/Loading";

const Cart = () => {
  const { productFullInfo, loading, error, items } = useAppSelector(
    (s) => s.cartenhance
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAllCartItemsThunck());
    return () => {
      dispatch(clearcartproductfullinfo());
    };
  }, [dispatch]);
  const CartInfo = productFullInfo.map((el) => ({
    ...el,
    Quantity: items[el.id],
  }));

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
