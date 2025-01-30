import { GetAllCartItemsThunck } from "@redux/Cart/CartSliceEnhance";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect, useState } from "react";

const useCart = () => {
  const { items } = useAppSelector((state) => state.cartenhance);
  const { productFullInfo } = useAppSelector((state) => state.cartenhance);
  const { isloggin } = useAppSelector((s) => s.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetAllCartItemsThunck());
  }, [dispatch]);
  const CartInfo = productFullInfo.map((el) => ({
    ...el,
    Quantity: items[el.id],
  }));

  const [checkoutformcomplete, setcheckoutformcomplete] = useState(false);
  const { Users, activeUserId } = useAppSelector((s) => s.user);

  const NewUser = Users.find((user) => user.id === activeUserId);
  const [formData, setFormData] = useState<TFormData>({
    FirstName: NewUser?.FirstName,
    CompanyName: "",
    StreetAddress:
      NewUser?.Address || "El-Geish Street, Tanta, Gharbia Governorate, Egypt",
    Apartment:
      NewUser?.Address || "El-Geish Street, Tanta, Gharbia Governorate, Egypt",
    City:
      NewUser?.Address || "El-Geish Street, Tanta, Gharbia Governorate, Egypt",
    PhoneNumber: NewUser?.Phone || "01020304050",
    EmailAddress: NewUser?.Email || "Example@example.com",
  });

  return {
    CartInfo,
    setcheckoutformcomplete,
    checkoutformcomplete,
    formData,
    setFormData,
    isloggin,
  };
};

export default useCart;
