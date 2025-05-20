"use client";

import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState } from 'react';

function ObjetivoNode({ title, content }: { title: string; content: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className="text-sm">
      <strong>{title}</strong>
      {show && <p className="mt-1">{content}</p>}
      <button
        onClick={() => setShow(!show)}
        className="mt-1 text-blue-600 underline text-xs"
      >
        {show ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
}

const nodes = [
  {
    id: '1',
    position: { x: -80, y: 0 },
    data: {
      label: (
        <ObjetivoNode
          title="Objetivo General"
          content="Fomentar el intercambio académico y profesional en torno a prácticas pedagógicas inclusivas e innovadoras, mediante la socialización de experiencias, investigaciones y propuestas que fortalezcan la transformación educativa en contextos diversos."
        />
      )
    },
    style: { backgroundColor: '#305398', padding: 10, borderRadius: 10, width: 300, color: 'white' },
  },
  {
    id: '2',
    position: { x: -250, y: 250 },
    data: {
      label: (
        <ObjetivoNode
          title="Objetivo Específico 1"
          content="Visibilizar iniciativas educativas que integren enfoques inclusivos y estrategias innovadoras en distintos niveles y modalidades del sistema educativo."
        />
      )
    },
    style: { backgroundColor: '#96b422', padding: 10, borderRadius: 10, width: 280, color: 'white' },
  },
  {
    id: '3',
    position: { x: 100, y: 250 },
    data: {
      label: (
        <ObjetivoNode
          title="Objetivo Específico 2"
          content="Promover el diálogo interdisciplinario entre actores educativos nacionales e internacionales que trabajan en la mejora de la equidad, calidad y pertinencia de los procesos de enseñanza-aprendizaje."
        />
      )
    },
    style: { backgroundColor: '#96b422', padding: 10, borderRadius: 10, width: 280, color: 'white' },
  },
  {
    id: '4',
    position: { x: -250, y: 450 },
    data: {
      label: (
        <ObjetivoNode
          title="Objetivo Específico 3"
          content="Fortalecer las capacidades profesionales de docentes, investigadores y gestores mediante ponencias, talleres y mesas de trabajo centradas en la innovación curricular, el uso de tecnologías emergentes y la atención a la diversidad."
        />
      )
    },
    style: { backgroundColor: '#96b422', padding: 10, borderRadius: 10, width: 280, color: 'white' },
  },
  {
    id: '5',
    position: { x: 100, y: 450 },
    data: {
      label: (
        <ObjetivoNode
          title="Objetivo Específico 4"
          content="Impulsar redes de colaboración académica e institucional para el desarrollo de proyectos conjuntos orientados al diseño y evaluación de prácticas pedagógicas inclusivas."
        />
      )
    },
    style: { backgroundColor: '#96b422', padding: 10, borderRadius: 10, width: 280, color: 'white' },
  },
  {
    id: '6',
    position: { x: -75, y: 650 },
    data: {
      label: (
        <ObjetivoNode
          title="Objetivo Específico 5"
          content="Difundir evidencias científicas sobre el impacto de la innovación educativa y la competencia digital docente en la construcción de entornos de aprendizaje más accesibles y justos."
        />
      )
    },
    style: { backgroundColor: '#96b422', padding: 10, borderRadius: 10, width: 280, color: 'white' },
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e1-5', source: '1', target: '5', animated: true },
  { id: 'e1-6', source: '1', target: '6', animated: true },
];

export default function ObjetivosDiagram() {
  return (
    <div className="w-full h-[800px] bg-white rounded-xl shadow-md p-4 overflow-auto">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

