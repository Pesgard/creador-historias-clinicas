import React from "react";
import FormInput from "../FormInput";
import { MedicalRecord } from "../../types";

interface HabitsStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const HabitsStep: React.FC<HabitsStepProps> = ({ data, updateData }) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    updateData(e.target.id as keyof MedicalRecord, e.target.value);
  };

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Registre los antecedentes personales no patológicos del paciente.
        </p>
      </div>

      <div className="space-y-8">
        {/* Vivienda */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Vivienda</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <FormInput
              id="viviendaMaterial"
              label="Material"
              value={data.viviendaMaterial}
              onChange={handleChange}
            />
            <FormInput
              id="viviendaHabitaciones"
              label="Habitaciones"
              type="number"
              value={data.viviendaHabitaciones}
              onChange={handleChange}
            />
            <FormInput
              id="viviendaPersonas"
              label="Personas"
              type="number"
              value={data.viviendaPersonas}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              id="viviendaAguaPotable"
              label="Agua Potable"
              type="checkbox"
              value={data.viviendaAguaPotable}
              onChange={handleChange}
            />
            <FormInput
              id="viviendaElectricidad"
              label="Electricidad"
              type="checkbox"
              value={data.viviendaElectricidad}
              onChange={handleChange}
            />
            <FormInput
              id="viviendaDrenaje"
              label="Drenaje"
              type="checkbox"
              value={data.viviendaDrenaje}
              onChange={handleChange}
            />
            <FormInput
              id="viviendaPavimento"
              label="Pavimento"
              type="checkbox"
              value={data.viviendaPavimento}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Hábitos Higiénicos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hábitos Higiénicos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              id="habitosDiario"
              label="Diario"
              type="checkbox"
              value={data.habitosDiario}
              onChange={handleChange}
            />
            <FormInput
              id="habitosCambioRopa"
              label="Cambio de Ropa"
              type="checkbox"
              value={data.habitosCambioRopa}
              onChange={handleChange}
            />
            <FormInput
              id="habitosCepilloDientes"
              label="Cepillo de Dientes"
              type="checkbox"
              value={data.habitosCepilloDientes}
              onChange={handleChange}
            />
            <FormInput
              id="habitosOtro"
              label="Otro"
              type="checkbox"
              value={data.habitosOtro}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Alimentación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Alimentación</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              id="alimentacionCarnesRojas"
              label="Carnes Rojas"
              type="checkbox"
              value={data.alimentacionCarnesRojas}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionPollo"
              label="Pollo"
              type="checkbox"
              value={data.alimentacionPollo}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionPescado"
              label="Pescado"
              type="checkbox"
              value={data.alimentacionPescado}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionVerduras"
              label="Verduras"
              type="checkbox"
              value={data.alimentacionVerduras}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionFrutas"
              label="Frutas"
              type="checkbox"
              value={data.alimentacionFrutas}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionLegumbres"
              label="Legumbres"
              type="checkbox"
              value={data.alimentacionLegumbres}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionLacteos"
              label="Lácteos"
              type="checkbox"
              value={data.alimentacionLacteos}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionHuevos"
              label="Huevos"
              type="checkbox"
              value={data.alimentacionHuevos}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionBebidasAzucaradas"
              label="Bebidas Azucaradas"
              type="checkbox"
              value={data.alimentacionBebidasAzucaradas}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionChatarra"
              label="Comida Chatarra"
              type="checkbox"
              value={data.alimentacionChatarra}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionAgua"
              label="Agua"
              type="checkbox"
              value={data.alimentacionAgua}
              onChange={handleChange}
            />
            <FormInput
              id="alimentacionOtras"
              label="Otras"
              type="checkbox"
              value={data.alimentacionOtras}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Consumo de Alcohol */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Consumo de Alcohol</h3>
          <div className="grid items-center grid-cols-2 md:grid-cols-5 gap-4">
            <FormInput
              id="alcoholConsumo"
              label="Consumo"
              type="checkbox"
              value={data.alcoholConsumo}
              onChange={handleChange}
            />
            <FormInput
              id="alcoholFrecuencia"
              label="Frecuencia"
              placeholder="veces por semana"
              value={data.alcoholFrecuencia}
              onChange={handleChange}
            />
            <FormInput
              id="alcoholCantidad"
              label="Cantidad"
              value={data.alcoholCantidad}
              onChange={handleChange}
            />
            <FormInput
              id="alcoholAnos"
              label="Años"
              type="number"
              value={data.alcoholAnos}
              onChange={handleChange}
            />
            <FormInput
              id="alcoholAnosInactivo"
              label="Años Inactivo"
              type="number"
              value={data.alcoholAnosInactivo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Consumo de Tabaco */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Consumo de Tabaco</h3>
          <div className="grid items-center grid-cols-2 md:grid-cols-5 gap-4">
            <FormInput
              id="tabacoConsumo"
              label="Consumo"
              type="checkbox"
              value={data.tabacoConsumo}
              onChange={handleChange}
            />
            <FormInput
              id="tabacoFrecuencia"
              label="Frecuencia"
              placeholder="veces por semana"
              value={data.tabacoFrecuencia}
              onChange={handleChange}
            />
            <FormInput
              id="tabacoCantidad"
              label="Cantidad"
              value={data.tabacoCantidad}
              onChange={handleChange}
            />
            <FormInput
              id="tabacoAnos"
              label="Años"
              type="number"
              value={data.tabacoAnos}
              onChange={handleChange}
            />
            <FormInput
              id="tabacoAnosInactivo"
              label="Años Inactivo"
              type="number"
              value={data.tabacoAnosInactivo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Otras Drogas */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Otras Drogas</h3>
          <div className="flex items-center gap-24">
            <FormInput
              id="drogasConsumo"
              label="Consumo"
              type="checkbox"
              value={data.drogasConsumo}
              onChange={handleChange}
            />
            <FormInput
              id="drogasObservaciones"
              label="Observaciones"
              className="w-full"
              value={data.drogasObservaciones}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Incapacidades */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Incapacidades</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-4">
                <FormInput
                  id="incapacitadoRiesgoTrabajo"
                  label="¿Ha estado incapacitado por riesgo de trabajo?"
                  type="checkbox"
                  value={data.incapacitadoRiesgoTrabajo}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <FormInput
                  id="incapacitadoRiesgoTrabajoValuacion"
                  label="Valuación"
                  value={data.incapacitadoRiesgoTrabajoValuacion}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-4">
                <FormInput
                  id="incapacitadoEnfermedad"
                  label="¿Ha estado incapacitado por alguna enfermedad?"
                  type="checkbox"
                  value={data.incapacitadoEnfermedad}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <FormInput
                  id="incapacitadoEnfermedadValuacion"
                  label="Valuación"
                  value={data.incapacitadoEnfermedadValuacion}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-4">
                <FormInput
                  id="padeceEnfermedad"
                  label="¿Actualmente padece de alguna enfermedad?"
                  type="checkbox"
                  value={data.padeceEnfermedad}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <FormInput
                  id="padeceEnfermedadValuacion"
                  label="Valuación"
                  value={data.padeceEnfermedadValuacion}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitsStep;
