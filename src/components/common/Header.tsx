import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import HeaderSearch from "@components/ui/HeaderSearch";
import { HeaderLinks } from "src/constants/constants";
import { useAppSelector } from "@redux/hooks";
import { LuStore } from "react-icons/lu";

function Header() {
  const { isloggin, activeUserId } = useAppSelector((s) => s.user);
  const wishlist = useAppSelector((s) => s.wishlist.items);
  const { items } = useAppSelector((s) => s.cartenhance);
  const [expanded, setExpanded] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isAnimateWishlist, setisAnimateWishlist] = useState(false);
  const location = useLocation();

  const TotalQuantity = Object.values(items).reduce(
    (acc, item) => acc + item,
    0
  );

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  useEffect(() => {
    if (!TotalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [TotalQuantity]);

  useEffect(() => {
    if (!wishlist.length) {
      return;
    }
    setisAnimateWishlist(true);

    const debounce = setTimeout(() => {
      setisAnimateWishlist(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [wishlist.length]);

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
          Exclusive <LuStore className="mx-1" />
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
