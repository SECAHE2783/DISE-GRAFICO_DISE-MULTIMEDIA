// scripts.js

// Datos de materias por semestre
const malla = [
  {
    semestre: 1,
    materias: [
      { nombre: "Morfología", creditos: 7.5 },
      { nombre: "Color", creditos: 6 },
      { nombre: "Principios del dibujo", creditos: 7.5 },
      { nombre: "Tipografía", creditos: 6 },
      { nombre: "Dibujo vectorial", creditos: 4.5 },
      { nombre: "Dibujo geométrico", creditos: 4.5 },
      { nombre: "Formación universitaria I", creditos: 3 },
      { nombre: "Ser universitario", creditos: 6 },
      { nombre: "Español 1", creditos: 0 }
    ]
  },
  {
    semestre: 2,
    materias: [
      { nombre: "Fundamentos del diseño", creditos: 7.5, prerequisitos: ["Morfología"] },
      { nombre: "Elementos de semiótica para el diseño", creditos: 6 },
      { nombre: "Dibujo analítico", creditos: 7.5, prerequisitos: ["Principios del dibujo"] },
      { nombre: "Principios de fotografía", creditos: 6 },
      { nombre: "Historia del diseño", creditos: 6 },
      { nombre: "Composición tipográfica", creditos: 6, prerequisitos: ["Tipografía"] },
      { nombre: "Taller o actividad electiva", creditos: 3 },
      { nombre: "Liderazgo y desarrollo personal", creditos: 6 },
      { nombre: "Español 2", creditos: 0 },
      { nombre: "COMPETENCIAS DIGITALES 1", creditos: 0 },
      { nombre: "INGLES 5", creditos: 0 }
    ]
  }
];
{
  "3": [
    { name: "Proyectos de comunicación visual", credits: 7.5, prerequisites: ["Fundamentos del diseño", "Color"] },
    { name: "Producción y retoque de imagen", credits: 4.5, prerequisites: ["Principios de fotografía"] },
    { name: "Dibujo experimental", credits: 6, prerequisites: ["Dibujo analítico"] },
    { name: "Exploración tipográfica", credits: 6, prerequisites: ["Composición tipográfica"] },
    { name: "Antropología fundamental", credits: 6, prerequisites: [] },
    { name: "Electiva Anáhuac desarrollo personal habilidades relaciones publicas", credits: 6, prerequisites: [] },
    { name: "Habilidades para el emprendimiento", credits: 3, prerequisites: [] }
  ],
  "4": [
    { name: "Proyectos de identidad visual y marca", credits: 7.5, prerequisites: ["Proyectos de comunicación visual"] },
    { name: "Edición de imagen", credits: 4.5, prerequisites: ["Producción y retoque de imagen"] },
    { name: "Ilustración", credits: 6, prerequisites: ["Dibujo experimental"] },
    { name: "Narrativa audiovisual y guionismo", credits: 4.5, prerequisites: [] },
    { name: "Fundamentos y técnicas de animación", credits: 6, prerequisites: ["Habilidades para el emprendimiento"] },
    { name: "Pensamiento creativo", credits: 4.5, prerequisites: [] },
    { name: "Emprendimiento e innovación", credits: 6, prerequisites: ["Habilidades para el emprendimiento"] },
    { name: "Persona y trascendencia", credits: 6, prerequisites: [] },
    { name: "Liderazgo y equipos de alto desempeño", credits: 3, prerequisites: [] },
    { name: "Liderazgo y desarrollo personal", credits: 6, prerequisites: [] },
    { name: "Taller o actividad electiva", credits: 3, prerequisites: [] },
    { name: "COMPETENCIAS DIGITALES 2", credits: 0, prerequisites: [] },
    { name: "INGLES 6", credits: 0, prerequisites: [] }
  ],
  "5": [
    { name: "Producción fotográfica", credits: 6, prerequisites: ["Principios de fotografía"] },
    { name: "Practicum 1: diseño gráfico", credits: 7.5, prerequisites: ["Proyectos de comunicación visual"] },
    { name: "Envase y empaque", credits: 6, prerequisites: ["Ilustración"] },
    { name: "Creatividad e innovación publicitaria", credits: 6, prerequisites: [] },
    { name: "Storyboard", credits: 4.5, prerequisites: ["Fundamentos y técnicas de animación"] },
    { name: "Audio digital", credits: 4.5, prerequisites: [] },
    { name: "Animación 2D I", credits: 6, prerequisites: ["Storyboard"] },
    { name: "Formación universitaria II", credits: 6, prerequisites: [] },
    { name: "Humanismo clásico y contemporáneo", credits: 6, prerequisites: [] },
    { name: "Ética", credits: 9, prerequisites: [] }
  ],
  "6": [
    { name: "Proyectos de diseño editorial", credits: 7.5, prerequisites: ["Practicum 1: diseño gráfico"] },
    { name: "Diseño y mercadotecnia", credits: 6, prerequisites: ["Fundamentos del diseño"] },
    { name: "Sistemas de reproducción", credits: 6, prerequisites: ["Envase y empaque"] },
    { name: "Comunicación estratégica para productos y servicios", credits: 6, prerequisites: [] },
    { name: "Video digital", credits: 4.5, prerequisites: ["Storyboard"] },
    { name: "Fundamentos de interactividad y experiencia de usuario (UX)", credits: 4.5, prerequisites: [] },
    { name: "Concept Art: Personajes y escenarios", credits: 6, prerequisites: ["Animación 2D I"] },
    { name: "Electiva interdisciplinaria", credits: 6, prerequisites: [] }
  ]
};
// scripts.js

