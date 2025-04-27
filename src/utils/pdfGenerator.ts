import jsPDF from "jspdf";
import { MedicalRecord } from "../types";
import logoImg from "../assets/logo.png";
import qrCodeImg from "../assets/qrcode.png";

// Loading state management
let isGeneratingPDF = false;
let loaderElement: HTMLDivElement | null = null;

// Function to show loader
const showLoader = () => {
  isGeneratingPDF = true;

  // Create loader element if it doesn't exist
  if (!loaderElement) {
    loaderElement = document.createElement("div");
    loaderElement.style.position = "fixed";
    loaderElement.style.top = "0";
    loaderElement.style.left = "0";
    loaderElement.style.width = "100%";
    loaderElement.style.height = "100%";
    loaderElement.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    loaderElement.style.zIndex = "9999";
    loaderElement.style.display = "flex";
    loaderElement.style.flexDirection = "column";
    loaderElement.style.alignItems = "center";
    loaderElement.style.justifyContent = "center";

    const spinner = document.createElement("div");
    spinner.style.border = "5px solid #f3f3f3";
    spinner.style.borderTop = "5px solid #3498db";
    spinner.style.borderRadius = "50%";
    spinner.style.width = "50px";
    spinner.style.height = "50px";
    spinner.style.animation = "spin 2s linear infinite";

    const text = document.createElement("p");
    text.textContent = "Generando PDF, por favor espere...";
    text.style.marginTop = "10px";
    text.style.fontWeight = "bold";

    // Add animation style
    const style = document.createElement("style");
    style.textContent =
      "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
    document.head.appendChild(style);

    loaderElement.appendChild(spinner);
    loaderElement.appendChild(text);
    document.body.appendChild(loaderElement);
  } else {
    loaderElement.style.display = "flex";
  }
};

// Function to hide loader
const hideLoader = () => {
  isGeneratingPDF = false;
  if (loaderElement) {
    loaderElement.style.display = "none";
  }
};

// Function to add header to each page
const addHeader = (doc: jsPDF) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Add header background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, 20, "F");

  // Add company logo
  try {
    // Add logo to the left - with compression settings
    doc.addImage(logoImg, "PNG", 10, 2, 28, 16, undefined, "FAST", 0.8);

    // Add QR code to the right - with compression settings
    doc.addImage(
      qrCodeImg,
      "PNG",
      pageWidth - 20,
      2,
      16,
      16,
      undefined,
      "FAST",
      0.8
    );
  } catch (error) {
    console.error("Error loading images:", error);
  }

  // Add header text
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.text("CENTRO DE DIAGNÓSTICO Y SEGUIMIENTO EN SALUD", pageWidth / 2, 8, {
    align: "center",
  });
  doc.text("EN EL TRABAJO", pageWidth / 2, 13, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.text("HISTORIA CLÍNICA LABORAL", pageWidth / 2, 18, { align: "center" });

  // Add header divider line
  doc.setDrawColor(0, 0, 0);
  doc.line(0, 20, pageWidth, 20);

  return doc;
};

