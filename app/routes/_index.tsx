import { data, MetaFunction } from "@remix-run/node";

import { Card } from "@modules/home/components";
import VacancyLogic from "~/shared/logic/vacancy.logic";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | R&S" },
    { name: "description", content: "Nuevas vacantes en Tismart!" },
  ];
};

export default function Index() {
  const { vacancies } = useLoaderData<typeof loader>();

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
        {vacancies &&
          vacancies.data.map((vacancy) => (
            <Card key={vacancy.rqCode} vacancy={vacancy} />
          ))}
      </div>
    </div>
  );
}

export async function loader() {
  const vacancies = await VacancyLogic.getVacancies();
  return data({ vacancies });
}