const malla = [
  // Semestres 1 a 6 (ya definidos antes) ...
  {
    semestre: 1,
    materias: [
      { nombre: "Morfología", creditos: 7.5 },
      { nombre: "Color", creditos: 6 },
      { nombre: "Principios del dibujo", creditos: 7.5 },
      { nombre: "Tipografía", creditos: 6 },
      { nombre: "Dibujo vectorial", creditos: 4.5 },
      { nombre: "Dibujo geométrico", creditos: 4.5 },
      { nombre: "Formación universitaria I", creditos: 3 },
      { nombre: "Ser universitario", creditos: 6 },
      { nombre: "Español 1", creditos: 0 }
    ]
  },
  {
    semestre: 2,
    materias: [
      { nombre: "Fundamentos del diseño", creditos: 7.5, prerequisitos: ["Morfología"] },
      { nombre: "Elementos de semiótica para el diseño", creditos: 6 },
      { nombre: "Dibujo analítico", creditos: 7.5, prerequisitos: ["Principios del dibujo"] },
      { nombre: "Principios de fotografía", creditos: 6 },
      { nombre: "Historia del diseño", creditos: 6 },
      { nombre: "Composición tipográfica", creditos: 6, prerequisitos: ["Tipografía"] },
      { nombre: "Taller o actividad electiva", creditos: 3 },
      { nombre: "Liderazgo y desarrollo personal", creditos: 6 },
      { nombre: "Español 2", creditos: 0 },
      { nombre: "COMPETENCIAS DIGITALES 1", creditos: 0 },
      { nombre: "INGLES 5", creditos: 0 }
    ]
  },
  {
    semestre: 3,
    materias: [
      { nombre: "Proyectos de comunicación visual", creditos: 7.5, prerequisitos: ["Fundamentos del diseño", "Color"] },
      { nombre: "Producción y retoque de imagen", creditos: 4.5, prerequisitos: ["Principios de fotografía"] },
      { nombre: "Dibujo experimental", creditos: 6, prerequisitos: ["Dibujo analítico"] },
      { nombre: "Exploración tipográfica", creditos: 6, prerequisitos: ["Composición tipográfica"] },
      { nombre: "Antropología fundamental", creditos: 6 },
      { nombre: "Electiva Anáhuac desarrollo personal habilidades relaciones publicas", creditos: 6 },
      { nombre: "Habilidades para el emprendimiento", creditos: 3 }
    ]
  },
  {
    semestre: 4,
    materias: [
      { nombre: "Proyectos de identidad visual y marca", creditos: 7.5, prerequisitos: ["Proyectos de comunicación visual"] },
      { nombre: "Edición de imagen", creditos: 4.5, prerequisitos: ["Producción y retoque de imagen"] },
      { nombre: "Ilustración", creditos: 6, prerequisitos: ["Dibujo experimental"] },
      { nombre: "Narrativa audiovisual y guionismo", creditos: 4.5 },
      { nombre: "Fundamentos y técnicas de animación", creditos: 6, prerequisitos: ["Habilidades para el emprendimiento"] },
      { nombre: "Pensamiento creativo", creditos: 4.5 },
      { nombre: "Emprendimiento e innovación", creditos: 6, prerequisitos: ["Habilidades para el emprendimiento"] },
      { nombre: "Persona y trascendencia", creditos: 6 },
      { nombre: "Liderazgo y equipos de alto desempeño", creditos: 3 },
      { nombre: "Liderazgo y desarrollo personal", creditos: 6 },
      { nombre: "Taller o actividad electiva", creditos: 3 },
      { nombre: "COMPETENCIAS DIGITALES 2", creditos: 0 },
      { nombre: "INGLES 6", creditos: 0 }
    ]
  },
  {
    semestre: 5,
    materias: [
      { nombre: "Producción fotográfica", creditos: 6, prerequisitos: ["Principios de fotografía"] },
      { nombre: "Practicum 1: diseño gráfico", creditos: 7.5, prerequisitos: ["Proyectos de comunicación visual"] },
      { nombre: "Envase y empaque", creditos: 6, prerequisitos: ["Ilustración"] },
      { nombre: "Creatividad e innovación publicitaria (MINOR)", creditos: 6 },
      { nombre: "Storyboard", creditos: 4.5, prerequisitos: ["Fundamentos y técnicas de animación"] },
      { nombre: "Audio digital", creditos: 4.5 },
      { nombre: "Animación 2D I", creditos: 6, prerequisitos: ["Storyboard"] },
      { nombre: "Formación universitaria II", creditos: 6 },
      { nombre: "Humanismo clásico y contemporáneo", creditos: 6 },
      { nombre: "Ética", creditos: 9 }
    ]
  },
  {
    semestre: 6,
    materias: [
      { nombre: "Proyectos de diseño editorial", creditos: 7.5, prerequisitos: ["Practicum 1: diseño gráfico"] },
      { nombre: "Diseño y mercadotecnia", creditos: 6 },
      { nombre: "Sistemas de reproducción", creditos: 6, prerequisitos: ["Envase y empaque"] },
      { nombre: "Comunicación estratégica para productos y servicios (MINOR)", creditos: 6 },
      { nombre: "Video digital", creditos: 4.5, prerequisitos: ["Storyboard"] },
      { nombre: "Fundamentos de interactividad y experiencia de usuario (UX)", creditos: 4.5 },
      { nombre: "Concept Art: Personajes y escenarios", creditos: 6, prerequisitos: ["Animación 2D I"] },
      { nombre: "Electiva interdisciplinaria", creditos: 6 }
    ]
  },
  {
    semestre: 7,
    materias: [
      { nombre: 'Tendencias del diseño', creditos: 6 },
      { nombre: 'Administración de proyectos de diseño', creditos: 6 },
      { nombre: 'Embalaje y distribución', creditos: 6 },
      { nombre: 'Practicum 2: diseño gráfico', creditos: 7.5 },
      { nombre: 'Motion graphics y efectos visuales', creditos: 6 },
      { nombre: 'Diseño editorial para medios digitales', creditos: 4.5 },
      { nombre: 'Animación 2D II', creditos: 6 },
      { nombre: 'Electiva Anáhuac Historia del arte', creditos: 6 }
    ]
  },
  {
    semestre: 8,
    materias: [
      { nombre: 'Diseño de la información I', creditos: 6 },
      { nombre: 'Proyectos de diseño y publicidad', creditos: 7.5 },
      { nombre: 'Caligrafía', creditos: 6 },
      { nombre: 'Seminario de investigación en diseño I', creditos: 6 },
      { nombre: 'Diseño de estilo audiovisual', creditos: 4.5 },
      { nombre: 'Programación multimedia I', creditos: 4.5 },
      { nombre: 'Cinematografía e iluminación (MINOR)', creditos: 6 },
      { nombre: 'Taller o actividad electiva', creditos: 3 }
    ]
  },
  {
    semestre: 9,
    materias: [
      { nombre: 'Diseño de medios digitales', creditos: 6 },
      { nombre: 'Aspectos legales del diseño', creditos: 6 },
      { nombre: 'Branding digital', creditos: 6 },
      { nombre: 'Publicidad y creación de marca (MINOR)', creditos: 6 },
      { nombre: 'Diseño de interfaces de usuario UI', creditos: 4.5 },
      { nombre: 'Practicum I: diseño multimedia', creditos: 6 },
      { nombre: 'Producción audiovisual y multimedia', creditos: 6 },
      { nombre: 'Electiva interdisciplinaria', creditos: 6 }
    ]
  },
  {
    semestre: 10,
    materias: [
      { nombre: 'Practicum 3: diseño gráfico', creditos: 7.5 },
      { nombre: 'Seminario de investigación en diseño II', creditos: 6 },
      { nombre: 'Producción publicitaria digital (MINOR)', creditos: 6 },
      { nombre: 'Programación multimedia II', creditos: 4.5 },
      { nombre: 'Dirección de escena y actuación (MINOR)', creditos: 6 },
      { nombre: 'Practicum II: diseño multimedia', creditos: 6 },
      { nombre: 'Diseño y programación web I', creditos: 4.5 },
      { nombre: 'Electiva interdisciplinaria', creditos: 6 }
    ]
  },
  {
    semestre: 11,
    materias: [
      { nombre: 'Animación 3D I', creditos: 6 },
      { nombre: 'Visualización de datos', creditos: 4.5 },
      { nombre: 'Diseño para dispositivos móviles', creditos: 4.5 },
      { nombre: 'Responsabilidad social y sustentabilidad', creditos: 6 },
      { nombre: 'Ética', creditos: 9 },
      { nombre: 'Interfaces de usuario UI', creditos: 4.5 },
      { nombre: 'Comercialización de producción multipantalla (MINOR)', creditos: 6 },
      { nombre: 'Electiva interdisciplinaria', creditos: 6 }
    ]
  },
  {
    semestre: 12,
    materias: [
      { nombre: 'Practicum III: diseño multimedia', creditos: 6 },
      { nombre: 'Diseño y programación web II', creditos: 4.5 },
      { nombre: 'Animación 3D II', creditos: 6 },
      { nombre: 'Diseño AR y VR', creditos: 6 },
      { nombre: 'Composición por nodos: VFX', creditos: 6 },
      { nombre: 'Animación digital (MINOR)', creditos: 6 },
      { nombre: 'Electiva interdisciplinaria', creditos: 6 }
    ]
  }
];

// Estado de materias
const estadoMaterias = {};

// Marcar materias completadas y habilitar siguientes
function toggleMateria(nombre) {
  estadoMaterias[nombre] = !estadoMaterias[nombre];
  renderMalla();
}

// Verifica si una materia puede habilitarse
function puedeHabilitar(materia) {
  if (!materia.prerequisitos) return true;
  return materia.prerequisitos.every(pr => estadoMaterias[pr]);
}

// Generar visualización de la malla
function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  malla.forEach(semestre => {
    const col = document.createElement("div");
    col.className = "semestre";

    const title = document.createElement("h3");
    title.innerText = `Semestre ${semestre.semestre}`;
    col.appendChild(title);

    semestre.materias.forEach(mat => {
      const btn = document.createElement("button");
      btn.innerText = mat.nombre + ` (${mat.creditos})`;
      btn.disabled = !puedeHabilitar(mat);
      btn.className = estadoMaterias[mat.nombre] ? "cursada" : "pendiente";
      btn.onclick = () => toggleMateria(mat.nombre);
      col.appendChild(btn);
    });

    container.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", renderMalla);

export default malla;
