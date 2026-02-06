// components/ProgressBar.jsx
const steps = ["Project", "Features", "Design", "Summary"];

export default function ProgressBar({ step, setStep, canGoToStep }) {
  return (
    <div className="progress-wrap">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`step ${step >= index ? "active" : ""}`}
          onClick={() => {
            if (canGoToStep(index)) setStep(index);
          }}
          style={{ cursor: index <= step ? "pointer" : "not-allowed" }}
        >
          <span>{index + 1}</span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}
