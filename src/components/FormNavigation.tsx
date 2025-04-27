import React from 'react';
import { ArrowLeft, ArrowRight, FileDown } from 'lucide-react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onExportPDF?: () => void;
  isLastStep: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onExportPDF,
  isLastStep,
}) => {
  return (
    <div className="flex justify-between items-center border-t pt-4 mt-8">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
          currentStep === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white border border-blue-500 text-blue-500 hover:bg-blue-50'
        }`}
      >
        <ArrowLeft size={18} className="mr-2" />
        Anterior
      </button>
      
      <div className="text-sm text-gray-500">
        Paso {currentStep + 1} de {totalSteps}
      </div>
      
      {isLastStep ? (
        <button
          type="button"
          onClick={onExportPDF}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <FileDown size={18} className="mr-2" />
          Exportar PDF
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Siguiente
          <ArrowRight size={18} className="ml-2" />
        </button>
      )}
    </div>
  );
};

export default FormNavigation;