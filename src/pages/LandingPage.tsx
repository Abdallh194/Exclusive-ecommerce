import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import RightSideBar from "../components/RightSideBar";
import ProductCard from "../components/ProductCard/ProductCard";
import CountdownTimer from "../components/ui/CountdownTimer";
import useProducts from "@components/ProductCard/useProduct";
import Categories from "./Categories/Categories";
import ExploreCategories from "./Categories/ExploreCategories";
import ExploreProducts from "@components/ExploreProducts";

const LandingPage = () => {
  const { ProductsFullInfo, ExploredProducts } = useProducts();
  return (
    <>
      <div className="HomePage">
        <Container>
          <Row className="rowReverce">
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
          {/* categories */}
          <div className="sale-type">Categories</div>
          <div className="flash-sels">
            <div className="title">Browse By Categories</div>
          </div>
          <Categories />
          <ExploreCategories />
          {/* explore products */}
          <div className="sale-type">Our Products</div>
          <div className="flash-sels">
            <div className="title">Explore Our Products </div>
          </div>
          <ExploreProducts products={ExploredProducts} />
          {/* featured */}
          <div className="sale-type">Featured</div>
          <div className="flash-sels">
            <div className="title">New Arrival </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
