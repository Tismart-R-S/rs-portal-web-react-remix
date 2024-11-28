import { Link } from '@remix-run/react';
import { ExternalLink } from 'lucide-react';

import { Button } from '@ui/button';
import {
  Card as CardShadcn,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';

const Card = () => {
  return (
    <CardShadcn className="max-w-5xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl">Backend .Net Junior</CardTitle>
        <CardDescription>Cod. BP001</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          officiis fugiat incidunt molestiae tempora esse quisquam quod unde
          accusamus temporibus ducimus sapiente saepe similique sit possimus
          optio laborum, minima non?
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          asChild
          variant="secondary"
          className="border-solid border-2 border-gray-300"
        >
          <Link to="/vacancy/123">
            Postula aquí <ExternalLink />
          </Link>
        </Button>
      </CardFooter>
    </CardShadcn>
  );
};

export default Card;
