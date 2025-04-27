import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FormStep } from '../types';

interface MobileStepperProps {
  steps: FormStep[];
  currentStep: number;
  showStepper: boolean;
  toggleStepper: () => void;
  onStepClick: (index: number) => void;
}

const MobileStepper: React.FC<MobileStepperProps> = ({ 
  steps, 
  currentStep, 
  showStepper, 
  toggleStepper, 
  onStepClick 
}) => {
  return (
    <div className="md:hidden">
      <button 
        onClick={toggleStepper}
        className="fixed z-10 bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        {showStepper ? (
          <LucideIcons.X size={24} />
        ) : (
          <LucideIcons.ListOrdered size={24} />
        )}
      </button>
      
      {showStepper && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Secciones</h2>
            <button onClick={toggleStepper} className="text-gray-600">
              <LucideIcons.X size={24} />
            </button>
          </div>
          
          <div className="space-y-1">
            {steps.map((step, index) => {
              const Icon = LucideIcons[step.icon as keyof typeof LucideIcons] || LucideIcons.Circle;
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    onStepClick(index);
                    toggleStepper();
                  }}
                  className={`flex items-center p-4 w-full rounded-md transition-all duration-200 text-left
                    ${isCompleted ? 'text-blue-600 bg-blue-50' : ''}
                    ${isCurrent ? 'bg-blue-100 text-blue-700 font-medium' : ''}
                    ${!isCompleted && !isCurrent ? 'text-gray-600 hover:bg-gray-100' : ''}
                  `}
                >
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full mr-3
                    ${isCompleted ? 'bg-blue-600 text-white' : ''}
                    ${isCurrent ? 'bg-blue-500 text-white' : ''}
                    ${!isCompleted && !isCurrent ? 'bg-gray-200 text-gray-600' : ''}
                  `}>
                    {isCompleted ? (
                      <LucideIcons.Check size={20} />
                    ) : (
                      <Icon size={20} />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-sm text-gray-500">{step.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileStepper;