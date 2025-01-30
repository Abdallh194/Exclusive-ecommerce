import { ChangeEvent, memo } from "react";
import { Form, FormControl } from "react-bootstrap";

const FormDetails = ({
  setcheckoutformcomplete,
  formData,
  setFormData,
}: TFormComplete) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          formData.Apartment &&
          formData.StreetAddress &&
          formData.EmailAddress &&
          formData.City
        ) {
          if (
            formData.Apartment?.length > 0 &&
            formData.CompanyName?.length > 0 &&
            formData.StreetAddress?.length > 0 &&
            formData.City?.length > 0 &&
            formData.EmailAddress?.length > 0
          ) {
            setcheckoutformcomplete(true);
          } else {
            setcheckoutformcomplete(false);
          }
        }
      }}
    >
      <div className="">
        <label>First Name</label>
        <FormControl
          onChange={handleChange}
          type="text"
          name="FirstName"
          placeholder="Abdallh"
          value={formData.FirstName}
          required
        />
      </div>

      <div className="">
        <label>Company Name</label>
        <FormControl
          onChange={handleChange}
          type="text"
          name="CompanyName"
          placeholder="Company Name"
        />
      </div>

      <div className="">
        <label>Street Address</label>
        <FormControl
          onChange={handleChange}
          type="text"
          name="StreetAddress"
          placeholder="123 Main St"
          value={formData.StreetAddress}
          required
        />
      </div>

      <div className="">
        <label>Apartment, floor, etc. (optional)</label>
        <FormControl
          onChange={handleChange}
          type="text"
          name="Apartment"
          placeholder="Floor 3, Apt 12"
          value={formData.Apartment}
        />
      </div>

      <div className="">
        <label>Town/City</label>
        <FormControl
          onChange={handleChange}
          type="text"
          name="City"
          placeholder="Town/City"
          value={formData.City}
          required
        />
      </div>

      <div className="">
        <label>Phone Number</label>
        <FormControl
          onChange={handleChange}
          type="text"
          name="PhoneNumber"
          placeholder="01012345678"
          value={formData.PhoneNumber}
          required
        />
      </div>

      <div className="">
        <label>Email Address</label>
        <FormControl
          onChange={handleChange}
          type="email"
          name="EmailAddress"
          placeholder="example@gmail.com"
          value={formData.EmailAddress}
          required
        />
      </div>
      <FormControl type="submit" className="g-btn" value="confirm" />
    </Form>
  );
};

export default memo(FormDetails);
