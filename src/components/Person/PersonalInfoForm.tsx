import { type ChangeEvent, type SubmitEvent } from "react";
import styles from "../../module/personalInfo.module.css";

const PersonalInfoForm = ({ setActiveTab, formData, setFormData }: any) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActiveTab(1);
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleNext}>
        <h1 style={{ color: "black" }}>Personal Info</h1>
        <div>
          <input
            type="text"
            placeholder="Enter First Name.."
            name="firstName"
            value={formData.firstName}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email.."
            name="email"
            value={formData.email}
            onChange={handleInput}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
