import React, { useState } from 'react';

interface WizardProps {
  steps: React.ReactNode[];
  onComplete: () => void;
}

const Wizard: React.FC<WizardProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <div className="mb-4">
        {steps[currentStep]}
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} disabled={currentStep === 0} className="btn-secondary">
          Previous
        </button>
        <button onClick={nextStep} className="btn-primary">
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Wizard;
