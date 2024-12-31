import Breadcrumbs from "@components/Breadcrumb";
import ProductsLoop from "@components/ProductCard/ProductsLoop";
import { useAppSelector } from "@redux/hooks";
import Lottie from "lottie-react";
import { Container, Row } from "react-bootstrap";
import empty from "@assets/LottieFiles/empty.json";
const WishList = () => {
  const { Products } = useAppSelector((s) => s.products);
  const wishlistitems = useAppSelector((s) => s.wishlist.items);
  const { items } = useAppSelector((s) => s.cartenhance);

  const WishListFullInfo = Products.filter((p) => wishlistitems.includes(p.id));
  const WishListWithQuantity = WishListFullInfo.map((el) => ({
    ...el,
    Quantity: items[el.id],
    isLiked: wishlistitems.includes(el.id),
  }));

  return (
    <div className="Wishlist">
      <Container>
        <Breadcrumbs />
        {WishListFullInfo.length > 0 ? (
          <Row>
            <ProductsLoop products={WishListWithQuantity} isfav={true} />
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
