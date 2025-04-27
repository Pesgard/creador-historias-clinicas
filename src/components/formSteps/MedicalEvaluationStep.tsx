import React from 'react';
import FormInput from '../FormInput';
import { MedicalRecord } from '../../types';

interface MedicalEvaluationStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const MedicalEvaluationStep: React.FC<MedicalEvaluationStepProps> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };
  
  const aptitudOptions = [
    { value: 'APTO', label: 'APTO' },
    { value: 'APTO CON OBSERVACION', label: 'APTO CON OBSERVACIÓN' },
    { value: 'APTO CON LIMITACIONES', label: 'APTO CON LIMITACIONES' },
    { value: 'NO APTO', label: 'NO APTO' }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Complete la evaluación médica final, diagnósticos y recomendaciones.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {/* Auxiliares de Diagnóstico */}
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-semibold mb-4 text-center">AUXILIARES DE DIAGNÓSTICO</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              id="bloodHemoglobin"
              label="BH"
              value={data.bloodHemoglobin || ""}
              onChange={handleChange}
            />
            
            <FormInput
              id="audiometry"
              label="AUDIOMETRÍAS"
              value={data.audiometry || ""}
              onChange={handleChange}
            />
            
            <FormInput
              id="alcoholemia"
              label="ALCOHOLEMIA"
              value={data.alcoholemia || ""}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <FormInput
              id="quickSedimentation"
              label="QS"
              value={data.quickSedimentation || ""}
              onChange={handleChange}
            />
            
            <FormInput
              id="spirometry"
              label="ESPIROMETRÍAS"
              value={data.spirometry || ""}
              onChange={handleChange}
            />
            
            <FormInput
              id="antidoping"
              label="ANTIDOPAJE"
              value={data.antidoping || ""}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <FormInput
              id="urine"
              label="ORINA"
              value={data.urine || ""}
              onChange={handleChange}
            />
            
            <FormInput
              id="chestXRay"
              label="RX TORAX"
              value={data.chestXRay || ""}
              onChange={handleChange}
            />
            
            <FormInput
              id="lumbarXRay"
              label="RX LUMBAR"
              value={data.lumbarXRay || ""}
              onChange={handleChange}
            />
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium">TEST DE ROMBERG Y UNTERBERGER</h4>
            <div className="flex items-center space-x-6 mt-2">
              <label className="flex items-center">
                <span className="mr-2">POS</span>
                <input
                  type="radio"
                  name="rombergTest"
                  id="rombergTest"
                  value="POS"
                  checked={data.rombergTest === "POS"}
                  onChange={handleChange}
                  className="form-radio h-4 w-4"
                />
              </label>
              <label className="flex items-center">
                <span className="mr-2">NEG</span>
                <input
                  type="radio"
                  name="rombergTest"
                  id="rombergTest"
                  value="NEG"
                  checked={data.rombergTest === "NEG"}
                  onChange={handleChange}
                  className="form-radio h-4 w-4"
                />
              </label>
              <FormInput
                id="rombergTestObservations"
                label="OBSERVACIONES"
                value={data.rombergTestObservations || ""}
                onChange={handleChange}
                className="flex-grow"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium">MARCHA DE BABINSKI</h4>
            <div className="flex items-center space-x-6 mt-2">
              <label className="flex items-center">
                <span className="mr-2">POS</span>
                <input
                  type="radio"
                  name="babinskiTest"
                  id="babinskiTest"
                  value="POS"
                  checked={data.babinskiTest === "POS"}
                  onChange={handleChange}
                  className="form-radio h-4 w-4"
                />
              </label>
              <label className="flex items-center">
                <span className="mr-2">NEG</span>
                <input
                  type="radio"
                  name="babinskiTest"
                  id="babinskiTest"
                  value="NEG"
                  checked={data.babinskiTest === "NEG"}
                  onChange={handleChange}
                  className="form-radio h-4 w-4"
                />
              </label>
            </div>
          </div>
        </div>
        
        <FormInput
          id="diagnosticos"
          label="CONCLUSIONES DIAGNÓSTICAS"
          multiline
          rows={5}
          value={data.diagnosticos || ""}
          onChange={handleChange}
          placeholder="Listado de diagnósticos..."
          required
        />
        
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-semibold mb-4 text-center">APTITUD MÉDICA PARA EL TRABAJO</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {aptitudOptions.map(option => (
              <div 
                key={option.value}
                className={`border rounded-lg p-2 text-center cursor-pointer ${
                  data.aptitud === option.value 
                    ? option.value === 'APTO' 
                      ? 'bg-green-500 text-white'
                      : option.value === 'APTO CON OBSERVACION'
                        ? 'bg-blue-500 text-white' 
                        : option.value === 'APTO CON LIMITACIONES'
                          ? 'bg-yellow-400 text-black'
                          : 'bg-red-500 text-white'
                    : 'bg-white'
                }`}
                onClick={() => updateData('aptitud', option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-4 mt-2">
          <h3 className="text-lg font-semibold mb-4">DATOS DEL PROFESIONAL DE LA SALUD</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              id="nombreMedico"
              label="NOMBRE DEL MÉDICO"
              value={data.nombreMedico || ""}
              onChange={handleChange}
              required
            />
            
            <div className="flex justify-end items-center border rounded-lg p-4">
              <p className="text-center w-full">FIRMA DEL MÉDICO</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormInput
              id="especialidadMedico"
              label="ESPECIALIDAD"
              value={data.especialidadMedico || ""}
              onChange={handleChange}
              required
            />
            
            <FormInput
              id="cedulaProfesional"
              label="CÉDULA PROFESIONAL"
              value={data.cedulaProfesional || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalEvaluationStep;