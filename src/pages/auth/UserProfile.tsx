import Breadcrumbs from "@components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useAppSelector } from "@redux/hooks";

const UserProfile = () => {
  const { Users, activeUserId } = useAppSelector((state) => state.user);
  const activeUser = Users.find((user) => user.id === activeUserId);

  if (!activeUser) {
    return (
      <div className="user-profile">
        <Container>
          <p>No active user found. Please log in.</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <Container>
        <div className="d-flex top-menu">
          <Breadcrumbs />
          <div className="welcome-msg">
            Welcome! <span>{activeUser.FirstName}</span>
          </div>
        </div>
        <Row>
          <Col md={12} lg={3} className="LeftSide">
            <LeftSide />
          </Col>
          <Col md={12} lg={9}>
            <RightSide NewUser={activeUser} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
