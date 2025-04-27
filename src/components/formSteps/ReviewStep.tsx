import React from 'react';
import { MedicalRecord } from '../../types';
import { FileSpreadsheet } from 'lucide-react';

interface ReviewStepProps {
  data: MedicalRecord;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ data }) => {
  return (
    <div className="animate-fadeIn">
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-start">
        <div className="mt-1 mr-3 text-green-600">
          <FileSpreadsheet size={24} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-green-800">¡Formulario Completado!</h3>
          <p className="text-green-700 mt-1">
            El formulario está listo para ser exportado a PDF. Por favor revise la información 
            antes de generar el documento final.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h3 className="text-lg font-bold mb-4 pb-2 border-b text-blue-800">Resumen del Historial Médico</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Información General</h4>
            <div className="grid grid-cols-2 mt-1 text-sm">
              <div className="py-1"><span className="text-gray-500">Empresa:</span> {data.nombreEmpresa}</div>
              <div className="py-1"><span className="text-gray-500">Fecha:</span> {data.fecha}</div>
              <div className="py-1"><span className="text-gray-500">Folio:</span> {data.folio}</div>
              <div className="py-1"><span className="text-gray-500">Tipo de Examen:</span> {data.tipoExamen}</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700">Datos Personales</h4>
            <div className="grid grid-cols-2 mt-1 text-sm">
              <div className="py-1"><span className="text-gray-500">Nombre:</span> {data.nombre}</div>
              <div className="py-1"><span className="text-gray-500">Edad:</span> {data.edad} años</div>
              <div className="py-1"><span className="text-gray-500">Sexo:</span> {data.sexo}</div>
              <div className="py-1"><span className="text-gray-500">Fecha de Nacimiento:</span> {data.fechaNacimiento}</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700">Puesto y NSS</h4>
            <div className="grid grid-cols-2 mt-1 text-sm">
              <div className="py-1"><span className="text-gray-500">Puesto Solicitado:</span> {data.puestoSolicitado}</div>
              <div className="py-1"><span className="text-gray-500">NSS:</span> {data.nss}</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700">Exploración Física</h4>
            <div className="grid grid-cols-3 mt-1 text-sm">
              <div className="py-1"><span className="text-gray-500">Talla:</span> {data.talla} cm</div>
              <div className="py-1"><span className="text-gray-500">Peso:</span> {data.peso} kg</div>
              <div className="py-1"><span className="text-gray-500">IMC:</span> {data.imc} kg/m²</div>
              <div className="py-1"><span className="text-gray-500">T/A:</span> {data.tensionArterial} mmHg</div>
              <div className="py-1"><span className="text-gray-500">FC:</span> {data.frecuenciaCardiaca} lpm</div>
              <div className="py-1"><span className="text-gray-500">FR:</span> {data.frecuenciaRespiratoria} rpm</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700">Diagnósticos y Aptitud</h4>
            <div className="mt-1 text-sm">
              <div className="py-1"><span className="text-gray-500">Diagnósticos:</span> {data.diagnosticos}</div>
              <div className="py-1"><span className="text-gray-500">Aptitud:</span> <span className="font-medium">{data.aptitud}</span></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700">Médico</h4>
            <div className="grid grid-cols-2 mt-1 text-sm">
              <div className="py-1"><span className="text-gray-500">Nombre:</span> {data.nombreMedico}</div>
              <div className="py-1"><span className="text-gray-500">Cédula:</span> {data.cedulaProfesional}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 italic">
        Al exportar a PDF, se generará un documento completo con toda la información capturada en el formulario.
      </div>
    </div>
  );
};

export default ReviewStep;