import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex-1">
            <div className={index <= currentStep ? 'text-blue-600' : 'text-gray-400'}>
              <span className="flex items-center">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-600">
                  {index + 1}
                </span>
                <span className="ml-2 text-sm font-medium">{step}</span>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Stepper;
