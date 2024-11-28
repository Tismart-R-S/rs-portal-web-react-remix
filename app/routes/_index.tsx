import type { MetaFunction } from '@remix-run/node';

import { Card } from '@modules/home/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | R&S' },
    { name: 'description', content: 'Nuevas vacantes en Tismart!' },
  ];
};

export default function Index() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-center">
          ¡Descubre Nuevas Oportunidades Laborales!
        </h1>
        <p className="my-8 text-lg">
          Bienvenido a nuestro portal de ofertas de empleo, donde cada
          oportunidad representa un paso más hacia el crecimiento profesional
          que deseas.
        </p>
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-9">
        {[1, 2, 3].map((card) => (
          <Card key={card} />
        ))}
      </div>
    </div>
  );
}
