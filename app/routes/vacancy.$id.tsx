import type { MetaFunction } from '@remix-run/node';

import { ApplicationSection } from '@modules/vacancy/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'Developer Junior | R&S' },
    { name: 'description', content: 'Nuevas vacantes en Tismart!' },
  ];
};

export default function Vacancy() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-end gap-2">
          <h1 className="text-2xl font-semibold">Backend .Net Junior</h1>
          <span className="text-sm text-muted-foreground inline-block pb-0.5">
            Cod. BP001
          </span>
        </div>
        <p className="my-8 text-lg">
          ¿Eres apasionado por la tecnología y te gustaría formar parte de un
          proyecto innovador? ¡Esta es tu oportunidad! “Texto por defecto que
          puede ser editado”
        </p>
      </div>
      <div className="flex flex-col gap-9">
        {/* Conocimientos */}
        <div>
          <h5 className="text-md font-semibold pb-3">
            Conocimientos necesarios
          </h5>
          <ul className="list-disc list-inside">
            <li>Conocimientos en desarrollo con tecnologías .Net.</li>
            <li>
              Habilidad para trabajar en equipo y adaptarse rápidamente a
              cambios.
            </li>
            <li>
              Motivación para aprender y crecer en el ámbito de desarrollo de
              software.
            </li>
          </ul>
        </div>
        {/* Requisitos */}
        <div>
          <h5 className="text-md font-semibold pb-3">Funciones del puesto</h5>
          <ul className="list-disc list-inside">
            <li>
              Colaborar en el desarrollo y mantenimiento de aplicaciones basadas
              en .Net.
            </li>
            <li>
              Soporte a las necesidades del equipo técnico y a la mejora
              continua del proyecto.
            </li>
            <li>
              Participación en la implementación de nuevas funcionalidades y
              resolución de problemas técnicos.
            </li>
          </ul>
        </div>
        {/* Beneficios */}
        <div>
          <h5 className="text-md font-semibold pb-3">Beneficios</h5>
          <ul className="list-disc list-inside">
            <li>Ambiente de trabajo dinámico y colaborativo.</li>
            <li>Oportunidades de desarrollo profesional.</li>
            <li>
              Participación en proyectos desafiantes con tecnología de punta.
            </li>
          </ul>
        </div>
        <ApplicationSection />
      </div>
    </div>
  );
}
