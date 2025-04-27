import React from "react";
import FormInput from "../FormInput";
import { MedicalRecord } from "../../types";

interface PersonalInfoStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  data,
  updateData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };

  const genderOptions = [
    { value: "M", label: "Masculino" },
    { value: "F", label: "Femenino" },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Complete los datos personales del paciente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="nombre"
          label="Nombre Completo"
          value={data.nombre}
          onChange={handleChange}
          required
          className="md:col-span-2"
        />

        <FormInput
          id="edad"
          label="Edad"
          type="number"
          value={data.edad}
          onChange={handleChange}
          required
        />

        <FormInput
          id="sexo"
          label="Sexo"
          type="select"
          value={data.sexo}
          onChange={handleChange}
          options={genderOptions}
          required
        />

        <FormInput
          id="fechaNacimiento"
          label="Fecha de Nacimiento"
          type="date"
          value={data.fechaNacimiento}
          onChange={handleChange}
          required
        />

        <FormInput
          id="direccion"
          label="Dirección"
          value={data.direccion}
          onChange={handleChange}
          className="md:col-span-2"
        />

        <FormInput
          id="telefono"
          label="Teléfono"
          value={data.telefono}
          onChange={handleChange}
        />

        <FormInput
          id="email"
          label="Correo Electrónico"
          type="email"
          value={data.email}
          onChange={handleChange}
        />

        <FormInput
          id="nss"
          label="NSS"
          value={data.nss}
          onChange={handleChange}
        />

        <FormInput
          id="puestoSolicitado"
          label="Puesto Solicitado"
          value={data.puestoSolicitado}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
