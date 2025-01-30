import Breadcrumbs from "@components/Breadcrumb";
import ProductsLoop from "@components/ProductCard/ProductsLoop";
import Lottie from "lottie-react";
import { Container, Row } from "react-bootstrap";
import empty from "@assets/LottieFiles/empty.json";
import useWishlist from "./usewishlist";
const WishList = () => {
  const { userwishlist } = useWishlist();

  return (
    <div className="Wishlist">
      <Container>
        <Breadcrumbs />
        {userwishlist.length > 0 ? (
          <Row>
            <ProductsLoop products={userwishlist} isfav={true} />
          </Row>
        ) : (
          <div className="empty-cart">
            <Lottie animationData={empty} />
            <p>Wishlist is empty</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default WishList;
