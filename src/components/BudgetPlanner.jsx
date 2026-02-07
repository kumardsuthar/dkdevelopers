import { useState } from "react";
import ProgressBar from "./ProgressBar";
import "../assets/css/budgetPlanner.css";
import { Bolt, Replace, Handbag, Sparkles , ShieldCheck,
  UserCheck,
  CreditCard,
  Search ,Tag, User, Mail, Phone } from "lucide-react";

export default function BudgetPlanner() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    projectType: "",
    features: [],
    design: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
  });

  const projectIcons = {
  static: Bolt,
  dynamic: Replace,
  ecommerce: Handbag,
  webapp: Sparkles, // you already used this
};

const featureIcons = {
  admin: ShieldCheck,
  auth: UserCheck,
  payment: CreditCard,
  seo: Search,
};



  /* ================= VALIDATION ================= */
  const validateStep = currentStep => {
    if (currentStep === 0 && !data.projectType)
      return "Please select a project type";

    if (currentStep === 1 && data.features.length === 0)
      return "Select at least one feature";

    if (
      currentStep === 2 &&
      (!data.design || !data.timeline)
    )
      return "Select design and delivery timeline";

    return "";
  };

  /* ================= STEP CHANGE ================= */
  const nextStep = () => {
    const validationError = validateStep(step);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const prevStep = () => {
    setError("");
    setStep(step - 1);
  };

  /* ================= TAB CLICK RULE ================= */
  const canGoToStep = targetStep => {
    if (targetStep <= step) return true;

    for (let i = 0; i < targetStep; i++) {
      if (validateStep(i)) return false;
    }
    return true;
  };

  /* ================= BUDGET ================= */
  const prices = {
    projectType: { static: 6999, dynamic: 8999, ecommerce: 24999, webapp: 34999 },
    features: { admin: 8000, auth: 3000, payment: 5000, seo: 50000 },
    design: { basic: 0, standard: 4000, premium: 8000 },
    timeline: { normal: 0, fast: 2000, urgent: 5000 },
  };

  const calculateTotal = () => {
    let total = prices.projectType[data.projectType] || 0;
    data.features.forEach(f => (total += prices.features[f]));
    total += prices.design[data.design] || 0;
    total += prices.timeline[data.timeline] || 0;
    return total;
  };

  /* ================= FEATURES TOGGLE ================= */
  const toggleFeature = feature => {
    setData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature],
    }));
  };

  return (
    <div className="planner-container">
      <ProgressBar
        step={step}
        setStep={setStep}
        canGoToStep={canGoToStep}
      />

      {/* ERROR MESSAGE */}
      {error && <p className="error-text">{error}</p>}

      {/* STEP 1 */}
      {step === 0 && (
        <div className="step-box animate">
          <h3 style={{
            display : "flex",
            alignItems : "center",
            gap : "10px",
            marginBottom : "35px"

          }}> <Sparkles color="#e37215" size={25} /> Select Project Type  </h3>
       <div className="options-grid">
  {["static", "dynamic", "ecommerce", "webapp"].map(type => {
    const Icon = projectIcons[type];

    return (
      <label
        key={type}
        className={`option-card ${
          data.projectType === type ? "active" : ""
        }`}
      >
        <input
          type="radio"
          onChange={() =>
            setData({ ...data, projectType: type })
          }
        />

        {/* ICON */}
         <div style={
          {
             display : "flex",
            alignItems : "center",
            gap : "10px",
            
          
          }
         }>
          <Icon size={18} />

        {/* TEXT */}
        <span className="option-text">
          {type.toUpperCase()}
        </span>
         </div>
      </label>
    );
  })}
</div>


          <div className="btn-group">
            <button className="btn-next" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 1 && (
  <div className="step-box animate">
    <h3
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "35px",
      }}
    >
      <Sparkles color="#e37215" size={25} />
      Select Features
    </h3>

    <div className="options-grid">
      {["admin", "auth", "payment", "seo"].map(feature => {
        const Icon = featureIcons[feature];

        return (
          <label
            key={feature}
            className={`option-card ${
              data.features.includes(feature) ? "active" : ""
            }`}
          >
            <input
              type="checkbox"
              onChange={() => toggleFeature(feature)}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* ICON */}
              <Icon size={18} />

              {/* TEXT */}
              <span className="option-text">
                {feature.toUpperCase()}
              </span>
            </div>
          </label>
        );
      })}
    </div>

    <div className="btn-group">
      <button className="btn-back" onClick={prevStep}>
        Back
      </button>
      <button className="btn-next" onClick={nextStep}>
        Next
      </button>
    </div>
  </div>
)}


      {/* STEP 3 */}
      {step === 2 && (
        <div className="step-box animate">
          <h3>Design & Timeline</h3>

          <select
            value={data.design}
            onChange={e =>
              setData({ ...data, design: e.target.value })
            }
          >
            <option value="">Select Design</option>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>

          <select
            value={data.timeline}
            onChange={e =>
              setData({ ...data, timeline: e.target.value })
            }
          >
            <option value="">Delivery Speed</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
            <option value="urgent">Urgent</option>
          </select>

          <div className="btn-group">
            <button className="btn-back" onClick={prevStep}>
              Back
            </button>
            <button className="btn-next" onClick={nextStep}>
              See Budget
            </button>
          </div>
        </div>
      )}

      {/* STEP 4 – FINAL WITH SAME ANIMATION */}
    {step === 3 && (
  <div className="step-box animate">
    {/* HEADING */}
    <h3
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "30px",
      }}
    >
      <Sparkles color="#e37215" size={25} />
      Your Estimated Budget
    </h3>

    {/* PRICE TAG */}
    <div className="price-tag">
      <Tag size={30} />
      <span>Estimated Cost</span>
      <h2>₹ {calculateTotal()}</h2>
    </div>

    {/* NOTE */}
    <p className="budget-note">
      This is an estimated price based on your selections. Final cost may vary
      after requirement discussion.
    </p>

    {/* INPUT GRID */}
    <div className="input-grid">
      <div className="input-box">
        <User size={20} />
        <input placeholder="Your Name" />
      </div>

      <div className="input-box">
        <Mail size={20} />
        <input placeholder="Email Address" />
      </div>

      <div className="input-box">
        <Phone size={20} />
        <input placeholder="WhatsApp Number" />
      </div>
    </div>

    {/* BUTTONS */}
    <div className="btn-group">
      <button className="btn-back" onClick={prevStep}>
        Back
      </button>
      <button className="submit-btn">
        Get Detailed Proposal
      </button>
    </div>
  </div>
)}

    </div>
  );
}
