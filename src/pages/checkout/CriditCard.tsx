import {
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@mui/joy";
import { memo, useState } from "react";
import { Form } from "react-bootstrap";
import { FaCheck, FaCreditCard, FaInfo } from "react-icons/fa";

type TCreditCardProps = {
  disableFormBtn: boolean;
  setdisableFormBtn: (value: boolean) => void;
};
const CriditCardPayment = ({
  disableFormBtn,
  setdisableFormBtn,
}: TCreditCardProps) => {
  const [cardNumber, setcardNumber] = useState("");
  const [Expirydate, setExpirydate] = useState("");
  const [cvv, setcvv] = useState("");
  const [cardholder, setcardholder] = useState("");

  return (
    <Form
      className="card-content"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card number</FormLabel>
          <Input
            className={disableFormBtn ? "input checkedInput" : "input"}
            type="number"
            endDecorator={<FaCreditCard />}
            onChange={(e) => {
              setcardNumber(e.target.value);
            }}
            disabled={disableFormBtn}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input
            className={disableFormBtn ? "input checkedInput" : "input"}
            type="number"
            endDecorator={<FaCreditCard />}
            onChange={(e) => {
              setExpirydate(e.target.value);
            }}
            disabled={disableFormBtn}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input
            className={disableFormBtn ? "input checkedInput" : "input"}
            type="number"
            endDecorator={<FaInfo />}
            onChange={(e) => {
              setcvv(e.target.value);
            }}
            disabled={disableFormBtn}
            required
          />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card holder name</FormLabel>
          <Input
            className={disableFormBtn ? "input checkedInput" : "input"}
            placeholder="Enter cardholder's full name"
            onChange={(e) => {
              setcardholder(e.target.value);
            }}
            disabled={disableFormBtn}
            required
          />
        </FormControl>
        <Checkbox label="Save card" sx={{ gridColumn: "1/-1", my: 1 }} />
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
            variant="solid"
            color="primary"
            type="submit"
            disabled={disableFormBtn}
            onClick={() => {
              if (
                cardholder.length > 0 &&
                cvv.length > 0 &&
                Expirydate.length > 0 &&
                cardNumber.length > 0
              ) {
                setdisableFormBtn(true);
              } else {
                setdisableFormBtn(false);
              }
            }}
          >
            {disableFormBtn ? (
              <span style={{ color: "green" }}>
                Confirmed <FaCheck />
              </span>
            ) : (
              "Add card"
            )}
          </Button>
        </CardActions>
      </CardContent>
    </Form>
  );
};
export default memo(CriditCardPayment);
