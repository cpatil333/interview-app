import { type ChangeEvent, type SubmitEvent } from "react";
import styles from "../../module/personalInfo.module.css";
import { useState } from "react";

const BillingForm = ({ setActiveTab, formData, setFormData }: any) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    //setFormData({ ...formData, inputValue });
    setIsSubmit(true);
    e.preventDefault();
  };

  const handlePrevious = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(false);
    setActiveTab(1);
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: "black" }}>Billing</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInput}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={(e) => handlePrevious(e)}>Previous</button>{" "}
          <button>Submit</button>
        </div>
      </form>
      <div>
        {isSubmit && (
          <div className={styles.displayDetails}>
            <span style={{ marginTop: "15px" }}>
              First Name: {formData.firstName}
            </span>
            <span>Email: {formData.email}</span>
            <span>Company: {formData.company}</span>
            <span>Experience: {formData.experience}</span>
            <span>Card Number: {formData.cardNumber}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingForm;
