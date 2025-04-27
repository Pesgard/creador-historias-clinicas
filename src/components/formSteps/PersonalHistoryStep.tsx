import React from 'react';
import FormInput from '../FormInput';
import { MedicalRecord } from '../../types';

interface PersonalHistoryStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const PersonalHistoryStep: React.FC<PersonalHistoryStepProps> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Registre los antecedentes personales patológicos marcando las condiciones que presenta o ha presentado.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primera columna */}
          <div className="space-y-4">
            <FormInput
              id="patDiabetes"
              label="Diabetes"
              type="checkbox"
              value={data.patDiabetes}
              onChange={handleChange}
            />
            <FormInput
              id="patHipertension"
              label="Hipertensión"
              type="checkbox"
              value={data.patHipertension}
              onChange={handleChange}
            />
            <FormInput
              id="patLunbargias"
              label="Lunbargias"
              type="checkbox"
              value={data.patLunbargias}
              onChange={handleChange}
            />
            <FormInput
              id="patOftalmo"
              label="Oftalmo"
              type="checkbox"
              value={data.patOftalmo}
              onChange={handleChange}
            />
            <FormInput
              id="patEpilepsia"
              label="Epilepsia"
              type="checkbox"
              value={data.patEpilepsia}
              onChange={handleChange}
            />
            <FormInput
              id="patEpoc"
              label="EPOC"
              type="checkbox"
              value={data.patEpoc}
              onChange={handleChange}
            />
            <FormInput
              id="patQuirurgico"
              label="Quirúrgico"
              type="checkbox"
              value={data.patQuirurgico}
              onChange={handleChange}
            />
            <FormInput
              id="patCirugias"
              label="Cirugías"
              type="checkbox"
              value={data.patCirugias}
              onChange={handleChange}
            />
          </div>

          {/* Segunda columna */}
          <div className="space-y-4">
            <FormInput
              id="patNefropatias"
              label="Nefropatías"
              type="checkbox"
              value={data.patNefropatias}
              onChange={handleChange}
            />
            <FormInput
              id="patTuberculosis"
              label="Tuberculosis"
              type="checkbox"
              value={data.patTuberculosis}
              onChange={handleChange}
            />
            <FormInput
              id="patAlergias"
              label="Alergias"
              type="checkbox"
              value={data.patAlergias}
              onChange={handleChange}
            />
            <FormInput
              id="patDislipidemias"
              label="Dislipidemias"
              type="checkbox"
              value={data.patDislipidemias}
              onChange={handleChange}
            />
            <FormInput
              id="patArtitis"
              label="Artitis"
              type="checkbox"
              value={data.patArtitis}
              onChange={handleChange}
            />
            <FormInput
              id="patAnsiedad"
              label="Ansiedad"
              type="checkbox"
              value={data.patAnsiedad}
              onChange={handleChange}
            />
            <FormInput
              id="patPsiquiatricos"
              label="Psiquiátricos"
              type="checkbox"
              value={data.patPsiquiatricos}
              onChange={handleChange}
            />
            <FormInput
              id="patTransfusiones"
              label="Transfusiones"
              type="checkbox"
              value={data.patTransfusiones}
              onChange={handleChange}
            />
          </div>

          {/* Tercera columna */}
          <div className="space-y-4">
            <FormInput
              id="patOncologicos"
              label="Oncológicos"
              type="checkbox"
              value={data.patOncologicos}
              onChange={handleChange}
            />
            <FormInput
              id="patTraumaticos"
              label="Traumáticos"
              type="checkbox"
              value={data.patTraumaticos}
              onChange={handleChange}
            />
            <FormInput
              id="patEts"
              label="ETS"
              type="checkbox"
              value={data.patEts}
              onChange={handleChange}
            />
            <FormInput
              id="patCardiopatias"
              label="Cardiopatías"
              type="checkbox"
              value={data.patCardiopatias}
              onChange={handleChange}
            />
            <FormInput
              id="patNeoplasias"
              label="Neoplasias"
              type="checkbox"
              value={data.patNeoplasias}
              onChange={handleChange}
            />
            <FormInput
              id="patDepresion"
              label="Depresión"
              type="checkbox"
              value={data.patDepresion}
              onChange={handleChange}
            />
            <FormInput
              id="patAccidentes"
              label="Accidentes"
              type="checkbox"
              value={data.patAccidentes}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Campo para especificar el control */}
        <div className="mt-6">
          <FormInput
            id="patControl"
            label="Especifique si lleva algún control"
            multiline
            rows={4}
            value={data.patControl}
            onChange={handleChange}
            placeholder="Detalle los controles médicos que lleva para las condiciones marcadas..."
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalHistoryStep;