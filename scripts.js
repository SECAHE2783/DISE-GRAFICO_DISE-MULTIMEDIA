// scripts.js

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
      { nombre: "Creatividad e innovación publicitaria", creditos: 6 },
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
      { nombre: "Diseño y mercadotecnia", creditos: 6, prerequisitos: ["Fundamentos del diseño"] },
      { nombre: "Sistemas de reproducción", creditos: 6, prerequisitos: ["Envase y empaque"] },
      { nombre: "Comunicación estratégica para productos y servicios", creditos: 6 },
      { nombre: "Video digital", creditos: 4.5, prerequisitos: ["Storyboard"] },
      { nombre: "Fundamentos de interactividad y experiencia de usuario (UX)", creditos: 4.5 },
      { nombre: "Concept Art: Personajes y escenarios", creditos: 6, prerequisitos: ["Animación 2D I"] },
      { nombre: "Electiva interdisciplinaria", creditos: 6 }
    ]
  },
  {
    semestre: 7,
    materias: [
      { nombre: "Tendencias del diseño", creditos: 6 },
      { nombre: "Administración de proyectos de diseño", creditos: 6 },
      { nombre: "Embalaje y distribución", creditos: 6 },
      { nombre: "Practicum 2: diseño gráfico", creditos: 7.5 },
      { nombre: "Motion graphics y efectos visuales", creditos: 6 },
      { nombre: "Diseño editorial para medios digitales", creditos: 4.5 },
      { nombre: "Animación 2D II", creditos: 6 },
      { nombre: "Electiva Anáhuac Historia del arte", creditos: 6 }
    ]
  },
  {
    semestre: 8,
    materias: [
      { nombre: "Diseño de la información I", creditos: 6 },
      { nombre: "Proyectos de diseño y publicidad", creditos: 7.5 },
      { nombre: "Caligrafía", creditos: 6 },
      { nombre: "Seminario de investigación en diseño I", creditos: 6 },
      { nombre: "Diseño de estilo audiovisual", creditos: 4.5 },
      { nombre: "Programación multimedia I", creditos: 4.5 },
      { nombre: "Cinematografía e iluminación (MINOR)", creditos: 6 },
      { nombre: "Taller o actividad electiva", creditos: 3 }
    ]
  },
  {
    semestre: 9,
    materias: [
      { nombre: "Diseño de medios digitales", creditos: 6 },
      { nombre: "Aspectos legales del diseño", creditos: 6 },
      { nombre: "Branding digital", creditos: 6 },
      { nombre: "Publicidad y creación de marca (MINOR)", creditos: 6 },
      { nombre: "Diseño de interfaces de usuario UI", creditos: 4.5 },
      { nombre: "Practicum I: diseño multimedia", creditos: 6 },
      { nombre: "Producción audiovisual y multimedia", creditos: 6 },
      { nombre: "Electiva interdisciplinaria", creditos: 6 }
    ]
  },
  {
    semestre: 10,
    materias: [
      { nombre: "Practicum 3: diseño gráfico", creditos: 7.5 },
      { nombre: "Seminario de investigación en diseño II", creditos: 6 },
      { nombre: "Producción publicitaria digital (MINOR)", creditos: 6 },
      { nombre: "Programación multimedia II", creditos: 4.5 },
      { nombre: "Dirección de escena y actuación (MINOR)", creditos: 6 },
      { nombre: "Practicum II: diseño multimedia", creditos: 6 },
      { nombre: "Diseño y programación web I", creditos: 4.5 },
      { nombre: "Electiva interdisciplinaria", creditos: 6 }
    ]
  },
  {
    semestre: 11,
    materias: [
      { nombre: "Animación 3D I", creditos: 6 },
      { nombre: "Visualización de datos", creditos: 4.5 },
      { nombre: "Diseño para dispositivos móviles", creditos: 4.5 },
      { nombre: "Responsabilidad social y sustentabilidad", creditos: 6 },
      { nombre: "Ética", creditos: 9 },
      { nombre: "Interfaces de usuario UI", creditos: 4.5 },
      { nombre: "Comercialización de producción multipantalla (MINOR)", creditos: 6 },
      { nombre: "Electiva interdisciplinaria", creditos: 6 }
    ]
  },
  {
    semestre: 12,
    materias: [
      { nombre: "Practicum III: diseño multimedia", creditos: 6 },
      { nombre: "Diseño y programación web II", creditos: 4.5 },
      { nombre: "Animación 3D II", creditos: 6 },
      { nombre: "Diseño AR y VR", creditos: 6 },
      { nombre: "Composición por nodos: VFX", creditos: 6 },
      { nombre: "Animación digital (MINOR)", creditos: 6 },
      { nombre: "Electiva interdisciplinaria", creditos: 6 }
    ]
  }
];

// Estado de materias cursadas
const estadoMaterias = {};

// Guardar estado en localStorage
function guardarEstado() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
}

// Cargar estado desde localStorage
function cargarEstado() {
  const saved = localStorage.getItem("estadoMaterias");
  if (saved) {
    Object.assign(estadoMaterias, JSON.parse(saved));
  }
}

// Cambiar estado materia y re-renderizar
function toggleMateria(nombre) {
  estadoMaterias[nombre] = !estadoMaterias[nombre];
  guardarEstado();
  renderMalla();
}

// Verifica si la materia puede habilitarse (prerrequisitos cumplidos)
function puedeHabilitar(materia) {
  if (!materia.prerequisitos) return true;
  return materia.prerequisitos.every(pr => estadoMaterias[pr]);
}

// Renderiza la malla en tabla
function renderMalla() {
  const tbody = document.querySelector("#malla tbody");
  tbody.innerHTML = "";

  malla.forEach(semestre => {
    // Fila título semestre
    const trTitulo = document.createElement("tr");
    const tdTitulo = document.createElement("td");
    tdTitulo.colSpan = 5;
    tdTitulo.style.fontWeight = "bold";
    tdTitulo.style.backgroundColor = "#eee";
    tdTitulo.textContent = `Semestre ${semestre.semestre}`;
    trTitulo.appendChild(tdTitulo);
    tbody.appendChild(trTitulo);

    // Filas materias
    semestre.materias.forEach(materia => {
      const tr = document.createElement("tr");

      // Nombre
      const tdNombre = document.createElement("td");
      tdNombre.textContent = materia.nombre;
      tr.appendChild(tdNombre);

      // Créditos
      const tdCreditos = document.createElement("td");
      tdCreditos.textContent = materia.creditos;
      tr.appendChild(tdCreditos);

      // Prerrequisitos
      const tdPrerreq = document.createElement("td");
      tdPrerreq.textContent = materia.prerequisitos ? materia.prerequisitos.join(", ") : "-";
      tr.appendChild(tdPrerreq);

      // Semestre
      const tdSemestre = document.createElement("td");
      tdSemestre.textContent = semestre.semestre;
      tr.appendChild(tdSemestre);

      // Checkbox para marcar cursada
      const tdCursada = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.disabled = !puedeHabilitar(materia);
      checkbox.checked = !!estadoMaterias[materia.nombre];
      checkbox.addEventListener("change", () => toggleMateria(materia.nombre));
      tdCursada.appendChild(checkbox);
      tr.appendChild(tdCursada);

      // Estilo fila según estado
      if (estadoMaterias[materia.nombre]) {
        tr.classList.add("cursada");
      }

      tbody.appendChild(tr);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarEstado();
  renderMalla();
});