export const generatePDF = (data: MedicalRecord): void => {
  // Show loader before starting PDF generation
  showLoader();

  // Allow UI to update before heavy processing
  setTimeout(() => {
    try {
      // Create PDF with compression settings
      const doc = new jsPDF({
        compress: true,
        precision: 2,
        unit: "mm",
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const startY = 25; // Starting Y position after header

      // Add header to first page
      addHeader(doc);

      // Configuración inicial
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);

      // Information row
      doc.text(`Empresa: ${data.nombreEmpresa}`, 15, startY + 5);
      doc.text(`Fecha: ${data.fecha}`, pageWidth - 60, startY + 5);
      doc.text(`Folio: ${data.folio}`, pageWidth - 60, startY + 10);
      doc.text(`Tipo de Examen: ${data.tipoExamen}`, 15, startY + 10);

      // Línea divisora
      doc.setDrawColor(0, 0, 0);
      doc.line(15, startY + 12, pageWidth - 15, startY + 12);

      // Sección 1: Información Personal
      let yPos = startY + 20;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("1. DATOS PERSONALES", 15, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 8;
      doc.text(`Nombre: ${data.nombre}`, 15, yPos);
      doc.text(`Edad: ${data.edad} años`, 120, yPos);
      doc.text(`Sexo: ${data.sexo}`, 160, yPos);
      yPos += 6;
      doc.text(`Fecha de Nacimiento: ${data.fechaNacimiento}`, 15, yPos);
      yPos += 6;
      doc.text(`Dirección: ${data.direccion}`, 15, yPos);
      yPos += 6;
      doc.text(`Teléfono: ${data.telefono}`, 15, yPos);
      doc.text(`Email: ${data.email}`, 120, yPos);
      doc.text(`NSS: ${data.nss}`, 160, yPos);
      doc.text(`Puesto Solicitado: ${data.puestoSolicitado}`, 200, yPos);

      // Sección 2: Información Laboral
      yPos += 10;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("2. ANTECEDENTES LABORALES", 15, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 8;
      doc.text(
        `Edad de inicio de labores: ${data.edadInicioLabores} años`,
        15,
        yPos
      );

      // Empresa 1
      yPos += 8;
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Empresa 1:", 15, yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      yPos += 6;
      doc.text(`Nombre: ${data.empresa1Nombre}`, 20, yPos);
      doc.text(`Años: ${data.empresa1Anos}`, 120, yPos);
      yPos += 6;
      doc.text(`Puesto: ${data.empresa1Puesto}`, 20, yPos);
      yPos += 6;

      // Exposición a agentes
      doc.text("Exposición a:", 20, yPos);
      let exposicionesEmpresa1 = [];
      if (data.empresa1Disolventes === "true")
        exposicionesEmpresa1.push("Disolventes");
      if (data.empresa1Quimicos === "true")
        exposicionesEmpresa1.push("Químicos");
      if (data.empresa1Metales === "true") exposicionesEmpresa1.push("Metales");
      if (data.empresa1Polvo === "true") exposicionesEmpresa1.push("Polvo");
      if (data.empresa1Gases === "true") exposicionesEmpresa1.push("Gases");
      if (data.empresa1Ruido === "true") exposicionesEmpresa1.push("Ruido");
      if (data.empresa1SobreEsfuerzo === "true")
        exposicionesEmpresa1.push("Sobre esfuerzo");
      if (data.empresa1Estres === "true") exposicionesEmpresa1.push("Estrés");
      if (data.empresa1Biologicos === "true")
        exposicionesEmpresa1.push("Biológicos");
      if (data.empresa1Ergonomicos === "true")
        exposicionesEmpresa1.push("Ergonómicos");
      if (data.empresa1Calor === "true")
        exposicionesEmpresa1.push("Calor/Frío");
      if (data.empresa1Otro === "true") exposicionesEmpresa1.push("Otros");

      // Print exposures in two columns
      const chunkSize = Math.ceil(exposicionesEmpresa1.length / 2);
      const firstCol = exposicionesEmpresa1.slice(0, chunkSize);
      const secondCol = exposicionesEmpresa1.slice(chunkSize);

      yPos += 5;
      firstCol.forEach((exp, index) => {
        doc.text(`• ${exp}`, 25, yPos + index * 5);
      });

      secondCol.forEach((exp, index) => {
        doc.text(`• ${exp}`, 90, yPos + index * 5);
      });

      yPos += Math.max(firstCol.length, secondCol.length) * 5 + 5;

      // Check if we need a new page
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
        // Note: addHeader will be called on all pages
      }

      // Empresa 2 if has data
      if (data.empresa2Nombre) {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text("Empresa 2:", 15, yPos);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        yPos += 6;
        doc.text(`Nombre: ${data.empresa2Nombre}`, 20, yPos);
        doc.text(`Años: ${data.empresa2Anos}`, 120, yPos);
        yPos += 6;
        doc.text(`Puesto: ${data.empresa2Puesto}`, 20, yPos);
        yPos += 6;

        // Exposición a agentes
        doc.text("Exposición a:", 20, yPos);
        let exposicionesEmpresa2 = [];
        if (data.empresa2Disolventes === "true")
          exposicionesEmpresa2.push("Disolventes");
        if (data.empresa2Quimicos === "true")
          exposicionesEmpresa2.push("Químicos");
        if (data.empresa2Metales === "true")
          exposicionesEmpresa2.push("Metales");
        if (data.empresa2Polvo === "true") exposicionesEmpresa2.push("Polvo");
        if (data.empresa2Gases === "true") exposicionesEmpresa2.push("Gases");
        if (data.empresa2Ruido === "true") exposicionesEmpresa2.push("Ruido");
        if (data.empresa2SobreEsfuerzo === "true")
          exposicionesEmpresa2.push("Sobre esfuerzo");
        if (data.empresa2Estres === "true") exposicionesEmpresa2.push("Estrés");
        if (data.empresa2Biologicos === "true")
          exposicionesEmpresa2.push("Biológicos");
        if (data.empresa2Ergonomicos === "true")
          exposicionesEmpresa2.push("Ergonómicos");
        if (data.empresa2Calor === "true")
          exposicionesEmpresa2.push("Calor/Frío");
        if (data.empresa2Otro === "true") exposicionesEmpresa2.push("Otros");

        // Print exposures in two columns
        const chunkSize2 = Math.ceil(exposicionesEmpresa2.length / 2);
        const firstCol2 = exposicionesEmpresa2.slice(0, chunkSize2);
        const secondCol2 = exposicionesEmpresa2.slice(chunkSize2);

        yPos += 5;
        firstCol2.forEach((exp, index) => {
          doc.text(`• ${exp}`, 25, yPos + index * 5);
        });

        secondCol2.forEach((exp, index) => {
          doc.text(`• ${exp}`, 90, yPos + index * 5);
        });

        yPos += Math.max(firstCol2.length, secondCol2.length) * 5 + 5;
      }

      // Check if we need a new page
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // Start Antecedentes Familiares section
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("3. ANTECEDENTES FAMILIARES", 15, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 8;

      // Create two columns for family antecedents
      let familyAntecedents = [];
      if (data.diabetes === "true") familyAntecedents.push("Diabetes");
      if (data.hipertension === "true") familyAntecedents.push("Hipertensión");
      if (data.ulceras === "true") familyAntecedents.push("Úlceras");
      if (data.obesidad === "true") familyAntecedents.push("Obesidad");
      if (data.epilepsia === "true") familyAntecedents.push("Epilepsia");
      if (data.nefropatias === "true") familyAntecedents.push("Nefropatías");
      if (data.tuberculosis === "true") familyAntecedents.push("Tuberculosis");
      if (data.alergias === "true") familyAntecedents.push("Alergias");
      if (data.dislipidemias === "true")
        familyAntecedents.push("Dislipidemias");
      if (data.artitis === "true") familyAntecedents.push("Artritis");
      if (data.oncologicos === "true") familyAntecedents.push("Oncológicos");
      if (data.neumopatias === "true") familyAntecedents.push("Neumopatías");
      if (data.artritis === "true") familyAntecedents.push("Artritis");
      if (data.cardiopatias === "true") familyAntecedents.push("Cardiopatías");
      if (data.otros === "true") familyAntecedents.push("Otros");

      // Print family antecedents in two columns
      const chunkSizeFamily = Math.ceil(familyAntecedents.length / 2);
      const firstColFamily = familyAntecedents.slice(0, chunkSizeFamily);
      const secondColFamily = familyAntecedents.slice(chunkSizeFamily);

      firstColFamily.forEach((ant, index) => {
        doc.text(`• ${ant}`, 20, yPos + index * 6);
      });

      secondColFamily.forEach((ant, index) => {
        doc.text(`• ${ant}`, 100, yPos + index * 6);
      });

      yPos += Math.max(firstColFamily.length, secondColFamily.length) * 6 + 5;

      if (data.quien) {
        doc.text(`¿Quién padece estas enfermedades?: ${data.quien}`, 20, yPos);
        yPos += 8;
      }

      // Start a new page for the next section
      doc.addPage();
      yPos = startY + 5;

      // Antecedentes Personales Patológicos
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("4. ANTECEDENTES PERSONALES PATOLÓGICOS", 15, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 8;

      // Create two columns for pathological antecedents
      let pathAntecedents = [];
      if (data.patDiabetes === "true") pathAntecedents.push("Diabetes");
      if (data.patHipertension === "true") pathAntecedents.push("Hipertensión");
      if (data.patLunbargias === "true") pathAntecedents.push("Lumbalgias");
      if (data.patOftalmo === "true") pathAntecedents.push("Oftalmológicos");
      if (data.patEpilepsia === "true") pathAntecedents.push("Epilepsia");
      if (data.patEpoc === "true") pathAntecedents.push("EPOC");
      if (data.patQuirurgico === "true") pathAntecedents.push("Quirúrgico");
      if (data.patCirugias === "true") pathAntecedents.push("Cirugías");
      if (data.patNefropatias === "true") pathAntecedents.push("Nefropatías");
      if (data.patTuberculosis === "true") pathAntecedents.push("Tuberculosis");
      if (data.patAlergias === "true") pathAntecedents.push("Alergias");
      if (data.patDislipidemias === "true")
        pathAntecedents.push("Dislipidemias");
      if (data.patArtitis === "true") pathAntecedents.push("Artritis");
      if (data.patAnsiedad === "true") pathAntecedents.push("Ansiedad");
      if (data.patPsiquiatricos === "true")
        pathAntecedents.push("Psiquiátricos");
      if (data.patTransfusiones === "true")
        pathAntecedents.push("Transfusiones");
      if (data.patOncologicos === "true") pathAntecedents.push("Oncológicos");
      if (data.patTraumaticos === "true") pathAntecedents.push("Traumáticos");
      if (data.patEts === "true") pathAntecedents.push("ETS");
      if (data.patCardiopatias === "true") pathAntecedents.push("Cardiopatías");
      if (data.patNeoplasias === "true") pathAntecedents.push("Neoplasias");
      if (data.patDepresion === "true") pathAntecedents.push("Depresión");
      if (data.patAccidentes === "true") pathAntecedents.push("Accidentes");

      // Print pathological antecedents in two columns
      const chunkSizePath = Math.ceil(pathAntecedents.length / 2);
      const firstColPath = pathAntecedents.slice(0, chunkSizePath);
      const secondColPath = pathAntecedents.slice(chunkSizePath);

      firstColPath.forEach((ant, index) => {
        doc.text(`• ${ant}`, 20, yPos + index * 6);
      });

      secondColPath.forEach((ant, index) => {
        doc.text(`• ${ant}`, 100, yPos + index * 6);
      });

      yPos += Math.max(firstColPath.length, secondColPath.length) * 6 + 5;

      if (data.patControl) {
        doc.text(`Control médico: ${data.patControl}`, 20, yPos);
        yPos += 8;
      }

      // Non-pathological personal antecedents - first the housing
      yPos += 4;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("5. ANTECEDENTES PERSONALES NO PATOLÓGICOS", 15, yPos);
      doc.setFontSize(11);
      yPos += 8;
      doc.text("Vivienda:", 20, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Material: ${data.viviendaMaterial}`, 30, yPos);
      doc.text(`Habitaciones: ${data.viviendaHabitaciones}`, 100, yPos);
      yPos += 6;
      doc.text(`Personas: ${data.viviendaPersonas}`, 30, yPos);
      yPos += 6;

      let viviendaServicios = [];
      if (data.viviendaAguaPotable === "true")
        viviendaServicios.push("Agua potable");
      if (data.viviendaElectricidad === "true")
        viviendaServicios.push("Electricidad");
      if (data.viviendaDrenaje === "true") viviendaServicios.push("Drenaje");
      if (data.viviendaPavimento === "true")
        viviendaServicios.push("Pavimento");

      doc.text("Servicios: " + viviendaServicios.join(", "), 30, yPos);
      yPos += 8;

      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // Hábitos higiénicos
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Hábitos higiénicos:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      let habitosHigienicos = [];
      if (data.habitosDiario === "true") habitosHigienicos.push("Baño diario");
      if (data.habitosCambioRopa === "true")
        habitosHigienicos.push("Cambio de ropa diario");
      if (data.habitosCepilloDientes === "true")
        habitosHigienicos.push("Cepillado de dientes");
      if (data.habitosOtro === "true") habitosHigienicos.push("Otros");

      doc.text(habitosHigienicos.join(", "), 30, yPos);
      yPos += 8;

      // Alimentación
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Alimentación:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      let alimentacion = [];
      if (data.alimentacionCarnesRojas === "true")
        alimentacion.push("Carnes rojas");
      if (data.alimentacionPollo === "true") alimentacion.push("Pollo");
      if (data.alimentacionPescado === "true") alimentacion.push("Pescado");
      if (data.alimentacionVerduras === "true") alimentacion.push("Verduras");
      if (data.alimentacionFrutas === "true") alimentacion.push("Frutas");
      if (data.alimentacionLegumbres === "true") alimentacion.push("Legumbres");
      if (data.alimentacionLacteos === "true") alimentacion.push("Lácteos");
      if (data.alimentacionHuevos === "true") alimentacion.push("Huevos");
      if (data.alimentacionBebidasAzucaradas === "true")
        alimentacion.push("Bebidas azucaradas");
      if (data.alimentacionChatarra === "true")
        alimentacion.push("Comida chatarra");
      if (data.alimentacionAgua === "true") alimentacion.push("Agua");
      if (data.alimentacionOtras === "true") alimentacion.push("Otras");

      // Print alimentacion in two columns
      const chunkSizeAlim = Math.ceil(alimentacion.length / 2);
      const firstColAlim = alimentacion.slice(0, chunkSizeAlim);
      const secondColAlim = alimentacion.slice(chunkSizeAlim);

      firstColAlim.forEach((alim, index) => {
        doc.text(`• ${alim}`, 30, yPos + index * 5);
      });

      secondColAlim.forEach((alim, index) => {
        doc.text(`• ${alim}`, 100, yPos + index * 5);
      });

      yPos += Math.max(firstColAlim.length, secondColAlim.length) * 5 + 5;

      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // Alcohol
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Consumo de alcohol:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      if (data.alcoholConsumo === "true") {
        doc.text(`Frecuencia: ${data.alcoholFrecuencia}`, 30, yPos);
        doc.text(`Cantidad: ${data.alcoholCantidad}`, 100, yPos);
        yPos += 6;
        doc.text(`Años de consumo: ${data.alcoholAnos}`, 30, yPos);
        doc.text(`Años inactivo: ${data.alcoholAnosInactivo}`, 100, yPos);
        yPos += 6;
      } else {
        doc.text("No consume", 30, yPos);
        yPos += 6;
      }

      // Tabaco
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Consumo de tabaco:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      if (data.tabacoConsumo === "true") {
        doc.text(`Frecuencia: ${data.tabacoFrecuencia}`, 30, yPos);
        doc.text(`Cantidad: ${data.tabacoCantidad}`, 100, yPos);
        yPos += 6;
        doc.text(`Años de consumo: ${data.tabacoAnos}`, 30, yPos);
        doc.text(`Años inactivo: ${data.tabacoAnosInactivo}`, 100, yPos);
        yPos += 6;
      } else {
        doc.text("No consume", 30, yPos);
        yPos += 6;
      }

      // Drogas
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Consumo de drogas:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      if (data.drogasConsumo === "true") {
        doc.text(`Observaciones: ${data.drogasObservaciones}`, 30, yPos);
        yPos += 6;
      } else {
        doc.text("No consume", 30, yPos);
        yPos += 6;
      }

      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // Start a new page for physical examination
      doc.addPage();
      yPos = startY + 5;

      // Exploration Fisica - physical examination
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("6. EXPLORACIÓN FÍSICA", 15, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 8;

      // Vital signs
      doc.text(`Talla: ${data.talla} cm`, 20, yPos);
      doc.text(`Peso: ${data.peso} kg`, 80, yPos);
      doc.text(`IMC: ${data.imc} kg/m²`, 140, yPos);
      yPos += 6;
      doc.text(`T/A: ${data.tensionArterial} mmHg`, 20, yPos);
      doc.text(`FC: ${data.frecuenciaCardiaca} lpm`, 80, yPos);
      doc.text(`FR: ${data.frecuenciaRespiratoria} rpm`, 140, yPos);
      yPos += 6;
      doc.text(`Temperatura: ${data.temperatura} °C`, 20, yPos);
      yPos += 10;

      // Exploración por sistemas
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("7. EXPLORACIÓN POR SISTEMAS", 15, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 10;

      // Function to format normal/abnormal text
      const formatNA = (value: string) => {
        return value === "true" ? "Anormal" : "Normal";
      };

      // CRÁNEO
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("CRÁNEO:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Tamaño: ${formatNA(data.craneotamano)}`, 30, yPos);
      doc.text(`Pelo: ${formatNA(data.craneopelo)}`, 90, yPos);
      doc.text(`Cara: ${formatNA(data.craneocara)}`, 150, yPos);
      yPos += 6;

      if (data.craneoObservaciones) {
        doc.text(`Observaciones: ${data.craneoObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // NARIZ
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("NARIZ:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Tabique: ${formatNA(data.nariztabique)}`, 30, yPos);
      doc.text(`Mucosas: ${formatNA(data.narizmucosas)}`, 90, yPos);
      doc.text(`Otro: ${formatNA(data.narizotro)}`, 150, yPos);
      yPos += 6;

      if (data.narizObservaciones) {
        doc.text(`Observaciones: ${data.narizObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // OJOS
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("OJOS:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Conjuntivas: ${formatNA(data.ojosconjuntivas)}`, 30, yPos);
      doc.text(`Pupilas: ${formatNA(data.ojospupilas)}`, 90, yPos);
      doc.text(`Párpados: ${formatNA(data.ojosparpados)}`, 150, yPos);
      yPos += 6;

      if (data.ojosObservaciones) {
        doc.text(`Observaciones: ${data.ojosObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // OÍDOS
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("OÍDOS:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Pabellón: ${formatNA(data.oidospabellon)}`, 30, yPos);
      doc.text(`C.A.E.: ${formatNA(data.oidosCAE)}`, 90, yPos);
      doc.text(`Tímpanos: ${formatNA(data.oidostimpanos)}`, 150, yPos);
      yPos += 6;

      if (data.oidosObservaciones) {
        doc.text(`Observaciones: ${data.oidosObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // CUELLO
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("CUELLO:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Ganglios: ${formatNA(data.cuellogangios)}`, 30, yPos);
      doc.text(`Tiroides: ${formatNA(data.cuellotiroides)}`, 90, yPos);
      doc.text(`Pulsos: ${formatNA(data.cuellopulsos)}`, 150, yPos);
      yPos += 6;

      if (data.cuelloObservaciones) {
        doc.text(`Observaciones: ${data.cuelloObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // TÓRAX
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("TÓRAX:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Forma: ${formatNA(data.toraxforma)}`, 30, yPos);
      doc.text(`R. Cardíaco: ${formatNA(data.toraxRCardiaco)}`, 90, yPos);
      yPos += 6;
      doc.text(`Campos Pulm.: ${formatNA(data.toraxCamposPul)}`, 30, yPos);
      doc.text(`Mamas: ${formatNA(data.toraxmamas)}`, 90, yPos);
      yPos += 6;

      if (data.toraxObservaciones) {
        doc.text(`Observaciones: ${data.toraxObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // ABDOMEN
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("ABDOMEN:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Megalias: ${formatNA(data.abdomenmegalias)}`, 30, yPos);
      doc.text(`Hernias: ${formatNA(data.abdomenhernia)}`, 90, yPos);
      doc.text(`Otros: ${formatNA(data.abdomenotros)}`, 150, yPos);
      yPos += 6;

      if (data.abdomenObservaciones) {
        doc.text(`Observaciones: ${data.abdomenObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // BOCA
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("BOCA:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Mucosas: ${formatNA(data.bocamucosas)}`, 30, yPos);
      doc.text(`Dentadura: ${formatNA(data.bocadentadura)}`, 90, yPos);
      doc.text(`Lengua: ${formatNA(data.bocalengua)}`, 150, yPos);
      yPos += 6;
      doc.text(`Encías: ${formatNA(data.bocaencias)}`, 30, yPos);
      doc.text(`Laringe: ${formatNA(data.bocalaringe)}`, 90, yPos);
      doc.text(`Amígdalas: ${formatNA(data.bocaamigdalas)}`, 150, yPos);
      yPos += 6;

      if (data.bocaObservaciones) {
        doc.text(`Observaciones: ${data.bocaObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // GENITALES
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("GENITALES:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`Fimosis: ${formatNA(data.genitalesfimosis)}`, 30, yPos);
      doc.text(`Varicocele: ${formatNA(data.genitalesvarico)}`, 90, yPos);
      yPos += 6;
      doc.text(`Hernias: ${formatNA(data.genitaleshernia)}`, 30, yPos);
      doc.text(`Otros: ${formatNA(data.genitalesotros)}`, 90, yPos);
      yPos += 6;

      if (data.genitalesObservaciones) {
        doc.text(`Observaciones: ${data.genitalesObservaciones}`, 30, yPos);
        yPos += 6;
      }

      // AGUDEZA VISUAL
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("AGUDEZA VISUAL:", 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(`S/C O.D.: ${data.agudezaVisualOD}`, 30, yPos);
      doc.text(`O.I.: ${data.agudezaVisualOI}`, 90, yPos);
      yPos += 6;
      doc.text(`IZQ: ${formatNA(data.agudezaVisualIZQ)}`, 30, yPos);
      doc.text(`DER: ${formatNA(data.agudezaVisualDER)}`, 90, yPos);
      yPos += 8;

      // MIEMBROS
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("MIEMBROS:", 20, yPos);
      yPos += 8;

      // TORÁCICOS
      doc.text("Torácicos:", 25, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(
        `Integridad: ${formatNA(data.miembrosToraxIntegridad)}`,
        30,
        yPos
      );
      doc.text(`Forma: ${formatNA(data.miembrosToraxForma)}`, 90, yPos);
      doc.text(
        `Articulaciones: ${formatNA(data.miembrosToraxArticulaciones)}`,
        150,
        yPos
      );
      yPos += 6;
      doc.text(
        `Tono Muscular: ${formatNA(data.miembrosToraxTonoMuscular)}`,
        30,
        yPos
      );
      doc.text(`Reflejos: ${formatNA(data.miembrosToraxReflejos)}`, 90, yPos);
      doc.text(
        `Sensibilidad: ${formatNA(data.miembrosToraxSensibilidad)}`,
        150,
        yPos
      );
      yPos += 8;

      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // PÉLVICOS
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Pélvicos:", 25, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(
        `Integridad: ${formatNA(data.miembrosPelvicosIntegridad)}`,
        30,
        yPos
      );
      doc.text(`Forma: ${formatNA(data.miembrosPelvicosForma)}`, 90, yPos);
      doc.text(
        `Articulaciones: ${formatNA(data.miembrosPelvicosArticulaciones)}`,
        150,
        yPos
      );
      yPos += 6;
      doc.text(
        `Tono Muscular: ${formatNA(data.miembrosPelvicosTonoMuscular)}`,
        30,
        yPos
      );
      doc.text(
        `Reflejos: ${formatNA(data.miembrosPelvicosReflejos)}`,
        90,
        yPos
      );
      doc.text(
        `Sensibilidad: ${formatNA(data.miembrosPelvicosSensibilidad)}`,
        150,
        yPos
      );
      yPos += 8;

      // INFERIORES
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("M. Inferiores:", 25, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(
        `Integridad: ${formatNA(data.miembrosInferioresIntegridad)}`,
        30,
        yPos
      );
      doc.text(`Forma: ${formatNA(data.miembrosInferioresForma)}`, 90, yPos);
      doc.text(
        `Articulaciones: ${formatNA(data.miembrosInferioresArticulaciones)}`,
        150,
        yPos
      );
      yPos += 6;
      doc.text(
        `Tono Muscular: ${formatNA(data.miembrosInferioresTonoMuscular)}`,
        30,
        yPos
      );
      doc.text(
        `Reflejos: ${formatNA(data.miembrosInferioresReflejos)}`,
        90,
        yPos
      );
      doc.text(
        `Sensibilidad: ${formatNA(data.miembrosInferioresSensibilidad)}`,
        150,
        yPos
      );
      yPos += 8;

      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = startY + 5;
      }

      // SUPERIORES
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("M. Superiores:", 25, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 6;

      doc.text(
        `Integridad: ${formatNA(data.miembrosSuperioresIntegridad)}`,
        30,
        yPos
      );
      doc.text(`Forma: ${formatNA(data.miembrosSuperioresForma)}`, 90, yPos);
      doc.text(
        `Articulaciones: ${formatNA(data.miembrosSuperioresArticulaciones)}`,
        150,
        yPos
      );
      yPos += 6;
      doc.text(
        `Tono Muscular: ${formatNA(data.miembrosSuperiorestonoMuscular)}`,
        30,
        yPos
      );
      doc.text(
        `Reflejos: ${formatNA(data.miembrosSuperioresReflejos)}`,
        90,
        yPos
      );
      doc.text(
        `Sensibilidad: ${formatNA(data.miembrosSuperioresSensibilidad)}`,
        150,
        yPos
      );
      yPos += 8;

      // Nueva página para evaluación final
      doc.addPage();
      yPos = startY + 5;

      // Sección 8: Evaluación Médica
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 150);
      doc.setFont("helvetica", "bold");
      doc.text("8. EVALUACIÓN MÉDICA", 15, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      yPos += 8;

      // Auxiliares de Diagnóstico (Section number 10 in the form)
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("10. AUXILIARES DE DIAGNÓSTICO", 15, yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      yPos += 8;

      // Create a table-like structure for auxiliaries
      doc.rect(15, yPos, pageWidth - 30, 40);

      // First row
      doc.line(15, yPos + 12, pageWidth - 15, yPos + 12);
      // Vertical lines for columns
      const col1 = 15 + (pageWidth - 30) * 0.25; // 25% width
      const col2 = 15 + (pageWidth - 30) * 0.5; // 50% width
      const col3 = 15 + (pageWidth - 30) * 0.75; // 75% width

      doc.line(col1, yPos, col1, yPos + 40);
      doc.line(col2, yPos, col2, yPos + 40);
      doc.line(col3, yPos, col3, yPos + 40);

      // Horizontal lines for rows
      doc.line(15, yPos + 24, pageWidth - 15, yPos + 24);

      // Fill in the data
      doc.text("BH", 20, yPos + 8);
      doc.text(data.bloodHemoglobin || "", 65, yPos + 8);

      doc.text("AUDIOMETRÍAS", col1 + 5, yPos + 8);
      doc.text(data.audiometry || "", col2 - 20, yPos + 8);

      doc.text("ALCOHOLEMIA", col2 + 5, yPos + 8);
      doc.text(data.alcoholemia || "", pageWidth - 40, yPos + 8);

      doc.text("QS", 20, yPos + 20);
      doc.text(data.quickSedimentation || "", 65, yPos + 20);

      doc.text("ESPIROMETRÍAS", col1 + 5, yPos + 20);
      doc.text(data.spirometry || "", col2 - 20, yPos + 20);

      doc.text("ANTIDOPAJE", col2 + 5, yPos + 20);
      doc.text(data.antidoping || "", pageWidth - 40, yPos + 20);

      doc.text("ORINA", 20, yPos + 32);
      doc.text(data.urine || "", 65, yPos + 32);

      doc.text("RX TORAX", col1 + 5, yPos + 32);
      doc.text(data.chestXRay || "", col2 - 20, yPos + 32);

      doc.text("RX LUMBAR", col2 + 5, yPos + 32);
      doc.text(data.lumbarXRay || "", pageWidth - 40, yPos + 32);

      yPos += 45;

      // Romberg Test
      doc.text("ROMBERG Y UNTERBERGER", 15, yPos);
      doc.text("POS", 135, yPos);
      doc.rect(150, yPos - 5, 10, 10);
      if (data.rombergTest === "POS") {
        doc.text("X", 153, yPos);
      }

      doc.text("NEG", 170, yPos);
      doc.rect(185, yPos - 5, 10, 10);
      if (data.rombergTest === "NEG") {
        doc.text("X", 188, yPos);
      }

      doc.text("OBSERVACIONES:", 205, yPos);
      doc.text(data.rombergTestObservations || "", 290, yPos);

      yPos += 15;

      // Babinski Test
      doc.text("MARCHA DE BABINSKI", 15, yPos);
      doc.text("POS", 135, yPos);
      doc.rect(150, yPos - 5, 10, 10);
      if (data.babinskiTest === "POS") {
        doc.text("X", 153, yPos);
      }

      doc.text("NEG", 170, yPos);
      doc.rect(185, yPos - 5, 10, 10);
      if (data.babinskiTest === "NEG") {
        doc.text("X", 188, yPos);
      }

      yPos += 15;

      // Conclusiones Diagnósticas
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("CONCLUSIONES DIAGNÓSTICAS", 15, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      yPos += 8;

      // Create multiline text for diagnoses
      const diagLines = doc.splitTextToSize(data.diagnosticos, pageWidth - 50);
      doc.text(diagLines, 30, yPos);
      yPos += diagLines.length * 5 + 15;

      // Aptitud Médica para el Trabajo
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("11. APTITUD MÉDICA PARA EL TRABAJO", 15, yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      yPos += 8;

      // Draw the aptitude boxes
      const boxWidth = (pageWidth - 40) / 4;
      const boxHeight = 15;

      // APTO - Green
      doc.setFillColor(0, 200, 0);
      doc.rect(
        15,
        yPos,
        boxWidth,
        boxHeight,
        data.aptitud === "APTO" ? "F" : "S"
      );
      doc.setTextColor(data.aptitud === "APTO" ? 255 : 0, 0, 0);
      doc.text("APTO", 15 + boxWidth / 2 - 10, yPos + 10);

      // APTO CON OBSERVACIÓN - Blue
      doc.setFillColor(0, 120, 255);
      doc.rect(
        15 + boxWidth,
        yPos,
        boxWidth,
        boxHeight,
        data.aptitud === "APTO CON OBSERVACION" ? "F" : "S"
      );
      doc.setTextColor(data.aptitud === "APTO CON OBSERVACION" ? 255 : 0, 0, 0);
      doc.text(
        "APTO CON OBSERVACIÓN",
        15 + boxWidth + boxWidth / 2 - 40,
        yPos + 10
      );

      // APTO CON LIMITACIONES - Yellow
      doc.setFillColor(255, 255, 0);
      doc.rect(
        15 + boxWidth * 2,
        yPos,
        boxWidth,
        boxHeight,
        data.aptitud === "APTO CON LIMITACIONES" ? "F" : "S"
      );
      doc.setTextColor(0, 0, 0);
      doc.text(
        "APTO CON LIMITACIONES",
        15 + boxWidth * 2 + boxWidth / 2 - 40,
        yPos + 10
      );

      // NO APTO - Red
      doc.setFillColor(255, 0, 0);
      doc.rect(
        15 + boxWidth * 3,
        yPos,
        boxWidth,
        boxHeight,
        data.aptitud === "NO APTO" ? "F" : "S"
      );
      doc.setTextColor(data.aptitud === "NO APTO" ? 255 : 0, 0, 0);
      doc.text("NO APTO", 15 + boxWidth * 3 + boxWidth / 2 - 20, yPos + 10);
      doc.setTextColor(0, 0, 0); // Reset text color

      yPos += boxHeight + 15;

      // Datos del Profesional
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("12. DATOS DEL PROFESIONAL DE LA SALUD", 15, yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      yPos += 10;

      // Create a table for the professional's information
      const tableWidth = pageWidth - 30;
      doc.rect(15, yPos, tableWidth, 50);

      // Create a cell for the signature
      doc.rect(15 + tableWidth * 0.7, yPos, tableWidth * 0.3, 50);
      doc.text("FIRMA DEL MÉDICO", 15 + tableWidth * 0.7 + 15, yPos + 25);

      // Name and Specialty
      doc.text("NOMBRE DEL MÉDICO", 20, yPos + 8);
      doc.text(data.nombreMedico, 20, yPos + 15);

      doc.text("ESPECIALIDAD", 20, yPos + 25);
      doc.text(
        data.especialidadMedico || "MEDICINA DEL TRABAJO Y AMBIENTAL",
        20,
        yPos + 32
      );

      doc.text("CÉDULA PROFESIONAL", 20, yPos + 42);
      doc.text(data.cedulaProfesional, 20, yPos + 49);

      // Ensure headers are added to all pages
      const countPages = doc.internal.pages.length;
      for (let i = 1; i <= countPages; i++) {
        doc.setPage(i);
        addHeader(doc);
      }

      // Save PDF with optimization settings
      doc
        .save(
          `Historia_Clinica_${data.nombre.replace(/\s+/g, "_")}_${
            data.folio
          }.pdf`,
          { returnPromise: true }
        )
        .then(() => {
          // Hide loader after PDF is saved
          hideLoader();
        })
        .catch((error) => {
          console.error("Error saving PDF:", error);
          hideLoader();
        });
    } catch (error) {
      console.error("Error generating PDF:", error);
      hideLoader();
    }
  }, 100);
};
