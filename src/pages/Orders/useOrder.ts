import { useAppSelector } from "@redux/hooks";
import { useState } from "react";

const useOrder = () => {
  const { Users, activeUserId } = useAppSelector((s) => s.user);
  const { UserOrders } = useAppSelector((s) => s.cartenhance);
  const NewUser = Users.find((user) => user.id === activeUserId);

  const [formData, setFormData] = useState<TFormData>({
    FirstName: NewUser?.FirstName || "Abdallh",
    CompanyName: "Qeema",
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
    formData,
    setFormData,
    UserOrders,
  };
};

export default useOrder;
