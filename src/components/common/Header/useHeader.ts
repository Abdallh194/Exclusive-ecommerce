import { useAppSelector } from "@redux/hooks";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useHeader = () => {
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
  return {
    isloggin,
    activeUserId,
    expanded,
    isAnimate,
    isAnimateWishlist,
    setExpanded,
    TotalQuantity,
    wishlist,
  };
};

export default useHeader;
