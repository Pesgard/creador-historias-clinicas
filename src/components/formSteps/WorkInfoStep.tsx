import React from 'react';
import FormInput from '../FormInput';
import { MedicalRecord } from '../../types';

interface WorkInfoStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const WorkInfoStep: React.FC<WorkInfoStepProps> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Complete la información laboral y exposición a riesgos del paciente.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <FormInput
            id="edadInicioLabores"
            label="Edad de Inicio de Labores"
            type="number"
            value={data.edadInicioLabores}
            onChange={handleChange}
            required
          />
        </div>

        {/* Empresa 1 */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              id="empresa1Nombre"
              label="Empresa 1"
              value={data.empresa1Nombre}
              onChange={handleChange}
              className="md:col-span-2"
            />
            <FormInput
              id="empresa1Anos"
              label="Años"
              type="number"
              value={data.empresa1Anos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Puesto"
              label="Puesto"
              value={data.empresa1Puesto}
              onChange={handleChange}
              className="md:col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              id="empresa1Disolventes"
              label="Disolventes"
              type="checkbox"
              value={data.empresa1Disolventes}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Quimicos"
              label="Químicos"
              type="checkbox"
              value={data.empresa1Quimicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Metales"
              label="Metales"
              type="checkbox"
              value={data.empresa1Metales}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Polvo"
              label="Polvo"
              type="checkbox"
              value={data.empresa1Polvo}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Gases"
              label="Gases"
              type="checkbox"
              value={data.empresa1Gases}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Ruido"
              label="Ruido"
              type="checkbox"
              value={data.empresa1Ruido}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1SobreEsfuerzo"
              label="Sobre Esfuerzo"
              type="checkbox"
              value={data.empresa1SobreEsfuerzo}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Estres"
              label="Estrés"
              type="checkbox"
              value={data.empresa1Estres}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Biologicos"
              label="Biológicos"
              type="checkbox"
              value={data.empresa1Biologicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Ergonomicos"
              label="Ergonómicos"
              type="checkbox"
              value={data.empresa1Ergonomicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Calor"
              label="Calor"
              type="checkbox"
              value={data.empresa1Calor}
              onChange={handleChange}
            />
            <FormInput
              id="empresa1Otro"
              label="Otro"
              type="checkbox"
              value={data.empresa1Otro}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Empresa 2 */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              id="empresa2Nombre"
              label="Empresa 2"
              value={data.empresa2Nombre}
              onChange={handleChange}
              className="md:col-span-2"
            />
            <FormInput
              id="empresa2Anos"
              label="Años"
              type="number"
              value={data.empresa2Anos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Puesto"
              label="Puesto"
              value={data.empresa2Puesto}
              onChange={handleChange}
              className="md:col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              id="empresa2Disolventes"
              label="Disolventes"
              type="checkbox"
              value={data.empresa2Disolventes}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Quimicos"
              label="Químicos"
              type="checkbox"
              value={data.empresa2Quimicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Metales"
              label="Metales"
              type="checkbox"
              value={data.empresa2Metales}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Polvo"
              label="Polvo"
              type="checkbox"
              value={data.empresa2Polvo}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Gases"
              label="Gases"
              type="checkbox"
              value={data.empresa2Gases}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Ruido"
              label="Ruido"
              type="checkbox"
              value={data.empresa2Ruido}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2SobreEsfuerzo"
              label="Sobre Esfuerzo"
              type="checkbox"
              value={data.empresa2SobreEsfuerzo}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Estres"
              label="Estrés"
              type="checkbox"
              value={data.empresa2Estres}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Biologicos"
              label="Biológicos"
              type="checkbox"
              value={data.empresa2Biologicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Ergonomicos"
              label="Ergonómicos"
              type="checkbox"
              value={data.empresa2Ergonomicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Calor"
              label="Calor"
              type="checkbox"
              value={data.empresa2Calor}
              onChange={handleChange}
            />
            <FormInput
              id="empresa2Otro"
              label="Otro"
              type="checkbox"
              value={data.empresa2Otro}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Empresa 3 */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              id="empresa3Nombre"
              label="Empresa 3"
              value={data.empresa3Nombre}
              onChange={handleChange}
              className="md:col-span-2"
            />
            <FormInput
              id="empresa3Anos"
              label="Años"
              type="number"
              value={data.empresa3Anos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Puesto"
              label="Puesto"
              value={data.empresa3Puesto}
              onChange={handleChange}
              className="md:col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              id="empresa3Disolventes"
              label="Disolventes"
              type="checkbox"
              value={data.empresa3Disolventes}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Quimicos"
              label="Químicos"
              type="checkbox"
              value={data.empresa3Quimicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Metales"
              label="Metales"
              type="checkbox"
              value={data.empresa3Metales}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Polvo"
              label="Polvo"
              type="checkbox"
              value={data.empresa3Polvo}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Gases"
              label="Gases"
              type="checkbox"
              value={data.empresa3Gases}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Ruido"
              label="Ruido"
              type="checkbox"
              value={data.empresa3Ruido}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3SobreEsfuerzo"
              label="Sobre Esfuerzo"
              type="checkbox"
              value={data.empresa3SobreEsfuerzo}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Estres"
              label="Estrés"
              type="checkbox"
              value={data.empresa3Estres}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Biologicos"
              label="Biológicos"
              type="checkbox"
              value={data.empresa3Biologicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Ergonomicos"
              label="Ergonómicos"
              type="checkbox"
              value={data.empresa3Ergonomicos}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Calor"
              label="Calor"
              type="checkbox"
              value={data.empresa3Calor}
              onChange={handleChange}
            />
            <FormInput
              id="empresa3Otro"
              label="Otro"
              type="checkbox"
              value={data.empresa3Otro}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInfoStep;