import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { MedicalRecord } from './types';
import { getEmptyMedicalRecord, formSteps } from './utils/formHelpers';
import { generatePDF } from './utils/pdfGenerator';

// Componentes
import FormHeader from './components/FormHeader';
import ProgressBar from './components/ProgressBar';
import MobileStepper from './components/MobileStepper';
import FormNavigation from './components/FormNavigation';

// Pasos del formulario
import GeneralInfoStep from './components/formSteps/GeneralInfoStep';
import PersonalInfoStep from './components/formSteps/PersonalInfoStep';
import WorkInfoStep from './components/formSteps/WorkInfoStep';
import FamilyHistoryStep from './components/formSteps/FamilyHistoryStep';
import PersonalHistoryStep from './components/formSteps/PersonalHistoryStep';
import HabitsStep from './components/formSteps/HabitsStep';
import PhysicalExamStep from './components/formSteps/PhysicalExamStep';
import SystemsExamStep from './components/formSteps/SystemsExamStep';
import MedicalEvaluationStep from './components/formSteps/MedicalEvaluationStep';
import ReviewStep from './components/formSteps/ReviewStep';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<MedicalRecord>(getEmptyMedicalRecord());
  const [showMobileStepper, setShowMobileStepper] = useState(false);
  
  const updateFormData = (fieldName: keyof MedicalRecord, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }));
  };
  
  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    window.scrollTo(0, 0);
  };
  
  const handleExportPDF = () => {
    generatePDF(formData);
  };
  
  const toggleMobileStepper = () => {
    setShowMobileStepper(!showMobileStepper);
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <GeneralInfoStep data={formData} updateData={updateFormData} />;
      case 1:
        return <PersonalInfoStep data={formData} updateData={updateFormData} />;
      case 2:
        return <WorkInfoStep data={formData} updateData={updateFormData} />;
      case 3:
        return <FamilyHistoryStep data={formData} updateData={updateFormData} />;
      case 4:
        return <PersonalHistoryStep data={formData} updateData={updateFormData} />;
      case 5:
        return <HabitsStep data={formData} updateData={updateFormData} />;
      case 6:
        return <PhysicalExamStep data={formData} updateData={updateFormData} />;
      case 7:
        return <SystemsExamStep data={formData} updateData={updateFormData} />;
      case 8:
        return <MedicalEvaluationStep data={formData} updateData={updateFormData} />;
      case 9:
        return <ReviewStep data={formData} />;
      default:
        return null;
    }
  };
  
  const currentStepData = formSteps[currentStep];
  const StepIcon = LucideIcons[currentStepData.icon as keyof typeof LucideIcons] || LucideIcons.Circle;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <LucideIcons.Stethoscope className="text-blue-600 mr-2" size={24} />
            <h1 className="text-xl font-bold text-gray-900">Historial Médico</h1>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              {formData.nombreEmpresa || 'Nueva Historia Clínica'}
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
              {formData.folio ? `Folio: ${formData.folio}` : 'Sin folio'}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="hidden md:block md:col-span-3">
            <ProgressBar 
              steps={formSteps} 
              currentStep={currentStep} 
              onStepClick={handleStepClick} 
            />
          </div>
          
          <div className="md:col-span-9">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <FormHeader 
                title={currentStepData.title} 
                description={currentStepData.description} 
              />
              
              <div className="md:overflow-hidden">
                {renderStepContent()}
              </div>
              
              <FormNavigation 
                currentStep={currentStep}
                totalSteps={formSteps.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onExportPDF={handleExportPDF}
                isLastStep={currentStep === formSteps.length - 1}
              />
            </div>
          </div>
        </div>
      </main>
      
      <MobileStepper 
        steps={formSteps}
        currentStep={currentStep}
        showStepper={showMobileStepper}
        toggleStepper={toggleMobileStepper}
        onStepClick={handleStepClick}
      />
    </div>
  );
}

export default App;