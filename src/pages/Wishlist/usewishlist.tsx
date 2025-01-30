import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getwishlistFulInfo } from "@redux/WishList/WishlistSlice";

const useWishlist = () => {
  const { items } = useAppSelector((state) => state.cartenhance);
  const { activeUserId } = useAppSelector((state) => state.user);
  const wishlistitems = useAppSelector((state) => state.wishlist.items);
  const { Products } = useAppSelector((state) => state.products);

  const WishListFullInfo = Products.filter((p) => wishlistitems.includes(p.id));
  const WishListWithQuantityandIds = WishListFullInfo.map((el) => ({
    ...el,
    Quantity: items[el.id],
    isLiked: wishlistitems.includes(el.id),
    userid: activeUserId,
  }));

  const userwishlist = WishListWithQuantityandIds.filter(
    (el) => el.userid === activeUserId
  );
  const dispatch = useAppDispatch();
  dispatch(getwishlistFulInfo(userwishlist));
  return {
    userwishlist,
  };
};

export default useWishlist;
