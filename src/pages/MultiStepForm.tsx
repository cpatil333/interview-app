import { useState } from "react";
import styles from "../module/personalInfo.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import PersonalInfoForm from "../components/Person/PersonalInfoForm";
import ProfessionalInfoForm from "../components/Person/ProfessionalInfoForm";
import BillingForm from "../components/Person/BillingForm";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    experience: "",
    cardNumber: "",
  });

  const [activeTab, setActiveTab] = useState(0);
  const TabContent = [
    <PersonalInfoForm
      setActiveTab={setActiveTab}
      formData={formData}
      setFormData={setFormData}
    />,
    <ProfessionalInfoForm
      setActiveTab={setActiveTab}
      formData={formData}
      setFormData={setFormData}
    />,
    <BillingForm
      setActiveTab={setActiveTab}
      formData={formData}
      setFormData={setFormData}
    />,
  ];
  // console.log(formData);
  return (
    <div>
      <button onClick={() => setActiveTab(0)}>Personal Info</button>
      <MdKeyboardArrowRight style={{ marginBottom: "-5px" }} />
      <button onClick={() => setActiveTab(1)}>Professional Info</button>
      <MdKeyboardArrowRight style={{ marginBottom: "-5px" }} />
      <button onClick={() => setActiveTab(2)}>Billing</button>

      <div className={styles.tabContent}>{TabContent[activeTab]}</div>
    </div>
  );
};

export default MultiStepForm;
