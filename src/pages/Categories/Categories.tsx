import { categories } from "@constants/constants";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Row className="Categories">
      {categories.map((cat, idx) => (
        <Col
          as={Link}
          to={`/categories/${cat.prefix}`}
          className="categories-card"
          lg={3}
          key={idx}
        >
          <div className="icon">{cat.icon}</div>
          <div className="title">{cat.title}</div>
        </Col>
      ))}
    </Row>
  );
};

export default Categories;
