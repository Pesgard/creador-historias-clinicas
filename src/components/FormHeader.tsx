import React from 'react';
import { Stethoscope } from 'lucide-react';

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex items-center justify-between mb-6 pb-4 border-b">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
        <Stethoscope size={24} />
      </div>
    </div>
  );
};

export default FormHeader;