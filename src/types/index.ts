export interface MedicalRecord {
  // Información general
  nombreEmpresa: string;
  fecha: string;
  folio: string;
  tipoExamen: string;
  
  // Información personal
  nombre: string;
  edad: string;
  sexo: string;
  fechaNacimiento: string;
  direccion: string;
  telefono: string;
  email: string;
  
  // Información laboral
  puestoSolicitado: string;
  nss: string;
  edadInicioLabores: string;
  
  // Empresa 1
  empresa1Nombre: string;
  empresa1Anos: string;
  empresa1Puesto: string;
  empresa1Disolventes: string;
  empresa1Quimicos: string;
  empresa1Metales: string;
  empresa1Polvo: string;
  empresa1Gases: string;
  empresa1Ruido: string;
  empresa1SobreEsfuerzo: string;
  empresa1Estres: string;
  empresa1Biologicos: string;
  empresa1Ergonomicos: string;
  empresa1Calor: string;
  empresa1Otro: string;
  
  // Empresa 2
  empresa2Nombre: string;
  empresa2Anos: string;
  empresa2Puesto: string;
  empresa2Disolventes: string;
  empresa2Quimicos: string;
  empresa2Metales: string;
  empresa2Polvo: string;
  empresa2Gases: string;
  empresa2Ruido: string;
  empresa2SobreEsfuerzo: string;
  empresa2Estres: string;
  empresa2Biologicos: string;
  empresa2Ergonomicos: string;
  empresa2Calor: string;
  empresa2Otro: string;
  
  // Empresa 3
  empresa3Nombre: string;
  empresa3Anos: string;
  empresa3Puesto: string;
  empresa3Disolventes: string;
  empresa3Quimicos: string;
  empresa3Metales: string;
  empresa3Polvo: string;
  empresa3Gases: string;
  empresa3Ruido: string;
  empresa3SobreEsfuerzo: string;
  empresa3Estres: string;
  empresa3Biologicos: string;
  empresa3Ergonomicos: string;
  empresa3Calor: string;
  empresa3Otro: string;
  
  // Antecedentes familiares
  diabetes: string;
  hipertension: string;
  ulceras: string;
  obesidad: string;
  epilepsia: string;
  nefropatias: string;
  tuberculosis: string;
  alergias: string;
  dislipidemias: string;
  artitis: string;
  oncologicos: string;
  neumopatias: string;
  artritis: string;
  cardiopatias: string;
  otros: string;
  quien: string;
  
  // Antecedentes personales patológicos
  patDiabetes: string;
  patHipertension: string;
  patLunbargias: string;
  patOftalmo: string;
  patEpilepsia: string;
  patEpoc: string;
  patQuirurgico: string;
  patCirugias: string;
  patNefropatias: string;
  patTuberculosis: string;
  patAlergias: string;
  patDislipidemias: string;
  patArtitis: string;
  patAnsiedad: string;
  patPsiquiatricos: string;
  patTransfusiones: string;
  patOncologicos: string;
  patTraumaticos: string;
  patEts: string;
  patCardiopatias: string;
  patNeoplasias: string;
  patDepresion: string;
  patAccidentes: string;
  patControl: string;

  // Antecedentes personales no patológicos
  // Vivienda
  viviendaMaterial: string;
  viviendaHabitaciones: string;
  viviendaPersonas: string;
  viviendaAguaPotable: string;
  viviendaElectricidad: string;
  viviendaDrenaje: string;
  viviendaPavimento: string;
  
  // Hábitos higiénicos
  habitosDiario: string;
  habitosCambioRopa: string;
  habitosCepilloDientes: string;
  habitosOtro: string;
  
  // Alimentación
  alimentacionCarnesRojas: string;
  alimentacionPollo: string;
  alimentacionPescado: string;
  alimentacionVerduras: string;
  alimentacionFrutas: string;
  alimentacionLegumbres: string;
  alimentacionLacteos: string;
  alimentacionHuevos: string;
  alimentacionBebidasAzucaradas: string;
  alimentacionChatarra: string;
  alimentacionAgua: string;
  alimentacionOtras: string;
  
  // Consumo de alcohol
  alcoholConsumo: string;
  alcoholFrecuencia: string;
  alcoholCantidad: string;
  alcoholAnos: string;
  alcoholAnosInactivo: string;
  
  // Consumo de tabaco
  tabacoConsumo: string;
  tabacoFrecuencia: string;
  tabacoCantidad: string;
  tabacoAnos: string;
  tabacoAnosInactivo: string;
  
  // Otras drogas
  drogasConsumo: string;
  drogasObservaciones: string;
  
  // Incapacidades
  incapacitadoRiesgoTrabajo: string;
  incapacitadoRiesgoTrabajoValuacion: string;
  incapacitadoEnfermedad: string;
  incapacitadoEnfermedadValuacion: string;
  padeceEnfermedad: string;
  padeceEnfermedadValuacion: string;
  
  // Hábitos
  habitosAlimenticios: string;
  actividadFisica: string;
  tabaquismo: string;
  alcoholismo: string;
  drogadiccion: string;
  vacunacion: string;
  
  // Exploración física
  talla: string;
  peso: string;
  imc: string;
  tensionArterial: string;
  frecuenciaCardiaca: string;
  frecuenciaRespiratoria: string;
  temperatura: string;
  
  // Exploración por sistemas
  cabeza: string;
  cuello: string;
  torax: string;
  abdomen: string;
  extremidades: string;
  columnaVertebral: string;
  piel: string;
  neurologico: string;
  
  // Campos detallados de exploración
  // Cráneo
  craneotamano: string;
  craneopelo: string;
  craneocara: string;
  craneoObservaciones: string;
  
  // Nariz
  nariztabique: string;
  narizmucosas: string;
  narizotro: string;
  narizObservaciones: string;
  
  // Ojos
  ojosconjuntivas: string;
  ojospupilas: string;
  ojosparpados: string;
  ojosObservaciones: string;
  
  // Oídos
  oidospabellon: string;
  oidosCAE: string;
  oidostimpanos: string;
  oidosObservaciones: string;
  
  // Cuello detallado
  cuellogangios: string;
  cuellotiroides: string;
  cuellopulsos: string;
  cuelloObservaciones: string;
  
  // Abdomen detallado
  abdomenmegalias: string;
  abdomenhernia: string;
  abdomenotros: string;
  abdomenObservaciones: string;
  
  // Boca
  bocamucosas: string;
  bocadentadura: string;
  bocalengua: string;
  bocaencias: string;
  bocalaringe: string;
  bocaamigdalas: string;
  bocaObservaciones: string;
  
  // Tórax
  toraxforma: string;
  toraxRCardiaco: string;
  toraxCamposPul: string;
  toraxmamas: string;
  toraxObservaciones: string;
  
  // Genitales
  genitalesfimosis: string;
  genitalesvarico: string;
  genitaleshernia: string;
  genitalesotros: string;
  genitalesObservaciones: string;
  
  // Agudeza visual
  agudezaVisualOD: string;
  agudezaVisualOI: string;
  agudezaVisualIZQ: string;
  agudezaVisualDER: string;
  
  // Miembros
  // Torácicos
  miembrosToraxIntegridad: string;
  miembrosToraxForma: string;
  miembrosToraxArticulaciones: string;
  miembrosToraxTonoMuscular: string;
  miembrosToraxReflejos: string;
  miembrosToraxSensibilidad: string;
  
  // Pélvicos
  miembrosPelvicosIntegridad: string;
  miembrosPelvicosForma: string;
  miembrosPelvicosArticulaciones: string;
  miembrosPelvicosTonoMuscular: string;
  miembrosPelvicosReflejos: string;
  miembrosPelvicosSensibilidad: string;
  
  // Inferiores
  miembrosInferioresIntegridad: string;
  miembrosInferioresForma: string;
  miembrosInferioresArticulaciones: string;
  miembrosInferioresTonoMuscular: string;
  miembrosInferioresReflejos: string;
  miembrosInferioresSensibilidad: string;
  
  // Superiores
  miembrosSuperioresIntegridad: string;
  miembrosSuperioresForma: string;
  miembrosSuperioresArticulaciones: string;
  miembrosSuperiorestonoMuscular: string;
  miembrosSuperioresReflejos: string;
  miembrosSuperioresSensibilidad: string;
  
  // Evaluación médica
  diagnosticos: string;
  observaciones: string;
  recomendaciones: string;
  aptitud: string;
  
  // Auxiliares de diagnóstico
  bloodHemoglobin: string;
  quickSedimentation: string;
  urine: string;
  audiometry: string;
  spirometry: string;
  chestXRay: string;
  alcoholemia: string;
  antidoping: string;
  lumbarXRay: string;
  rombergTest: string;
  rombergTestObservations: string;
  babinskiTest: string;
  
  // Información del médico
  nombreMedico: string;
  cedulaProfesional: string;
  especialidadMedico: string;
}

export type FormStep = {
  id: string;
  title: string;
  description: string;
  icon: string;
};