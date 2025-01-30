import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderSearch from "@components/ui/HeaderSearch";
import { HeaderLinks } from "src/constants/constants";
import useHeader from "./useHeader";

function Header() {
  const {
    isloggin,
    activeUserId,
    expanded,
    isAnimate,
    isAnimateWishlist,
    setExpanded,
    TotalQuantity,
    wishlist,
  } = useHeader();

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo cus-dflex">
          Exclusive
          <svg
            stroke="currentColor"
            className="mx-1"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
            <path d="M2 7h20"></path>
            <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            {HeaderLinks.map((link, index) => (
              <Nav.Link as={Link} to={link.to} key={index}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <HeaderSearch
              cartlength={TotalQuantity}
              favlength={wishlist.length}
              isloggin={isloggin}
              activeUserId={activeUserId}
              isAnimate={isAnimate}
              isAnimateWishlist={isAnimateWishlist}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
