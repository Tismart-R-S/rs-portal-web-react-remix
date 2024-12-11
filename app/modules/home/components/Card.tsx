import { Link } from "@remix-run/react";
import { ExternalLink } from "lucide-react";

import { Button } from "@ui/button";
import {
  Card as CardShadcn,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { VacanciesUCResponse } from "~/data/interfaces/vacancy.interface";

interface CardProps {
  vacancy: VacanciesUCResponse;
}

const Card = ({ vacancy }: CardProps) => {
  return (
    <CardShadcn className="max-w-5xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl">{vacancy.jobPositionName}</CardTitle>
        <CardDescription>Cod. {vacancy.rqCode}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{vacancy.introduction}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          asChild
          variant="secondary"
          className="border-solid border-2 border-gray-300"
        >
          <Link to={`/vacancy/${vacancy.rqCode}`}>
            Postula aquí <ExternalLink />
          </Link>
        </Button>
      </CardFooter>
    </CardShadcn>
  );
};

export default Card;
