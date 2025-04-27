import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FormStep } from '../types';

interface ProgressBarProps {
  steps: FormStep[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="hidden md:flex flex-col bg-gray-50 p-5 rounded-lg shadow-sm h-fit sticky top-4">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Progreso</h2>
      <div className="space-y-1">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <button
              key={step.id}
              onClick={() => onStepClick(index)}
              className={`flex items-center p-3 w-full rounded-md transition-all duration-200 text-left
                ${isCompleted ? 'text-blue-600 bg-blue-50' : ''}
                ${isCurrent ? 'bg-blue-100 text-blue-700 font-medium' : ''}
                ${!isCompleted && !isCurrent ? 'text-gray-600 hover:bg-gray-100' : ''}
              `}
            >
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full mr-3
                ${isCompleted ? 'bg-blue-600 text-white' : ''}
                ${isCurrent ? 'bg-blue-500 text-white' : ''}
                ${!isCompleted && !isCurrent ? 'bg-gray-200 text-gray-600' : ''}
              `}>
                {isCompleted ? (
                  <LucideIcons.Check size={18} />
                ) : (
                  <LucideIcons.Circle size={18} />
                )}
              </div>
              <div>
                <div className="font-medium">{step.title}</div>
                <div className="text-xs text-gray-500">{step.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;