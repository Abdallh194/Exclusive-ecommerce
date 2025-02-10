import Breadcrumbs from "@components/Breadcrumb";
import ProductBillDetails from "@pages/Cart/ProductBillDetails";
import { Col, Container, Row } from "react-bootstrap";
import useOrder from "./useOrder";
import ProductsDetails from "@pages/checkout/ProductsDetails";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Lottie from "lottie-react";
import empty from "@assets/LottieFiles/empty.json";

const Orders = () => {
  const { formData, UserOrders } = useOrder();

  return (
    <div className="Orders">
      <Container>
        <Breadcrumbs />
        {UserOrders.length > 0 ? (
          <Row>
            <Col md={12} lg={4} className="OrderCard">
              <ProductBillDetails products={UserOrders} />
            </Col>
            <Col md={12} lg={4} className="OrderCard borderedCard">
              <ProductsDetails products={UserOrders} />
            </Col>
            <Col md={12} lg={4} className="OrderCard borderedCard">
              <div className="card-head">Delivery information</div>
              <div className="info">
                <IoMdPerson /> {formData.FirstName}
              </div>
              <div className="info">
                <FaLocationDot /> {formData.City}
              </div>
              <div className="info">
                <FaPhone /> {formData.PhoneNumber}
              </div>
              <div className="info">
                <MdAttachEmail /> {formData.EmailAddress}
              </div>
            </Col>
          </Row>
        ) : (
          <div className="empty-cart">
            <Lottie animationData={empty} />
            <p>There are no orders for you</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Orders;
