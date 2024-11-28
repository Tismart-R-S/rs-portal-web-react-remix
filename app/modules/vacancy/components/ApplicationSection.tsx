import { ArrowUpRight, FilePlus, TriangleAlert } from 'lucide-react';
import { Link } from '@remix-run/react';

import { Button } from '@ui/button';

const ApplicationSentButton = () => {
  return (
    <Button disabled>
      Postulación Enviada <FilePlus />
    </Button>
  );
};

const ApplicationButton = ({ errors = false }) => {
  return (
    <Button disabled={errors}>
      Postularse <ArrowUpRight />
    </Button>
  );
};

//* Main Component
const ApplicationSection = () => {
  const applied = false;
  const errors = !applied && true;

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
      {applied ? (
        <ApplicationSentButton />
      ) : (
        <ApplicationButton errors={errors} />
      )}
      {errors && (
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
      )}
    </div>
  );
};

export default ApplicationSection;
