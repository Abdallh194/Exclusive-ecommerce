import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import RightSideBar from "../components/RightSideBar";

import ProductCard from "../components/ProductCard/ProductCard";
import CountdownTimer from "../components/ui/CountdownTimer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { GetAllProductsThunck } from "@redux/Products/ProductsSlice";

const LandingPage = () => {
  const dispatch = useAppDispatch();
  const { Products } = useAppSelector((s) => s.products);
  const { items } = useAppSelector((s) => s.cartenhance);
  const ProductsFullInfo = Products.map((el) => ({
    ...el,
    Quantity: items[el.id] || 0,
  }));
  useEffect(() => {
    if (!Products.length) {
      dispatch(GetAllProductsThunck());
    }
  }, [dispatch, Products]);

  return (
    <>
      <div className="HomePage">
        <Container>
          <Row>
            <Col className="SideBar" lg={2}>
              <SideBar />
            </Col>
            <Col className="RightSideBar" lg={10}>
              <RightSideBar />
            </Col>
          </Row>
          <div className="sale-type">Today's</div>
          <div className="flash-sels">
            <div className="title">Flash Seles</div>
            <CountdownTimer />
          </div>
          <ProductCard products={ProductsFullInfo} />
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
