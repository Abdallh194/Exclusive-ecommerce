import { Col, Row } from "react-bootstrap";

const ExploreCategories = () => {
  return (
    <div className="ExploreCategories">
      <Row>
        <Col md={12} lg={5} className="ExploreCategories-card">
          <div className="ExploreCategories-info">categories</div>
          <div className="ExploreCategories-head">
            Enhance Your Music Experience
          </div>
          <div className="counter d-flex">
            <div className="item">
              <div className="num">23</div>
              <div className="title">Hours</div>
            </div>
            <div className="item">
              <div className="num">05</div>
              <div className="title">Days</div>
            </div>
            <div className="item">
              <div className="num">59</div>
              <div className="title">Minutes</div>
            </div>
            <div className="item">
              <div className="num">35</div>
              <div className="title">Seconds</div>
            </div>
          </div>
          <div className="buy">Buy Now</div>
        </Col>
        <Col md={12} lg={7}>
          <img src="/iphone.jpg" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

export default ExploreCategories;
