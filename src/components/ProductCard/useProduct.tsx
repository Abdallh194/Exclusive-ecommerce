import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { GetAllProductsThunck } from "@redux/Products/ProductsSlice";
import { ExploreProductsData } from "@constants/constants";

const useProducts = () => {
  const { items } = useAppSelector((state) => state.cartenhance);
  const { isloggin } = useAppSelector((state) => state.user);
  const notavailabletoWishlist = useAppSelector(
    (state) => state.wishlist.notavailabletoWishlist
  );
  const wishlistitems = useAppSelector((state) => state.wishlist.items);
  const { error, loading, Products } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const [isDisabled, setisDisabled] = useState(false);

  const RemaingHandler = (max: number, qty: number) => {
    return max - qty;
  };

  // hide alert successAddCart
  const [successAddCart, setSuccessAddCart] = useState(false);
  const [SuccessAddwishlist, setSuccessAddwishlist] = useState(false);

  // product card
  const ProductsFullInfo = Products.map((el) => ({
    ...el,
    Quantity: items[el.id] || 0,
    isLiked: wishlistitems.includes(el.id),
  }));

  const ExploredProducts = ExploreProductsData.map((el) => ({
    ...el,
    Quantity: items[el.id] || 0,
    isLiked: wishlistitems.includes(el.id),
  }));
  useEffect(() => {
    if (!Products.length) {
      dispatch(GetAllProductsThunck());
    }
  }, [dispatch, Products]);

  useEffect(() => {
    if (successAddCart) {
      const timer = setTimeout(() => {
        setSuccessAddCart(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successAddCart]);

  const handleAddToCart = () => {
    setSuccessAddCart(true);
  };

  useEffect(() => {
    if (notavailabletoWishlist) {
      setSuccessAddwishlist(false);
    }
  }, [notavailabletoWishlist]);

  useEffect(() => {
    if (SuccessAddwishlist) {
      const timer = setTimeout(() => {
        setSuccessAddwishlist(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [SuccessAddwishlist]);

  useEffect(() => {
    if (!isDisabled) return;

    const debounce = setTimeout(() => {
      setisDisabled(false);
      setSuccessAddCart(true);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isDisabled]);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };
  return {
    dispatch,
    isDisabled,
    setisDisabled,
    items,
    scrollLeft,
    scrollRight,
    containerRef,
    setSuccessAddCart,
    handleAddToCart,
    successAddCart,
    SuccessAddwishlist,
    setSuccessAddwishlist,
    loading,
    error,
    RemaingHandler,
    notavailabletoWishlist,
    wishlistitems,
    ProductsFullInfo,
    isloggin,
    ExploredProducts,
  };
};

export default useProducts;
