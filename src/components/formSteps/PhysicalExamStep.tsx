import React, { useEffect } from 'react';
import FormInput from '../FormInput';
import { MedicalRecord } from '../../types';
import { calculateBMI } from '../../utils/formHelpers';

interface PhysicalExamStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const PhysicalExamStep: React.FC<PhysicalExamStepProps> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };
  
  useEffect(() => {
    // Calcular el IMC cuando cambie la talla o el peso
    if (data.talla && data.peso) {
      const bmi = calculateBMI(data.talla, data.peso);
      updateData('imc', bmi);
    }
  }, [data.talla, data.peso, updateData]);

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Registre las mediciones antropométricas y signos vitales del paciente.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormInput
          id="talla"
          label="Talla (cm)"
          type="number"
          value={data.talla}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="peso"
          label="Peso (kg)"
          type="number"
          value={data.peso}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="imc"
          label="IMC (kg/m²)"
          type="text"
          value={data.imc}
          onChange={handleChange}
          required
          className="bg-gray-50"
        />
        
        <FormInput
          id="tensionArterial"
          label="Tensión Arterial (mmHg)"
          type="text"
          value={data.tensionArterial}
          onChange={handleChange}
          placeholder="Ej. 120/80"
          required
        />
        
        <FormInput
          id="frecuenciaCardiaca"
          label="Frecuencia Cardíaca (lpm)"
          type="number"
          value={data.frecuenciaCardiaca}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="frecuenciaRespiratoria"
          label="Frecuencia Respiratoria (rpm)"
          type="number"
          value={data.frecuenciaRespiratoria}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="temperatura"
          label="Temperatura (°C)"
          type="number"
          value={data.temperatura}
          onChange={handleChange}
          step="0.1"
          required
        />
      </div>
    </div>
  );
};

export default PhysicalExamStep;