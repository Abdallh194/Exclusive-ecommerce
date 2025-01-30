import { Col, Row } from "react-bootstrap";

const NewArrival = () => {
  return (
    <div className="NewArrival">
      <Row>
        <Col md={12} lg={6} className="NewArrival-card">
          <img src="./playstation.png" className="img-fluid" />
        </Col>
        <Col md={12} lg={6} className="NewArrival-card-img">
          <div className="wid-100 d-flex">
            <div className="women-content">
              <div className="content-head">Women Collections</div>
              <div className="content-desc">
                Featured woman collections that give you another vibe.
              </div>
              <div className="shop-now">Shop Now</div>
            </div>
            <img src="./women.jpg" className="img-fluid" />
          </div>
          <div className="d-flex justify-between">
            <div className="w-50">
              <img src="./arrial1.png" className="img-fluid" />
            </div>
            <div className="w-50">
              <img src="./arrial2.png" className="img-fluid" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewArrival;
