import "./phoneInput.scss";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

const Phoneinput = () => {
  const [number, setNumber] = useState();
  console.log(number);
  const possiblePhone = () => {
    number && isValidPhoneNumber && isPossiblePhoneNumber(number)
      ? console.log("Valid" + number)
      : console.log("Not Valid" + number);
  };
  possiblePhone();
  return (
    <PhoneInput
      type="text"
      value={number}
      onChange={(number) => {
        setNumber(number);
      }}
      className="form-control"
    />
  );
};
export default Phoneinput;
