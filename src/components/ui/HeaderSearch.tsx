import { memo } from "react";

//bootstrap components
import { Form, FormControl, NavDropdown } from "react-bootstrap";

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
import QuantityCounter from "./QuantityCounter";

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
      <QuantityCounter
        className={`icon favicon ${wishlistStyle}`}
        to="/wishlist"
        length={favlength}
      >
        <IoMdHeartEmpty className="mx-3" />
      </QuantityCounter>

      <QuantityCounter
        className={`icon ${quantityStyle}`}
        to="/cart"
        length={cartlength}
      >
        <AiOutlineShoppingCart />
      </QuantityCounter>

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
