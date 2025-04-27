import React from "react";
import { MedicalRecord } from "../../types";

interface SystemsExamStepProps {
  data: MedicalRecord;
  updateData: (fieldName: keyof MedicalRecord, value: string) => void;
}

const SystemsExamStep: React.FC<SystemsExamStepProps> = ({
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

  // Common options for normal (N) or abnormal (A)
  const normalAbnormalOptions = [
    { value: "false", label: "N" },
    { value: "true", label: "A" },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Registre los hallazgos de la exploración física por sistemas.
        </p>
        <p className="text-blue-800">
          Marque "N" para normal y "A" si presenta anomalías.
        </p>
      </div>

      {/* CRÁNEO */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">CRÁNEO</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">TAMAÑO</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`craneoTamano-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="craneotamano"
                    name="craneotamano"
                    value={option.value}
                    checked={data.craneotamano === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">PELO</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`craneopelo-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="craneopelo"
                    name="craneopelo"
                    value={option.value}
                    checked={data.craneopelo === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">CARA</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`craneocara-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="craneocara"
                    name="craneocara"
                    value={option.value}
                    checked={data.craneocara === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="craneoObservaciones"
            value={data.craneoObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* NARIZ */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">NARIZ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">TABIQUE</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`nariztabique-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="nariztabique"
                    name="nariztabique"
                    value={option.value}
                    checked={data.nariztabique === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">MUCOSAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`narizmucosas-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="narizmucosas"
                    name="narizmucosas"
                    value={option.value}
                    checked={data.narizmucosas === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
  
          <div>
            <label className="block text-gray-700 mb-1">OTRO</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`narizotro-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="narizotro"
                    name="narizotro"
                    value={option.value}
                    checked={data.narizotro === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="narizObservaciones"
            value={data.narizObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* OJOS */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">OJOS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">CONJUNTIVAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`ojosconjuntivas-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="ojosconjuntivas"
                    name="ojosconjuntivas"
                    value={option.value}
                    checked={data.ojosconjuntivas === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">PUPILAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`ojospupilas-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="ojospupilas"
                    name="ojospupilas"
                    value={option.value}
                    checked={data.ojospupilas === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">PÁRPADOS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`ojosparpados-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="ojosparpados"
                    name="ojosparpados"
                    value={option.value}
                    checked={data.ojosparpados === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="ojosObservaciones"
            value={data.ojosObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* OÍDOS */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">OÍDOS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">PABELLÓN</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`oidospabellon-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="oidospabellon"
                    name="oidospabellon"
                    value={option.value}
                    checked={data.oidospabellon === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">C.A.E</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`oidosCAE-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="oidosCAE"
                    name="oidosCAE"
                    value={option.value}
                    checked={data.oidosCAE === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">TÍMPANOS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`oidostimpanos-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="oidostimpanos"
                    name="oidostimpanos"
                    value={option.value}
                    checked={data.oidostimpanos === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="oidosObservaciones"
            value={data.oidosObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* CUELLO */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">CUELLO</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">GANGLIOS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`cuellogangios-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="cuellogangios"
                    name="cuellogangios"
                    value={option.value}
                    checked={data.cuellogangios === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">TIROIDES</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`cuellotiroides-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="cuellotiroides"
                    name="cuellotiroides"
                    value={option.value}
                    checked={data.cuellotiroides === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">PULSOS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`cuellopulsos-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="cuellopulsos"
                    name="cuellopulsos"
                    value={option.value}
                    checked={data.cuellopulsos === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="cuelloObservaciones"
            value={data.cuelloObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* ABDOMEN */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">ABDOMEN</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">MEGALIAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`abdomenmegalias-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="abdomenmegalias"
                    name="abdomenmegalias"
                    value={option.value}
                    checked={data.abdomenmegalias === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">HERNIAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`abdomenhernia-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="abdomenhernia"
                    name="abdomenhernia"
                    value={option.value}
                    checked={data.abdomenhernia === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">OTROS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`abdomenotros-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="abdomenotros"
                    name="abdomenotros"
                    value={option.value}
                    checked={data.abdomenotros === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="abdomenObservaciones"
            value={data.abdomenObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* BOCA */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">BOCA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">MUCOSAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`bocamucosas-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="bocamucosas"
                    name="bocamucosas"
                    value={option.value}
                    checked={data.bocamucosas === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">DENTADURA</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`bocadentadura-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="bocadentadura"
                    name="bocadentadura"
                    value={option.value}
                    checked={data.bocadentadura === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">LENGUA</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`bocalengua-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="bocalengua"
                    name="bocalengua"
                    value={option.value}
                    checked={data.bocalengua === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">ENCÍAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`bocaencias-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="bocaencias"
                    name="bocaencias"
                    value={option.value}
                    checked={data.bocaencias === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">LARINGE</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`bocalaringe-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="bocalaringe"
                    name="bocalaringe"
                    value={option.value}
                    checked={data.bocalaringe === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">AMÍGDALAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`bocaamigdalas-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="bocaamigdalas"
                    name="bocaamigdalas"
                    value={option.value}
                    checked={data.bocaamigdalas === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="bocaObservaciones"
            value={data.bocaObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* TORAX */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">TORAX</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">FORMA</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`toraxforma-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="toraxforma"
                    name="toraxforma"
                    value={option.value}
                    checked={data.toraxforma === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">R. CARDÍACO</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`toraxRCardiaco-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="toraxRCardiaco"
                    name="toraxRCardiaco"
                    value={option.value}
                    checked={data.toraxRCardiaco === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">CAMPOS PUL.</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`toraxCamposPul-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="toraxCamposPul"
                    name="toraxCamposPul"
                    value={option.value}
                    checked={data.toraxCamposPul === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">MAMAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`toraxmamas-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="toraxmamas"
                    name="toraxmamas"
                    value={option.value}
                    checked={data.toraxmamas === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="toraxObservaciones"
            value={data.toraxObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* GENITALES */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">GENITALES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">FIMOSIS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`genitalesfimosis-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="genitalesfimosis"
                    name="genitalesfimosis"
                    value={option.value}
                    checked={data.genitalesfimosis === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">VARICOCELE</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`genitalesvarico-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="genitalesvarico"
                    name="genitalesvarico"
                    value={option.value}
                    checked={data.genitalesvarico === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">HERNIAS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`genitaleshernia-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="genitaleshernia"
                    name="genitaleshernia"
                    value={option.value}
                    checked={data.genitaleshernia === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">OTROS</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`genitalesotros-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="genitalesotros"
                    name="genitalesotros"
                    value={option.value}
                    checked={data.genitalesotros === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 mb-1">OBSERVACIONES</label>
          <textarea
            id="genitalesObservaciones"
            value={data.genitalesObservaciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      {/* AGUDEZA VISUAL */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">AGUDEZA VISUAL</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">S/C O.D.</label>
            <input
              type="text"
              id="agudezaVisualOD"
              value={data.agudezaVisualOD}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">O.I.</label>
            <input
              type="text"
              id="agudezaVisualOI"
              value={data.agudezaVisualOI}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700 mb-1">IZQ</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`agudezaVisualIZQ-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="agudezaVisualIZQ"
                    name="agudezaVisualIZQ"
                    value={option.value}
                    checked={data.agudezaVisualIZQ === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">DER</label>
            <div className="flex gap-4">
              {normalAbnormalOptions.map((option) => (
                <label key={`agudezaVisualDER-${option.value}`} className="flex items-center">
                  <input
                    type="radio"
                    id="agudezaVisualDER"
                    name="agudezaVisualDER"
                    value={option.value}
                    checked={data.agudezaVisualDER === option.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MIEMBROS */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">MIEMBROS</h3>
        
        {/* TORÁCICOS */}
        <div className="mb-4">
          <h4 className="font-medium text-blue-700 mb-2">TORÁCICOS</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">INTEGRIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosToraxIntegridad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosToraxIntegridad"
                      name="miembrosToraxIntegridad"
                      value={option.value}
                      checked={data.miembrosToraxIntegridad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">FORMA</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosToraxForma-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosToraxForma"
                      name="miembrosToraxForma"
                      value={option.value}
                      checked={data.miembrosToraxForma === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">ARTICULACIONES</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosToraxArticulaciones-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosToraxArticulaciones"
                      name="miembrosToraxArticulaciones"
                      value={option.value}
                      checked={data.miembrosToraxArticulaciones === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">TONO MUSC.</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosToraxTonoMuscular-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosToraxTonoMuscular"
                      name="miembrosToraxTonoMuscular"
                      value={option.value}
                      checked={data.miembrosToraxTonoMuscular === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">REFLEJOS</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosToraxReflejos-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosToraxReflejos"
                      name="miembrosToraxReflejos"
                      value={option.value}
                      checked={data.miembrosToraxReflejos === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">SENSIBILIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosToraxSensibilidad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosToraxSensibilidad"
                      name="miembrosToraxSensibilidad"
                      value={option.value}
                      checked={data.miembrosToraxSensibilidad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PÉLVICOS */}
        <div className="mb-4">
          <h4 className="font-medium text-blue-700 mb-2">PÉLVICOS</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">INTEGRIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosPelvicosIntegridad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosPelvicosIntegridad"
                      name="miembrosPelvicosIntegridad"
                      value={option.value}
                      checked={data.miembrosPelvicosIntegridad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">FORMA</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosPelvicosForma-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosPelvicosForma"
                      name="miembrosPelvicosForma"
                      value={option.value}
                      checked={data.miembrosPelvicosForma === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">ARTICULACIONES</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosPelvicosArticulaciones-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosPelvicosArticulaciones"
                      name="miembrosPelvicosArticulaciones"
                      value={option.value}
                      checked={data.miembrosPelvicosArticulaciones === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">TONO MUSC.</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosPelvicosTonoMuscular-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosPelvicosTonoMuscular"
                      name="miembrosPelvicosTonoMuscular"
                      value={option.value}
                      checked={data.miembrosPelvicosTonoMuscular === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">REFLEJOS</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosPelvicosReflejos-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosPelvicosReflejos"
                      name="miembrosPelvicosReflejos"
                      value={option.value}
                      checked={data.miembrosPelvicosReflejos === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">SENSIBILIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosPelvicosSensibilidad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosPelvicosSensibilidad"
                      name="miembrosPelvicosSensibilidad"
                      value={option.value}
                      checked={data.miembrosPelvicosSensibilidad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* INFERIORES */}
        <div className="mb-4">
          <h4 className="font-medium text-blue-700 mb-2">M. INFERIORES</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">INTEGRIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosInferioresIntegridad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosInferioresIntegridad"
                      name="miembrosInferioresIntegridad"
                      value={option.value}
                      checked={data.miembrosInferioresIntegridad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">FORMA</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosInferioresForma-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosInferioresForma"
                      name="miembrosInferioresForma"
                      value={option.value}
                      checked={data.miembrosInferioresForma === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">ARTICULACIONES</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosInferioresArticulaciones-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosInferioresArticulaciones"
                      name="miembrosInferioresArticulaciones"
                      value={option.value}
                      checked={data.miembrosInferioresArticulaciones === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">TONO MUSC.</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosInferioresTonoMuscular-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosInferioresTonoMuscular"
                      name="miembrosInferioresTonoMuscular"
                      value={option.value}
                      checked={data.miembrosInferioresTonoMuscular === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">REFLEJOS</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosInferioresReflejos-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosInferioresReflejos"
                      name="miembrosInferioresReflejos"
                      value={option.value}
                      checked={data.miembrosInferioresReflejos === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">SENSIBILIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosInferioresSensibilidad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosInferioresSensibilidad"
                      name="miembrosInferioresSensibilidad"
                      value={option.value}
                      checked={data.miembrosInferioresSensibilidad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SUPERIORES */}
        <div className="mb-4">
          <h4 className="font-medium text-blue-700 mb-2">M. SUPERIORES</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">INTEGRIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosSuperioresIntegridad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosSuperioresIntegridad"
                      name="miembrosSuperioresIntegridad"
                      value={option.value}
                      checked={data.miembrosSuperioresIntegridad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">FORMA</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosSuperioresForma-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosSuperioresForma"
                      name="miembrosSuperioresForma"
                      value={option.value}
                      checked={data.miembrosSuperioresForma === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">ARTICULACIONES</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosSuperioresArticulaciones-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosSuperioresArticulaciones"
                      name="miembrosSuperioresArticulaciones"
                      value={option.value}
                      checked={data.miembrosSuperioresArticulaciones === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">TONO MUSC.</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosSuperiorestonoMuscular-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosSuperiorestonoMuscular"
                      name="miembrosSuperiorestonoMuscular"
                      value={option.value}
                      checked={data.miembrosSuperiorestonoMuscular === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">REFLEJOS</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosSuperioresReflejos-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosSuperioresReflejos"
                      name="miembrosSuperioresReflejos"
                      value={option.value}
                      checked={data.miembrosSuperioresReflejos === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">SENSIBILIDAD</label>
              <div className="flex gap-4">
                {normalAbnormalOptions.map((option) => (
                  <label key={`miembrosSuperioresSensibilidad-${option.value}`} className="flex items-center">
                    <input
                      type="radio"
                      id="miembrosSuperioresSensibilidad"
                      name="miembrosSuperioresSensibilidad"
                      value={option.value}
                      checked={data.miembrosSuperioresSensibilidad === option.value}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemsExamStep;
