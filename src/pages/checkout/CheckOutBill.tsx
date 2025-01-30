import { memo, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import ModalConfirm from "./ModalConfirm";
import CriditCardPayment from "./CriditCard";
import { Button } from "@mui/material";
import { useAppDispatch } from "@redux/hooks";
import {
  AddOrderToUser,
  clearcartproductfullinfo,
  ConfirmOrder,
} from "@redux/Cart/CartSliceEnhance";
import { useNavigate } from "react-router-dom";
import ProductsDetails from "./ProductsDetails";

const CheckOutBill: React.FC<ProductListProps> = ({
  products,
  checkoutformcomplete,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const SubTotal = () => {
    let total = 0;
    products.forEach(
      (product) => (total += product.price * (product.Quantity ?? 0))
    );
    return total;
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [disableFormBtn, setdisableFormBtn] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => {
    dispatch(AddOrderToUser(products));
    dispatch(ConfirmOrder());
    dispatch(clearcartproductfullinfo());
    setShow(false);
    navigate("/user-profile/My-Orders");
  };

  return (
    <div className="checkout_bill">
      <ProductsDetails products={products} />
      <div className="wid-80">
        <div className="d-flex mt-4 justify-content-between">
          <div className="bill-head">SubTotal</div>
          <div className="bill-head">{SubTotal()}$ </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="bill-head">Shipping</div>
          <div className="bill-head">free</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="bill-head">Total</div>
          <div className="bill-head">{SubTotal()}$</div>
        </div>
        <div className="mt-4">
          <div className="bill-head">Payment methods</div>
          <Form>
            <Form.Check
              type="radio"
              id="radioOption1"
              name="exampleRadios"
              label={
                selectedOption == "bank" ? (
                  <span style={{ color: "#db4444" }}>
                    Bank <FaCheck />
                  </span>
                ) : (
                  "Bank"
                )
              }
              value="bank"
              checked={selectedOption === "bank"}
              onChange={(event) => {
                setSelectedOption(event.target.value);
              }}
              className="mt-2"
            />

            <Form.Check
              type="radio"
              id="radioOption2"
              name="exampleRadios"
              label={
                selectedOption == "cash" ? (
                  <span style={{ color: "#db4444" }}>
                    Cash on delivery <FaCheck />
                  </span>
                ) : (
                  "Cash on delivery"
                )
              }
              value="cash"
              checked={selectedOption === "cash"}
              onChange={(event) => {
                setSelectedOption(event.target.value);
              }}
            />
          </Form>
        </div>
        {selectedOption == "bank" ? (
          <CriditCardPayment
            disableFormBtn={disableFormBtn}
            setdisableFormBtn={setdisableFormBtn}
          />
        ) : (
          ""
        )}
        <div className="form-copoun d-flex mt-4">
          <FormControl placeholder="Coupon Code" className="Coupon" />
          <div className="btn g-btn">Apply Coupon</div>
        </div>{" "}
        <div className="bill-head mt-2">
          {selectedOption == "cash" || disableFormBtn ? (
            <div className="check">
              Payment Method Selection <FaCheck />
            </div>
          ) : (
            <div className="uncheck">
              Payment Method Selection <FaInfoCircle />
            </div>
          )}
        </div>
        <div className="bill-head mt-2">
          {checkoutformcomplete ? (
            <div className="check">
              Your Details Complete <FaCheck />
            </div>
          ) : (
            <div className="uncheck">
              Your Details Complete <FaInfoCircle />
            </div>
          )}
        </div>
        <Button
          className="apply mt-3"
          variant="contained"
          color="error"
          disabled={
            !(
              (selectedOption == "cash" || disableFormBtn) &&
              checkoutformcomplete
            )
          }
          onClick={() => {
            if (
              (selectedOption == "cash" || disableFormBtn) &&
              checkoutformcomplete
            ) {
              handleShow();
            } else {
              handleClose();
              console.log("data error");
            }
          }}
        >
          Place Order
        </Button>
        <ModalConfirm show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default memo(CheckOutBill);
