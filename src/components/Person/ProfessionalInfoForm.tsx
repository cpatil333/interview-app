import { type ChangeEvent, type SubmitEvent } from "react";
import styles from "../../module/personalInfo.module.css";

const ProfessionalInfoForm = ({ setActiveTab, formData, setFormData }: any) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    //setFormData({ ...formData, inputValue });
    setActiveTab(2);
  };

  const handlePrevious = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActiveTab(0);
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleNext}>
        <h1 style={{ color: "black" }}>Professional Info</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Company Name."
            name="company"
            value={formData.company}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Experience.."
            name="experience"
            value={formData.experience}
            onChange={handleInput}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={(e) => handlePrevious(e)}>Previous</button>{" "}
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalInfoForm;
