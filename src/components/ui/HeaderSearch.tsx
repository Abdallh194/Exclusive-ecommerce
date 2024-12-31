import { memo } from "react";

//bootstrap components
import { Form, FormControl, Nav, NavDropdown } from "react-bootstrap";

//icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";

//get links
import { navLinks } from "src/constants/constants";

//Redux
import { useAppDispatch } from "@redux/hooks";
import { LogoutUser } from "@redux/user/LoginSlice";
import { SaveCartForUser } from "@redux/Cart/CartSlice";

//type
interface CartProps {
  isloggin: boolean;
  activeUserId: string | null;
  cartlength: number;
  favlength: number;
  isAnimate: boolean;
  isAnimateWishlist: boolean;
}
const HeaderSearch: React.FC<CartProps> = ({
  isloggin,
  activeUserId,
  cartlength,
  favlength,
  isAnimate,
  isAnimateWishlist,
}) => {
  const dispatch = useAppDispatch();
  const quantityStyle = `basketQuantity ${isAnimate ? "pumpCartQuantity" : ""}`;
  const wishlistStyle = `basketQuantity ${
    isAnimateWishlist ? "pumpCartQuantity" : ""
  }`;
  return (
    <>
      <Form className="position-relative">
        <FormControl placeholder="Whate are you looking for?" />
        <CiSearch className="search-btn" />
      </Form>
      <Nav.Link
        className={`icon favicon ${wishlistStyle}`}
        as={Link}
        to="/wishlist"
        data-length={favlength}
      >
        <IoMdHeartEmpty className="mx-3" />
      </Nav.Link>
      <Nav.Link
        className={`icon ${quantityStyle}`}
        as={Link}
        to="/cart"
        data-length={cartlength}
      >
        <AiOutlineShoppingCart />
      </Nav.Link>
      {isloggin && (
        <NavDropdown
          title={<CiUser className="profile-icon mx-3" />}
          id="navbarScrollingDropdown"
        >
          {navLinks.map((link, index) => (
            <NavDropdown.Item
              as={Link}
              to={link.to}
              key={index}
              onClick={() => {
                if (link.label == "Logout") {
                  dispatch(SaveCartForUser({ userId: activeUserId }));
                  dispatch(LogoutUser());
                }
              }}
            >
              {link.icon} {link.label}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      )}
    </>
  );
};

export default memo(HeaderSearch);
