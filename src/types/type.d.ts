declare type Product = {
  id: string;
  images: string;
  title: string;
  price: number;
  cat_prefix: string;
  category?: string;
  Quantity?: number;
  max: number;
  discount: string;
  isLiked?: boolean;
};
declare interface ProductListProps {
  products: Product[];
  isfav?: boolean;
  checkoutformcomplete?: boolean;
}
declare interface NewUser {
  NewUser: {
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Password: string;
    Address: string;
  };
  setOpen_Update_Form?: (value: boolean) => void;
  Confirm_Update_Form?: boolean;
}
declare interface ProductQty {
  Product: Product;
  setLoading: (...args: boolean[]) => void;
}
declare interface ProductId {
  id: string;
  setLoading: (...args: boolean[]) => void;
}

declare interface SetOpen {
  setOpen_Update_Form: (value: boolean) => void;
  setConfirm_Update_Form: (value: boolean) => void;
}
declare type TDataType = {
  id: string;
  images: string;
  title: string;
  price: number;
  cat_prefix: string;
  Quantity?: number;
  max: number;
  discount: string;
  category: string;
}[];
declare interface IProductsState {
  Products: Product[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}
declare type TLoading = "idle" | "pending" | "succeeded" | "failed";
interface TFormData {
  FirstName: string | undefined;
  CompanyName: string;
  StreetAddress: string;
  Apartment: string;
  City: string;
  PhoneNumber: string;
  EmailAddress: string;
}

type TFormComplete = {
  setcheckoutformcomplete: (value: boolean) => void;
  formData: TFormData;
  setFormData: React.Dispatch<React.SetStateAction<TFormData>>;
};
