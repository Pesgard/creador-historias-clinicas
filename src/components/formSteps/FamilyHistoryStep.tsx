import React from 'react';
import FormInput from '../FormInput';
import { MedicalRecord } from '../../types';

interface FamilyHistoryStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const FamilyHistoryStep: React.FC<FamilyHistoryStepProps> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Registre los antecedentes heredo-familiares marcando las enfermedades presentes en la familia.
        </p>
      </div>

      <div className="space-y-6">
        {/* Primera columna */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <FormInput
              id="diabetes"
              label="Diabetes"
              type="checkbox"
              value={data.diabetes}
              onChange={handleChange}
            />
            <FormInput
              id="hipertension"
              label="Hipertensión"
              type="checkbox"
              value={data.hipertension}
              onChange={handleChange}
            />
            <FormInput
              id="ulceras"
              label="Úlceras"
              type="checkbox"
              value={data.ulceras}
              onChange={handleChange}
            />
            <FormInput
              id="obesidad"
              label="Obesidad"
              type="checkbox"
              value={data.obesidad}
              onChange={handleChange}
            />
            <FormInput
              id="epilepsia"
              label="Epilepsia"
              type="checkbox"
              value={data.epilepsia}
              onChange={handleChange}
            />
          </div>

          {/* Segunda columna */}
          <div className="space-y-4">
            <FormInput
              id="nefropatias"
              label="Nefropatías"
              type="checkbox"
              value={data.nefropatias}
              onChange={handleChange}
            />
            <FormInput
              id="tuberculosis"
              label="Tuberculosis"
              type="checkbox"
              value={data.tuberculosis}
              onChange={handleChange}
            />
            <FormInput
              id="alergias"
              label="Alergias"
              type="checkbox"
              value={data.alergias}
              onChange={handleChange}
            />
            <FormInput
              id="dislipidemias"
              label="Dislipidemias"
              type="checkbox"
              value={data.dislipidemias}
              onChange={handleChange}
            />
            <FormInput
              id="artritis"
              label="Artritis"
              type="checkbox"
              value={data.artritis}
              onChange={handleChange}
            />
          </div>

          {/* Tercera columna */}
          <div className="space-y-4">
            <FormInput
              id="oncologicos"
              label="Oncológicos"
              type="checkbox"
              value={data.oncologicos}
              onChange={handleChange}
            />
            <FormInput
              id="neumopatias"
              label="Neumopatías"
              type="checkbox"
              value={data.neumopatias}
              onChange={handleChange}
            />
            <FormInput
              id="cardiopatias"
              label="Cardiopatías"
              type="checkbox"
              value={data.cardiopatias}
              onChange={handleChange}
            />
            <FormInput
              id="otros"
              label="Otros"
              type="checkbox"
              value={data.otros}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Campo para especificar quién tiene las enfermedades */}
        <div className="mt-6">
          <FormInput
            id="quien"
            label="¿Quién presenta estas enfermedades?"
            multiline
            rows={4}
            value={data.quien}
            onChange={handleChange}
            placeholder="Especifique qué familiar presenta cada una de las enfermedades marcadas..."
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyHistoryStep;