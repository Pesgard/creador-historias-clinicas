import React from 'react';
import FormInput from '../FormInput';
import { MedicalRecord } from '../../types';

interface GeneralInfoStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const GeneralInfoStep: React.FC<GeneralInfoStepProps> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };
  
  const examTypes = [
    { value: 'INGRESO', label: 'Ingreso' },
    { value: 'PERIÓDICO', label: 'Periódico' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Complete la información general del examen médico.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="nombreEmpresa"
          label="Nombre de la Empresa"
          value={data.nombreEmpresa}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="fecha"
          label="Fecha"
          type="date"
          value={data.fecha}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="folio"
          label="Folio"
          value={data.folio}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="tipoExamen"
          label="Tipo de Examen"
          type="select"
          value={data.tipoExamen}
          onChange={handleChange}
          options={examTypes}
          required
        />
      </div>
    </div>
  );
};

export default GeneralInfoStep;