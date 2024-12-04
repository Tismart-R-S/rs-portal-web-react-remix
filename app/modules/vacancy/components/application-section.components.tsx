import { ArrowUpRight, FilePlus, TriangleAlert } from "lucide-react";
import { Link } from "@remix-run/react";

import { Button } from "@ui/button";

const ApplicationSentButton = () => {
  return (
    <Button disabled>
      Postulación Enviada <FilePlus />
    </Button>
  );
};

const ApplicationButton = ({ errors = false }: { errors?: boolean }) => {
  return (
    <Button disabled={errors}>
      Postularse <ArrowUpRight />
    </Button>
  );
};

const WarningMessage = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-amber-500">
        <TriangleAlert size={22} />
      </span>
      <p className="text-sm text-red-500">
        Llena tu ficha de postulación en tu perfil antes de postular
        <Button variant="link" className="text-sm p-1 h-full">
          <Link to="/profile">Click aquí</Link>
        </Button>
      </p>
    </div>
  );
};

export { ApplicationSentButton, ApplicationButton, WarningMessage };
